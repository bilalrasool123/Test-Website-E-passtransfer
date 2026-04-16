import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CookieBanner from "./Component/CookieBanner";
import ConsentBanner from "./Component/ConsentBanner";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ConsentBanner />
    <CookieBanner />
  </StrictMode>
);
