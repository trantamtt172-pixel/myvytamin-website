import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Bitte gib deinen Namen ein.").max(100),
  email: z.email("Bitte gib eine gültige E-Mail-Adresse ein."),
  phone: z.string().max(40).optional().or(z.literal("")),
  service: z.string().min(1, "Bitte wähle eine Leistung.").max(100),
  eventDate: z.string().optional().or(z.literal("")),
  people: z.string().max(20).optional().or(z.literal("")),
  products: z.string().max(500).optional().or(z.literal("")),
  budget: z.string().max(100).optional().or(z.literal("")),
  message: z.string().min(10, "Bitte beschreibe kurz, was du planst.").max(5_000),
  privacy: z.literal("on", {
    error: "Bitte bestätige den Datenschutz-Hinweis.",
  }),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
