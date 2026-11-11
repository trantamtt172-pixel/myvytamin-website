"use client";

import { useState } from "react";
import { type Locale, text } from "@/data/locale";

const services = [
  "Individuelle Torte",
  "Kuchen nach Wunsch",
  "Matcha-Catering",
  "Pop-up-Kooperation",
  "Andere Anfrage",
];

export function InquiryForm({ locale = "de" }: { locale?: Locale }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const body = new FormData(form);
    try {
      const response = await fetch("/api/inquiry", { method: "POST", body });
      const data = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.message ?? "Das hat gerade nicht geklappt.");
      }

      setStatus("success");
      setMessage(data.message ?? "Danke! Deine Anfrage ist angekommen.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : text(locale, "Das hat gerade nicht geklappt. Bitte versuche es später erneut.", "Something went wrong. Please try again later."),
      );
    }
  }

  return (
    <form className="inquiry-form" id="anfrage" onSubmit={submit}>
      <div className="form-intro">
        <p className="eyebrow">{text(locale, "ANFRAGE", "ENQUIRY")}</p>
        <h2>{text(locale, "Erzähl kurz, was du planst.", "Tell us a little about what you have in mind.")}</h2>
        <p>{text(locale, "Wir melden uns so bald wie möglich persönlich bei dir.", "We will get back to you personally as soon as possible.")}</p>
      </div>
      <label className="form-honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        Name
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        E-Mail
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        {text(locale, "Telefonnummer optional", "Phone number (optional)")}
        <input name="phone" autoComplete="tel" />
      </label>
      <label>
        {text(locale, "Gewünschte Leistung", "What do you need?")}
        <select name="service" required defaultValue="">
          <option value="" disabled>{text(locale, "Bitte wählen", "Please choose")}</option>
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>
      <label>
        {text(locale, "Eventdatum", "Event date")}
        <input name="eventDate" type="date" />
      </label>
      <label>
        {text(locale, "Personenzahl", "Number of guests")}
        <input name="people" inputMode="numeric" />
      </label>
      <label>
        {text(locale, "Gewünschte Produkte", "Products you would like")}
        <input name="products" placeholder={text(locale, "z. B. Ubbe Iced Matcha, Cookies, Torte", "e.g. Ube Iced Matcha, cookies, cake")} />
      </label>
      <label>
        {text(locale, "Budgetrahmen optional", "Budget (optional)")}
        <input name="budget" />
      </label>
      <label className="full">
        {text(locale, "Nachricht", "Message")}
        <textarea name="message" rows={5} required />
      </label>
      <label className="full">
        {text(locale, "Inspirationsbilder optional", "Inspiration images (optional)")}
        <input name="inspiration" type="file" accept="image/png,image/jpeg,image/webp" />
      </label>
      <label className="privacy full">
        <input name="privacy" type="checkbox" required />
        <span>{text(locale, "Ich bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage genutzt werden.", "I agree that my details may be used to process this enquiry.")}</span>
      </label>
      <button className="btn btn-primary full" type="submit" disabled={status === "sending"}>
        {status === "sending" ? text(locale, "Wird gesendet...", "Sending...") : text(locale, "Anfrage senden", "Send enquiry")}
      </button>
      {message ? <p className={`form-status ${status}`}>{message}</p> : null}
    </form>
  );
}
