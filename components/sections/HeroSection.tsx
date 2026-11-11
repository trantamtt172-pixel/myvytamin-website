import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { event } from "@/data/event";
import { media } from "@/data/media";
import { type Locale, text } from "@/data/locale";

export function HeroSection({ locale = "de" }: { locale?: Locale }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <Image src={media.posters.hero} alt="" fill priority sizes="100vw" />
      </div>
      <div className="hero-copy">
        <p className="eyebrow">MYVYTAMIN / MATCHA & MORE</p>
        <h1 id="hero-title" className="hero-static-title">Good<br />Matcha.<br />Good<br />Mood.</h1>
        <p>
          {text(locale, "Persönlich entwickelt, frisch gemixt und mit Liebe hausgemacht - für deinen Matcha-Moment in Pfullingen.", "Personally created, freshly mixed and homemade with love – for your matcha moment in Pfullingen.")}
        </p>
        <div className="hero-actions">
          <Button href="#popup">{text(locale, "Pop-up entdecken", "Discover the pop-up")}</Button>
          <Button href="#anfrage" variant="secondary">
            {text(locale, "Catering anfragen", "Enquire about catering")}
          </Button>
        </div>
        <p className="microcopy">
          {text(locale, "Next pop-up", "Next pop-up")} / {event.shortDate} / {event.address.city}
        </p>
      </div>
      <div className="hero-phone">
        <Image src={media.posters.hero} alt={text(locale, "Myvytamin Matcha", "Myvytamin matcha")} fill priority sizes="(max-width: 900px) 78vw, 360px" />
      </div>
    </section>
  );
}
