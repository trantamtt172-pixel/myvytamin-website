import { sendInquiryEmail } from "@/lib/mail/inquiry-email";
import { inquirySchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const formData = await request.formData();
  const raw = Object.fromEntries(formData.entries());

  if (raw.website) {
    return Response.json({
      ok: true,
      message: "Danke! Deine Anfrage ist angekommen.",
    });
  }

  const parsed = inquirySchema.safeParse(raw);

  if (!parsed.success) {
    return Response.json(
      {
        ok: false,
        message: parsed.error.issues[0]?.message ?? "Bitte prüfe deine Eingaben.",
      },
      { status: 400 },
    );
  }

  const file = formData.get("inspiration");
  const attachments: { filename: string; content: Buffer }[] = [];

  if (file instanceof File && file.size > 0) {
    const allowed = ["image/png", "image/jpeg", "image/webp"];
    if (!allowed.includes(file.type) || file.size > 5 * 1024 * 1024) {
      return Response.json(
        {
          ok: false,
          message: "Inspirationsbilder dürfen nur PNG, JPG oder WebP bis 5 MB sein.",
        },
        { status: 400 },
      );
    }

    attachments.push({
      filename: file.name || "inspiration",
      content: Buffer.from(await file.arrayBuffer()),
    });
  }

  try {
    await sendInquiryEmail(parsed.data, attachments);
  } catch (error) {
    console.error("Inquiry delivery failed", error);
    return Response.json(
      {
        ok: false,
        message:
          "Deine Anfrage konnte gerade nicht gesendet werden. Bitte versuche es später erneut oder schreibe direkt an myvytamin@gmail.com.",
      },
      { status: 503 },
    );
  }

  return Response.json({
    ok: true,
    message: "Danke! Deine Anfrage ist angekommen. Wir melden uns so bald wie möglich persönlich bei dir.",
  });
}
