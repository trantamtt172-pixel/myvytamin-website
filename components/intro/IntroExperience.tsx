"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { IntroEventBar } from "./IntroEventBar";
import { MatchaCupSplit } from "./MatchaCupSplit";
import { SakuraParticles } from "./SakuraParticles";
import { INTRO_STORAGE_KEY, shouldDebugIntro, shouldForceIntro } from "@/lib/intro-state";

export function IntroExperience() {
  const root = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [debug, setDebug] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const force = shouldForceIntro(window.location.search);
      setDebug(shouldDebugIntro(window.location.search));
      setShow(force || sessionStorage.getItem(INTRO_STORAGE_KEY) !== "1");
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!show || !root.current) return;
    const element = root.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.body.classList.add("intro-locked");

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(element);
      const isMobile = window.matchMedia("(max-width: 900px)").matches;
      const cupOpenDistance = isMobile ? 64 : 92;
      const shadowOpenDistance = isMobile ? 54 : 78;
      const cupExitDistance = isMobile ? 118 : 150;
      const barRevealStart = isMobile ? "inset(0 42% 0 42%)" : "inset(0 49% 0 49%)";
      const barStartScale = isMobile ? 0.98 : 0.94;
      const barExitScale = isMobile ? 1.08 : 1.22;
      const done = () => {
        sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
        document.body.classList.remove("intro-locked");
        setShow(false);
        window.requestAnimationFrame(() => {
          document.querySelector<HTMLElement>("#hero-title")?.focus();
        });
      };

      if (reduce) {
        gsap.timeline({ onComplete: done })
          .fromTo(q(".intro-root-inner"), { opacity: 0 }, { opacity: 1, duration: 0.15 })
          .to(q(".intro-root-inner"), { opacity: 0, duration: 0.2, delay: 1.2 });
        return;
      }

      gsap.timeline({ onComplete: done })
        .fromTo(q(".cup-stage"), { opacity: 0, scale: 0.9, rotate: -0.6 }, { opacity: 1, scale: 1, rotate: 0, duration: 0.9, ease: "power3.out" }, 0)
        .fromTo(q(".skip-intro"), { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.3 }, 1)
        .to(q(".cup-half"), { opacity: 1, duration: 0.01 }, 2.18)
        .to(q(".cup-full"), { opacity: 0, duration: 0.01 }, 2.18)
        .fromTo(q(".cup-seam"), { opacity: 0 }, { opacity: 0.7, duration: 0.1, yoyo: true, repeat: 1 }, 2.2)
        .to(q(".cup-left"), { xPercent: -cupOpenDistance, rotate: -0.35, duration: 1.85, ease: "power4.inOut" }, 2.32)
        .to(q(".cup-right"), { xPercent: cupOpenDistance, rotate: 0.35, duration: 1.85, ease: "power4.inOut" }, 2.32)
        .to(q(".cup-shadow-left"), { xPercent: -shadowOpenDistance, opacity: 0.42, duration: 1.85, ease: "power4.inOut" }, 2.32)
        .to(q(".cup-shadow-right"), { xPercent: shadowOpenDistance, opacity: 0.42, duration: 1.85, ease: "power4.inOut" }, 2.32)
        .fromTo(q(".intro-event-shell"), { clipPath: barRevealStart, opacity: 0, scaleX: barStartScale }, { clipPath: "inset(0 0% 0 0%)", opacity: 1, scaleX: 1, duration: 1.75, ease: "expo.inOut" }, 2.52)
        .fromTo(q(".intro-event-bar > *"), { y: 12, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.035, duration: 0.48, ease: "power2.out" }, 3.25)
        .to(q(".cup-left"), { xPercent: -cupExitDistance, opacity: 0, duration: 1.2, ease: "power3.inOut" }, 5.75)
        .to(q(".cup-right"), { xPercent: cupExitDistance, opacity: 0, duration: 1.2, ease: "power3.inOut" }, 5.75)
        .to(q(".intro-event-shell"), { scale: barExitScale, opacity: 0, duration: 1.1, ease: "power3.inOut" }, 5.85)
        .to(q(".intro-root-inner"), { opacity: 0, duration: 0.35 }, 6.85);
    }, element);

    return () => {
      document.body.classList.remove("intro-locked");
      ctx.revert();
    };
  }, [show]);

  if (!show) return null;

  const skip = () => {
    sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
    document.body.classList.remove("intro-locked");
    setShow(false);
  };

  return (
    <div className="intro-overlay" ref={root} role="dialog" aria-label="Myvytamin Intro">
      <div className="intro-root-inner">
        <SakuraParticles />
        <IntroEventBar debug={debug} />
        <MatchaCupSplit debug={debug} />
        <button className="skip-intro" type="button" onClick={skip}>
          Intro überspringen
        </button>
      </div>
    </div>
  );
}
