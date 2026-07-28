import { SmartVideo } from "@/components/ui/SmartVideo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { media } from "@/data/media";

export function VideoStorySection() {
  return (
    <section className="section video-story" id="homemade">
      <SectionHeading
        eyebrow="MADE IN MOTION"
        title="Vom ersten Whisk bis zum letzten Swirl."
      >
        Hier entsteht nichts am Fließband. Jeder Drink, jeder Cookie und jede
        Torte trägt ein kleines Stück Myvytamin.
      </SectionHeading>
      <div className="story-grid">
        <div className="story-card tall">
          <SmartVideo src={media.videos.baking} label="Hausgemachter Backprozess" />
          <span>Whisked fresh.</span>
        </div>
        <div className="story-card">
          <SmartVideo src={media.videos.ube} label="Ubbe Iced Matcha Signature Close-up" />
          <span>Layered slowly.</span>
        </div>
        <div className="story-card">
          <SmartVideo src={media.videos.story} label="Persönliche Zubereitungsszene" />
          <span>Made to make your day.</span>
        </div>
      </div>
    </section>
  );
}
