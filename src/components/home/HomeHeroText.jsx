import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font2]  pt-5 text-center  ">
      <div className="flex items-center justify-center text-[9.5vw] uppercase leading-[8vw]">The spark for</div>


      <div className="flex items-center justify-center text-[9.5vw] uppercase leading-[8vw]">
        all
        <div className="h-[7vw] w-[16vw] -mt-3 rounded-full overflow-hidden [clip-path:inset(0_round_9999px)]">
          <Video />
        </div>
        things
      </div>


      <div className="flex items-center justify-center text-[9.5vw] uppercase leading-[8vw]">creative</div>
    </div>
  );
};

export default HomeHeroText;
