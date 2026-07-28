import { FlyerLightbox } from "@/components/ui/FlyerLightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { media } from "@/data/media";

export function HomemadeStory() {
  return (
    <section className="section homemade-section" id="cakes">
      <div>
        <SectionHeading
          eyebrow="THE MYVYTAMIN WAY"
          title="Rezeptur von Myvytamin. 100 % hausgemacht."
        >
          Eigene Rezeptideen, sorgfältig ausgewählte Zutaten und ganz viel
          Gefühl fürs Detail. Myvytamin verbindet Matcha, Baking und
          persönliche Momente.
        </SectionHeading>
        <div className="principles">
          <span>Eigene Rezeptideen</span>
          <span>Von Hand gemacht</span>
          <span>Persönlich statt beliebig</span>
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
