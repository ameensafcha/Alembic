import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';
import { usePageTransition } from '../hook/usePageTransition';

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Agents', path: '/agents' },
  { label: 'Contact', path: '/contact' },
];

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'Dribbble', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

const Footer = () => {
  const footerRef = useRef(null);
  const bigTextRef = useRef(null);
  const emailRef = useRef(null);
  const line1Ref = useRef(null);
  const gridRef = useRef(null);
  const line2Ref = useRef(null);
  const copyrightRef = useRef(null);
  const navigate = usePageTransition();
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    // Route change pe thoda wait karo taaki DOM settle ho
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          end: 'top 30%',
          scrub: 0.6,
        },
      });

      tl.from(bigTextRef.current, { y: 120, opacity: 0, duration: 1 })
        .from(emailRef.current, { y: 80, opacity: 0, duration: 0.8 }, '-=0.6')
        .from(line1Ref.current, { scaleX: 0, transformOrigin: 'left center', duration: 0.8 }, '-=0.4')
        .from(gridRef.current, { y: 60, opacity: 0, duration: 0.8 }, '-=0.4')
        .from(line2Ref.current, { scaleX: 0, transformOrigin: 'left center', duration: 0.6 }, '-=0.3')
        .from(copyrightRef.current, { y: 20, opacity: 0, duration: 0.5 }, '-=0.2');
    }, footerRef);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [location.pathname]);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#111] px-6 md:px-16 pt-32 pb-8"
    >
      {/* Big CTA Heading */}
      <div className="overflow-hidden">
        <h2
          ref={bigTextRef}
          className="text-[12vw] md:text-[10vw] font-[font2] uppercase leading-[0.9] tracking-tight whitespace-pre-line"
        >
          {t('footer.cta')}
        </h2>
      </div>

      {/* Email */}
      <div className="overflow-hidden mt-10">
        <a
          ref={emailRef}
          href="mailto:hello@alembic.studio"
          className="text-2xl md:text-4xl font-[font1] opacity-60 hover:opacity-100 transition-opacity duration-300 inline-block"
        >
          hello@alembic.studio
        </a>
      </div>

      {/* Divider 1 */}
      <div ref={line1Ref} className="w-full h-px bg-white/20 mt-20 mb-12"></div>

      {/* Grid — Logo, Links, Contact, Socials */}
      <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-16">

        {/* Logo */}
        <div>
          <h3 className="text-4xl font-[font2] uppercase tracking-tight mb-4">Alembic</h3>
          <p className="text-base font-[font1] opacity-40 leading-relaxed">
            {t('footer.tagline')}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-[font1] uppercase tracking-widest opacity-40 mb-6">{t('footer.navLabel')}</h4>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => navigate(link.path)}
                  className="text-lg font-[font1] hover:opacity-60 transition-opacity duration-300 cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-[font1] uppercase tracking-widest opacity-40 mb-6">Contact</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <Mail size={18} strokeWidth={1.5} className="opacity-40" />
              <a href="mailto:hello@alembic.studio" className="text-lg font-[font1] hover:opacity-60 transition-opacity duration-300">
                hello@alembic.studio
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} strokeWidth={1.5} className="opacity-40" />
              <a href="tel:+1234567890" className="text-lg font-[font1] hover:opacity-60 transition-opacity duration-300">
                +1 (234) 567-890
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} strokeWidth={1.5} className="opacity-40" />
              <span className="text-lg font-[font1] opacity-60">New York, NY</span>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-sm font-[font1] uppercase tracking-widest opacity-40 mb-6">Socials</h4>
          <ul className="flex flex-col gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-lg font-[font1] opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider 2 */}
      <div ref={line2Ref} className="w-full h-px bg-white/15 mb-6"></div>

      {/* Copyright */}
      <div ref={copyrightRef} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <p className="text-sm font-[font1] opacity-30 uppercase tracking-widest">
          &copy; 2026 Alembic. All rights reserved.
        </p>
        <p className="text-sm font-[font1] opacity-30 uppercase tracking-widest">
          Designed & Built by Alembic
        </p>
      </div>
    </footer>
  );
};

export default Footer;
