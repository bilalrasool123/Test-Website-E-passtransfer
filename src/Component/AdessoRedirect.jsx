import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AdessoRedirect = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const error_desp = searchParams.get("error_description");

  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    const verifyCode = async () => {
      if (code) {
        console.log("Received code:", code);
        const authToken = sessionStorage.getItem("authToken");
        console.log("Auth token:", authToken);

        try {
          const response = await fetch(
            "https://backend.e-passtransfer.de/api/photobooth/eid-verify/",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({ code }),
            }
          );

          const data = await response.json();
          console.log("Verification response from server:", data);

          if (!response.ok) {
            console.error("Server responded with error:", data);
            throw new Error(data.message || "Verification failed");
          }

          console.log("Verification success:", data);
          setResponseMessage(data.message || "Verification successful!");
        } catch (err) {
          console.error("Fetch error:", err.message);
          setResponseMessage(
            err.message || "Failed to verify code with the server."
          );
        }
      }
    };

    verifyCode();
  }, [code]);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      {error && (
        <p style={{ color: "red" }}>
          ❌ Authentication failed. Error: <strong>{error_desp}</strong>
        </p>
      )}

      {!code && !error && <p>Waiting for response...</p>}

      {responseMessage && (
        <p style={{ marginTop: "1rem", color: "green" }}>{responseMessage}</p>
      )}
    </div>
  );
};

export default AdessoRedirect;
