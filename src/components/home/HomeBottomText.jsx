import React from "react";
import { useTranslation } from "react-i18next";
import { usePageTransition } from "../../hook/usePageTransition";

const HomeBottomText = () => {
  const navigate = usePageTransition();
  const { t } = useTranslation();

  return (
    <div className="font-[font2] flex items-center justify-center gap-6 ">
      <button
        onClick={() => navigate("/projects")}
        className="text-[6.5vw] hover:text-amber-200 border-5 leading-[6vw] border-white rounded-full px-14 pt-5 pb-0 uppercase hover:cursor-pointer"
      >
        {t('nav.projects')}
      </button>

      <button
        onClick={() => navigate("/agents")}
        className="text-[6.5vw] hover:text-amber-200 border-5 leading-[6vw] border-white rounded-full px-14 pt-5 pb-0 uppercase hover:cursor-pointer"
      >
        {t('nav.agents')}
      </button>
    </div>
  );
};

export default HomeBottomText;
