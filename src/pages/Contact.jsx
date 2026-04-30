import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    window.dispatchEvent(new Event("PAGE_READY"));

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

      tl.from(".contact-title", { y: 100, opacity: 0, stagger: 0.1 })
        .from(".contact-info-item", { x: -50, opacity: 0, stagger: 0.1 }, "-=0.8")
        .from(".contact-form-item", { y: 30, opacity: 0, stagger: 0.1 }, "-=1")
        .from(".contact-line", { scaleX: 0, transformOrigin: "left center", stagger: 0.2 }, "-=1.2");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#111] text-white pt-32 pb-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <div className="overflow-hidden">
            <h1 className="contact-title text-[12vw] md:text-[8vw] font-[font2] uppercase leading-[0.9] tracking-tighter">
              {t('contact.title1', 'Let\'s build')}
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="contact-title text-[12vw] md:text-[8vw] font-[font2] uppercase leading-[0.9] tracking-tighter text-[#dcff50]">
              {t('contact.title2', 'Something Great')}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div ref={infoRef} className="space-y-12">
            <div className="contact-line w-full h-px bg-white/20"></div>
            
            <div className="contact-info-item group cursor-pointer">
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4 block">Email</span>
              <a href="mailto:hello@alembic.studio" className="text-2xl md:text-4xl font-[font1] flex items-center gap-4 group-hover:text-[#dcff50] transition-colors">
                hello@alembic.studio <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div className="contact-line w-full h-px bg-white/20"></div>

            <div className="contact-info-item group cursor-pointer">
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4 block">Phone</span>
              <a href="tel:+1234567890" className="text-2xl md:text-4xl font-[font1] flex items-center gap-4 group-hover:text-[#dcff50] transition-colors">
                +1 (234) 567-890 <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div className="contact-line w-full h-px bg-white/20"></div>

            <div className="contact-info-item">
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4 block">Office</span>
              <p className="text-2xl md:text-4xl font-[font1] opacity-80">
                123 Creative Blvd <br /> New York, NY 10001
              </p>
            </div>

            <div className="contact-line w-full h-px bg-white/20"></div>

            <div className="contact-info-item">
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4 block">Socials</span>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="text-xl md:text-2xl font-[font1] opacity-60 hover:opacity-100 hover:text-[#dcff50] transition-all"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <div className="contact-form-item relative">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl outline-none focus:border-[#dcff50] transition-colors placeholder:text-zinc-600"
              />
            </div>
            <div className="contact-form-item relative">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl outline-none focus:border-[#dcff50] transition-colors placeholder:text-zinc-600"
              />
            </div>
            <div className="contact-form-item relative">
              <textarea 
                rows="4" 
                placeholder="Project Brief" 
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl outline-none focus:border-[#dcff50] transition-colors placeholder:text-zinc-600 resize-none"
              ></textarea>
            </div>
            
            <div className="contact-form-item pt-8">
              <button className="group relative px-12 py-5 bg-[#dcff50] text-black font-bold uppercase rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  Send Message <ArrowUpRight size={20} />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
