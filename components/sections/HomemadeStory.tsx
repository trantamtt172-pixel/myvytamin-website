import { FlyerLightbox } from "@/components/ui/FlyerLightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { media } from "@/data/media";
import { type Locale, text } from "@/data/locale";

export function HomemadeStory({ locale = "de" }: { locale?: Locale }) {
  return (
    <section className="section homemade-section" id="cakes">
      <div>
        <SectionHeading
          eyebrow="THE MYVYTAMIN WAY"
          title={text(locale, "Rezeptur von Myvytamin. 100 % hausgemacht.", "Created by Myvytamin. 100% homemade.")}
        >
          {text(locale, "Eigene Rezeptideen, sorgfältig ausgewählte Zutaten und ganz viel Gefühl fürs Detail. Myvytamin verbindet Matcha, Baking und persönliche Momente.", "Original recipe ideas, carefully chosen ingredients and a love for every detail. Myvytamin brings together matcha, baking and personal moments.")}
        </SectionHeading>
        <div className="principles">
          <span>{text(locale, "Eigene Rezeptideen", "Original recipe ideas")}</span>
          <span>{text(locale, "Von Hand gemacht", "Made by hand")}</span>
          <span>{text(locale, "Persönlich statt beliebig", "Personal, never generic")}</span>
        </div>
      </div>
      <FlyerLightbox
        className="flyer-art"
        src={media.images.flyer}
        alt="Myvytamin Pop-up Event Flyer mit Iced Matcha Lattes, Cookies und Gewinnspiel"
        sizes="(max-width: 900px) 90vw, 520px"
      />
    </section>
  );
}
