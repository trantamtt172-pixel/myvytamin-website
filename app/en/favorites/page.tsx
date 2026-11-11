import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { AmazonFavorites } from "@/components/sections/AmazonFavorites";

export const metadata: Metadata = {
  title: "Myvytamin Favorites | Matcha & Home Coffee Setup",
  description: "Explore Myvytamin's selected favorites for your matcha and coffee corner.",
};

export default function EnglishFavoritesPage() {
  return (
    <>
      <Navigation locale="en" />
      <main className="favorites-main"><AmazonFavorites locale="en" /></main>
      <Footer locale="en" />
    </>
  );
}
