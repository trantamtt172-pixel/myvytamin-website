import { brand } from "@/data/brand";
import { Button } from "@/components/ui/Button";

const links = [
  ["Matcha", "#matcha"],
  ["Homemade", "#homemade"],
  ["Cakes", "#cakes"],
  ["Pop-up", "#popup"],
  ["Catering", "#catering"],
] as const;

export function Navigation() {
  return (
    <header className="site-nav">
      <a className="nav-logo" href="#top" aria-label="Myvytamin Start">
        <span>MV</span>
        {brand.name}
      </a>
      <nav aria-label="Hauptnavigation">
        {links.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <Button href="#anfrage" variant="primary">
        Anfragen
      </Button>
    </header>
  );
}
