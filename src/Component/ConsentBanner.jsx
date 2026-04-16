import { useState, useEffect } from "react";
import "../Component/ConsentBanner.css"; // Importing the CSS file

const ConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState({
    preferences: true,
    statistics: true,
    marketing: true,
  });

  useEffect(() => {
    const storedConsent = JSON.parse(localStorage.getItem("userConsent"));
    if (!storedConsent) {
      setShowBanner(true);
    } else {
      setConsent(storedConsent);
      pushToDataLayer(storedConsent);
    }
  }, []);

  const pushToDataLayer = (updatedConsent) => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "e-pass-consent",
        consent: updatedConsent,
      });
    }
  };

  const handleConsentChange = (category) => {
    setConsent((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleAcceptSelection = () => {
    setShowBanner(false);
    setTimeout(() => {
      const updatedConsent = { ...consent };
      localStorage.setItem("userConsent", JSON.stringify(updatedConsent));
      window.dispatchEvent(new Event("storage"));
      pushToDataLayer(updatedConsent);
    }, 0); // ensure it uses latest state
  };

  const handleRefuseAll = () => {
    const refusedConsent = {
      preferences: false,
      statistics: false,
      marketing: false,
    };
    setConsent(refusedConsent);
    setShowBanner(false);
    setTimeout(() => {
      localStorage.setItem("userConsent", JSON.stringify(refusedConsent));
      window.dispatchEvent(new Event("storage"));
      pushToDataLayer(refusedConsent);
    }, 0);
  };

  if (!showBanner) return null;

  return (
    <div id="cookie-banner" className="cookie-banner bg-gray-100">
      <p className="text-black">
        {
          "Um Ihr Nutzungserlebnis zu verbessern und Analysen durchzuführen, verwenden wir Cookies. Bitte wählen Sie Ihre bevorzugten Einstellungen:"
        }
      </p>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={consent.preferences}
            onChange={() => handleConsentChange("preferences")}
          />
          <span className="text-black">{"Präferenzen"}</span>
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={consent.statistics}
            onChange={() => handleConsentChange("statistics")}
          />
          <span className="text-black">{"Statistiken"}</span>
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={consent.marketing}
            onChange={() => handleConsentChange("marketing")}
          />
          <span className="text-black">{"Marketing"}</span>
        </label>
      </div>

      <div className="button-container">
        <button
          onClick={handleRefuseAll}
          className="bg-yellow-300 rounded px-7 text-black"
        >
          Alle ablehnen
        </button>
        <button
          onClick={handleAcceptSelection}
          className="bg-yellow-300 rounded px-4 p-2 text-black"
        >
          Auswahl akzeptieren
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;
