import Image from "next/image";
import { brand } from "@/data/brand";
import { affiliateProducts } from "@/data/products";
import { type Locale, text } from "@/data/locale";
import { FloatingMatchaParticles } from "@/components/ui/FloatingMatchaParticles";
import styles from "./AmazonFavorites.module.css";

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
          <h2>{text(locale, "Favoriten für deine Kitchen-Corner.", "Favorites for your kitchen corner.")}</h2>
        </div>
        <p>{text(locale, "Direkt verlinkt, damit du meine Matcha- und Coffee-Favoriten ohne Suchen findest.", "Linked directly, so you can find my matcha and coffee favorites without searching.")}</p>
      </div>

      <div className={styles.grid}>
        {affiliateProducts.map((item, index) => (
          <article className={`${styles.card} ${index === 0 ? styles.featured : ""}`} key={item.href}>
            <div className={styles.image}>
              <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 720px) 100vw, 360px" />
            </div>
            <div className={styles.copy}>
              <span>{index === 0 ? text(locale, "EXKLUSIVER VORTEIL", "EXCLUSIVE PERK") : "MYVYTAMIN PICK"}</span>
              <h3>{locale === "en" ? englishAffiliateNames[index] ?? item.name : item.name}</h3>
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

const englishAffiliateNames = [
  "Nami Matcha – your matcha moment",
  "Creamy milk frother",
  "At-home coffee station",
  "Everyday ceremonial matcha",
  "Premium matcha – 50 g",
  "Glass cups with straws",
  "Sakura Matcha Tea Set",
  "Pastel Matcha Tea Set",
  "Ube powder for creative drinks",
  "Soft Green Matcha Tea Set",
  "XXL ice cube tray with lid",
] as const;
