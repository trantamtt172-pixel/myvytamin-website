import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <Link href="/">Zurück</Link>
      <h1>Datenschutz</h1>
      <p>
        Der finale Datenschutztext hängt von Hosting, Formularversand,
        Upload-Speicher und optionalem Analytics ab. Bis diese Anbieter
        feststehen, bleibt diese Seite ein Platzhalter für die rechtliche
        Ausarbeitung.
      </p>
    </main>
  );
}
