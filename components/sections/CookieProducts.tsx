import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { media } from "@/data/media";
import { cookieProducts } from "@/data/products";

const cookieVisuals = {
  "Matcha White Chocolate Raspberry": {
    src: media.images.matchaCookies,
    crop: "matcha",
    alt: "Hausgemachte Matcha White Chocolate Raspberry Cookies",
  },
  "Brown Butter Chocolate Chip": {
    src: media.images.mixedCookies,
    crop: "chocolate",
    alt: "Hausgemachte Brown Butter Chocolate Chip Cookies",
  },
  "Lemon Dream Glazed Cookie": {
    src: media.images.mixedCookies,
    crop: "lemon",
    alt: "Hausgemachte Lemon Dream Glazed Cookies",
  },
} as const;

export function CookieProducts() {
  return (
    <section className="section cookie-section">
      <SectionHeading eyebrow="BAKED WITH LOVE" title="Außen goldig. Innen richtig soft.">
        Hausgemacht, großzügig und am besten noch ein bisschen warm.
      </SectionHeading>
      <div className="cookie-grid">
        {cookieProducts.map((item) => {
          const visual = cookieVisuals[item.name];

          return (
            <article className="cookie-card" key={item.name}>
              <div className={`cookie-photo cookie-photo-${visual.crop}`}>
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  fill
                  sizes="(max-width: 900px) 90vw, 30vw"
                />
              </div>
              <div className="cookie-card-copy">
                <span className="cookie-number" aria-hidden="true">{item.badge}</span>
                <h3>{item.name}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
