import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // get current route

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  }, [pathname]); // triggers on route change

  return null;
};

export default ScrollToTop;
