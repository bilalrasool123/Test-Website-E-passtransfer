/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const Employees = () => {
  const [email, setEmail] = useState("");
  const [accessLevel, setAccessLevel] = useState("Eingeschränkt");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [userRole, setUserRole] = useState("");
  const [currentUserId, setCurrentUserId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const token = sessionStorage.getItem("authToken");
  const base_url = import.meta.env.VITE_BASE_URL;
  const eidStateRef = useRef("");

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await fetch(`${base_url}/photobooth/profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // keep console for debugging profile fetch
        console.log("profile fetch response:", response);
        if (response.ok) {
          const data = await response.json();
          setUserRole(data.user_type);
          setCurrentUserId(data.id);
        } else {
          // try to log body if not ok
          try {
            const txt = await response.text();
            console.log("profile fetch body:", txt);
          } catch (e) {
            console.error("Couldn't read profile response body", e);
          }
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
      }
    };

    fetchUserRole();
  }, [token, base_url]);

  const fetchEmployees = async () => {
    if (!token) return;

    try {
      setLoading(true);
      const response = await fetch(`${base_url}/photobooth/invite-employee/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("fetchEmployees response:", response);
      // parse response robustly
      let data;
      try {
        const ct = response.headers.get("content-type") || "";
        if (ct.includes("application/json")) {
          data = await response.json();
        } else {
          const text = await response.text();
          console.log("fetchEmployees non-json response:", text);
          data = [];
        }
      } catch (err) {
        console.error("Error parsing employees response:", err);
        data = [];
      }

      if (Array.isArray(data)) {
        setEmployees(data);
      } else if (data && typeof data === "object") {
        setEmployees([data]);
      } else {
        setEmployees([]);
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
      setError("❌ Failed to load employee data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const normalizeAuthUrl = (rawUrl) => {
    if (!rawUrl || typeof rawUrl !== "string") return "";

    let cleaned = rawUrl.trim().replace(/^['"]|['"]$/g, "");

    if (cleaned.startsWith("www.")) {
      cleaned = `https://${cleaned}`;
    }

    if (cleaned.startsWith("//")) {
      cleaned = `https:${cleaned}`;
    }

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

  const handleInvite = async (e) => {
    e.preventDefault();

    if (userRole !== "owner" && userRole !== "manager") {
      setError("Only owners or managers can send invitations.");
      return;
    }

    if (!token) {
      setError("Kein Zugriffstoken gefunden.");
      return;
    }

    setError("");
    setLoading(true);

    const trimmedAccess = accessLevel.trim();
    const role = trimmedAccess === "Vollzugriff" ? "manager" : "employee";

    const inviteRequestBody = {
      email,
      role,
    };

    let authWindow = null;

    try {
      const popupWidth = 520;
      const popupHeight = 720;
      const left = window.screenX + (window.outerWidth - popupWidth) / 2;
      const top = window.screenY + (window.outerHeight - popupHeight) / 2;

      // Open popup immediately from the click event
      authWindow = window.open(
        "",
        "invite_eid_window",
        `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`
      );

      if (!authWindow) {
        setError("Das eID-Fenster konnte nicht geöffnet werden.");
        setLoading(false);
        return;
      }

      authWindow.document.write(`
        <html>
          <head><title>eID-Verifizierung</title></head>
          <body style="font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
            <div>Lade eID-Verifizierung...</div>
          </body>
        </html>
      `);
      authWindow.document.close();

      const eidStartResponse = await fetch(`${base_url}/eid/start/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          purpose: "invite",
        }),
      });

      console.log("eid/start response:", eidStartResponse);

      let eidStartData;
      try {
        const ct = eidStartResponse.headers.get("content-type") || "";
        if (ct.includes("application/json")) {
          eidStartData = await eidStartResponse.json();
        } else {
          const text = await eidStartResponse.text();
          console.log("eid/start non-json response body:", text);
          eidStartData = { message: text };
        }
      } catch (parseErr) {
        console.error("Error parsing eid/start response:", parseErr);
        eidStartData = {};
      }

      console.log("eid/start response data:", eidStartData);

      if (!eidStartResponse.ok) {
        authWindow.close();
        setError(eidStartData?.message || "eID-Start fehlgeschlagen.");
        setLoading(false);
        return;
      }

      if (!eidStartData?.auth_url || !eidStartData?.state) {
        authWindow.close();
        setError("Ungültige Antwort vom Server.");
        setLoading(false);
        return;
      }

      eidStateRef.current = eidStartData.state;

      const cleanedAuthUrl = removeClaimsParam(eidStartData.auth_url);

      if (!cleanedAuthUrl) {
        authWindow.close();
        setError("Ungültige auth_url vom Server.");
        setLoading(false);
        return;
      }

      authWindow.location.href = cleanedAuthUrl;

      const waitForPopupClose = await new Promise((resolve) => {
        const checkIfClosed = setInterval(() => {
          if (!authWindow || authWindow.closed) {
            clearInterval(checkIfClosed);
            resolve(true);
          }
        }, 1000);
      });

      if (waitForPopupClose) {
        const response = await fetch(`${base_url}/photobooth/invite-employee/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...inviteRequestBody,
            state: eidStateRef.current,
          }),
        });

        console.log("Invite request body:", {
          ...inviteRequestBody,
          state: eidStateRef.current,
        });
        console.log("Invite response (raw):", response);

        let data;
        try {
          const ct = response.headers.get("content-type") || "";
          if (ct.includes("application/json")) {
            data = await response.json();
          } else {
            const text = await response.text();
            data = { message: text };
            console.log("Invite non-json response body:", text);
          }
        } catch (parseErr) {
          console.error("Error parsing invite response:", parseErr);
          data = {};
        }

        console.log("Response data:", data);

        if (response.ok) {
          setEmail("");
          setAccessLevel("Eingeschränkt");
          setShowModal(false);
          setShowSuccessModal(true);
          fetchEmployees();
        } else {
          setError(
            data?.email?.[0] ||
              data?.role?.[0] ||
              data?.state?.[0] ||
              data?.error ||
              data?.message ||
              "❌ Invitation failed"
          );
        }
      }
    } catch (err) {
      console.error("Invite flow error:", err);

      if (authWindow && !authWindow.closed) {
        authWindow.close();
      }

      setError("❌ Fehler beim Starten der eID-Verifizierung oder Einladung.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteConfirm = (employeeId) => {
    setEmployeeToDelete(employeeId);
    setShowDeleteModal(true);
  };

  const handleDeleteEmployee = async () => {
    if (!employeeToDelete) return;

    try {
      const res = await fetch(
        `${base_url}/photobooth/invite-employee/${employeeToDelete}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("delete response:", res);
      if (res.status === 200) {
        alert("✅ Mitarbeiter erfolgreich gelöscht");
        fetchEmployees();
      } else {
        const contentType = res.headers.get("content-type") || "";
        let errorMessage = "Unbekannter Fehler";

        if (contentType.includes("application/json")) {
          const data = await res.json();
          console.log("Error data:", data);
          errorMessage = data.message || data.error || errorMessage;
        } else {
          const text = await res.text();
          console.error("Server returned HTML instead of JSON:", text);
          errorMessage = `❌ Fehler: ${res.status} ${res.statusText}`;
        }

        alert(errorMessage);
      }
    } catch (error) {
      console.error("Delete Error:", error);
      alert("❌ Netzwerkfehler beim Löschen.");
    } finally {
      setShowDeleteModal(false);
      setEmployeeToDelete(null);
    }
  };

  const filteredEmployees = employees.filter((employee) => {
    const searchString = `${employee.first_name || ""} ${
      employee.last_name || ""
    } ${employee.email || ""}`.toLowerCase();
    return searchString.includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen lg:px-6 lg:py-10 px-2 py-8 max-w-6xl mx-auto">
      <div className="flex justify-between  items-center mb-6">
        <h1 className="text-3xl font-bold">Mitarbeitende</h1>
        {(userRole === "owner" || userRole === "manager") && (
          <button
            onClick={() => setShowModal(true)}
            className="bg-yellow-300 hover:bg-yellow-200 text-black px-4 py-2 rounded transition-colors duration-200"
          >
            Mitarbeitende einladen
          </button>
        )}
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Mitarbeitende suchen"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm p-2 border-b-2 border-gray-300 outline-none focus:border-yellow-300 transition-colors duration-200"
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm text-center mb-4">{error}</p>
      )}

      <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full text-sm text-center">
          <thead className="bg-gray-100 px-12 text-gray-700 font-medium sticky top-0">
            <tr>
              <th className="px-6 py-3">Vorname</th>
              <th className="px-6 py-3">Nachname</th>
              <th className="px-6 py-3">E-Mail</th>
              <th className="px-6 py-3">Geburtsdatum</th>
              <th className="px-6 py-3">Berechtigungsstufe</th>
              <th className="px-6 py-3">Mitarbeitenden entfernen</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan={6} className="text-center py-8">
                  <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-300"></div>
                  </div>
                </td>
              </tr>
            ) : filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    {employee.first_name || "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {employee.last_name || "-"}
                  </td>
                  <td className="px-6 py-4">{employee.email || "-"}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {employee.date_of_birth
                      ? new Date(employee.date_of_birth).toLocaleDateString(
                          "de-DE"
                        )
                      : "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {employee.user_type === "manager"
                      ? "Vollzugriff"
                      : employee.user_type === "employee"
                      ? "Eingeschränkter Zugriff"
                      : "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {(userRole === "owner" ||
                      (userRole === "manager" &&
                        employee.supervisor_id === currentUserId)) && (
                      <button
                        onClick={() => handleDeleteConfirm(employee.user_id)}
                        className="text-yellow-300 hover:text-yellow-200"
                      >
                        <MdDelete size={20} />
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-8 text-gray-500">
                  Keine Mitarbeitende gefunden
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
            <h2 className="text-lg font-semibold mb-4">
              Mitarbeitenden endgültig löschen
            </h2>
            <p className="text-sm text-gray-700 mb-6">
              Sind Sie sicher, dass Sie diese Person dauerhaft aus dem System
              löschen möchten?<br></br> <b>Achtung:</b> Beim Löschen werden alle
              zugehörigen Daten unwiderruflich entfernt. Diese Aktion kann nicht
              rückgängig gemacht werden. Bitte prüfen Sie sorgfältig, ob dieser
              Schritt wirklich erforderlich ist. Möchten Sie den Mitarbeitenden
              endgültig löschen?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-yellow-300 rounded text-black hover:bg-yellow-200"
              >
                Abbrechen
              </button>
              <button
                onClick={handleDeleteEmployee}
                className="px-4 py-2 bg-yellow-300 text-black rounded hover:bg-yellow-200"
              >
                Löschen bestätigen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Invite Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Per E-Mail einladen</h2>
            <form onSubmit={handleInvite} className="space-y-4">
              <input
                type="email"
                placeholder="E-Mail-Adresse der Mitarbeitenden"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-b-2 border-yellow-300 outline-none bg-transparent p-1 focus:border-yellow-300"
              />
              <div>
                <label
                  htmlFor="access"
                  className="block text-lg text-black mb-2"
                >
                  Berechtigungsstufe auswählen
                </label>
                <select
                  id="access"
                  value={accessLevel}
                  onChange={(e) => setAccessLevel(e.target.value)}
                  className="w-full border-b-2 border-yellow-300 outline-none bg-transparent p-1 focus:border-yellow-300"
                >
                  <option value="Eingeschränkt">Eingeschränkter Zugriff</option>
                  <option value="Vollzugriff">Vollzugriff</option>
                </select>

                {accessLevel === "Eingeschränkt" && (
                  <span className="block text-sm text-gray-800 mt-2">
                    Kann eigene Daten einpflegen, bearbeiten und sich selbst
                    identifizieren.
                  </span>
                )}

                {accessLevel === "Vollzugriff" && (
                  <span className="block text-sm text-gray-800 mt-2">
                    Kann Daten bearbeiten, andere Personen einladen und Software
                    herunterladen.
                  </span>
                )}
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEmail("");
                    setAccessLevel("Eingeschränkt");
                    setError("");
                  }}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-200 rounded transition-colors duration-200"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-yellow-300 hover:bg-yellow-200 text-black rounded transition-colors duration-200 disabled:opacity-50"
                >
                  {loading ? "Wird gesendet..." : "Einladung senden"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center">
            <BsCheckCircle size={48} className="text-yellow-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Einladung erfolgreich!
            </h2>
            <p className="text-gray-600 mb-6">
              Die Einladung wurde erfolgreich versendet.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="px-6 py-2 bg-yellow-300 hover:bg-yellow-200 text-black rounded transition-colors duration-200"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employees;