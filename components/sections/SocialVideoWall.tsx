import { SmartVideo } from "@/components/ui/SmartVideo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brand } from "@/data/brand";
import { media } from "@/data/media";

const videos = [media.videos.hero, media.videos.baking, media.videos.ube, media.videos.story];

export function SocialVideoWall() {
  return (
    <section className="section social-section">
      <SectionHeading eyebrow="BEHIND THE GOOD MOOD" title="Nicht nur ansehen. Mitfühlen.">
        Neue Rezepte, kleine Fails, schöne Swirls und alles dazwischen.
      </SectionHeading>
      <div className="social-wall">
        {videos.map((src, index) => (
          <div className={`social-tile social-tile-${index + 1}`} key={src}>
            <SmartVideo src={src} label={`Myvytamin Social Video ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="social-actions">
        <a className="btn btn-secondary" href={brand.tiktokUrl}>
          TikTok {brand.tiktok}
        </a>
        <a className="btn btn-secondary" href={brand.instagramUrl}>
          Instagram {brand.instagram}
        </a>
      </div>
    </section>
  );
}
