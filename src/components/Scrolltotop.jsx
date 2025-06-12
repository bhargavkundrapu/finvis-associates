import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Scrolltotop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner
  }, [pathname]);

  return null;
}

export default Scrolltotop;