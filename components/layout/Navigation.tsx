import Image from "next/image";
import Link from "next/link";
import { brand } from "@/data/brand";
import { localePath, type Locale, text } from "@/data/locale";
import { Button } from "@/components/ui/Button";

export function Navigation({ locale = "de" }: { locale?: Locale }) {
  const links = [
    ["Matcha", "/#matcha"],
    [text(locale, "Hausgemacht", "Homemade"), "/#homemade"],
    ["Cakes", "/#cakes"],
    [text(locale, "Favoriten", "Favorites"), "/favorites"],
    ["Pop-up", "/#popup"],
    ["Catering", "/#catering"],
  ] as const;
  return (
    <header className="site-nav">
      <Link className="nav-logo" href={localePath(locale)} aria-label={text(locale, "Zur Myvytamin Startseite", "Go to the Myvytamin homepage")}>
        <span className="nav-logo-mark" aria-hidden="true">
          <Image src="/assets/images/original/myvytamin-logo-large.png" alt="" fill sizes="42px" priority />
        </span>
        {brand.name}
      </Link>
      <nav aria-label="Hauptnavigation">
        {links.map(([label, href]) => (
          <a key={href} href={localePath(locale, href)}>
            {label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <div className="language-switch" aria-label={text(locale, "Sprache auswählen", "Choose language")}>
          <Link className={locale === "de" ? "active" : ""} href="/">DE</Link>
          <Link className={locale === "en" ? "active" : ""} href="/en">EN</Link>
        </div>
        <Button href="/#anfrage" variant="primary">{text(locale, "Anfragen", "Enquire")}</Button>
      </div>
    </header>
  );
}
