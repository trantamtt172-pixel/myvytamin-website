import { SmartVideo } from "@/components/ui/SmartVideo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { media } from "@/data/media";
import { type Locale, text } from "@/data/locale";

export function VideoStorySection({ locale = "de" }: { locale?: Locale }) {
  return (
    <section className="section video-story" id="homemade">
      <SectionHeading
        eyebrow="MADE IN MOTION"
        title={text(locale, "Vom ersten Whisk bis zum letzten Swirl.", "From the first whisk to the final swirl.")}
      >
        {text(locale, "Hier entsteht nichts am Fließband. Jeder Drink, jeder Cookie und jede Torte trägt ein kleines Stück Myvytamin.", "Nothing here is made on a production line. Every drink, cookie and cake carries a little piece of Myvytamin.")}
      </SectionHeading>
      <div className="story-grid">
        <div className="story-card tall">
          <SmartVideo
            src={media.videos.baking}
            poster={media.posters.baking}
            label="Hausgemachter Backprozess"
          />
          <span>Whisked fresh.</span>
        </div>
        <div className="story-card">
          <SmartVideo
            src={media.videos.ube}
            poster={media.posters.ube}
            label="Ubbe Iced Matcha Signature Close-up"
          />
          <span>Layered slowly.</span>
        </div>
        <div className="story-card">
          <SmartVideo
            src={media.videos.story}
            poster={media.posters.story}
            label="Persönliche Zubereitungsszene"
          />
          <span>Made to make your day.</span>
        </div>
      </div>
    </section>
  );
}
