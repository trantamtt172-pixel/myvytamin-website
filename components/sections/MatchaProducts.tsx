import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartVideo } from "@/components/ui/SmartVideo";
import { media } from "@/data/media";
import { matchaProducts } from "@/data/products";
import { type Locale, text } from "@/data/locale";

const englishCopies = ["The clear Myvytamin classic: creamy, green, smooth and served over ice.", "Fruity, sweet and fresh – strawberry, mango and matcha over ice.", "Earthy matcha, creamy ube and a color you will not forget."];

export function MatchaProducts({ locale = "de" }: { locale?: Locale }) {
  return (
    <section className="section matcha-section" id="matcha">
      <SectionHeading eyebrow="FIND YOUR FLAVOR" title={text(locale, "Matcha, aber persönlich.", "Matcha, made personal.")}>
        {text(locale, "Cremig, fruchtig oder ganz bewusst anders - such dir den Matcha-Moment aus, der zu dir passt.", "Creamy, fruity or beautifully different – find the matcha moment that feels like you.")}
      </SectionHeading>
      <div className="product-layout">
        <div className="signature-video">
          <SmartVideo
            src={media.videos.ube}
            poster={media.posters.ube}
            label="Ube Iced Matcha Latte Signature"
          />
        </div>
        <div className="product-list">
          {matchaProducts.map((item, index) => (
            <article key={item.name} className={`product-card ${item.accent}`}>
              <span>{item.taste}</span>
              <h3>{item.name}</h3>
              <p>{locale === "en" ? englishCopies[index] : item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
