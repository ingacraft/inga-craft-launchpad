import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Runs reveal + parallax animations for the whole document on mount.
 * Selectors used:
 *  - .gsap-reveal   → fade + slide up on enter
 *  - .gsap-fade     → fade in on enter
 *  - .gsap-scale    → scale + fade in on enter
 *  - [data-parallax] → subtle y translate tied to scroll
 *  - .rhythm-section → smooth stack reveal
 */
export function useGsapScroll() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rhythm sections: cinematic reveal as each stacked panel enters
      gsap.utils.toArray<HTMLElement>(".rhythm-section").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, autoAlpha: 0.6 },
          {
            y: 0,
            autoAlpha: 1,
            ease: "power3.out",
            duration: 1.1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Reveal utility
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: (i % 4) * 0.08,
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".gsap-fade").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".gsap-scale").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" },
        });
      });

      // Parallax elements
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.2");
        gsap.to(el, {
          yPercent: -speed * 40,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    // Recalculate after images/fonts load
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);
}
