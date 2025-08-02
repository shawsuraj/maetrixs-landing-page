import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Optional: for smooth scrolling
    });
  }, [location.pathname]); // Trigger effect when pathname changes

  return children;
};

export default ScrollToTop;