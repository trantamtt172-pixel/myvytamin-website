import { InquiryForm } from "@/components/forms/InquiryForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/products";

export function CateringSection() {
  return (
    <section className="section catering-section" id="catering">
      <div>
        <SectionHeading
          eyebrow="MADE FOR YOUR MOMENT"
          title="Dein Anlass. Dein Geschmack. Dein Myvytamin-Moment."
        >
          Individuelle Torten, Kuchen nach Wunsch und Matcha-Catering für
          Feiern, Hochzeiten, Geburtstage, Firmenveranstaltungen und
          Pop-up-Kooperationen.
        </SectionHeading>
        <div className="service-list">
          {services.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </div>
      <InquiryForm />
    </section>
  );
}
