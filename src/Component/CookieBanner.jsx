import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "../Component/CookieBanner.css"; // Importing CSS file

const CookieBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get("cookieConsent");
    if (!cookieConsent) {
      setIsBannerVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 365 });
    setIsBannerVisible(false);
  };

  const handleReject = () => {
    Cookies.set("cookieConsent", "rejected", { expires: 365 });
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) return null;

  return (
    <div className="">
      {/* <p className="cookie-message">
        We use cookies to improve your experience. Accept or reject?
      </p>
      <div className="">
        <button onClick={handleAccept} className=""></button>
        <button onClick={handleReject} className=""></button>
      </div> */}
    </div>
  );
};

export default CookieBanner;
