import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { event } from "@/data/event";
import { media } from "@/data/media";
import { cookieProducts, matchaProducts } from "@/data/products";

function getCountdownText() {
  const diff = new Date(event.startsAt).getTime() - Date.now();
  if (diff <= 0) return "Das Pop-up ist vorbei - folge @myvytamin für den nächsten Termin.";
  const days = Math.ceil(diff / 86_400_000);
  return `Noch ${days} Tage bis zum Pop-up`;
}

export function PopupEventSection() {
  return (
    <section className="section popup-section" id="popup">
      <div className="event-panel">
        <SectionHeading eyebrow="SAVE THE DATE" title="Matcha, Cookies & good mood in Pfullingen.">
          Komm vorbei, probiere die Myvytamin-Favoriten und finde deinen neuen
          Signature Drink.
        </SectionHeading>
        <div className="event-facts">
          <strong>{event.displayDate}</strong>
          <span>{event.displayTime}</span>
          <span>{event.address.street}, {event.address.city}</span>
          <em>{getCountdownText()}</em>
        </div>
        <div className="menu-mini">
          <div>
            <h3>Matcha</h3>
            {matchaProducts.map((item) => <span key={item.name}>{item.name}</span>)}
          </div>
          <div>
            <h3>Cookies</h3>
            {cookieProducts.map((item) => <span key={item.name}>{item.name}</span>)}
          </div>
        </div>
        <div className="event-actions">
          <a className="btn btn-primary" href="#anfrage">Komm vorbei</a>
          <button className="btn btn-ghost" type="button" disabled>Kalender folgt</button>
          <button className="btn btn-ghost" type="button" disabled>Route folgt</button>
        </div>
      </div>
      <div className="event-flyer">
        <Image src={media.images.flyer} alt="Myvytamin Event- und Angebotsflyer" width={900} height={1200} />
      </div>
    </section>
  );
}
