"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type FlyerLightboxProps = {
  src: string;
  alt: string;
  className: string;
  sizes: string;
};

export function FlyerLightbox({
  src,
  alt,
  className,
  sizes,
}: FlyerLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`flyer-lightbox-trigger ${className}`}
        aria-label="Flyer vergrößern"
        aria-haspopup="dialog"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={1131}
          height={1600}
          sizes={sizes}
        />
        <span className="flyer-zoom-indicator" aria-hidden="true">
          +
        </span>
      </button>

      {isOpen &&
        createPortal(
          <div
            className="flyer-lightbox-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsOpen(false);
            }}
          >
            <div
              className="flyer-lightbox-dialog"
              role="dialog"
              aria-modal="true"
              aria-label="Vergrößerte Ansicht des Pop-up-Flyers"
            >
              <button
                ref={closeRef}
                type="button"
                className="flyer-lightbox-close"
                aria-label="Flyer schließen"
                title="Schließen"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
              <Image
                className="flyer-lightbox-image"
                src={src}
                alt={alt}
                width={1131}
                height={1600}
                sizes="(max-width: 900px) 96vw, 900px"
                priority
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
