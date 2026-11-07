import Image from "next/image";
import { affiliateProducts } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./AmazonFavorites.module.css";

export function AmazonFavorites() {
  return (
    <section className={`section ${styles.section}`} id="favorites">
      <SectionHeading eyebrow="MYVYTAMIN FAVORITEN" title="Für deine Kitchen-Corner.">
        Kleine Dinge, die wir für gemütliche Drinks und schöne Momente zuhause
        wirklich mögen.
      </SectionHeading>

      <div className={styles.grid}>
        {affiliateProducts.map((item) => (
          <article className={styles.card} key={item.href}>
            <div className={styles.image}>
              <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 720px) 100vw, 360px" />
            </div>
            <div className={styles.copy}>
              <span>AMAZON-FAVORIT</span>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
              <a className={styles.link} href={item.href} target="_blank" rel="sponsored noopener noreferrer">
                Bei Amazon ansehen <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className={styles.disclosure}>Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.</p>
    </section>
  );
}
