import Image from "next/image";
import { brand } from "@/data/brand";
import { media } from "@/data/media";
import { affiliateProducts } from "@/data/products";
import styles from "./AmazonFavorites.module.css";

const socialMoments = [
  {
    label: "Strawberry Matcha",
    video: media.videos.strawberryMatcha,
    poster: media.posters.strawberryMatcha,
  },
  {
    label: "Matcha Cookies",
    video: media.videos.cookieBaking,
    poster: media.posters.cookieBaking,
  },
  {
    label: "Fresh Matcha Moment",
    video: media.videos.matchaCookieReveal,
    poster: media.posters.matchaCookieReveal,
  },
] as const;

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

      <section className={styles.socials} aria-label="Myvytamin Videos">
        <div className={styles.socialsHeading}>
          <div>
            <p className={styles.eyebrow}>SEEN ON SOCIALS</p>
            <h2>So sehen die Favorites in echt aus.</h2>
          </div>
          <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer">
            Auf Instagram ansehen <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className={styles.reels}>
          {socialMoments.map((moment) => (
            <article className={styles.reel} key={moment.video}>
              <video autoPlay loop muted playsInline preload="metadata" poster={moment.poster}>
                <source src={moment.video} type="video/mp4" />
              </video>
              <div>
                <span>MYVYTAMIN MOMENT</span>
                <strong>{moment.label}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className={styles.grid}>
        {affiliateProducts.map((item, index) => (
          <article className={`${styles.card} ${index === 0 ? styles.featured : ""}`} key={item.href}>
            <div className={styles.image}>
              <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 720px) 100vw, 360px" />
            </div>
            <div className={styles.copy}>
              <span>{index === 0 ? "EXKLUSIVER VORTEIL" : "MYVYTAMIN PICK"}</span>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
              {index === 0 && (
                <div className={styles.discountCode} aria-label="Rabattcode SILVIA15 für 15 Prozent auf die erste Bestellung">
                  <span>DEIN CODE</span>
                  <strong>SILVIA15</strong>
                  <em>15 % auf die erste Bestellung</em>
                </div>
              )}
              <a className={styles.link} href={item.href} target="_blank" rel="sponsored noopener noreferrer">
                Ansehen <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className={styles.disclosure}>Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Einzelne Empfehlungen führen direkt zu ausgewählten Marken.</p>
    </section>
  );
}
