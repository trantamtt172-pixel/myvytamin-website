import Image from "next/image";
import { brand } from "@/data/brand";
import { media } from "@/data/media";
import { affiliateProducts } from "@/data/products";
import { type Locale, text } from "@/data/locale";
import { FloatingMatchaParticles } from "@/components/ui/FloatingMatchaParticles";
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

export function AmazonFavorites({ locale = "de" }: { locale?: Locale }) {
  return (
    <section className={`section ${styles.section}`} id="favorites">
      <header className={styles.hero}>
        <FloatingMatchaParticles />
        <div className={styles.brandMark} aria-hidden="true">
          <Image src="/assets/images/original/myvytamin-logo-large.png" alt="" fill sizes="72px" priority />
        </div>
        <div className={styles.heroCopy}>
          <p>SHOP MY SETUP</p>
          <h1>{locale === "en" ? <>My favorite things<br />for home.</> : <>Meine Lieblings-<br />sachen für zuhause.</>}</h1>
          <span>{text(locale, "Für Matcha-Momente, Iced Drinks und eine schöne Kitchen-Corner.", "For matcha moments, iced drinks and a beautiful kitchen corner.")}</span>
        </div>
        <a className={styles.tiktok} href={brand.tiktokUrl} target="_blank" rel="noopener noreferrer">
          <span aria-hidden="true">♪</span> {text(locale, "Folge", "Follow")} {brand.tiktok}
        </a>
      </header>

      <div className={styles.intro}>
        <div>
          <p className={styles.eyebrow}>MYVYTAMIN {text(locale, "FAVORITEN", "FAVORITES")}</p>
          <h2>{text(locale, "Alles, was ich wirklich benutze.", "Everything I really use.")}</h2>
        </div>
        <p>{text(locale, "Direkt verlinkt, damit du meine Matcha- und Coffee-Favoriten ohne Suchen findest.", "Linked directly, so you can find my matcha and coffee favorites without searching.")}</p>
      </div>

      <section className={styles.socials} aria-label={text(locale, "Myvytamin Videos", "Myvytamin videos")}>
        <div className={styles.socialsHeading}>
          <div>
            <p className={styles.eyebrow}>SEEN ON SOCIALS</p>
            <h2>{text(locale, "So sehen die Favorites in echt aus.", "This is what the favorites look like in real life.")}</h2>
          </div>
          <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer">
            {text(locale, "Auf Instagram ansehen", "View on Instagram")} <span aria-hidden="true">↗</span>
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
              <span>{index === 0 ? text(locale, "EXKLUSIVER VORTEIL", "EXCLUSIVE PERK") : "MYVYTAMIN PICK"}</span>
              <h3>{item.name}</h3>
              <p>{locale === "en" ? englishAffiliateCopy[index] ?? item.copy : item.copy}</p>
              {index === 0 && (
                <div className={styles.discountCode} aria-label={text(locale, "Rabattcode SILVIA15 für 15 Prozent auf die erste Bestellung", "Discount code SILVIA15 for 15 percent off your first order")}>
                  <span>{text(locale, "DEIN CODE", "YOUR CODE")}</span>
                  <strong>SILVIA15</strong>
                  <em>{text(locale, "15 % auf die erste Bestellung", "15% off your first order")}</em>
                </div>
              )}
              <a className={styles.link} href={item.href} target="_blank" rel="sponsored noopener noreferrer">
                {text(locale, "Ansehen", "View")} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className={styles.disclosure}>{text(locale, "Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Einzelne Empfehlungen führen direkt zu ausgewählten Marken.", "As an Amazon Associate I earn from qualifying purchases. Some recommendations link directly to selected brands.")}</p>
    </section>
  );
}

const englishAffiliateCopy = [
  "Premium matcha for your at-home moment. Use the code SILVIA15 at checkout.",
  "For hot or cold, creamy milk foam – perfect for cappuccino, latte and iced drinks.",
  "For creamy latte moments at home – our Amazon favorite for a coffee-shop feel in your own kitchen.",
  "Ceremonial grade matcha for your creamy at-home matcha moment.",
  "Ceremonial Japanese matcha in a practical 50 g tin.",
  "Aesthetic glasses for iced matcha, iced coffee and your favorite drinks.",
  "Ceramic set with a bamboo whisk and accessories for your matcha ritual.",
  "Matcha bowl with spout, bamboo whisk, holder, spoon and sieve.",
  "Naturally purple powder for creative drinks, smoothies and desserts.",
  "Matcha set with bowl, bamboo whisk, sieve, spoon and whisk holder.",
  "For large ice cubes and extra-cold iced matcha and coffee moments.",
] as const;
