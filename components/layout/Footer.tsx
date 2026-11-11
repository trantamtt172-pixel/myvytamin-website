import { brand } from "@/data/brand";
import { event } from "@/data/event";
import { type Locale, text } from "@/data/locale";

export function Footer({ locale = "de" }: { locale?: Locale }) {
  return (
    <footer className="footer">
      <div>
        <span className="footer-logo">MV</span>
        <h2>{brand.claim}</h2>
        <p>{text(locale, "Matcha, Cookies, Cakes & Catering - hausgemacht in Pfullingen.", "Matcha, cookies, cakes & catering - homemade in Pfullingen.")}</p>
      </div>
      <div className="footer-links">
        <a href={brand.instagramUrl}>Instagram {brand.instagram}</a>
        <a href={brand.tiktokUrl}>TikTok {brand.tiktok}</a>
        <a href={`mailto:${brand.email}`}>{brand.email}</a>
        <span>
          {event.address.street}, {event.address.city}
        </span>
        <a href="/impressum">{text(locale, "Impressum", "Legal notice")}</a>
        <a href="/datenschutz">{text(locale, "Datenschutz", "Privacy")}</a>
      </div>
    </footer>
  );
}
