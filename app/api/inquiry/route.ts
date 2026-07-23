import { inquirySchema } from "@/lib/validation";

export async function POST(request: Request) {
  const formData = await request.formData();
  const raw = Object.fromEntries(formData.entries());
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
  }

  return Response.json({
    ok: true,
    message:
      "Danke! Deine Anfrage ist angekommen. Der Production-Mailadapter ist noch nicht verbunden.",
  });
}
