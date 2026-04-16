/* eslint-disable no-irregular-whitespace */
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import preismodelltransparenzBild from "../assets/blog21.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blogs21 = () => {
  return (
    <>
      <Helmet>
        <title>
          E-Passtransfer: Keine Kontingente, keine Updatekosten – nur zahlen,
          wenn du überträgst
        </title>
        <meta
          name="description"
          content="Keine Cloudgebühren, keine Mitgliedschaft, keine Abo-Fallen: E-Passtransfer ist die transparente Lösung für Passbildübertragung 2025."
        />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        {/* Blog Header */}
        <div className="md:flex md:items-center md:gap-8 mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={preismodelltransparenzBild}
              alt="Keine Pakete, keine Fallstricke: E-Passtransfer ist fair. Punkt."
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              Keine Pakete, keine Fallstricke: E-Passtransfer ist fair. Punkt.
            </h1>
            <p className="text-gray-600 text-sm">
              Veröffentlicht am 20. Mai 2025 • Von E-passtransfer Team
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
            Warum kompliziert, wenn fair auch geht?
          </h2>
          <p>
            In einer Branche, in der viele Systeme mit Jahresverträgen,
            Update-Gebühren, Lizenzmodellen oder Vereinsmitgliedschaften
            arbeiten, bietet e-passtransfer genau das, was moderne Fotostudios
            wirklich brauchen: Ein transparentes, nachvollziehbares Preismodell
            – ohne Haken, ohne Vorkasse, ohne Bürokratie.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Was E-Passtransfer auszeichnet – im Klartext
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b font-semibold text-left">
                    Funktion/Modul
                  </th>
                  <th className="py-2 px-4 border-b font-semibold text-left">
                    E-Passtransfer
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Softwarekosten</td>
                  <td className="py-2 px-4 border-b">
                    0 € – keine Lizenz nötig
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Paketkontingente</td>
                  <td className="py-2 px-4 border-b">
                    Keine – nur zahlen, wenn du überträgst
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Cloudnutzung</td>
                  <td className="py-2 px-4 border-b">
                    0 € – keine Cloudgebühr
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Entwicklung</td>
                  <td className="py-2 px-4 border-b">Eigenes deutsches Team</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Infrastruktur</td>
                  <td className="py-2 px-4 border-b">
                    Eigene Cloud auf Telekom-Basis
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">
                    Mitgliedschaft / Vereinsbindung
                  </td>
                  <td className="py-2 px-4 border-b">Nicht erforderlich</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Nachweispflicht</td>
                  <td className="py-2 px-4 border-b">
                    Nur Nachweis über Fotografie
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">eID-Erstidentifikation</td>
                  <td className="py-2 px-4 border-b">
                    0,99 € einmalig pro Mitarbeitendem
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Pro Übertragung</td>
                  <td className="py-2 px-4 border-b">0,75 €</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Updategebühren</td>
                  <td className="py-2 px-4 border-b">
                    Keine – alle Funktionen inklusive
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            Ein Modell, das Studios verstehen – und lieben
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Keine Vorauspakete</li>
            <li>Keine Verpflichtungen</li>
            <li>Kein System mit versteckten Preisen</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Telekom Cloud. Deutsche Entwicklung. Maximaler Datenschutz.
          </h2>
          <p>
            E-Passtransfer läuft auf eigener Infrastruktur in der Open Telekom
            Cloud, entwickelt und betrieben von einem deutschen Team –
            vollständig konform mit:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>TR-03170-1 & 2</li>
            <li>BSI-Vorgaben</li>
            <li>DSGVO-Richtlinien</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Echte Klarheit – statt falscher Flexibilität
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Keine Vertragslaufzeit</li>
            <li>Keine Einmalzahlung für Software</li>
            <li>Keine SEPA-Vorauszahlung</li>
            <li>Keine Abo-Modelle</li>
            <li>Keine Wartungskosten</li>
            <li>Keine Lizenzprotokolle mit Bindung</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Was bleibt?</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Ein QR-Code</li>
            <li>Ein Upload</li>
            <li>0,75 € je Übertragung</li>
            <li>
              0,99 € für die eID-Erstidentifikation (einmalig je Mitarbeitendem)
            </li>
          </ul>
          <p>Und das war&apos;s.</p>

          <div className="mt-6">
            <Link
              to="/Registrierung"
              className="inline-block px-6 py-3 bg-yellow-300 text-black rounded-lg font-semibold hover:bg-yellow-200 transition-colors"
            >
              Jetzt kostenlos registrieren
            </Link>
            <p className="mt-4">
              Ohne Risiko. Ohne Vorleistung. Ohne Verpflichtung.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #epasstransfer
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #passbildpflicht
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #tr03170
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #keinepakete
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #keinecloudgebühr
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #telekomcloud
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #fairpreise
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #datensouveränität
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #fotostudio2025
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              #biometrieübertragung
            </span>
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

export default Blogs21;
