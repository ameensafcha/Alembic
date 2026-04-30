import React, { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePageTransition } from '../hook/usePageTransition';

gsap.registerPlugin(ScrollTrigger);

/* ───────── DATA ───────── */
const values = [
  {
    title: 'Heritage',
    desc: 'Rooted in centuries-old craftsmanship traditions, reimagined for the modern world.',
    icon: '◆',
  },
  {
    title: 'Sustainability',
    desc: 'Every creation begins with waste and ends with purpose — zero compromise on the planet.',
    icon: '◎',
  },
  {
    title: 'Innovation',
    desc: 'Pushing the boundaries of what natural materials can become through design and technology.',
    icon: '△',
  },
];

const processSteps = [
  { step: '01', title: 'Collection', desc: 'Palm tree waste is gathered from farms and plantations that would otherwise burn or discard it.' },
  { step: '02', title: 'Processing', desc: 'The raw fibers are cleaned, treated, and transformed into workable composite material.' },
  { step: '03', title: 'Crafting', desc: 'Skilled artisans shape the material into functional, beautiful products by hand and machine.' },
  { step: '04', title: 'Finishing', desc: 'Each piece is refined, quality-checked, and prepared to last — naturally durable, uniquely textured.' },
];

const team = [
  { name: 'Ameen Safcha', role: 'Founder & Creative Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Sara Khan', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  { name: 'Ravi Mehta', role: 'Lead Engineer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
];

const milestones = [
  { year: '2019', title: 'The Idea', desc: 'Alembic was born from a simple question — what if waste could become art?' },
  { year: '2020', title: 'First Prototype', desc: 'Our first product made entirely from palm tree waste. Ugly, but it worked.' },
  { year: '2021', title: 'Design Award', desc: 'Recognized for sustainable innovation at the National Design Summit.' },
  { year: '2022', title: 'Scale Up', desc: 'Partnered with 50+ farms across the region for raw material sourcing.' },
  { year: '2023', title: 'Global Launch', desc: 'Products now available in 12 countries. The mission goes international.' },
  { year: '2024', title: '10,000 Products', desc: 'Milestone of 10,000 products sold — each one diverting waste from landfills.' },
];

/* ───────── COMPONENT ───────── */
export default function About() {
  const pageRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroLineRef = useRef(null);
  const originRef = useRef(null);
  const valuesRef = useRef(null);
  const valueCardsRef = useRef([]);
  const materialRef = useRef(null);
  const stepsRef = useRef([]);
  const teamRef = useRef(null);
  const teamCardsRef = useRef([]);
  const timelineRef = useRef(null);
  const milestonesRef = useRef([]);
  const navigate = usePageTransition();

  useEffect(() => {
    window.dispatchEvent(new Event("PAGE_READY"));
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* ── HERO ── */
      const heroTl = gsap.timeline({ delay: 0.3 });
      heroTl
        .from(heroLineRef.current, { scaleX: 0, transformOrigin: 'left', duration: 1, ease: 'power3.inOut' })
        .from(heroTitleRef.current.children, { y: 120, opacity: 0, stagger: 0.15, duration: 1, ease: 'power3.out' }, '-=0.5')
        .from(heroSubRef.current, { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4');

      /* ── ORIGIN STORY ── */
      const originEls = originRef.current.querySelectorAll('.origin-anim');
      gsap.from(originEls, {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: originRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      /* ── VALUES ── */
      gsap.from(valuesRef.current.querySelector('h2'), {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      valueCardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          rotation: 3,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      /* ── MATERIAL / PROCESS ── */
      gsap.from(materialRef.current.querySelectorAll('.material-anim'), {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: materialRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      stepsRef.current.forEach((step, i) => {
        gsap.from(step, {
          x: i % 2 === 0 ? -60 : 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      /* ── TEAM ── */
      gsap.from(teamRef.current.querySelector('h2'), {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      teamCardsRef.current.forEach((card) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      /* ── TIMELINE ── */
      gsap.from(timelineRef.current.querySelector('h2'), {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      // Timeline center line grow
      const timelineLine = timelineRef.current.querySelector('.timeline-line');
      if (timelineLine) {
        gsap.from(timelineLine, {
          scaleY: 0,
          transformOrigin: 'top',
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 0.8,
          },
        });
      }

      milestonesRef.current.forEach((ms, i) => {
        gsap.from(ms, {
          x: i % 2 === 0 ? -80 : 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ms,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-[#0a0a0a] text-white min-h-screen">

      {/* ═══════════ HERO ═══════════ */}
      <section className="h-screen flex flex-col justify-center px-8 md:px-24 relative overflow-hidden">
        <div ref={heroLineRef} className="absolute top-1/2 left-0 w-full h-px bg-white/10"></div>
        <div ref={heroTitleRef} className="relative z-10">
          <div className="overflow-hidden">
            <h1 className="text-[14vw] md:text-[10vw] font-[font2] uppercase leading-[0.85] tracking-tight">About</h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-[14vw] md:text-[10vw] font-[font2] uppercase leading-[0.85] tracking-tight opacity-40">Alembic</h1>
          </div>
        </div>
        <p ref={heroSubRef} className="mt-10 text-lg md:text-2xl text-zinc-400 max-w-2xl font-[font1]">
          Turning nature's forgotten waste into tomorrow's most coveted material.
        </p>
      </section>

      {/* ═══════════ ORIGIN STORY ═══════════ */}
      <section ref={originRef} className="py-32 px-8 md:px-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="origin-anim text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">Our Origin</h2>
            <p className="origin-anim text-2xl md:text-4xl font-[font2] leading-relaxed mb-8">
              It started with a pile of palm tree waste — and a refusal to see it as trash.
            </p>
            <p className="origin-anim text-base md:text-lg text-zinc-400 leading-relaxed">
              In 2019, while walking through a farm in rural India, our founder saw tonnes of palm bark being burned. That moment sparked a question that became an obsession: what if this waste could be transformed into something beautiful, functional, and sustainable? Alembic was born from that obsession — a studio dedicated to proving that the best materials aren't always mined or manufactured. Sometimes, they're just waiting to be rediscovered.
            </p>
          </div>
          <div className="origin-anim h-[60vh] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80"
              alt="Origin"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ MISSION & VALUES ═══════════ */}
      <section ref={valuesRef} className="py-32 px-8 md:px-24 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-[font2] uppercase mb-20 text-center">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                ref={(el) => (valueCardsRef.current[i] = el)}
                className="border border-white/10 rounded-2xl p-10 hover:border-white/30 transition-colors duration-500 group"
              >
                <span className="text-4xl mb-6 block opacity-30 group-hover:opacity-100 transition-opacity duration-500">{v.icon}</span>
                <h3 className="text-2xl font-[font2] uppercase mb-4">{v.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ THE MATERIAL / PROCESS ═══════════ */}
      <section ref={materialRef} className="py-32 px-8 md:px-24">
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="material-anim text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">The Material</h2>
          <p className="material-anim text-3xl md:text-5xl font-[font2] leading-tight mb-8">
            From discarded palm bark to a material that rivals wood and leather.
          </p>
          <p className="material-anim text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Palm tree waste — specifically the bark sheaths that fall naturally — is one of the most overlooked organic materials on earth. We collect, process, and transform it into a composite that is durable, water-resistant, and stunningly textured. No trees are cut. No chemicals are dumped. Just nature's leftovers, reimagined.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {processSteps.map((s, i) => (
            <div
              key={s.step}
              ref={(el) => (stepsRef.current[i] = el)}
              className="border border-white/10 rounded-xl p-8 flex gap-6 items-start hover:bg-white/5 transition-colors duration-500"
            >
              <span className="text-5xl font-[font2] opacity-20">{s.step}</span>
              <div>
                <h3 className="text-xl font-[font2] uppercase mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ TEAM ═══════════ */}
      <section ref={teamRef} className="py-32 px-8 md:px-24 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-[font2] uppercase mb-20 text-center">
            The People
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((t, i) => (
              <div
                key={t.name}
                ref={(el) => (teamCardsRef.current[i] = el)}
                className="group"
              >
                <div className="h-[50vh] rounded-2xl overflow-hidden mb-6 relative">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-[font2] uppercase">{t.name}</h3>
                <p className="text-zinc-500 text-sm uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TIMELINE ═══════════ */}
      <section ref={timelineRef} className="py-32 px-8 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-[font2] uppercase mb-20 text-center">
            Our Journey
          </h2>

          <div className="relative">
            {/* Center line */}
            <div className="timeline-line absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/20 hidden md:block"></div>

            <div className="space-y-16 md:space-y-24">
              {milestones.map((ms, i) => (
                <div
                  key={ms.year}
                  ref={(el) => (milestonesRef.current[i] = el)}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <span className="text-6xl font-[font2] opacity-15 block mb-2">{ms.year}</span>
                    <h3 className="text-2xl font-[font2] uppercase mb-3">{ms.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{ms.desc}</p>
                  </div>
                  {/* Dot on center line */}
                  <div className="hidden md:block w-4 h-4 rounded-full bg-white/40 border-2 border-white/20 relative z-10 shrink-0"></div>
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA BOTTOM ═══════════ */}
      <section className="py-32 px-8 md:px-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-[font2] uppercase mb-8">Want to know more?</h2>
          <button
            onClick={() => navigate('/projects')}
            className="px-14 py-5 text-lg font-[font2] uppercase tracking-widest border border-white/30 hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
          >
            See Our Work
          </button>
        </div>
      </section>

    </div>
  );
}
