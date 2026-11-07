import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { AmazonFavorites } from "@/components/sections/AmazonFavorites";

export const metadata: Metadata = {
  title: "Myvytamin Favoriten | Matcha & Kitchen-Corner",
  description: "Entdecke die ausgewählten Myvytamin-Favoriten für deine Kitchen-Corner.",
};

export default function FavoritesPage() {
  return (
    <>
      <Navigation />
      <main>
        <AmazonFavorites />
      </main>
      <Footer />
    </>
  );
}
