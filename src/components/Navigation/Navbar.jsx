import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { usePageTransition } from "../../hook/usePageTransition";

const Navbar = ({ onOpen }) => {
  const navGreenRef = useRef(null);
  const navRef = useRef(null);
  const navigate = usePageTransition();

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
      <div onClick={() => navigate("/")} className="text-3xl font-bold text-center p-1 ml-2 mt-2 cursor-pointer">
        <h1 className="uppercase">Alembic</h1>
      </div>

      <div
        onClick={onOpen}
        onMouseEnter={() => { navGreenRef.current.style.height = "100%"; }}
        onMouseLeave={() => { navGreenRef.current.style.height = "0%"; }}
        className="bg-black h-[3vw] w-[16vw] relative cursor-pointer"
      >
        <div ref={navGreenRef} className="bg-[#dcff50] transition-all w-full h-0 absolute top-0"></div>
        <div className="h-full w-full flex items-center justify-end px-3 ">
          <div className="text-white text-xs uppercase tracking-widest relative z-10 flex gap-1 flex-col items-end">
            <div className="w-14 h-[2px] bg-white"></div>
            <div className="w-7 h-[2px] bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
