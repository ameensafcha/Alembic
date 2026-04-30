import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate, useLocation } from "react-router-dom";
import { coverScreen } from "../../utils/animations";

const menuData = [
  {
    label: "Projects",
    route: "/projects",
    speed: "30s",
    items: [
      {
        text: "Frank Tower",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80",
        bg: "#c8b8a2",
      },
      {
        text: "Dom Dom",
        img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=300&q=80",
        bg: "#a2b8c8",
      },
      {
        text: "Santa Maria",
        img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&q=80",
        bg: "#b8c8a2",
      },
      {
        text: "Big Molly",
        img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&q=80",
        bg: "#c8a2b8",
      },
    ],
  },
  {
    label: "Agents",
    route: "/agents",
    speed: "25s",
    items: [
      {
        text: "Frank Tower",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80",
        bg: "#c8b8a2",
      },
      {
        text: "Dom Dom",
        img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=300&q=80",
        bg: "#a2b8c8",
      },
      {
        text: "Santa Maria",
        img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&q=80",
        bg: "#b8c8a2",
      },
      {
        text: "Big Molly",
        img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&q=80",
        bg: "#c8a2b8",
      },
    ],
  },
];

function distMetric(x, y, x2, y2) {
  return (x - x2) ** 2 + (y - y2) ** 2;
}

function closestEdge(x, y, w, h) {
  const edges = {
    top: distMetric(x, y, w / 2, 0),
    bottom: distMetric(x, y, w / 2, h),
    left: distMetric(x, y, 0, h / 2),
    right: distMetric(x, y, w, h / 2),
  };
  return Object.keys(edges).reduce((a, b) => (edges[a] < edges[b] ? a : b));
}

const MenuItem = ({ label, speed, items, route, onNavClose }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isActive = pathname === route;
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animDefaults = { duration: 0.6, ease: "expo" };

  const getEdge = (ev) => {
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    return closestEdge(x, y, rect.width, rect.height);
  };

  const handleMouseEnter = (ev) => {
    const edge = getEdge(ev);
    gsap
      .timeline({ defaults: animDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  };

  const handleMouseLeave = (ev) => {
    const edge = getEdge(ev);
    gsap
      .timeline({ defaults: animDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0);
  };

  const loopedItems = [...items, ...items];

  return (
    <div
      ref={itemRef}
      className="relative overflow-hidden text-center -mb-px"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.15)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      {/* Main button
          ↓ leading-[0.9] — line height kam karo, number ghataao jitna tight chahiye */}
      <button
        className="font-[font2] block w-full relative bg-transparent border-0 outline-none uppercase tracking-[-0.02em] leading-[0.9] py-2 px-[1vw] select-none"
        style={{ fontSize: "8vw", color: isActive ? "#dcff50" : "white", cursor: isActive ? "default" : "pointer" }}
        onClick={() => !isActive && coverScreen(() => { onNavClose(); navigate(route); })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {label}
      </button>

      {/* Marquee overlay */}
      <div
        ref={marqueeRef}
        className="absolute inset-0 overflow-hidden pointer-events-none bg-[#dcff50] will-change-transform"
        style={{ transform: "translate3d(0, 101%, 0)" }}
      >
        <div
          ref={marqueeInnerRef}
          className="w-full h-full will-change-transform"
          style={{ transform: "translate3d(0, -101%, 0)" }}
        >
          <div
            className="h-full flex items-center relative will-change-transform"
            style={{
              width: "fit-content",
              animation: `marquee ${speed} linear infinite`,
            }}
            aria-hidden="true"
          >
            {loopedItems.map((item, i) => (
              <React.Fragment key={i}>
                {/* ↓ leading-[0.9] — same as button upar wala */}
                <span
                  className="font-[font2] whitespace-nowrap uppercase tracking-[-0.02em] leading-[0.9] px-[1.5vw] text-[#111]"
                  style={{ fontSize: "8vw" }}
                >
                  {item.text}
                </span>

                {/* IMAGE SIZE:
                    width  → 8vw ghata kar image choti karo, 15vw bada kar badi karo
                    height → 50% choti, 80% badi  */}
                <img
                  src={item.img}
                  alt={item.text}
                  className="shrink-0 rounded-[100px] object-cover mx-[1.5vw]"
                  style={{ width: "14vw", height: "70%" }}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FullScreenNav = ({ isNavOpen, onClose, onNavClose }) => {
  const navRef = useRef(null);
  const closeIconRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isNavOpen) {
      gsap.to(navRef.current, { y: "0%", duration: 0.8, ease: "power3.inOut" });
      gsap.to(closeIconRef.current, { opacity: 1, duration: 0.5, delay: 0.6, ease: "power2.out" });
    } else {
      gsap.set(closeIconRef.current, { opacity: 0 });
      gsap.set(navRef.current, { y: "-100%" });
    }
  }, [isNavOpen]);

  return (
    <div ref={navRef} className="fixed inset-0 z-20 overflow-hidden" style={{ transform: "translateY(-100%)" }}>
      <div className="flex fixed z-20 top-0 w-full items-start justify-between">
        <div
          onClick={() => pathname !== "/" && coverScreen(() => { onNavClose(); navigate("/"); })}
          className="text-3xl font-bold text-center p-1 ml-2 mt-2 cursor-pointer"
        >
          <h1 className="uppercase text-white">Alembic</h1>
        </div>

        <div ref={closeIconRef} onClick={() => gsap.to(navRef.current, { y: "-100%", duration: 0.8, ease: "power3.inOut", onComplete: onClose })} className="h-32 w-32 relative overflow-hidden m-1 cursor-pointer" style={{ opacity: 0 }}>
          <div className="h-40 w-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white"></div>
          <div className="h-40 w-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"></div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
      <div className="bg-[#111] text-white w-full min-h-screen flex items-center justify-center py-16">
        <nav className="w-full">
          {menuData.map((item) => (
            <MenuItem key={item.label} {...item} onNavClose={onNavClose} />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default FullScreenNav;
