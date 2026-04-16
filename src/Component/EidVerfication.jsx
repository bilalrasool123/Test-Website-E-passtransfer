import { useState, useEffect } from "react";
import { FaDesktop, FaApple, FaWindows } from "react-icons/fa";

const EidVerification = () => {
  const [loading, setLoading] = useState(false);
  const [authUrl, setAuthUrl] = useState(null); // State to manage the auth URL

  useEffect(() => {
    // Set up the URL when the component is mounted
    setAuthUrl(
      "https://eid-odis.de/ident/oidc?client_id=e-passtransfer-prod&redirect_uri=https://e-passtransfer.de/adesso-redirect&response_type=code&scope=odis:epasstrans-Reg&display=page"
    );
  }, []);

  // Function to handle the authentication and fetch the code
  const handleVerification = () => {
    if (loading) return; // Prevent multiple clicks while loading
    setLoading(true);

    // Open the authentication URL in a new popup window
    const authWindow = window.open(authUrl, "_blank", "width=800,height=600");

    // Check if the window is still open and try to get the auth code
    const checkAuthCode = setInterval(() => {
      if (!authWindow || authWindow.closed) {
        clearInterval(checkAuthCode);
        setLoading(false);
        return;
      }

      try {
        const url = authWindow.location.href;
        // Check if the URL contains the auth code
        if (url.includes("code=")) {
          const params = new URLSearchParams(new URL(url).search);
          const code = params.get("code");
          if (code) {
            console.log("Received auth code:", code);
            authWindow.close(); // Close the popup window after getting the code

            // Here you can call your backend or perform further actions with the auth code
            verifyAuthCode(code);
            clearInterval(checkAuthCode); // Stop checking once the code is fetched
            setLoading(false);
          }
        }
        // eslint-disable-next-line no-unused-vars
      } catch (e) {
        // Ignore errors due to cross-origin issues when checking the window's location
      }
    }, 1000); // Check every second for the code
  };

  // Function to call your backend or handle the verification logic
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

      const text = await response.text(); // First get the raw text

      try {
        const result = JSON.parse(text); // Try parsing to JSON
        console.log("Verification result:", result);
        alert("Verification result: " + JSON.stringify(result, null, 2)); // show result in alert
        // eslint-disable-next-line no-unused-vars
      } catch (jsonErr) {
        console.error("Server did not return valid JSON. Response:", text);
        alert("Error: Server returned invalid JSON.\n\n" + text);
      }
    } catch (error) {
      console.error("Verification failed:", error);
      alert("Verification failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg text-center">
        <div className="flex items-center justify-center mb-4">
          <FaDesktop size={30} className="text-yellow-300 text-2xl mr-2" />
          <h2 className="text-xl font-semibold">eID-Verifizierung (Desktop)</h2>
        </div>

        <p className="mb-4">
          Wenn die AusweisApp auf Ihrem PC installiert ist, klicken Sie unten,
          <br />
          um die eID durchzuführen:
        </p>

        <div className="flex justify-center mb-6">
          <button
            onClick={handleVerification}
            disabled={loading}
            className="bg-yellow-300 text-black px-6 py-2 rounded hover:bg-yellow-200 disabled:opacity-50"
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
            <FaApple size={20} /> macOS
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
  );
};

export default EidVerification;
