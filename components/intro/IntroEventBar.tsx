import Image from "next/image";

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
            <span>{event.shortDate}</span>
            <span>{event.displayTime}</span>
          </div>
        </div>

        <div className="event-offer">
          <p className="expect-label">Was dich erwartet:</p>
          <div className="offer-item">
            <strong>Matcha</strong>
            <span>Classic · Strawberry · Ube</span>
          </div>
          <div className="offer-item">
            <strong>Cookies</strong>
            <span>2 hausgemachte Sorten</span>
          </div>
          <p className="event-love">100 % hausgemacht - mit Liebe für dich!</p>
        </div>

        <div className="event-brand">
          <Image
            className="event-logo-image"
            src="/assets/images/original/myvytamin-logo-large.png"
            alt={`${brand.name} Logo`}
            width={1254}
            height={1254}
            priority
          />
          <div className="event-contact">
            <span>Instagram & TikTok: {brand.instagram}</span>
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
