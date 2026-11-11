import { IntroExperience } from "@/components/intro/IntroExperience";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { AmazonFavorites } from "@/components/sections/AmazonFavorites";
import { CateringSection } from "@/components/sections/CateringSection";
import { CookieProducts } from "@/components/sections/CookieProducts";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomemadeStory } from "@/components/sections/HomemadeStory";
import { MatchaProducts } from "@/components/sections/MatchaProducts";
import { PopupEventSection } from "@/components/sections/PopupEventSection";
import { SocialVideoWall } from "@/components/sections/SocialVideoWall";
import { VideoStorySection } from "@/components/sections/VideoStorySection";
import type { Locale } from "@/data/locale";

export function HomeContent({ locale }: { locale: Locale }) {
  return (
    <>
      {locale === "de" ? <IntroExperience /> : null}
      <Navigation locale={locale} />
      <main>
        <AmazonFavorites locale={locale} />
        <HeroSection locale={locale} />
        <PopupEventSection locale={locale} />
        <VideoStorySection locale={locale} />
        <MatchaProducts locale={locale} />
        <CookieProducts locale={locale} />
        <HomemadeStory locale={locale} />
        <SocialVideoWall locale={locale} />
        <CateringSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
