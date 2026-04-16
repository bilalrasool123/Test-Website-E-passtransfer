/* eslint-disable no-irregular-whitespace */
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import Passbildübertragung from "../assets/blog9.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blogs9 = () => {
  return (
    <>
      <Helmet>
        <title>
          Die wichtigsten Vorteile der digitalen Passbildübertragung für
          Fotograf:innen und Studios
        </title>
        <meta
          name="description"
          content="Entdecken Sie die Vorteile der digitalen Passbildübertragung für Ausweisdokumente."
        />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        {/* Blog Header */}
        <div className="md:flex md:items-center md:gap-8 mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={Passbildübertragung}
              alt="Die wichtigsten Vorteile der digitalen Passbildübertragung für Fotograf:innen und Studios"
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              Die wichtigsten Vorteile der digitalen Passbildübertragung für
              Fotograf:innen und Studios
            </h1>
            <p className="text-gray-600 text-sm">
              Veröffentlicht am 08. Mai 2025 • Von E-Passtransfer Team
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
            Warum das Thema jetzt entscheidend ist
          </h2>
          <p>
            Seit dem 01. Mai 2025 dürfen Passbilder in Deutschland nur noch
            digital und zertifiziert an Behörden übermittelt werden. Gedruckte
            Fotos, USB-Sticks oder einfache Uploads sind nicht mehr zulässig.
          </p>
          <p>
            Für professionelle Studios ist das keine Hürde, sondern eine klare
            Chance: rechtskonform arbeiten, Kund:innen nicht verlieren – und
            weiterhin mit dem bestehenden Workflow agieren.
          </p>
          <p>Genau hier setzt E-Passtransfer an.</p>

          <h2 className="text-2xl font-semibold mb-4">
            Was ist E-Passtransfer?
          </h2>
          <p>
            E-Passtransfer ist eine lokal installierte Softwarelösung für
            Fotostudios, die den neuen gesetzlichen Anforderungen entspricht.
            Die Aufnahme, Bearbeitung und Auswahl der Bilder bleiben wie gewohnt
            – einzig die Übertragung erfolgt digital und sicher an die
            zuständigen Behörden.
          </p>
          <p>
            Keine Cloud, keine automatische Biometrieprüfung, keine Änderungen
            im fotografischen Ablauf.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Ihre Vorteile mit E-Passtransfer
          </h2>

          <h3 className="text-xl font-semibold mb-4">
            Gesetzeskonforme Übermittlung ohne Cloud
          </h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Upload erfolgt manuell über die installierte Software</li>
            <li>
              Die Bilder werden ausschließlich verschlüsselt an die Behörde
              übertragen
            </li>
            <li>
              Keine Drittanbieter-Cloud, kein US-Hosting – ausschließlich
              Telekom-Infrastruktur in Deutschland
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">
            Kein Eingriff in Ihre Studioarbeit
          </h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Sie fotografieren, bearbeiten und wählen die Bilder wie bisher
            </li>
            <li>Keine KI, keine automatische Bildkontrolle</li>
            <li>
              Kein Drag-and-Drop-Zwang, keine Software-Vorgaben beim Shooting
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">
            Höchste Sicherheit für biometrische Daten
          </h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Die Übertragung erfolgt verschlüsselt gemäß TR-03170</li>
            <li>Keine lokale Speicherung nach Upload</li>
            <li>
              Behördlicher Zugriff ausschließlich über den vergebenen QR-Code
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">
            Ein System, das zu Ihrem Studio passt
          </h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Einfach zu installieren auf Windows oder macOS</li>
            <li>Keine neuen Geräte, keine Cloud-Accounts</li>
            <li>Einmaliger Einrichtungspreis von 49 € pro Arbeitsplatz</li>
            <li>
              Nur 0,75 € pro erfolgreicher Übertragung – ohne Zusatzkosten
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Warum jetzt umsteigen?
          </h2>
          <p>Fotostudios, die jetzt auf E-Passtransfer setzen, sind:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li> rechtlich auf der sicheren Seite</li>
            <li> unabhängig von Lizenzmodellen oder Anbieterbindungen</li>
            <li> bereit für alle Behördenanforderungen in Deutschland</li>
            <li> bei Kund:innen als zertifiziertes Studio sichtbar</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Fazit</h2>
          <p>
            E-Passtransfer verändert nicht, wie Sie fotografieren – sondern nur,
            wie Sie das fertige Bild rechtssicher an die Behörden übertragen.
            Keine komplizierten Schnittstellen, keine technische Umstellung –
            einfach installieren, nutzen und gesetzeskonform arbeiten.
          </p>
          <p>So einfach kann Pflicht auch Komfort bedeuten.</p>

          <p> Jetzt informieren und starten:</p>
          <a
            href="https://www.e-passtransfer.de"
            className=" text-blue-600 mt-6"
          >
            www.e-passtransfer.de
          </a>

          <div className="mt-6">
            <Link
              to="/Registrierung"
              className="inline-block px-6 py-3 bg-yellow-300 text-black rounded-lg font-semibold hover:bg-yellow-200 transition-colors"
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

export default Blogs9;
