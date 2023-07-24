"use client";
import { useState, useEffect } from "react";

// const width = window.innerWidth;
export function useWindowResize() {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(handleWindowResize());
    };

    // Check if we are in a browser environment before adding the event listener
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return smallScreen;
}

function handleWindowResize() {
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    return width < 890;
  }

  return false;
}

export default useWindowResize;
