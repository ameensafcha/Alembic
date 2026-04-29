import React, { useRef } from "react";

const Navbar = () => {
  const navGreenRef = useRef(null);

  return (
    <div className="flex hidden fixed z-4  top-0 w-full items-start justify-between">
      <div className="text-black text-3xl font-bold bg-yellow-600 text-center p-1 ml-2 mt-2">
        Logo
      </div>

      <div
        onMouseEnter={() => {
          navGreenRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = "0%";
        }}
        className="bg-black h-[3vw] w-[16vw] relative cursor-pointer"
      >
        <div
          ref={navGreenRef}
          className=" bg-[#dcff50] transition-all w-full h-0 absolute top-0"
        ></div>

        <div className="h-full w-full "></div>
      </div>
    </div>
  );
};

export default Navbar;
