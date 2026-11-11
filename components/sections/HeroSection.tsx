import { Button } from "@/components/ui/Button";
import { SmartVideo } from "@/components/ui/SmartVideo";
import { VideoText } from "@/components/ui/VideoText";
import { event } from "@/data/event";
import { media } from "@/data/media";
import { type Locale, text } from "@/data/locale";

export function HeroSection({ locale = "de" }: { locale?: Locale }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <SmartVideo
          src={media.videos.hero}
          poster={media.posters.hero}
          label={text(locale, "Matcha-Zubereitung im Hintergrund", "Matcha preparation in the background")}
          priority
        />
      </div>
      <div className="hero-copy">
        <p className="eyebrow">MYVYTAMIN / MATCHA & MORE</p>
        <VideoText
          as="h1"
          id="hero-title"
          tabIndex={-1}
          src={media.videos.videoText}
          poster={media.posters.videoText}
          className="hero-video-title"
          fontSize={22}
          fontWeight={700}
          fontFamily="Georgia, serif"
          lineHeight={0.91}
          textAnchor="start"
          textX="2%"
        >
          {"Good\nMatcha.\nGood\nMood."}
        </VideoText>
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
        <SmartVideo
          src={media.videos.hero}
          poster={media.posters.hero}
          label="Myvytamin Matcha video"
          priority
        />
      </div>
    </section>
  );
}
