import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import Eye and EyeSlash Icons

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false); // Toggle for new password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle for confirm password
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_BASE_URL;

  const API_URL = `${base_url}/photobooth/request-password-reset/`;

  // Step 1: Request OTP (Fixed to use POST)
  const handleRequestOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axios.post(API_URL, { email });
      setMessage("Code wurde an Ihre E-Mail gesendet");
      setStep(2);
    } catch (error) {
      console.error(
        "Error details:",
        error.response ? error.response.data : error.message
      );
      setMessage(
        error.response?.data?.message ||
          "Passwort-Zurücksetzung angefordert: Wenn die angegebene E-Mail-Adresse bei uns registriert ist, erhalten Sie in Kürze eine Nachricht mit weiteren Anweisungen."
      );
    }

    setLoading(false);
  };

  // Step 2: Reset Password (Fixed to use PUT & navigate to home page)
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (newPassword !== confirmPassword) {
      setMessage("Passwörter stimmen nicht überein.");
      setLoading(false);
      return;
    }

    try {
      await axios.put(API_URL, {
        email,
        reset_code: resetCode,
        new_password: newPassword,
      });
      setMessage(
        "Passwort erfolgreich zurückgesetzt. Sie werden weitergeleitet..."
      );
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error(
        "Error details:",
        error.response ? error.response.data : error.message
      );
      setMessage(
        error.response?.data?.message ||
          "Fehler: Passwort konnte nicht zurückgesetzt werden. Überprüfen Sie Ihr Bestätigungscode und Passwort."
      );
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h2 className="text-2xl font-bold mb-4 ">
        {step === 1 ? "Passwort zurücksetzen" : "Passwort zurücksetzen"}
      </h2>

      {step === 1 ? (
        <form
          onSubmit={handleRequestOTP}
          className="w-80 p-4 bg-white shadow-lg rounded-lg"
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            E-Mail-Adresse eingeben und Code erhalten
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="user@example.com"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-300 text-black py-2 rounded hover:bg-yellow-200"
          >
            {loading ? "Senden von Code..." : "Bestätigungscode senden"}
          </button>
        </form>
      ) : (
        <form
          onSubmit={handleResetPassword}
          className="w-80 p-4 bg-white shadow-lg rounded-lg"
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Geben Sie den Code ein
          </label>
          <input
            type="text"
            value={resetCode}
            onChange={(e) => setResetCode(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="Geben Sie den Code ein"
          />
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Neues Passwort eingeben
          </label>
          <div className="relative mb-4">
            <input
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Neues Passwort eingeben"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-3 text-gray-600 focus:outline-none"
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Passwort bestätigen
          </label>
          <div className="relative mb-4">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Passwort bestätigen"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 text-gray-600 focus:outline-none"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-300 text-black py-2 rounded hover:bg-yellow-200"
          >
            {loading ? "Resetting Password..." : "Passwort zurücksetzen"}
          </button>
        </form>
      )}

      {message && (
        <p className="mt-4 text-center text-sm text-green-500">{message}</p>
      )}
    </div>
  );
};

export default ForgotPass;
