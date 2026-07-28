"use client";

import {
  type ElementType,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
} from "react";

type VideoTextProps = {
  src: string;
  poster?: string;
  children: ReactNode;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: "auto" | "metadata" | "none";
  fontSize?: string | number;
  fontWeight?: string | number;
  fontFamily?: string;
  lineHeight?: number;
  textAnchor?: "start" | "middle" | "end";
  textX?: string;
  as?: ElementType;
  id?: string;
  tabIndex?: number;
};

function escapeSvgText(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function subscribeToReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function VideoText({
  src,
  poster,
  children,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  preload = "auto",
  fontSize = 20,
  fontWeight = 700,
  fontFamily = "serif",
  lineHeight = 0.95,
  textAnchor = "middle",
  textX = "50%",
  as: Component = "div",
  id,
  tabIndex,
}: VideoTextProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const content = useMemo(
    () => children?.toString().replaceAll("\\n", "\n") ?? "",
    [children],
  );
  const lines = useMemo(() => content.split("\n"), [content]);

  const svgMask = useMemo(() => {
    const responsiveFontSize =
      typeof fontSize === "number" ? `${fontSize}vw` : fontSize;
    const firstOffset = -((lines.length - 1) * lineHeight) / 2;
    const tspans = lines
      .map(
        (line, index) =>
          `<tspan x='${textX}' dy='${index === 0 ? firstOffset : lineHeight}em'>${escapeSvgText(line)}</tspan>`,
      )
      .join("");

    return `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text x='${textX}' y='50%' font-size='${responsiveFontSize}' font-weight='${fontWeight}' text-anchor='${textAnchor}' dominant-baseline='middle' font-family='${fontFamily}'>${tspans}</text></svg>`;
  }, [fontFamily, fontSize, fontWeight, lineHeight, lines, textAnchor, textX]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduceMotion || !autoPlay) {
      video.pause();
      return;
    }

    const play = () => {
      if (!document.hidden) void video.play().catch(() => undefined);
    };
    const handleVisibility = () => {
      if (document.hidden) video.pause();
      else play();
    };

    play();
    video.addEventListener("canplay", play);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      video.removeEventListener("canplay", play);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [autoPlay, reduceMotion, src]);

  const dataUrlMask = `url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`;

  return (
    <Component
      id={id}
      tabIndex={tabIndex}
      className={`video-text ${className}`}
    >
      <span className="video-text-fallback" aria-hidden="true">
        {content}
      </span>
      <span
        className="video-text-mask"
        aria-hidden="true"
        style={{
          maskImage: dataUrlMask,
          WebkitMaskImage: dataUrlMask,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay && !reduceMotion}
          muted={muted}
          loop={loop}
          preload={preload}
          playsInline
        />
      </span>
      <span className="sr-only">{content.replaceAll("\n", " ")}</span>
    </Component>
  );
}
