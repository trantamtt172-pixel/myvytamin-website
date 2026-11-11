import { InquiryForm } from "@/components/forms/InquiryForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/products";
import { type Locale, text } from "@/data/locale";

const englishServices = ["Custom cakes", "Cakes made to order", "Matcha catering", "Private celebrations & weddings", "Corporate events", "Pop-up collaborations"];

export function CateringSection({ locale = "de" }: { locale?: Locale }) {
  return (
    <section className="section catering-section" id="catering">
      <div>
        <SectionHeading
          eyebrow="MADE FOR YOUR MOMENT"
          title={text(locale, "Dein Anlass. Dein Geschmack. Dein Myvytamin-Moment.", "Your occasion. Your taste. Your Myvytamin moment.")}
        >
          {text(locale, "Individuelle Torten, Kuchen nach Wunsch und Matcha-Catering für Feiern, Hochzeiten, Geburtstage, Firmenveranstaltungen und Pop-up-Kooperationen.", "Custom cakes, made-to-order bakes and matcha catering for celebrations, weddings, birthdays, corporate events and pop-up collaborations.")}
        </SectionHeading>
        <div className="service-list">
          {services.map((service, index) => (
            <span key={service}>{locale === "en" ? englishServices[index] : service}</span>
          ))}
        </div>
      </div>
      <InquiryForm locale={locale} />
    </section>
  );
}
