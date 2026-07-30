import type { InquiryInput } from "@/lib/validation";

type Attachment = {
  filename: string;
  content: Buffer;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function valueOrDash(value?: string) {
  return value?.trim() || "-";
}

export function buildInquiryEmail(inquiry: InquiryInput) {
  const rows = [
    ["Name", inquiry.name],
    ["E-Mail", inquiry.email],
    ["Telefon", valueOrDash(inquiry.phone)],
    ["Leistung", inquiry.service],
    ["Eventdatum", valueOrDash(inquiry.eventDate)],
    ["Personenzahl", valueOrDash(inquiry.people)],
    ["Produkte", valueOrDash(inquiry.products)],
    ["Budget", valueOrDash(inquiry.budget)],
  ] as const;

  const text = [
    "Neue Anfrage über myvytamin-website.vercel.app",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Nachricht:",
    inquiry.message,
  ].join("\n");

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><th style="padding:8px 16px 8px 0;text-align:left;vertical-align:top;color:#576223">${escapeHtml(label)}</th><td style="padding:8px 0">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:680px;color:#26311f;line-height:1.6">
      <p style="color:#d96f7b;font-weight:700;letter-spacing:.08em">MYVYTAMIN WEBSITE</p>
      <h1 style="font-family:Georgia,serif;font-weight:500">Neue Anfrage von ${escapeHtml(inquiry.name)}</h1>
      <table style="width:100%;border-collapse:collapse">${htmlRows}</table>
      <h2 style="margin-top:28px;font-family:Georgia,serif;font-weight:500">Nachricht</h2>
      <p style="padding:18px;background:#fff9f4;border:1px solid #f0d9d4;border-radius:8px;white-space:pre-wrap">${escapeHtml(inquiry.message)}</p>
      <p style="margin-top:24px;color:#66705f">Antworte einfach auf diese E-Mail, um ${escapeHtml(inquiry.name)} zu erreichen.</p>
    </div>
  `;

  return {
    subject: `Neue Myvytamin-Anfrage: ${inquiry.service} von ${inquiry.name}`,
    text,
    html,
  };
}

export async function sendInquiryEmail(
  inquiry: InquiryInput,
  attachments: Attachment[],
) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient =
    process.env.INQUIRY_RECIPIENT_EMAIL ?? "myvytamin@gmail.com";
  const from =
    process.env.INQUIRY_FROM_EMAIL ??
    "Myvytamin Website <onboarding@resend.dev>";

  if (!apiKey) {
    throw new Error("RESEND_API_KEY ist noch nicht konfiguriert.");
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);
  const email = buildInquiryEmail(inquiry);
  const { error } = await resend.emails.send({
    from,
    to: [recipient],
    replyTo: inquiry.email,
    subject: email.subject,
    text: email.text,
    html: email.html,
    attachments,
  });

  if (error) {
    throw new Error(error.message);
  }
}
