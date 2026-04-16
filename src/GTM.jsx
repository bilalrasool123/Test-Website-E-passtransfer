import { useEffect } from "react";

const GTM_ID = "GTM-N96D2HC3";

const GTM = () => {
  useEffect(() => {
    const consent = JSON.parse(localStorage.getItem("userConsent")) || {};

    if (consent.statistics || consent.marketing) {
      // Push consent to dataLayer
      window.dataLayer = window.dataLayer || [];
      console.log(window.dataLayer);
      window.dataLayer.push({
        event: "e-pass-consent",
        consent: {
          preferences: consent.preferences ?? false,
          statistics: consent.statistics ?? false,
          marketing: consent.marketing ?? false,
        },
      });

      // Inject GTM script only once
      if (!document.getElementById("gtm-script")) {
        const scriptTag = document.createElement("script");
        scriptTag.id = "gtm-script";
        scriptTag.innerHTML = `
          (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `;
        document.head.appendChild(scriptTag);
      }
    }

    const sync = () => {
      const updated = JSON.parse(localStorage.getItem("userConsent"));
      if (updated && (updated.statistics || updated.marketing)) {
        // window.location.reload();  avoid reloading
        // Instead, push updated consent to dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "e-pass-consent-updated",
          consent: {
            preferences: updated.preferences ?? false,
            statistics: updated.statistics ?? false,
            marketing: updated.marketing ?? false,
          },
        });
      }
    };

    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  return (
    <noscript>
      <iframe
        title="gtm"
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>
  );
};

export default GTM;
