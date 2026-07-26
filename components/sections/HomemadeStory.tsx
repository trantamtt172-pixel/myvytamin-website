import Image from "next/image";
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
      <div className="flyer-art">
        <Image
          src={media.images.flyer}
          alt="Myvytamin Pop-up Event Flyer mit Matcha Lattes, Cookies und QR-Code"
          width={1024}
          height={1536}
          sizes="(max-width: 900px) 90vw, 520px"
        />
      </div>
    </section>
  );
}
