/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
import { FaDesktop, FaWindows } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { SiMacos } from "react-icons/si";

const EidVerificationGovernikus = () => {
  const [loading, setLoading] = useState(false);
  const [authUrl, setAuthUrl] = useState("");
  const [error, setError] = useState("");
  const [eidVerified, setEidVerified] = useState(false);

  const base_url = import.meta.env.VITE_BASE_URL;
  const eidStateRef = useRef("");

  useEffect(() => {
    const loadEidStatus = async () => {
      try {
        const token = sessionStorage.getItem("authToken");
        if (!token) {
          setError("Kein Zugriffstoken gefunden.");
          return;
        }

        const response = await fetch(`${base_url}/eid/status/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();

        if (response.ok) {
          const verified = result?.EID_verified_governikus === true;
          setEidVerified(verified);
        } else {
          setError("Status der eID-Verifizierung konnte nicht geladen werden.");
        }
      } catch (err) {
        console.error("Failed to fetch eID status:", err);
        setError("Fehler beim Laden des eID-Status.");
      }
    };

    loadEidStatus();
  }, [base_url]);

  const normalizeAuthUrl = (rawUrl) => {
    if (!rawUrl || typeof rawUrl !== "string") return "";

    let cleaned = rawUrl.trim().replace(/^['"]|['"]$/g, "");

    // Fix backend responses like:
    // "www.ausweisident.de/realms/..."
    if (cleaned.startsWith("www.")) {
      cleaned = `https://${cleaned}`;
    }

    // Fix protocol-relative URLs like:
    // "//www.ausweisident.de/realms/..."
    if (cleaned.startsWith("//")) {
      cleaned = `https:${cleaned}`;
    }

    // If it still has no protocol, assume https
    if (
      cleaned &&
      !cleaned.startsWith("http://") &&
      !cleaned.startsWith("https://")
    ) {
      cleaned = `https://${cleaned}`;
    }

    return cleaned;
  };

  const removeClaimsParam = (rawUrl) => {
    try {
      const normalizedUrl = normalizeAuthUrl(rawUrl);

      if (!normalizedUrl) {
        throw new Error("auth_url is empty or invalid");
      }

      const parsedUrl = new URL(normalizedUrl);
      parsedUrl.searchParams.delete("claims");

      return parsedUrl.toString();
    } catch (err) {
      console.error("Invalid auth_url:", JSON.stringify(rawUrl), err);
      return "";
    }
  };

const startEidFlow = async () => {
  let authWindow = null;

  try {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      setError("Kein Zugriffstoken gefunden.");
      return;
    }

    setLoading(true);
    setError("");

    const popupWidth = 520;
    const popupHeight = 720;
    const left = window.screenX + (window.outerWidth - popupWidth) / 2;
    const top = window.screenY + (window.outerHeight - popupHeight) / 2;

    // Open popup immediately from the click event
    authWindow = window.open(
      "",
      "governikus_eid_window",
      `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );

    if (!authWindow) {
      setError("Das eID-Fenster konnte nicht geöffnet werden.");
      setLoading(false);
      return;
    }

    // Optional loading content for the popup
    authWindow.document.write(`
      <html>
        <head><title>eID-Verifizierung</title></head>
        <body style="font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
          <div>Lade eID-Verifizierung...</div>
        </body>
      </html>
    `);
    authWindow.document.close();

    const response = await fetch(`${base_url}/eid/start/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();

    if (!response.ok) {
      authWindow.close();
      setError(result?.message || "eID-Start fehlgeschlagen.");
      setLoading(false);
      return;
    }

    if (!result?.auth_url || !result?.state) {
      authWindow.close();
      setError("Ungültige Antwort vom Server.");
      setLoading(false);
      return;
    }

    eidStateRef.current = result.state;

    const cleanedAuthUrl = removeClaimsParam(result.auth_url);

    if (!cleanedAuthUrl) {
      authWindow.close();
      setError("Ungültige auth_url vom Server.");
      setLoading(false);
      return;
    }

    setAuthUrl(cleanedAuthUrl);

    // Navigate the already-opened popup
    authWindow.location.href = cleanedAuthUrl;

    const checkIfClosed = setInterval(async () => {
      if (authWindow.closed) {
        clearInterval(checkIfClosed);
        await verifyEidState();
      }
    }, 1000);
  } catch (err) {
    console.error("Failed to start eID:", err);

    if (authWindow && !authWindow.closed) {
      authWindow.close();
    }

    setError("Fehler beim Starten der eID-Verifizierung.");
    setLoading(false);
  }
};

  const verifyEidState = async () => {
    try {
      const token = sessionStorage.getItem("authToken");
      if (!token) {
        setError("Kein Zugriffstoken gefunden.");
        setLoading(false);
        return;
      }

      if (!eidStateRef.current) {
        setError("Kein eID-Statuswert vorhanden.");
        setLoading(false);
        return;
      }

      const response = await fetch(`${base_url}/eid/verify-eid/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          state: eidStateRef.current,
        }),
      });

      const result = await response.json();

    if (response.ok && result?.EID_verified_governikus === true) {
      setEidVerified(true);
      setError("");
    } else {
      // Handle specific backend error
      if (
        result?.error ===
        "eID data does not match user data. Please check your name and date of birth."
      ) {
        setError(
          "Die Daten aus Ihrem Ausweis stimmen nicht mit Ihrem Profil überein. Bitte überprüfen Sie Ihren Namen und Ihr Geburtsdatum."
        );
      } else {
        setError(result?.error || result?.message || "eID-Verifizierung fehlgeschlagen.");
      }
    }
    } catch (err) {
      console.error("Failed to verify eID state:", err);
      setError("Fehler bei der eID-Verifizierung.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white mx-4 sm:mx-10 lg:mx-24 lg:mb-[90px]">
      {eidVerified ? (
        <div className="flex items-center justify-center mt-6 mb-8">
          <div className="bg-yellow-300 border border-yellow-300 text-black px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-24 rounded-lg shadow-md flex justify-center items-center w-full max-w-3xl">
            <p className="text-xl sm:text-2xl lg:text-3xl text-center font-bold">
              Ihre eID-Verifizierung war erfolgreich
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:mt-24">
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg">
            <div className="w-full max-w-md">
              <div className="flex items-center justify-center mb-12">
                <FaDesktop size={30} className="text-yellow-300 mr-2" />
                <h2 className="text-lg sm:text-xl font-semibold">
                  eID-Verifizierung Governikus (Desktop)
                </h2>
              </div>

              <p className="mb-4 text-sm sm:text-base text-center">
                Klicken Sie unten, um die neue eID-Verifizierung zu starten.
                Nach Abschluss schließen Sie bitte das geöffnete Fenster.
              </p>

              <div className="flex justify-center mb-6">
                <button
                  onClick={startEidFlow}
                  disabled={loading}
                  className="bg-yellow-300 text-black px-6 py-2 rounded hover:bg-yellow-200 disabled:opacity-50 text-sm sm:text-base"
                >
                  {loading ? "Verifiziere..." : "eID-Verifizierung starten"}
                </button>
              </div>

              {error && (
                <p className="text-red-600 text-sm text-center mb-6">{error}</p>
              )}

              <p className="mb-4 text-center">
                Wenn Sie die AusweisApp nicht auf Ihrem PC installiert haben,
                <br />
                laden Sie sie hier herunter:
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://apps.apple.com/de/app/ausweisapp-bund/id948660805#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-yellow-300 text-black px-6 py-2 rounded hover:bg-yellow-200"
                >
                  <SiMacos size={25} /> macOS
                </a>
                <a
                  href="https://www.ausweisapp.bund.de/en/download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-yellow-300 text-black px-6 py-2 rounded hover:bg-yellow-200"
                >
                  <FaWindows size={17} /> Windows
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EidVerificationGovernikus;