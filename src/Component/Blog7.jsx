/* eslint-disable no-irregular-whitespace */
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import digitalePassfotosabMai2025 from "../../public/blog7.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blogs7 = () => {
  return (
    <>
      {" "}
      <Helmet>
        {" "}
        <title>Deutschlands E-Passfoto-Gesetz 2025 erklärt</title>{" "}
        <meta
          name="description"
          content="Erfahren Sie alles über die neuen gesetzlichen Vorschriften für digitale Passfotos ab Mai 2025"
        />{" "}
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        {/* Blog Header */}
        <div className="md:flex md:items-center md:gap-8 mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={digitalePassfotosabMai2025}
              alt="Deutschlands E-Passfoto-Gesetz 2025 erklärt"
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              Erfahren Sie alles über die neuen gesetzlichen Vorschriften für
              digitale Passfotos ab Mai 2025
            </h1>
            <p className="text-gray-600 text-sm">
              Veröffentlicht am 08. Mai 2025 • Von E-passtransfer Team
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img
                src="/favicon.jpg"
                alt="E-passtransfer Team"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-base">E-passtransfer Team</p>
                <p className="text-gray-500 text-sm">e-passtransfer GmbH</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4">
            Was Fotograf:innen wissen müssen
          </h2>
          <h3 className="text-xl font-semibold mb-4">
            Was hat sich am 1. Mai 2025 geändert?
          </h3>
          <p>Deutschlands aktualisierte Passbildverordnung schreibt vor:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li> Nur biometrisch konforme Fotos werden akzeptiert</li>
            <li>
              Nur zertifizierte Fotograf:innen dürfen diese erstellen und
              übertragen
            </li>
            <li> Nur digitale Uploads über sichere Systeme sind zulässig</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">
            Was wird nicht mehr akzeptiert?
          </h3>
          <ul className="list-disc ml-6 space-y-2">
            <li> Gedruckte Passfotos (auch wenn ICAO-konform)</li>
            <li> Übermittlung per USB, CD oder E-Mail</li>
            <li> Selbstgemachte oder Fotokabinen-Fotos</li>
          </ul>
          <p>
            Wenn Ihr Studio weiterhin auf Ausdrucke oder Desktop-Tools setzt,
            werden Ihre Leistungen von Behörden und Kund:innen abgelehnt.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            E-Passtransfer: Die gesetzeskonforme Lösung ohne Zusatzkosten
          </h2>
          <p>
            E-Passtransfer ist eine cloudbasierte Plattform, die speziell für
            deutsche Fotograf:innen entwickelt wurde – ohne KI, ohne versteckte
            Gebühren und ohne komplizierte Technik.
          </p>
          <p>
            Mit E-Passtransfer erfüllen Sie alle gesetzlichen Anforderungen ab
            Mai 2025 – einfach, sicher und dauerhaft günstig.
          </p>
          <p>
            Ob Einzelunternehmer:in, Fotokette oder mobiler Dienstleister – mit
            E-Passtransfer passen Sie sich sofort an.
          </p>

          <h3 className="text-xl font-semibold mb-4"> Das erhalten Sie:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li> Zu 100 % konforme Foto-Übertragung nach TR-03170</li>
            <li> Verschlüsselte Uploads in die sichere Cloud</li>
            <li> Zugang von jedem Gerät – auch ohne Studio-PC</li>
            <li>
              QR-Code-Erzeugung für Kund:innen – für einfache Nutzung im Antrag
            </li>
            <li>
              Ein Foto kann für mehrere Dokumente verwendet werden – 6 Monate
              lang
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">Kosten:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Software: 0 € dauerhaft kostenlos</li>
            <li>Upload pro Bild: 0,75 € pauschal</li>
            <li>Keine Vertragsbindung</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Der 6-Schritte-Prozess zur digitalen Passbildkonformität
          </h2>
          <ol className="list-decimal ml-6 space-y-4">
            <li className="font-semibold">Foto aufnehmen</li>
            <p>
              Nutzen Sie Ihre vorhandene Ausrüstung – Kamera, Beleuchtung,
              Hintergrund.
            </p>

            <li className="font-semibold">Bild prüfen und freigeben</li>
            <p>
              Sie bestätigen die Bildqualität, schneiden zu und richten aus –
              wie bisher.
            </p>

            <li className="font-semibold">QR-Code erzeugen</li>
            <p>
              Die Software erstellt automatisch einen individuellen, sicheren
              QR-Code.
            </p>

            <li className="font-semibold">Bild verschlüsseln & hochladen</li>
            <p>
              Mit nur einem Klick übertragen Sie das Bild in die
              E-Passtransfer-Cloud.
            </p>

            <li className="font-semibold">QR-Code übergeben</li>
            <p>
              Ihre Kund:innen erhalten den QR-Code und reichen ihn bei der
              Behörde ein.
            </p>

            <li className="font-semibold">Behördenzugriff</li>
            <p>
              Behörden laden das Bild direkt aus der Cloud – ohne Ausdruck oder
              Dateiübermittlung.
            </p>
          </ol>

          <h2 className="text-2xl font-semibold mb-4">
            Warum Fotograf:innen zu E-Passtransfer wechseln
          </h2>
          <ol className="list-decimal ml-6 space-y-4">
            <li className="font-semibold">
              Keine KI nötig – Sie behalten die Kontrolle
            </li>
            <p>
              Sie prüfen das Bild wie gewohnt – die Software unterstützt Sie
              technisch.
            </p>

            <li className="font-semibold">Arbeiten von überall</li>
            <p>
              Keine Bindung an Studio-PCs – nutzen Sie die Plattform auch mobil.
            </p>

            <li className="font-semibold">Klare Kostenstruktur</li>
            <p>
              Keine Lizenzgebühren, keine Hardware notwendig – nur 0,75 € pro
              Transfer.
            </p>

            <li className="font-semibold">Zeitsparender Workflow</li>
            <p>
              Ein-Klick-Übertragung: Fotos werden direkt per Klick hochgeladen –
              ohne Drag & Drop, ohne komplizierte Menüs.
            </p>
            <p>
              Ideal für Fotostudios mit hohem Kundenaufkommen – schnell,
              effizient und benutzerfreundlich.
            </p>

            <li className="font-semibold">Rechtssicherheit garantiert</li>
            <p>
              Jeder Upload ist zu 100 % konform mit den Anforderungen nach BSI
              TR-03170.
            </p>
          </ol>

          <h2 className="text-2xl font-semibold mb-4">
            Für wen ist E-Passtransfer geeignet?
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li> Berufsfotograf:innen</li>
            <li> Fotostudio-Ketten</li>
            <li> Dienstleister für Botschaften & Behörden</li>
            <li> Mobile Passbildanbieter</li>
          </ul>
          <p className="font-semibold mt-4">Besonders geeignet, wenn Sie:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li> Gesetzeskonform ab dem 1. Mai 2025 arbeiten wollen</li>
            <li> Eine einfache, skalierbare Lösung suchen</li>
            <li> Überraschungen bei Kosten und Technik vermeiden möchten</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Abschluss-Checkliste: Ist Ihr Studio bereit?
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Unterstützt Ihr Workflow verschlüsselte Uploads?</li>
            <li>Können Sie QR-Codes erzeugen?</li>
            <li>Funktioniert alles auch mobil – ohne lokalen PC?</li>
            <li>Können Ihre Kund:innen ein Bild mehrfach nutzen?</li>
            <li>
              Haben Sie einen festen Preis pro Transfer – ohne Lizenzgebühren?
            </li>
          </ul>
          <p className="font-semibold mt-4">
            Wenn Sie eine dieser Fragen mit „Nein&quot; beantworten: Dann
            brauchen Sie E-Passtransfer.
          </p>

          <div className="bg-yellow-100 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              Bleiben Sie gesetzeskonform, flexibel und kostensicher.
            </h2>
            <p>
              Das Passbildgesetz hat sich geändert – und Ihr Studio sollte es
              auch.
            </p>
            <p className="mt-4 font-semibold">
              Jetzt kostenlos starten – ohne Risiko, ohne Gebühren!
            </p>
            <Link
              to="/Registrierung"
              className="inline-block mt-4 px-6 py-3 bg-yellow-300 text-black rounded-lg font-semibold hover:bg-yellow-200 transition-colors"
            >
              Jetzt registrieren
            </Link>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-8 flex flex-col space-y-6">
          <h3 className="text-xl font-semibold">Teilen Sie unsere Blogs</h3>
          <div className="flex flex-wrap gap-4 text-lg">
            <a
              href="https://www.facebook.com/profile.php?id=61575091301676"
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              <FaFacebook /> Facebook
            </a>
            <a
              href="https://www.twitter.com"
              className="text-blue-400 hover:underline flex items-center gap-2"
            >
              <FaTwitter /> Twitter
            </a>
            <a
              href="mailto:info@e-passtransfer.de"
              className="flex items-center gap-2 text-gray-600 hover:underline"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-blue-700 hover:underline flex items-center gap-2"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/e_passtransfer/?hl=en"
              className="text-pink-600 hover:underline flex items-center gap-2"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://www.tiktok.com/@e_passtransfer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:underline"
            >
              <FaTiktok /> TikTok
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs7;
