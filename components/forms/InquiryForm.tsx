"use client";

import { useState } from "react";

const services = [
  "Individuelle Torte",
  "Kuchen nach Wunsch",
  "Matcha-Catering",
  "Pop-up-Kooperation",
  "Andere Anfrage",
];

export function InquiryForm() {
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
          : "Das hat gerade nicht geklappt. Bitte versuche es später erneut.",
      );
    }
  }

  return (
    <form className="inquiry-form" id="anfrage" onSubmit={submit}>
      <div className="form-intro">
        <p className="eyebrow">ANFRAGE</p>
        <h2>Erzähl kurz, was du planst.</h2>
        <p>Wir melden uns so bald wie möglich persönlich bei dir.</p>
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
        Telefonnummer optional
        <input name="phone" autoComplete="tel" />
      </label>
      <label>
        Gewünschte Leistung
        <select name="service" required defaultValue="">
          <option value="" disabled>Bitte wählen</option>
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>
      <label>
        Eventdatum
        <input name="eventDate" type="date" />
      </label>
      <label>
        Personenzahl
        <input name="people" inputMode="numeric" />
      </label>
      <label>
        Gewünschte Produkte
        <input name="products" placeholder="z. B. Ubbe Iced Matcha, Cookies, Torte" />
      </label>
      <label>
        Budgetrahmen optional
        <input name="budget" />
      </label>
      <label className="full">
        Nachricht
        <textarea name="message" rows={5} required />
      </label>
      <label className="full">
        Inspirationsbilder optional
        <input name="inspiration" type="file" accept="image/png,image/jpeg,image/webp" />
      </label>
      <label className="privacy full">
        <input name="privacy" type="checkbox" required />
        <span>Ich bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage genutzt werden.</span>
      </label>
      <button className="btn btn-primary full" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Wird gesendet..." : "Anfrage senden"}
      </button>
      {message ? <p className={`form-status ${status}`}>{message}</p> : null}
    </form>
  );
}
