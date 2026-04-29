import gsap from "gsap";

export const coverScreen = (onCompleteCallback) => {
  const parent = document.getElementById("stair-parent");
  const stairs = document.querySelectorAll(".stair");

  if (!parent || stairs.length === 0) return onCompleteCallback();

  window.dispatchEvent(new Event("NAVBAR_HIDE"));

  gsap.timeline()
    .set(parent, { display: "block", pointerEvents: "all" })
    .set(stairs, { scaleY: 0, y: "0%", transformOrigin: "top" })
    .to(stairs, {
      scaleY: 1,
      stagger: { amount: -0.25 },
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: onCompleteCallback,
    });
};

export const revealScreen = () => {
  const parent = document.getElementById("stair-parent");
  const stairs = document.querySelectorAll(".stair");

  if (!parent || stairs.length === 0) return;

  gsap.to(stairs, {
    y: "100%",
    stagger: { amount: 0.2 },
    duration: 0.5,
    ease: "power2.inOut",
    delay: 0.1,
    onComplete: () => {
      gsap.set(parent, { display: "none", pointerEvents: "none" });
      window.dispatchEvent(new Event("NAVBAR_SHOW"));
    },
  });
};

export const openNavAnimation = (onComplete) => {
  const parent = document.getElementById("stair-parent");
  const stairs = document.querySelectorAll(".stair");

  if (!parent || stairs.length === 0) return onComplete?.();

  gsap.timeline()
    .set(parent, { display: "block", pointerEvents: "all" })
    .set(stairs, { y: "-100%" })
    .to(stairs, {
      y: "0%",
      stagger: { amount: 0.2 },
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => onComplete?.(),
    })
    .to(stairs, {
      y: "100%",
      stagger: { amount: 0.2 },
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => gsap.set(parent, { display: "none", pointerEvents: "none" }),
    });
};

export const closeNavAnimation = (onComplete) => {
  const parent = document.getElementById("stair-parent");
  const stairs = document.querySelectorAll(".stair");

  if (!parent || stairs.length === 0) return onComplete?.();

  gsap.timeline()
    .set(parent, { display: "block", pointerEvents: "all" })
    .set(stairs, { y: "100%" })
    .to(stairs, {
      y: "0%",
      stagger: { amount: -0.2 },
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => onComplete?.(),
    })
    .to(stairs, {
      y: "-100%",
      stagger: { amount: -0.2 },
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => gsap.set(parent, { display: "none", pointerEvents: "none" }),
    });
};
