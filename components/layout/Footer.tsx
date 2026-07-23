import { brand } from "@/data/brand";
import { event } from "@/data/event";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <span className="footer-logo">MV</span>
        <h2>{brand.claim}</h2>
        <p>Matcha, Cookies, Cakes & Catering - hausgemacht in Pfullingen.</p>
      </div>
      <div className="footer-links">
        <a href={brand.instagramUrl}>Instagram {brand.instagram}</a>
        <a href={brand.tiktokUrl}>TikTok {brand.tiktok}</a>
        <a href={`mailto:${brand.email}`}>{brand.email}</a>
        <span>
          {event.address.street}, {event.address.city}
        </span>
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
      </div>
    </footer>
  );
}
