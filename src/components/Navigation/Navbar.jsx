import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Navbar = ({ onOpen }) => {
  const navGreenRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const hide = () => gsap.set(navRef.current, { opacity: 0 });
    const show = () => gsap.to(navRef.current, { opacity: 1, duration: 0.5, ease: "power2.out" });

    window.addEventListener("NAVBAR_HIDE", hide);
    window.addEventListener("NAVBAR_SHOW", show);
    return () => {
      window.removeEventListener("NAVBAR_HIDE", hide);
      window.removeEventListener("NAVBAR_SHOW", show);
    };
  }, []);

  return (
    <div ref={navRef} className="flex fixed z-10 top-0 w-full items-start justify-between">
      <div className="text-black text-3xl font-bold bg-yellow-600 text-center p-1 ml-2 mt-2">
        Logo
      </div>

      <div
        onClick={onOpen}
        onMouseEnter={() => { navGreenRef.current.style.height = "100%"; }}
        onMouseLeave={() => { navGreenRef.current.style.height = "0%"; }}
        className="bg-black h-[3vw] w-[16vw] relative cursor-pointer"
      >
        <div ref={navGreenRef} className="bg-[#dcff50] transition-all w-full h-0 absolute top-0"></div>
        <div className="h-full w-full flex items-center justify-center">
          <span className="text-white text-xs uppercase tracking-widest relative z-10">Menu</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
