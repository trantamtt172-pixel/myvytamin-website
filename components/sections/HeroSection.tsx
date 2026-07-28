import { Button } from "@/components/ui/Button";
import { SmartVideo } from "@/components/ui/SmartVideo";
import { VideoText } from "@/components/ui/VideoText";
import { event } from "@/data/event";
import { media } from "@/data/media";

export function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <SmartVideo
          src={media.videos.hero}
          poster={media.posters.hero}
          label="Matcha-Zubereitung im Hintergrund"
          priority
        />
      </div>
      <div className="hero-copy">
        <p className="eyebrow">MYVYTAMIN / MATCHA & MORE</p>
        <VideoText
          as="h1"
          id="hero-title"
          tabIndex={-1}
          src={media.videos.hero}
          poster={media.posters.hero}
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
          Nächstes Pop-up / {event.shortDate} / {event.address.city}
        </p>
      </div>
      <div className="hero-phone">
        <SmartVideo
          src={media.videos.hero}
          poster={media.posters.hero}
          label="Myvytamin Matcha Video"
          priority
        />
      </div>
    </section>
  );
}
