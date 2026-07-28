import { SectionHeading } from "@/components/ui/SectionHeading";
import { cookieProducts } from "@/data/products";

export function CookieProducts() {
  return (
    <section className="section cookie-section">
      <SectionHeading eyebrow="BAKED WITH LOVE" title="Außen goldig. Innen richtig soft.">
        Hausgemacht, großzügig und am besten noch ein bisschen warm.
      </SectionHeading>
      <div className="cookie-grid">
        {cookieProducts.map((item) => (
          <article className="cookie-card" key={item.name}>
            <div className="cookie-visual" aria-hidden="true">
              <span>{item.badge}</span>
            </div>
            <h3>{item.name}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
