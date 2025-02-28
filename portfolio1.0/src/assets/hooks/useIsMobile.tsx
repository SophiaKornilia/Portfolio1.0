// hooks/useIsMobile.js eller useIsMobile.ts
import { useState, useEffect } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 480);
    }

    // Kör en gång direkt för att sätta initialt värde
    handleResize();

    // Lyssna på ändring av fönstrets storlek
    window.addEventListener("resize", handleResize);

    // Rensa upp eventlyssnaren när komponenten unmountas
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
