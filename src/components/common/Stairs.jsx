import React, { useEffect } from "react";
import { revealScreen } from "../../utils/animations";

const Stairs = () => {
  useEffect(() => {
    const handleReady = () => {
      revealScreen();
    };

    window.addEventListener("PAGE_READY", handleReady);
    return () => window.removeEventListener("PAGE_READY", handleReady);
  }, []);

  return (
    <div id="stair-parent" className="w-screen h-screen z-50 fixed top-0 left-0 hidden pointer-events-none">
      <div className="w-full h-full flex overflow-hidden">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="stair h-full w-1/5 bg-black"></div>
        ))}
      </div>
    </div>
  );
};

export default Stairs;