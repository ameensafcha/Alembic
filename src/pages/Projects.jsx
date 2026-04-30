import React, { useRef, useEffect } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);

  const projects = [
    {
      project1: { title: "Project Alpha", image: "https://picsum.photos/seed/proj1/800/600" },
      project2: { title: "Project Beta", image: "https://picsum.photos/seed/proj2/800/600" }
    },
    {
      project1: { title: "Project Gamma", image: "https://picsum.photos/seed/proj3/800/600" },
      project2: { title: "Project Delta", image: "https://picsum.photos/seed/proj4/800/600" }
    },
    {
      project1: { title: "Project Epsilon", image: "https://picsum.photos/seed/proj5/800/600" },
      project2: { title: "Project Zeta", image: "https://picsum.photos/seed/proj6/800/600" }
    },
    {
      project1: { title: "Project Eta", image: "https://picsum.photos/seed/proj7/800/600" },
      project2: { title: "Project Theta", image: "https://picsum.photos/seed/proj8/800/600" }
    },
    {
      project1: { title: "Project Iota", image: "https://picsum.photos/seed/proj9/800/600" },
      project2: { title: "Project Kappa", image: "https://picsum.photos/seed/proj10/800/600" }
    }
  ];

  useGSAP(() => {
    // Tumhare un-needed manual refs ko maine utils.toArray se replace kar diya hai
    const cards = gsap.utils.toArray('.card-container');

    cards.forEach((card, index) => {
      const innerCard = card.querySelector('.card-inner');
      
      // Aakhri card ko scale down karne ki zarurat nahi kyunki uske upar kuch nahi aayega
      if (index === cards.length - 1) return;

      // ScrollTrigger logic: Jaise hi agla card aayega, current card shrink hoga
      gsap.to(innerCard, {
        scale: 0.5,
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top 9vh", // Jab ye card screen ke top par sticky ho jaye
          endTrigger: cards[index + 1], 
          end: "top 10vh", // Jab agla card screen ke top par pahuche
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
        {projects.map((elem, idx) => (
          // CSS Sticky is the secret. GSAP conflict khatam.
          <div
            key={idx}
            className="card-container sticky top-[10vh] w-full flex justify-center items-center h-[80vh]"
          >
            {/* GSAP is inner div ko animate karega, sticky wrapper ko nahi */}
            <div className="card-inner w-full h-full origin-top flex lg:flex-row flex-col lg:gap-4 gap-2 px-4  rounded-3xl will-change-transform">
              <ProjectCard
                image1={elem.project1.image}
                image2={elem.project2.image}
                title1={elem.project1.title}
                title2={elem.project2.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;