import React from "react";
import { Link } from "react-router-dom";
import { usePageTransition } from "../../hook/usePageTransition";

const HomeBottomText = () => {
  const navigate = usePageTransition();
  return (
    <div className="font-[font2] flex items-center justify-center gap-6 ">
      {/* <Link className='text-[6.5vw] hover:text-amber-200 border-5 leading-[6vw] border-white rounded-full px-14 pt-5 pb-0 uppercase' to="/projects">Projects</Link> */}
      {/* <Link className='text-[6.5vw] hover:text-amber-200 border-5 leading-[6vw] border-white rounded-full px-14 pt-5 pb-0 uppercase' to="/agents">Agents</Link> */}

      <button
        onClick={() => navigate("/projects")}
        className="text-[6.5vw] hover:text-amber-200 border-5 leading-[6vw] border-white rounded-full px-14 pt-5 pb-0 uppercase hover:cursor-pointer"
      >
        Projects
      </button>

      <button
        onClick={() => navigate("/agents")}
        className="text-[6.5vw] hover:text-amber-200 border-5 leading-[6vw] border-white rounded-full px-14 pt-5 pb-0 uppercase hover:cursor-pointer"
      >
        Agents
      </button>
    </div>
  );
};

export default HomeBottomText;
