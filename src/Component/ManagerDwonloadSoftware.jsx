import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 import navigate
import { FaApple, FaWindows } from "react-icons/fa";
import { MdVpnKey } from "react-icons/md";

const ManagerDownloadSoftware = () => {
  const [loading, setLoading] = useState(false);
  const base_url = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate(); // 👈 hook for redirection

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      navigate("/login"); // 👈 redirect if no token
    }
  }, [navigate]);

  const handleSoftwareDownload = async (platform) => {
    setLoading(true);
    const token = sessionStorage.getItem("authToken");

    try {
      const response = await fetch(
        `${base_url}/photobooth/get-download-url/?operating_system=${platform}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await response.json();

      if (response.ok && data?.download_url) {
        const link = document.createElement("a");
        link.href = data.download_url;
        const filename =
          platform === "WINDOWS"
            ? "E-PassTransfer_Setup.exe"
            : "E-PassTransfer.dmg";
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert("❗ Software-Download fehlgeschlagen.");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("❗ Fehler beim Herunterladen der Software.");
    } finally {
      setLoading(false);
    }
  };
  const handleLicenseDownload = async () => {
    setLoading(true);
    const token = sessionStorage.getItem("authToken");
    // console.log(token);
    try {
      const response = await fetch(`${base_url}/photobooth/get-license-key/`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      //console.log(data);
      if (response.ok && data?.license_key) {
        const blob = new Blob([data.license_key], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Lizenzschlüssel.txt");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } else {
        alert("❗ Lizenz konnte nicht abgerufen werden.");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("❗ Fehler beim Herunterladen der Lizenz.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center px-4 py-12 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4">
          Ihre Registrierung war erfolgreich!
          <br className="sm:hidden" />{" "}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8">
          Sie können die Software jetzt für Ihr Betriebssystem herunterladen:
        </p>
        <p className="text-gray-600 text-sm sm:text-base mb-8">
          <b> Hinweis:</b> Um mögliche Kompatibilitätsprobleme zu vermeiden,
          empfehlen wir den Download über Google Chrome.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => handleSoftwareDownload("WINDOWS")}
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-yellow-300 text-black font-medium py-6 px-2 rounded-lg shadow-md hover:bg-yellow-200 transition text-sm sm:text-base w-full sm:w-auto "
          >
            <FaWindows size={20} />
            Für Windows herunterladen
          </button>

          <button
            onClick={() => handleSoftwareDownload("MAC")}
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-yellow-300 text-black font-medium py-6 px-2 rounded-lg shadow-md hover:bg-yellow-200 transition text-sm sm:text-base w-full sm:w-auto"
          >
            <FaApple size={20} />
            Für macOS herunterladen
          </button>
        </div>
        {/* <button
          onClick={handleLicenseDownload}
          className="w-full sm:w-auto lg:mx-28 mx-auto sm:mx-1 font-medium flex justify-center items-center gap-2 bg-yellow-300 text-black py-2 px-5 rounded-lg hover:bg-yellow-200 shadow transition duration-200"
        >
          <MdVpnKey size={20} />
          Lizenzschlüssel herunterladen
        </button> */}

        <p className="text-gray-600 text-sm mt-6 sm:text-base">
          Willkommen im E-Passtransfer-Netzwerk – und in <br></br>der Zukunft
          der digitalen Passbildübertragung!
        </p>
      </div>
    </div>
  );
};

export default ManagerDownloadSoftware;
