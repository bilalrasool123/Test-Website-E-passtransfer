/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing the eye icons
import { MdVpnKey } from "react-icons/md";

const OtpVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [licenseHash, setLicenseHash] = useState("");
  const [email, setEmail] = useState(location.state?.email || "");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [isEmployee, setIsEmployee] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const base_url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    if (location.state?.isOwner === false) {
      setIsEmployee(true); // Mark as employee if it's not an owner
    }
  }, [location.state]);

  // ✅ OTP Verification
  const handleOtpSubmit = async () => {
    if (!otp) {
      alert("❗ Bitte geben Sie das Bestätigungscode ein.");
      return;
    }

    const requestBody = { email: email, otp: otp };

    try {
      const response = await fetch(`${base_url}/photobooth/verify-otp/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.license_hash) {
          setLicenseHash(data.license_hash);
        }
        setIsVerified(true);

        // For employees, skip directly to login
        if (isEmployee) {
          setIsLoggedIn(true);
        }

        // For managers and owners, show login section
        if (location.state?.isOwner) {
          // After OTP verification, show login section for managers/owners
          setIsLoggedIn(false); // Ensure they will log in after OTP verification
        }
      } else {
        alert(
          data.detail ||
            "Bestätigungscode-Verifizierung fehlgeschlagen. Bitte versuchen Sie es erneut."
        );
      }
    } catch (error) {
      alert("❗Serverfehler. Bitte versuchen Sie es später erneut.");
    }
  };

  // Handle the login form submission
  const handleLoginSubmit = async () => {
    if (!email || !password) {
      alert("❗Geben Sie E-Mail und Passwort ein.");
      return;
    }

    const requestBody = {
      email,
      password,
    };

    try {
      const response = await fetch(`${base_url}/photobooth/web-login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.access_token) {
          sessionStorage.setItem("authToken", data.access_token);
          sessionStorage.setItem("refreshToken", data.refresh_token);

          // For employees, redirect to dashboard
          if (isEmployee) {
            navigate("/"); // Or appropriate route for employees
          } else {
            // For managers/owners, redirect to software download page after login
            postStudioData();
            navigate("/Verwaltungsbereich"); // Redirect to software download page
          }
        } else {
          alert("❗Kein Access Token erhalten.");
        }
      } else {
        alert(
          `❌ Fehler bei der Anmeldung: ${
            data.detail || "Ungültige Anmeldeinformationen."
          }`
        );
      }
    } catch (error) {
      alert("❗Serverfehler beim Anmelden.");
    }
  };

  // ✅ Resend OTP
  const handleResendOtp = async () => {
    if (!email) {
      alert("❗ Bitte geben Sie zuerst Ihre E-Mail-Adresse ein.");
      return;
    }

    const requestBody = { email: email };

    try {
      const response = await fetch(`${base_url}/photobooth/resend-otp/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        alert(
          "Ein neues Bestätigungscode wurde an Ihre E-Mail-Adresse gesendet."
        );
      } else {
        alert(
          data.detail ||
            "Das erneute Senden der Bestätigungscode-E-Mail ist fehlgeschlagen."
        );
      }
    } catch (error) {
      console.error("❗ Resend OTP Error:", error);
      alert(
        "❗ Serverfehler beim erneuten Senden des Bestätigungscode. Bitte versuchen Sie es später erneut."
      );
    }
  };

  // ✅ Post Studio Data (Retained Functionality)
  const postStudioData = async () => {
    const token = sessionStorage.getItem("authToken");
    const storedStudios = JSON.parse(sessionStorage.getItem("studios")) || [];
    const uploadedFiles =
      JSON.parse(sessionStorage.getItem("uploadedFiles")) || [];

    if (!token) {
      alert("❗Bitte melden Sie sich erneut an.");
      return;
    }

    if (storedStudios.length === 0 || uploadedFiles.length === 0) {
      // alert("❌ Kein Studio oder keine hochgeladene Datei gefunden.");
      return;
    }

    try {
      const convertBase64ToBlob = (base64, mime) => {
        const byteString = atob(base64.split(",")[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mime });
      };

      // Check if all studios use the same uploaded file
      const allStudiosUseSameFile =
        storedStudios.every((studio) => {
          return (
            studio.uploadedFiles &&
            studio.uploadedFiles.length === 1 &&
            studio.uploadedFiles[0] === uploadedFiles[0].name
          );
        }) || uploadedFiles.length === 1;

      for (const studio of storedStudios) {
        const formData = new FormData();

        formData.append("name", studio.name);
        formData.append("address", studio.address);
        formData.append("website", studio.website);
        formData.append("shop_phone", studio.shop_phone);
        formData.append("zipcode", studio.zipcode || "00000");
        formData.append("city", studio.city);
        formData.append("default", studio.default.toString());
        formData.append(
          "latitude",
          parseFloat(studio.latitude || 0).toFixed(6)
        );
        formData.append(
          "longitude",
          parseFloat(studio.longitude || 0).toFixed(6)
        );
        formData.append("created_at", new Date().toISOString());

        // Select correct file (global or per studio)
        let fileData = null;

        if (allStudiosUseSameFile) {
          fileData = uploadedFiles[0]; // from global
        } else {
          fileData = studio.uploadedFiles?.[0]; // full file object per studio
        }

        if (!fileData || !fileData.data) {
          alert(`❗ Kein gültiger Gewerbeschein für Studio "${studio.name}"`);
          continue;
        }

        const fileBlob = convertBase64ToBlob(fileData.data, fileData.type);
        formData.append("certificate_file", fileBlob, fileData.name);

        const response = await fetch(
          `${base_url}/photobooth/registered-shops/`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );
        // console.log(response);
        const data = await response.json();
        // console.log("updated shop", data);
        if (!response.ok) {
          alert(
            `❌ Fehler für "${studio.name}": ${
              data.non_field_errors?.[0] || "Unbekannter Fehler"
            }`
          );
        }
      }

      // Clean up
      sessionStorage.removeItem("studios");
      sessionStorage.removeItem("uploadedFiles");
    } catch (error) {
      console.error("❗ Serverfehler:", error);
      alert("❗ Serverfehler beim Senden der Daten.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6">
        {!isVerified ? (
          <>
            <h2 className="text-2xl font-bold text-center text-blue-600">
              Bestätigungscode eingeben
            </h2>
            <p className="text-center text-gray-600">
              Bitte geben Sie den einmaligen Bestätigungscode ein, der an{" "}
              <span className="font-semibold">{email}</span>{" "}
              <span>
                <br />
                gesendet wurde.
              </span>
            </p>
            <p className="text-center text-gray-600">
              <b>Falls Sie den Code nicht erhalten haben:</b>
              <p className="text-center text-gray-600">
                Überprüfen Sie Ihren Spam-Ordner. Warten Sie einige Minuten und
                versuchen Sie es erneut. Falls nötig, fordern Sie einen neuen
                Code an.
              </p>
            </p>
            <p className="text-center text-gray-600">
              <b>Wichtiger Hinweis:</b>
              <br />
              Wenn Sie diese Nachricht nicht angefordert haben, ignorieren Sie
              sie bitte und melden Sie es <br /> ggf. dem Absender.
            </p>

            <p className="text-center text-gray-600"></p>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Geben Sie den Code ein"
              maxLength="6"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleOtpSubmit}
              className="w-full bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-300 transition duration-300"
            >
              Code bestätigen
            </button>

            <button
              onClick={handleResendOtp}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400 transition duration-300 mt-2"
            >
              Code erneut senden
            </button>
          </>
        ) : !isLoggedIn && !isEmployee ? (
          <>
            <h2 className="text-2xl font-bold text-center text-blue-600">
              Anmeldung erforderlich
            </h2>
            <p className="text-center text-gray-600">
              Geben Sie Ihre E-Mail-Adresse und Ihr Passwort ein, um
              fortzufahren.
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Passwort"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
            <button
              onClick={handleLoginSubmit}
              className="w-full bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-300 transition duration-300"
            >
              Login
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center text-yellow-300">
              Erfolgreich verifiziert
            </h2>
            <p className="text-center text-gray-600">
              Sie haben sich als Mitarbeiter registriert. Bitte klicken Sie auf
              Login, um sich auf der Website anzumelden.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="w-full bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-300 transition duration-300"
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default OtpVerification;
