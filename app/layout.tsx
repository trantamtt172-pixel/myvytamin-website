import type { Metadata } from "next";
import { Caveat, Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Myvytamin - Matcha, Cookies, Cakes & Catering in Pfullingen",
  description:
    "Hausgemachte Matcha Drinks, Cookies, individuelle Torten und Matcha-Catering von Myvytamin in Pfullingen. Entdecke das nächste Pop-up und sende deine Anfrage.",
  openGraph: {
    title: "Myvytamin - Good Matcha. Good Mood.",
    description:
      "Matcha, Cookies, Cakes & Catering - hausgemacht in Pfullingen.",
    images: ["/assets/images/original/myvytamin-flyer-logo-cakes.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${manrope.variable} ${fraunces.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
