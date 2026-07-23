import { Button } from "@/components/ui/Button";
import { SmartVideo } from "@/components/ui/SmartVideo";
import { brand } from "@/data/brand";
import { event } from "@/data/event";
import { media } from "@/data/media";

export function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <SmartVideo src={media.videos.hero} label="Matcha-Zubereitung im Hintergrund" />
      </div>
      <div className="hero-copy">
        <p className="eyebrow">MYVYTAMIN / MATCHA & MORE</p>
        <h1 id="hero-title" tabIndex={-1}>
          {brand.claim}
        </h1>
        <p>
          Persönlich entwickelt, frisch gemixt und mit Liebe hausgemacht - für
          deinen Matcha-Moment in Pfullingen.
        </p>
        <div className="hero-actions">
          <Button href="#popup">Pop-up entdecken</Button>
          <Button href="#anfrage" variant="secondary">
            Catering anfragen
          </Button>
        </div>
        <p className="microcopy">
          Nächstes Pop-up / 22.08.2026 / {event.address.city}
        </p>
      </div>
      <div className="hero-phone">
        <SmartVideo src={media.videos.hero} label="Myvytamin Matcha Video" />
      </div>
    </section>
  );
}
