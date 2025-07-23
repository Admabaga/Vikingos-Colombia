import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Esperamos un pequeño tiempo por si hay animaciones o cargas
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
