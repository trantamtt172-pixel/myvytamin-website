export type Locale = "de" | "en";

export function text(locale: Locale, german: string, english: string) {
  return locale === "en" ? english : german;
}

export function localePath(locale: Locale, path = "/") {
  if (locale === "en") return path === "/" ? "/en" : `/en${path}`;
  return path;
}
