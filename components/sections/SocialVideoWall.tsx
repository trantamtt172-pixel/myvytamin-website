import { SmartVideo } from "@/components/ui/SmartVideo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brand } from "@/data/brand";
import { media } from "@/data/media";
import { type Locale, text } from "@/data/locale";

const videos = [
  {
    src: media.videos.strawberryMatcha,
    poster: media.posters.strawberryMatcha,
    label: "Strawberry Iced Matcha Latte",
  },
  {
    src: media.videos.cookieBaking,
    poster: media.posters.cookieBaking,
    label: "Matcha-Cookies in der Backstube",
  },
  {
    src: media.videos.matchaCookieReveal,
    poster: media.posters.matchaCookieReveal,
    label: "Matcha-Cookies vor und nach dem Backen",
  },
  {
    src: media.videos.story,
    poster: media.posters.story,
    label: "Myvytamin Story",
  },
];

export function SocialVideoWall({ locale = "de" }: { locale?: Locale }) {
  return (
    <section className="section social-section">
      <SectionHeading eyebrow="BEHIND THE GOOD MOOD" title={text(locale, "Nicht nur ansehen. Mitfühlen.", "Don’t just watch. Feel it.")}>
        {text(locale, "Neue Rezepte, kleine Fails, schöne Swirls und alles dazwischen.", "New recipes, little fails, beautiful swirls and everything in between.")}
      </SectionHeading>
      <div className="social-wall">
        {videos.map((video, index) => (
          <div className={`social-tile social-tile-${index + 1}`} key={video.src}>
            <SmartVideo
              src={video.src}
              poster={video.poster}
              label={video.label}
            />
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
