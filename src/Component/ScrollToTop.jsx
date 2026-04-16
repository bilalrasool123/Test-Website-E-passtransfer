import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get the current pathname

  useEffect(() => {
    // When the pathname changes, scroll to the top of the page
    window.scrollTo(0, 0);
  }, [pathname]); // Trigger the effect whenever the pathname changes

  return null;
};

export default ScrollToTop;
