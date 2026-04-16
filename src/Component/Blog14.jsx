/* eslint-disable no-irregular-whitespace */
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import SichereCloudUploadsbild from "../assets/blog14.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blogs14 = () => {
  return (
    <>
      <Helmet>
        <title>
          Sichere Cloud-Uploads: Wie E-Passtransfer Ihre Daten schützt
        </title>
        <meta
          name="description"
          content="E-Passtransfer sorgt für Ende-zu-Ende-Verschlüsselung und Datenschutz bei Passfotos."
        />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        {/* Blog Header */}
        <div className="md:flex md:items-center md:gap-8 mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={SichereCloudUploadsbild}
              alt="Sichere Cloud-Uploads: Wie E-Passtransfer Ihre Daten schützt"
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              Sichere Cloud-Uploads: Wie E-Passtransfer Ihre Daten schützt
            </h1>
            <p className="text-gray-600 text-sm">
              Veröffentlicht am 12. Mai 2025 • Von E-passtransfer Team
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
            Datensicherheit ist Pflicht – nicht optional
          </h2>
          <p>
            Wenn Sie ein professionelles Fotostudio führen, sind Datenschutz,
            Verschlüsselung und Gesetzeskonformität entscheidend.
          </p>
          <p>
            E-Passtransfer wurde speziell für die Anforderungen von
            Fotograf:innen entwickelt – ohne unnötige Technik, ohne App, ohne
            automatische Bildkontrolle.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            So funktioniert der sichere Cloud-Upload
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li> Ende-zu-Ende-Verschlüsselung nach BSI TR-03170</li>
            <li>
              Alle Bilddaten werden beim Upload vollständig verschlüsselt und
              fälschungssicher gespeichert – ohne Zwischenablage, ohne lokale
              Kopien.
            </li>
            <li> Keine Speicherung auf dem Gerät</li>
            <li>
              Bilder verbleiben nie unverschlüsselt auf Ihrem PC oder im
              Zwischenspeicher.
            </li>
            <li> Kein Versand per USB oder E-Mail</li>
            <li>
              Alles läuft direkt über die geschützte Verbindung mit dem
              Behördenportal – inklusive digitalem Nachweis.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            QR-Code: Gedruckt, nicht digital
          </h2>
          <p>
            Jede Fotosession erzeugt einen einmaligen QR-Code, der im Studio
            ausgedruckt wird. Kund:innen übergeben diesen persönlich bei der
            Behörde – kein Link, keine App, kein digitales Teilen notwendig.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li> 6 Monate gültig</li>
            <li> Behördlich anerkannt</li>
            <li> Keine Smartphonepflicht für Kund:innen</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Hosting & Infrastruktur
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Gehostet auf zertifizierten, DSGVO-konformen Servern in
              Deutschland
            </li>
            <li>Zugriff über Browser auf allen Geräten möglich</li>
            <li>Kein Installationszwang</li>
            <li>Unterstützt mehrere Nutzer:innen im Studio</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Warum die Änderungen ab Mai 2025 relevant sind
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b">Vergleich</th>
                  <th className="py-2 px-4 border-b">Früher: Klassisch</th>
                  <th className="py-2 px-4 border-b">Jetzt: E-Passtransfer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Übertragungsweg</td>
                  <td className="py-2 px-4 border-b">USB, E-Mail, Ausdruck</td>
                  <td className="py-2 px-4 border-b">
                    Geschützter Cloud-Upload
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Zulässigkeit</td>
                  <td className="py-2 px-4 border-b">Eingeschränkt</td>
                  <td className="py-2 px-4 border-b">Gesetzlich anerkannt</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Datenschutz</td>
                  <td className="py-2 px-4 border-b">Unterschiedlich</td>
                  <td className="py-2 px-4 border-b">BSI-konform</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Übermittlungsnachweis</td>
                  <td className="py-2 px-4 border-b">Fehlend</td>
                  <td className="py-2 px-4 border-b">Digital dokumentiert</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            Verlässlichkeit für Ihr Studio
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li> Keine automatische KI-Prüfung</li>
            <li> Keine biometrische Ablehnung durch Software</li>
            <li> Manuelle Bearbeitung im Studio wie gewohnt</li>
            <li> Kein Drag & Drop – Klick-Upload möglich</li>
            <li>
              Barrierefreie Lösung auch für Babys, Senior:innen, Menschen mit
              Einschränkungen
            </li>
          </ul>
          <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 italic my-6">
            „Wir arbeiten wie immer – nur die Übermittlung ist jetzt sicher &
            modern.&quot;
            <footer className="mt-2 font-semibold">Fotografenteam, Köln</footer>
          </blockquote>

          <h2 className="text-2xl font-semibold mb-4">Häufige Fragen</h2>
          <p className="font-semibold">Muss mein Kunde ein Smartphone haben?</p>
          <p>Nein – der QR-Code wird gedruckt übergeben.</p>
          <p className="font-semibold mt-4">
            Wie lange ist der QR-Code gültig?
          </p>
          <p>Bis zu 6 Monate – für Pass, Ausweis, Führerschein oder Visum.</p>
          {/* <p className="font-semibold mt-4">Muss ich etwas installieren?</p>
          <p>
            Nein – E-Passtransfer läuft im Browser, ohne App oder Zusatzgeräte.
          </p> */}

          <h2 className="text-2xl font-semibold mb-4">
            Fazit: Zukunftssicher, ohne Technikdruck
          </h2>
          <p>
            Mit E-Passtransfer erfüllen Sie alle Vorgaben – ohne Technikchaos,
            ohne unnötige Tools. Sie behalten die Kontrolle – Ihre Bilder
            bleiben geschützt – Ihre Kunden zufrieden.
          </p>
          <div className="mt-6">
            <Link
              to="/Registrierung"
              className="inline-block px-6 py-3 bg-yellow-300 text-black rounded-lg font-semibold hover:bg-yellow-200 transition-colors"
            >
              Jetzt kostenlos starten
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

export default Blogs14;
