import React, { useRef, useEffect } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "../data/projects";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const { t } = useTranslation();

  // Group projects into pairs for the layout
  const groupedProjects = [];
  for (let i = 0; i < projectsData.length; i += 2) {
    groupedProjects.push({
      project1: projectsData[i],
      project2: projectsData[i + 1] || null // Handle odd number of projects
    });
  }

  useGSAP(() => {
    const cards = gsap.utils.toArray('.card-container');

    cards.forEach((card, index) => {
      const innerCard = card.querySelector('.card-inner');
      
      if (index === cards.length - 1) return;

      gsap.to(innerCard, {
        scale: 0.5,
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top 9vh",
          endTrigger: cards[index + 1], 
          end: "top 10vh",
          scrub: true,
        }
      });
    });
  }, { scope: containerRef });

  useEffect(() => {
    window.dispatchEvent(new Event("PAGE_READY"));
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen w-full pt-[23vw]">
      <div className="px-4">
        <h1 className="uppercase font-[font1] text-[11vw] leading-none text-black">Projects</h1>
      </div>

      <div className="w-full pb-[20vh] mt-10 relative bg-transparent">
        {groupedProjects.map((elem, idx) => (
          <div
            key={idx}
            className="card-container sticky top-[10vh] w-full flex justify-center items-center h-[80vh]"
          >
            <div className="card-inner w-full h-full origin-top flex lg:flex-row flex-col lg:gap-4 gap-2 px-4  rounded-3xl will-change-transform">
              <ProjectCard
                image1={elem.project1.image}
                image2={elem.project2?.image}
                title1={t(elem.project1.titleKey)}
                title2={elem.project2 ? t(elem.project2.titleKey) : ""}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
