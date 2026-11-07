import Image from "next/image";
import Link from "next/link";
import { brand } from "@/data/brand";
import { Button } from "@/components/ui/Button";

const links = [
  ["Matcha", "/#matcha"],
  ["Homemade", "/#homemade"],
  ["Cakes", "/#cakes"],
  ["Favoriten", "/favorites"],
  ["Pop-up", "/#popup"],
  ["Catering", "/#catering"],
] as const;

export function Navigation() {
  return (
    <header className="site-nav">
      <Link className="nav-logo" href="/" aria-label="Zur Myvytamin Startseite">
        <span className="nav-logo-mark" aria-hidden="true">
          <Image src="/assets/images/original/myvytamin-logo-large.png" alt="" fill sizes="42px" priority />
        </span>
        {brand.name}
      </Link>
      <nav aria-label="Hauptnavigation">
        {links.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <Button href="/#anfrage" variant="primary">
        Anfragen
      </Button>
    </header>
  );
}
