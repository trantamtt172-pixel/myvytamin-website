"use client";

import { useRef } from "react";

const particles = ["✦", "✿", "·", "✦", "✧", "·", "✿", "✦", "·"];

export function FloatingMatchaParticles() {
  const ref = useRef<HTMLDivElement>(null);

  function move(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    ref.current?.style.setProperty("--particle-x", x.toFixed(2));
    ref.current?.style.setProperty("--particle-y", y.toFixed(2));
  }

  function reset() {
    ref.current?.style.setProperty("--particle-x", "0");
    ref.current?.style.setProperty("--particle-y", "0");
  }

  return (
    <div ref={ref} className="floating-particles" aria-hidden="true" onPointerMove={move} onPointerLeave={reset}>
      <span className="particle-orb" />
      {particles.map((symbol, index) => <i key={`${symbol}-${index}`}>{symbol}</i>)}
    </div>
  );
}
