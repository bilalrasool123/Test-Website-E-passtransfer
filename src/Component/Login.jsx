/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import ReCAPTCHA from "react-google-recaptcha";

// Recaptcha site key from env
const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // store the actual token string returned by Google
  const [captchaToken, setCaptchaToken] = useState(null);
  // convenience boolean (kept for your existing checks)
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_BASE_URL;

  const refreshTimeoutRef = useRef(null);

  // ref for the ReCAPTCHA widget so we can reset it
  const recaptchaRef = useRef(null);

  const togglePasswordVisibility = () => setShowPassword((s) => !s);

  // store token, update boolean, and log the token
  const handleCaptchaChange = (value) => {
    // value is the token string from Google (or null when expired/reset)
    setCaptchaToken(value);
    setCaptchaVerified(!!value);
    // console.log("reCAPTCHA token:", value);
  };

  // decode JWT payload (returns null if not a JWT)
  const decodeJwtPayload = (token) => {
    try {
      const parts = token.split(".");
      if (parts.length !== 3) return null;
      const payloadB64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
      const padded = payloadB64.padEnd(
        payloadB64.length + ((4 - (payloadB64.length % 4)) % 4),
        "="
      );
      return JSON.parse(atob(padded));
    } catch {
      return null;
    }
  };

  const scheduleRefresh = (accessToken) => {
    if (refreshTimeoutRef.current) clearTimeout(refreshTimeoutRef.current);
    if (!accessToken) return;

    const payload = decodeJwtPayload(accessToken);
    if (payload && payload.exp) {
      const delay = Math.max(0, payload.exp * 1000 - Date.now() - 45000);
      refreshTimeoutRef.current = setTimeout(() => refreshAccessToken(), delay);
    } else {
      refreshTimeoutRef.current = setTimeout(
        () => refreshAccessToken(),
        50 * 60 * 1000
      );
    }
  };

  const setAuthTokens = ({ access, refresh }) => {
    if (access) sessionStorage.setItem("authToken", access);
    if (refresh) sessionStorage.setItem("refreshToken", refresh);
    if (access) scheduleRefresh(access);
  };

  const clearAuth = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("EID_verified");
    if (refreshTimeoutRef.current) clearTimeout(refreshTimeoutRef.current);
  };

  const refreshAccessToken = async () => {
    const refreshToken = sessionStorage.getItem("refreshToken");
    if (!refreshToken) {
      clearAuth();
      return null;
    }

    try {
      const response = await fetch(`${base_url}/photobooth/refresh_token/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token: refreshToken }), // ✅ match backend key
      });

      const data = await response.json().catch(() => null);

      if (response.ok && (data?.access_token || data?.access)) {
        const newAccess = data.access_token || data.access;
        const newRefresh = data.refresh_token || data.refresh || refreshToken;
        setAuthTokens({ access: newAccess, refresh: newRefresh });
        return newAccess;
      } else {
        console.warn("Refresh failed:", data);
        clearAuth();
        if (window.location.pathname !== "/login") navigate("/login");
        return null;
      }
    } catch (err) {
      console.error("Network error while refreshing token:", err);
      return null;
    }
  };

  const authFetch = async (url, options = {}) => {
    const token = sessionStorage.getItem("authToken");
    options.headers = {
      ...options.headers,
      "Content-Type": options.headers?.["Content-Type"] || "application/json",
    };
    if (token) options.headers.Authorization = `Bearer ${token}`;

    let res = await fetch(url, options);

    if (res.status === 401) {
      const newToken = await refreshAccessToken();
      if (newToken) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${newToken}`,
        };
        res = await fetch(url, options);
      } else {
        clearAuth();
        if (window.location.pathname !== "/login") navigate("/login");
      }
    }

    return res;
  };

  const sendOtpAutomatically = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${base_url}/photobooth/resend-otp/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage(
          `Wir haben einen Bestätigungscode an ${email} gesendet.`
        );
        setOtpSent(true);
      } else
        setError(data?.message || "Fehler beim Senden des Bestätigungscodes.");
    } catch {
      setError("Es gab ein Problem beim Senden des Bestätigungscodes.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${base_url}/photobooth/verify-otp/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage("E-Mail erfolgreich verifiziert!");
        setShowOtpSection(false);
        setOtpSent(false);
      } else
        setError(
          data?.message ||
            "Ungültiger Bestätigungscode. Bitte versuchen Sie es erneut."
        );
    } catch {
      setError("Es gab ein Problem bei der Verifizierung.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetRecaptcha = () => {
    try {
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (err) {
      // ignore reset errors
      console.warn("reCAPTCHA reset failed:", err);
    }
    setCaptchaToken(null);
    setCaptchaVerified(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    // require the actual token (not just boolean)
    // if (!captchaToken) {
    //   setError("Bitte bestätigen Sie, dass Sie kein Roboter sind.");
    //   return;
    // }

    setIsLoading(true);
    try {
      // include recaptcha token in request body as `reCAPTCHA_token`
      // console.log("Sending login with reCAPTCHA_token:", captchaToken);
      const response = await fetch(`${base_url}/photobooth/web-login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          reCAPTCHA_token: captchaToken, // ✅ updated key
        }),
      });
      // console.log(email, password, captchaToken);
      //      console.log("Login response status:", response.status);
      //console.log(response);
      if (response.status === 429) {
        resetRecaptcha();
        setError(
          "Zu viele Anfragen. Bitte versuchen Sie es in einer Stunde erneut."
        );
        setIsLoading(false);
        return;
      }

      const data = await response.json().catch(() => null);
      // console.log("Login response data:", data);
      if (response.ok) {
        const accessToken = data?.access_token || data?.access || null;
        const refreshToken = data?.refresh_token || data?.refresh || null;

        if (!accessToken || !refreshToken) {
          setError(
            "Login erfolgreich, aber Tokens fehlen. Bitte Admin kontaktieren."
          );
          setIsLoading(false);
          return;
        }

        setAuthTokens({ access: accessToken, refresh: refreshToken });
        sessionStorage.setItem(
          "EID_verified",
          String(data?.EID_verified ?? "")
        );

        const profileRes = await authFetch(`${base_url}/photobooth/profile/`);
        if (profileRes && profileRes.ok) {
          const profileData = await profileRes.json();
          const userType = profileData.user_type;
          if (userType === "owner") navigate("/Verwaltungsbereich");
          else if (userType === "employee" || userType === "manager")
            navigate("/Verwaltungsbreich");
          else setError("Unbekannter Benutzertyp.");
        } else {
          setError("Benutzerprofil konnte nicht abgerufen werden.");
        }
      } else {
        resetRecaptcha();

        if (
          data?.email?.includes("Please verify your email before logging in.")
        ) {
          setShowOtpSection(true);
          await sendOtpAutomatically();
          return;
        }

        setError(data?.message || "Anmeldung fehlgeschlagen.");
      }
    } catch (err) {
      console.error("Login error:", err);
      resetRecaptcha();
      setError("Es gab ein Problem mit der Anmeldung.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const existingAccess = sessionStorage.getItem("authToken");
    if (existingAccess) scheduleRefresh(existingAccess);
    return () => {
      if (refreshTimeoutRef.current) clearTimeout(refreshTimeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Login – e-passtransfer Software für elektronische Passbilder
        </title>
        <meta
          name="description"
          content="Jetzt anmelden & digitale Passbilder mit der e-passtransfer Software verwalten – für Fotografen, Behörden & Dienstleister."
        />
      </Helmet>

      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:w-2/3 lg:w-1/3">
          <div className="flex justify-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              <span className="text-black">E</span>-
              <span className="text-black">Passtransfer</span>
            </h1>
          </div>

          <h2 className="text-lg font-medium text-gray-800 text-center mb-4">
            {showOtpSection
              ? "E-Mail-Verifizierung"
              : "Anmeldung bei E-Passtransfer"}
          </h2>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-sm text-center mb-4">
              {successMessage}
            </p>
          )}

          {!showOtpSection ? (
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  E-Mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="nutzer@beispiel.de"
                />
              </div>

              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Passwort
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                    placeholder="Passwort eingeben"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3 text-gray-600 focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* <div className="mb-4">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={recaptchaSiteKey}
                  onChange={handleCaptchaChange}
                />
              </div> */}

              <div className="flex justify-end mb-4">
                <Link
                  to="/forgotpassword"
                  className="text-black text-sm hover:underline"
                >
                  Passwort vergessen?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-yellow-300 text-black py-2 rounded hover:bg-yellow-200 disabled:opacity-50"
              >
                {isLoading ? "Wird verarbeitet..." : "Anmelden"}
              </button>
            </form>
          ) : (
            <div className="otp-verification">
              <div className="mb-4 text-sm text-gray-600 text-center">
                Bitte geben Sie den 6-stelligen Bestätigungscode ein, den wir an{" "}
                {email} gesendet haben.
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Bestätigungscode
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="123456"
                  maxLength="6"
                />
              </div>

              <div className="flex justify-between items-center mb-4">
                <button
                  type="button"
                  onClick={sendOtpAutomatically}
                  disabled={isLoading}
                  className="text-blue-600 text-sm hover:underline disabled:opacity-50"
                >
                  {isLoading ? "Wird gesendet..." : "Code erneut senden"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowOtpSection(false);
                    setOtpSent(false);
                  }}
                  className="text-gray-600 text-sm hover:underline"
                >
                  Zurück zur Anmeldung
                </button>
              </div>

              <button
                type="button"
                onClick={handleVerifyOtp}
                disabled={isLoading || otp.length !== 6}
                className="w-full bg-yellow-300 text-black py-2 rounded hover:bg-yellow-200 disabled:opacity-50"
              >
                {isLoading ? "Wird verifiziert..." : "Verifizieren"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
