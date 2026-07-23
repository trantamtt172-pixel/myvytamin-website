import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartVideo } from "@/components/ui/SmartVideo";
import { media } from "@/data/media";
import { matchaProducts } from "@/data/products";

export function MatchaProducts() {
  return (
    <section className="section matcha-section" id="matcha">
      <SectionHeading eyebrow="FIND YOUR FLAVOR" title="Matcha, aber persönlich.">
        Cremig, fruchtig oder ganz bewusst anders - such dir den Matcha-Moment
        aus, der zu dir passt.
      </SectionHeading>
      <div className="product-layout">
        <div className="signature-video">
          <SmartVideo src={media.videos.ube} label="Ube Matcha Latte Signature" />
        </div>
        <div className="product-list">
          {matchaProducts.map((item) => (
            <article key={item.name} className={`product-card ${item.accent}`}>
              <span>{item.taste}</span>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
