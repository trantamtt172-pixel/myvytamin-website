"use client";

import { useEffect, useRef } from "react";

type SmartVideoProps = {
  src: string;
  className?: string;
  label: string;
};

export function SmartVideo({ src, className = "", label }: SmartVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean };
    }).connection;

    if (reduceMotion || connection?.saveData) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55 && !document.hidden) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.55, 1] },
    );

    const onVisibility = () => {
      if (document.hidden) video.pause();
    };

    observer.observe(video);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={`smart-video ${className}`}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
