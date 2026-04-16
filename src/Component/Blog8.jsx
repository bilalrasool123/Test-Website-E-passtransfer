/* eslint-disable no-irregular-whitespace */
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import passtransferanleitung from "../../public/blog8.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blogs8 = () => {
  return (
    <>
      <Helmet>
        <title>
          So funktioniert E-Passtransfer: Schritt-für-Schritt-Anleitung
        </title>
        <meta
          name="description"
          content="Erfahren Sie, wie E-Passtransfer die sichere digitale Passbildübertragung vereinfacht."
        />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        {/* Blog Header */}
        <div className="md:flex md:items-center md:gap-8 mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={passtransferanleitung}
              alt="So funktioniert E-Passtransfer: Schritt-für-Schritt-Anleitung für Fotograf:innen"
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              So funktioniert E-Passtransfer: Schritt-für-Schritt-Anleitung für
              Fotograf:innen
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
          <h2 className="text-2xl font-semibold mb-4">Warum das wichtig ist</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Ab Mai 2025 dürfen Passbilder in Deutschland nur noch digital
              eingereicht werden.
            </li>
            <li>
              Gedruckte oder selbst erstellte Fotos werden nicht mehr
              akzeptiert.
            </li>
            <li>
              Mit E-Passtransfer erfüllen Fotostudios diese gesetzliche Vorgabe
              schnell, sicher und vollständig konform.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Der Ablauf in 6 Schritten
          </h2>
          <ol className="list-decimal ml-6 space-y-4">
            <li className="font-semibold">
              Zertifizierte Fotograf:innen finden
            </li>
            <p>
              Kund:innen suchen über das offizielle E-Passtransfer-Verzeichnis
              ein zertifiziertes Fotostudio.
            </p>
            <p>Nur zugelassene Profis dürfen diesen Service anbieten.</p>

            <li className="font-semibold">Biometrisches Foto aufnehmen</li>
            <p>
              Sie erstellen das Foto nach biometrischen Vorgaben. Es ändert sich
              nichts an Ihrem Set-up und Ihrer Technik. Der Tagesablauf wird
              nicht beeinträchtigt.
            </p>

            <li className="font-semibold">Prüfen und optimieren</li>
            <p>
              Das Bild wird – wie gewohnt – zugeschnitten, ausgerichtet und auf
              Konformität mit ICAO-, ISO- und deutschen Standards geprüft.
            </p>

            <li className="font-semibold">QR-Code generieren</li>
            <p>
              Ein sicherer, individueller QR-Code wird von der
              E-Passtransfer-Software erstellt, ausgedruckt und an die
              Kund:innen übergeben – zur Online-Antragstellung für Pass oder
              Ausweis.
            </p>

            <li className="font-semibold">Sicherer Abruf durch Behörden</li>
            <p>
              Behördensysteme wie HSA oder AKDB scannen den QR-Code und laden
              das Foto direkt aus der verschlüsselten Cloud herunter.
            </p>

            <li className="font-semibold">
              Verschlüsselter Upload & sichere Speicherung
            </li>
            <p>
              Alle Fotos werden gemäß BSI TR-03170-Standard verschlüsselt in die
              Cloud übertragen und bleiben dort sechs Monate lang abrufbar.
            </p>
          </ol>

          <h2 className="text-2xl font-semibold mb-4">
            Die wichtigsten Funktionen & Vorteile
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Echtzeitübertragung in die sichere Cloud</li>
            <li>Sofortiger Zugriff durch Behörden</li>
            <li>Nutzung auf jedem Gerät – unabhängig vom Studio-Standort</li>
            <li>
              Transparente Lizenzierung: 0 € für die Software – Uploads kosten
              nur 0,75 € pauschal
            </li>
            <li>
              Serien-Uploads: Effiziente Benutzeroberfläche für Studios mit
              hohem Volumen
            </li>
            <li>
              Inklusive Tools: Geeignet für Babys, Senioren und Menschen mit
              Einschränkungen
            </li>
            {/* <li>
              API-Schnittstellen: Nahtlose Integration mit CRM, Kassen, Druckern
              oder Terminals
            </li> */}
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Ihre Vorteile als Fotograf:in
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Gesetzeskonformität garantiert: Keine Ablehnungen – alles wie
              gehabt, lediglich die Übertragung ist digital
            </li>
            <li>
              Sicher & vertrauenswürdig: Vollständig verschlüsselte Übertragung
              und Speicherung
            </li>
            <li>
              Flexible Nutzung: Ein Bild kann für Ausweis, Visum oder Pass
              mehrfach verwendet werden – sechs Monate lang
            </li>
            <li>
              Zeitersparnis: Fotos von überall aus verarbeiten und hochladen –
              kein lokaler PC nötig
            </li>
            <li>
              Deutschlandweiter Zugriff: Jede Behörde kann das Foto per QR-Code
              abrufen
            </li>
            <li>
              Professioneller Vorsprung: Nur zertifizierte Studios dürfen diesen
              digitalen Service anbieten
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Klare Preisstruktur</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Studio-Lizenz: 0 € (Vollversion der Software)</li>
            <li>Sichere Uploads: 0,75 € pro Foto</li>
            <li>Keine Vertragsbindung – Plattform unverbindlich testen</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Bereit loszulegen?</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Studio registrieren</li>
            <li>Dashboard einrichten</li>
            <li>Sichere, gesetzeskonforme Fotos übermitteln</li>
          </ul>

          <div className="bg-yellow-100 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              Jetzt kostenlos starten – ohne Risiko, ohne Gebühren!
            </h2>
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

export default Blogs8;
