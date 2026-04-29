import gsap from "gsap";

export const coverScreen = (onCompleteCallback) => {
  const parent = document.getElementById("stair-parent");
  const stairs = document.querySelectorAll(".stair");

  if (!parent || stairs.length === 0) return onCompleteCallback();

  gsap.timeline()
    .set(parent, { display: "block", pointerEvents: "all" })
    .set(stairs, { scaleY: 0, y: "0%", transformOrigin: "top" })
    // Phase 1: Height grow karo (Right to Left stagger)
    .to(stairs, {
      scaleY: 1,
      stagger: { amount: -0.25 },
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: onCompleteCallback, // Yahan par URL badlega
    });
};

export const revealScreen = () => {
  const parent = document.getElementById("stair-parent");
  const stairs = document.querySelectorAll(".stair");

  if (!parent || stairs.length === 0) return;

  // Phase 2: Niche ki taraf slide out karo (Left to Right stagger)
  gsap.to(stairs, {
    y: "100%",
    stagger: { amount: 0.2 },
    duration: 0.5,
    ease: "power2.inOut",
    delay: 0.1, // Screen black hone par 0.1s ka pause
    onComplete: () => {
      // Cleanup
      gsap.set(parent, { display: "none", pointerEvents: "none" });
    },
  });
};