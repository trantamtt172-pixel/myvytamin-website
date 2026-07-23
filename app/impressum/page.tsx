import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <Link href="/">Zurück</Link>
      <h1>Impressum</h1>
      <p>
        Die vollständigen Impressumsdaten fehlen noch. Vor einer
        Veröffentlichung müssen Name, ladungsfähige Anschrift,
        Unternehmensform, Verantwortliche und gegebenenfalls steuerliche Angaben
        ergänzt werden.
      </p>
    </main>
  );
}
