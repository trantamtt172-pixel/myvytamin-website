import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { media } from "@/data/media";
import { cookieProducts } from "@/data/products";
import { type Locale, text } from "@/data/locale";

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

const englishCopies = ["Matcha, white chocolate and fruity raspberry – soft-baked and homemade.", "Nutty brown butter and melting chocolate chips – golden outside, soft inside.", "Lemony, soft and finished with a delicate glaze – a fresh cookie for late summer."];

export function CookieProducts({ locale = "de" }: { locale?: Locale }) {
  return (
    <section className="section cookie-section">
      <SectionHeading eyebrow="BAKED WITH LOVE" title={text(locale, "Außen goldig. Innen richtig soft.", "Golden outside. Really soft inside.")}>
        {text(locale, "Hausgemacht, großzügig und am besten noch ein bisschen warm.", "Homemade, generous and best enjoyed while still a little warm.")}
      </SectionHeading>
      <div className="cookie-grid">
        {cookieProducts.map((item, index) => {
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
                <p>{locale === "en" ? englishCopies[index] : item.copy}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
