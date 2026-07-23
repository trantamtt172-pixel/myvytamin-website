export const INTRO_STORAGE_KEY = "myvytamin:introSeen:v1";

export function shouldForceIntro(search: string) {
  return new URLSearchParams(search).get("intro") === "1";
}

export function shouldDebugIntro(search: string) {
  return new URLSearchParams(search).get("debugIntro") === "1";
}
