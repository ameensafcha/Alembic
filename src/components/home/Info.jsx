import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import { projectsData } from '../../data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function Info() {
  const { t } = useTranslation();
  const mainRef = useRef(null);
  const pinContainerRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  // Show only first 5 projects on home
  const featuredProjects = projectsData.slice(0, 5);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWrapper = scrollWrapperRef.current;
      const projectPanels = gsap.utils.toArray('.project-panel');
      const isRTL = document.documentElement.dir === 'rtl';

      const scrollTween = gsap.to(scrollWrapper, {
        x: () => -(scrollWrapper.scrollWidth - window.innerWidth) + "px",
        ease: "none",
        scrollTrigger: {
          trigger: pinContainerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + (scrollWrapper.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true,
        }
      });

      gsap.utils.toArray('.info-section').forEach((sec) => {
        const elements = sec.querySelectorAll('h1, h2, h3, p, button, .stat-block');
        gsap.from(elements, {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse"
          }
        });
      });

      projectPanels.forEach((panel) => {
        const elements = panel.querySelectorAll('.space-y-6 > *, .anim-img');
        gsap.from(elements, {
          x: isRTL ? -80 : 80,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: scrollTween,
            start: "left 75%",
            end: "right 25%",
            toggleActions: "play reverse play reverse"
          }
        });
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="text-zinc-100">

      {/* 1. HERO SECTION */}
      <section className="info-section h-screen w-full flex flex-col justify-center items-center relative px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black -z-10" />
        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-center leading-[0.85] relative">
          <span className="block text-8xl md:text-[12rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 whitespace-nowrap pointer-events-none" style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>{t('info.bgText')}</span>
          {t('info.heroTitle1')} <br /> {t('info.heroTitle2')}
        </h1>
        <p className="mt-8 text-xl md:text-2xl text-zinc-400 font-light tracking-wide text-center">{t('info.heroSub')}</p>
      </section>

      {/* 2. VALUE PROPOSITION */}
      <section className="info-section h-screen w-full flex items-center justify-center bg-zinc-900 px-8 md:px-24">
        <div className="max-w-4xl">
          <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">{t('info.valueLabel')}</h2>
          <p className="text-3xl md:text-5xl font-medium leading-tight">
            {t('info.valueText')}
            <span className="text-zinc-500"> {t('info.valueTextFaded')}</span>
          </p>
        </div>
      </section>

      {/* 3. FEATURED WORK (Horizontal Pinned Scroll) */}
      <section ref={pinContainerRef} className="h-screen w-full relative overflow-hidden bg-black">
        <div ref={scrollWrapperRef} className="flex w-max h-full" style={{ direction: 'ltr' }}>
          {featuredProjects.map((project, index) => (
            <article key={project.id} className={`project-panel w-screen h-screen flex-shrink-0 flex items-center px-8 md:px-24 ${project.theme} ${project.border}`} style={{ direction: document.documentElement.dir }}>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className={`space-y-6 ${index % 2 === 0 ? 'order-2 md:order-1' : ''}`}>
                  <span className="text-xs uppercase tracking-widest text-zinc-500 block">
                    {project.id} / {t('info.featuredLabel')}
                  </span>
                  <h3 className="text-5xl md:text-7xl font-bold whitespace-pre-line">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-lg text-zinc-400 max-w-md">
                    {t(project.descKey)}
                  </p>
                  <button className="mt-4 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                    {t('info.caseStudy')}
                  </button>
                </div>

                <div className={`h-[50vh] md:h-[70vh] bg-zinc-800 rounded-2xl overflow-hidden relative group anim-img ${index % 2 === 0 ? 'order-1 md:order-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={t(project.titleKey).replace('\n', ' ')}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. BRIEF ABOUT */}
      <section className="info-section h-screen w-full flex items-center bg-zinc-900 px-8 md:px-24">
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 justify-between items-start md:items-end mx-auto">
          <div className="max-w-xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6 block">{t('info.aboutLabel')}</h2>
            <p className="text-2xl md:text-4xl font-light leading-relaxed">
              {t('info.aboutText1')}
              {' '}{t('info.aboutText2')}
              <br /><br />
              {t('info.aboutText3')}
            </p>
          </div>
          <div className="text-left md:text-right space-y-4">
            <div className="stat-block">
              <span className="block text-4xl font-bold">12+</span>
              <span className="text-zinc-500 text-sm uppercase">{t('info.statYears')}</span>
            </div>
            <div className="stat-block">
              <span className="block text-4xl font-bold">140+</span>
              <span className="text-zinc-500 text-sm uppercase">{t('info.statProjects')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="info-section h-screen w-full flex flex-col items-center justify-center bg-white text-black px-8 relative">
        <div className="text-center space-y-8">
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter">{t('info.ctaTitle1')} <br /> {t('info.ctaTitle2')}</h2>
          <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl mx-auto">{t('info.ctaSub')}</p>
          <button className="mt-8 px-12 py-5 bg-black text-white text-xl rounded-full hover:scale-105 transition-transform duration-300 shadow-xl font-medium">
            {t('info.ctaButton')}
          </button>
        </div>
      </section>

    </div>
  );
}
