/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
import {
  FaMobileAlt,
  FaDesktop,
  FaApple,
  FaAndroid,
  FaWindows,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { SiMacos } from "react-icons/si";
import { MdVpnKey } from "react-icons/md";

const EidVerification1 = () => {
  const [loading, setLoading] = useState(false);
  const [authUrl, setAuthUrl] = useState(null);
  const [qrValue, setQrValue] = useState("");
  const [error, setError] = useState("");
  const [eidVerified, setEidVerified] = useState(false);

  useEffect(() => {
    setAuthUrl(
      "https://eid-odis.de/ident/oidc?client_id=e-passtransfer-prod&redirect_uri=https://e-passtransfer.de/adesso-redirect&response_type=code&scope=openid odis:epasstrans-Reg&display=page"
    );

    const isVerified = sessionStorage.getItem("EID_verified");
    if (isVerified === "true") {
      setEidVerified(true);
    }
  }, []);

  const handleVerification = () => {
    if (loading) return;
    setLoading(true);
    const authWindow = window.open(authUrl, "_blank", "width=800,height=600");

    const checkAuthCode = setInterval(() => {
      if (!authWindow || authWindow.closed) {
        clearInterval(checkAuthCode);
        setLoading(false);
        return;
      }

      try {
        const url = authWindow.location.href;
        if (url.includes("code=")) {
          const params = new URLSearchParams(new URL(url).search);
          const code = params.get("code");
          if (code) {
            authWindow.close();
            verifyAuthCode(code);
            clearInterval(checkAuthCode);
            setLoading(false);
          }
        }
      } catch (e) {
        // Ignore cross-origin error
      }
    }, 1000);
  };

  const verifyAuthCode = async (code) => {
    try {
      const token = sessionStorage.getItem("authToken");
      if (!token) {
        console.error("No access token found in sessionStorage.");
        return;
      }

      setLoading(true);
      const response = await fetch(
        "https://e-passtransfer.onrender.com/api/photobooth/eid-verify/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ code }),
        }
      );

      const text = await response.text();
      try {
        const result = JSON.parse(text);
        console.log("Verification result:", result);

        if (response.ok) {
          sessionStorage.setItem("EID_verified", "true");
          setEidVerified(true);
        } else {
          setError(result.message || "Verifizierung fehlgeschlagen.");
        }
      } catch (jsonErr) {
        console.error("Server did not return valid JSON. Response:", text);
        setError("Ungültige Serverantwort erhalten.");
      }
    } catch (error) {
      console.error("Verification failed:", error);
      setError("Fehler bei der Verifizierung.");
    } finally {
      setLoading(false);
    }
  };

  const handleLicenseDownload = () => {
    // Your download functionality here
    console.log("Download triggered");
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:mt-24">
          {/* Mobile Section */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
            <div className="flex items-center justify-center mb-4">
              <FaMobileAlt size={30} className="text-yellow-300 mr-2" />
              <h2 className="text-lg sm:text-xl font-semibold">
                eID-Verifizierung (Mobilgerät)
              </h2>
            </div>
            <p className="mb-4 text-sm sm:text-base">
              Wenn Sie die AusweisApp auf Ihrem Mobilgerät installiert haben,
              scannen Sie den QR-Code oder klicken Sie unten auf Ihrem
              Mobiltelefon auf die Schaltfläche, <br />
              um die eID durchzuführen.
            </p>
            <div className="flex justify-center mb-6">
              <a
                href="https://eid-odis.de/ident/oidc?client_id=e-passtransfer-prod&redirect_uri=https://e-passtransfer.de/adesso-redirect&response_type=code&scope=openid odis:epasstrans-Reg&display=touch"
                className="bg-yellow-300 text-black px-4 py-2 rounded hover:bg-yellow-200 text-sm sm:text-base"
              >
                QR-Code für mobile eID abrufen
              </a>
            </div>
            <p className="mb-4">
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
                <FaApple size={20} /> iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.governikus.ausweisapp2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-yellow-300 text-black px-6 py-2 rounded hover:bg-yellow-200"
              >
                <FaAndroid size={20} /> Android
              </a>
            </div>
          </div>

          {/* Desktop Section */}
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg">
            <div className="w-full max-w-md">
              <div className="flex items-center justify-center mb-12">
                <FaDesktop size={30} className="text-yellow-300 mr-2" />
                <h2 className="text-lg sm:text-xl font-semibold">
                  eID-Verifizierung (Desktop)
                </h2>
              </div>
              <p className="mb-4 text-sm sm:text-base text-center">
                Wenn die AusweisApp auf Ihrem Mobilgerät installiert ist,
                klicken Sie unten, um die eID durchzuführen:
              </p>
              <div className="flex justify-center mb-6">
                <button
                  onClick={handleVerification}
                  disabled={loading}
                  className="bg-yellow-300 text-black px-6 py-2 rounded hover:bg-yellow-200 disabled:opacity-50 text-sm sm:text-base"
                >
                  {loading ? "Verifiziere..." : "eID-Verifizierung starten"}
                </button>
              </div>
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

export default EidVerification1;
