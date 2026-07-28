"use client";

import { useEffect, useRef } from "react";

type SmartVideoProps = {
  src: string;
  poster: string;
  className?: string;
  label: string;
  priority?: boolean;
};

export function SmartVideo({
  src,
  poster,
  className = "",
  label,
  priority = false,
}: SmartVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean };
    }).connection;
    const shouldAvoidPlayback = reduceMotion || Boolean(connection?.saveData);
    let isInView = false;
    let hasSource = priority;

    const loadSource = () => {
      if (hasSource || shouldAvoidPlayback) return;
      hasSource = true;
      video.src = src;
      video.load();
    };

    const syncPlayback = () => {
      if (shouldAvoidPlayback || document.hidden || !isInView) {
        video.pause();
        return;
      }

      loadSource();
      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        void video.play().catch(() => undefined);
      }
    };

    const preloadObserver = priority
      ? null
      : new IntersectionObserver(
          ([entry]) => {
            if (!entry?.isIntersecting) return;
            loadSource();
            preloadObserver?.disconnect();
          },
          { rootMargin: "600px 0px" },
        );

    const playbackObserver = new IntersectionObserver(
      ([entry]) => {
        isInView = Boolean(entry?.isIntersecting && entry.intersectionRatio >= 0.3);
        syncPlayback();
      },
      { threshold: [0, 0.3, 0.6] },
    );

    const onReady = () => syncPlayback();
    const onVisibility = () => syncPlayback();

    preloadObserver?.observe(video);
    playbackObserver.observe(video);
    video.addEventListener("canplay", onReady);
    video.addEventListener("loadeddata", onReady);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      preloadObserver?.disconnect();
      playbackObserver.disconnect();
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("loadeddata", onReady);
      document.removeEventListener("visibilitychange", onVisibility);
      video.pause();
    };
  }, [priority, src]);

  return (
    <video
      ref={ref}
      src={priority ? src : undefined}
      poster={poster}
      className={`smart-video ${className}`}
      muted
      loop
      playsInline
      autoPlay={priority}
      preload={priority ? "auto" : "none"}
      aria-label={label}
    />
  );
}
