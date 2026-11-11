import Image from "next/image";
import { brand } from "@/data/brand";
import { affiliateProducts } from "@/data/products";
import styles from "./AmazonFavorites.module.css";

export function AmazonFavorites() {
  return (
    <section className={`section ${styles.section}`} id="favorites">
      <header className={styles.hero}>
        <div className={styles.brandMark} aria-hidden="true">
          <Image src="/assets/images/original/myvytamin-logo-large.png" alt="" fill sizes="72px" priority />
        </div>
        <div className={styles.heroCopy}>
          <p>SHOP MY SETUP</p>
          <h1>Meine Lieblings-<br />sachen für zuhause.</h1>
          <span>Für Matcha-Momente, Iced Drinks und eine schöne Kitchen-Corner.</span>
        </div>
        <a className={styles.tiktok} href={brand.tiktokUrl} target="_blank" rel="noopener noreferrer">
          <span aria-hidden="true">♪</span> Folge {brand.tiktok}
        </a>
      </header>

      <div className={styles.intro}>
        <div>
          <p className={styles.eyebrow}>MYVYTAMIN FAVORITEN</p>
          <h2>Alles, was ich wirklich benutze.</h2>
        </div>
        <p>Direkt verlinkt, damit du meine Matcha- und Coffee-Favoriten ohne Suchen findest.</p>
      </div>

      <div className={styles.grid}>
        {affiliateProducts.map((item, index) => (
          <article className={`${styles.card} ${index === 0 ? styles.featured : ""}`} key={item.href}>
            <div className={styles.image}>
              <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 720px) 100vw, 360px" />
            </div>
            <div className={styles.copy}>
              <span>{index === 0 ? "AKTUELLER FAVORIT" : "MYVYTAMIN PICK"}</span>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
              <a className={styles.link} href={item.href} target="_blank" rel="sponsored noopener noreferrer">
                Ansehen <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className={styles.disclosure}>Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.</p>
    </section>
  );
}
