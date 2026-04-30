import React from "react";
import { useTranslation } from "react-i18next";
import Video from "./Video";

const HomeHeroText = () => {
  const { t } = useTranslation();

  return (
    <div className="font-[font2]  pt-5 text-center  ">
      <div className="flex items-center justify-center text-[9.5vw] uppercase leading-[8vw]">{t('hero.line1')}</div>

      <div className="flex items-center justify-center text-[9.5vw] uppercase leading-[8vw]">
        {t('hero.line2')}
        <div className="h-[7vw] w-[16vw] -mt-3 rounded-full overflow-hidden [clip-path:inset(0_round_9999px)]">
          <Video />
        </div>
        {t('hero.line3')}
      </div>

      <div className="flex items-center justify-center text-[9.5vw] uppercase leading-[8vw]">{t('hero.line4')}</div>
    </div>
  );
};

export default HomeHeroText;
