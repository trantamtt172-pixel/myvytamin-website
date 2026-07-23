import { brand } from "@/data/brand";
import { event } from "@/data/event";

export function IntroEventBar({ debug = false }: { debug?: boolean }) {
  return (
    <div className="intro-event-shell">
      {debug ? (
        <div className="debug-note">intro-03-event-card-open.png fehlt im Asset-Set</div>
      ) : null}
      <div className="intro-event-bar" aria-label="Myvytamin Pop-up Event">
        <span className="doodle heart-one" aria-hidden="true">
          ♡
        </span>
        <span className="doodle sparkle-one" aria-hidden="true">
          ✦
        </span>
        <span className="doodle flower-one" aria-hidden="true">
          ✿
        </span>
        <span className="doodle petal-one" aria-hidden="true">
          ❀
        </span>
        <span className="doodle leaf-one" aria-hidden="true">
          ♧
        </span>

        <div className="event-main">
          <p className="script-hook">Hey you!</p>
          <p className="event-kicker">Komm vorbei zu unserem</p>
          <h2>POP UP EVENT!</h2>
          <div className="event-pills" aria-label="Eventdaten">
            <span>22.08.2026</span>
            <span>{event.displayTime}</span>
          </div>
        </div>

        <div className="event-offer">
          <p className="expect-label">Was dich erwartet:</p>
          <div className="offer-item">
            <strong>Matcha</strong>
            <span>3 Signature Flavors</span>
          </div>
          <div className="offer-item">
            <strong>Cookies</strong>
            <span>2 hausgemachte Sorten</span>
          </div>
          <p className="event-love">100 % hausgemacht - mit Liebe für dich!</p>
        </div>

        <div className="event-brand">
          <span className="brand-mark">MV</span>
          <span>{brand.name}</span>
          <strong>MATCHA & MORE</strong>
          <div className="event-contact">
            <span>{brand.instagram}</span>
            <span>{brand.tiktok}</span>
            <span>{brand.email}</span>
            <span>
              {event.address.street}, {event.address.city}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
