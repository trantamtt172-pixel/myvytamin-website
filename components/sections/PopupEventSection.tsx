import Image from "next/image";
import { FlyerLightbox } from "@/components/ui/FlyerLightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { event } from "@/data/event";
import { media } from "@/data/media";
import { cookieProducts, matchaProducts } from "@/data/products";
import { type Locale, text } from "@/data/locale";

function getCountdownText(locale: Locale) {
  const diff = new Date(event.startsAt).getTime() - Date.now();
  if (diff <= 0) return text(locale, "Das Pop-up ist vorbei - folge @myvytamin für den nächsten Termin.", "The pop-up has ended – follow @myvytamin for the next date.");
  const days = Math.ceil(diff / 86_400_000);
  return locale === "en" ? `${days} days until the pop-up` : `Noch ${days} Tage bis zum Pop-up`;
}

export function PopupEventSection({ locale = "de" }: { locale?: Locale }) {
  return (
    <section className="section popup-section" id="popup">
      <div className="event-panel">
        <SectionHeading eyebrow="SAVE THE DATE" title="Matcha, Cookies & good mood in Pfullingen.">
          {text(locale, "Komm vorbei, genieße den Moment und probiere hausgemachte Iced Matcha Lattes und Cookies nach Myvytamin-Rezeptur. Alles 100 % hausgemacht mit Liebe.", "Come by, enjoy the moment and try homemade iced matcha lattes and cookies made with Myvytamin recipes. Everything is 100% homemade with love.")}
        </SectionHeading>
        <div className="event-facts">
          <strong>{event.displayDate}</strong>
          <span>{event.displayTime}</span>
          <span>{event.address.street}, {event.address.city}</span>
          <em>{getCountdownText(locale)}</em>
        </div>
        <div className="menu-mini">
          <div>
            <h3>Iced Matcha Lattes</h3>
            {matchaProducts.map((item) => <span key={item.name}>{item.name}</span>)}
          </div>
          <div>
            <h3>{text(locale, "3 hausgemachte Cookies", "3 homemade cookies")}</h3>
            {cookieProducts.map((item) => <span key={item.name}>{item.name}</span>)}
          </div>
        </div>
        <div className="giveaway-callout">
          <p className="eyebrow">{text(locale, "GEWINNSPIEL", "GIVEAWAY")}</p>
          <h3>{event.giveaway.title}</h3>
          <ol>
            {event.giveaway.steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>
        <figure className="giveaway-prize">
          <Image
            src={media.images.giveawayPrize}
            alt="Exklusives Matcha-Set des Myvytamin-Gewinnspiels"
            width={946}
            height={634}
            sizes="(max-width: 900px) 90vw, 620px"
          />
          <figcaption>{text(locale, "Dein Gewinn: ein exklusives Matcha-Set.", "Your prize: an exclusive matcha set.")}</figcaption>
        </figure>
        <div className="event-actions">
          <a className="btn btn-primary" href="#anfrage">{text(locale, "Komm vorbei", "Come by")}</a>
          <a className="btn btn-secondary" href="https://www.instagram.com/myvytamin" target="_blank" rel="noreferrer">
            {text(locale, "Auf Instagram folgen", "Follow on Instagram")}
          </a>
          <button className="btn btn-ghost" type="button" disabled>{text(locale, "Kalender folgt", "Calendar coming soon")}</button>
          <button className="btn btn-ghost" type="button" disabled>{text(locale, "Route folgt", "Directions coming soon")}</button>
        </div>
      </div>
      <FlyerLightbox
        className="event-flyer"
        src={media.images.flyer}
        alt="Myvytamin Pop-up Event Flyer mit Iced Matcha Lattes, Cookies und Gewinnspiel"
        sizes="(max-width: 900px) 90vw, 520px"
      />
    </section>
  );
}
