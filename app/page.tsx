import { IntroExperience } from "@/components/intro/IntroExperience";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { CateringSection } from "@/components/sections/CateringSection";
import { CookieProducts } from "@/components/sections/CookieProducts";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomemadeStory } from "@/components/sections/HomemadeStory";
import { MatchaProducts } from "@/components/sections/MatchaProducts";
import { PopupEventSection } from "@/components/sections/PopupEventSection";
import { SocialVideoWall } from "@/components/sections/SocialVideoWall";
import { VideoStorySection } from "@/components/sections/VideoStorySection";

export default function Home() {
  return (
    <>
      <IntroExperience />
      <Navigation />
      <main>
        <HeroSection />
        <VideoStorySection />
        <MatchaProducts />
        <CookieProducts />
        <HomemadeStory />
        <SocialVideoWall />
        <PopupEventSection />
        <CateringSection />
      </main>
      <Footer />
    </>
  );
}
