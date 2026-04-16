/* eslint-disable no-irregular-whitespace */
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import newblog23 from "../assets/blog38.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blogs38 = () => {
  return (
    <>
      <Helmet>
        <title>
          e-passtransfer Software-Update: Neue Funktionen für Passbildanbieter
        </title>
        <meta
          name="description"
          content="Das neue e-passtransfer-Update ist da: Passbild-Schablone, Bildbearbeitung, neues QR-Beiblatt-Design, 6er-Druckfunktion u. v. m. Jetzt informieren!"
        />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-12 text-gray-800">
        {/* Blog Header */}
        <div className="md:flex md:items-center md:gap-8 mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={newblog23}
              alt="Neues Update für e-passtransfer: Noch mehr Funktionen für Passbild-Profis"
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              Neues Update für e-passtransfer: Noch mehr Funktionen für
              Passbild-Profis
            </h1>
            <p className="text-gray-600 text-sm">
              Veröffentlicht am 22. July 2025 – von E-Passtransfer Team
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img
                src="/favicon.jpg"
                alt="e-passtransfer GmbH"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-base">e-passtransfer GmbH</p>
                <p className="text-gray-500 text-sm">Deutsche Cloud-Lösung</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Es ist so weit: Das neue e-passtransfer-Update ist da – mit starken
            neuen Funktionen für Fotostudios, Fotograf:innen und alle, die
            professionelle Passbilder anbieten.
          </p>

          <p>
            <strong>Verfügbar ab:</strong> Dienstag, 22.07.2025, um 19 Uhr
            <br />
            <strong>Installationszeit:</strong> ca. 30 Minuten
            <br />
            <strong>Download:</strong> Im Verwaltungsbereich auf{" "}
            <a
              href="https://www.e-passtransfer.de"
              className="text-blue-600 hover:underline"
            >
              www.e-passtransfer.de
            </a>
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Das ist neu – und das ist stark:
          </h2>

          <h3 className="text-xl font-semibold mb-2">Passbild-Schablone:</h3>
          <p>
            Zur perfekten Ausrichtung – aktivierbar über das Drei-Striche-Menü
            (oben links) unter „Passbild-Schablone&quot;.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Bildbearbeitung direkt in der Software:
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Helligkeit</li>
            <li>Kontrast</li>
            <li>Sättigung</li>
          </ul>
          <p>So geht&apos;s schneller, einfacher – und professioneller.</p>

          <h3 className="text-xl font-semibold mb-2">
            Vorschau des QR-Code-Beiblatts jetzt ohne Bezahlung:
          </h3>
          <p>
            Erst wenn das Bild erfolgreich geprüft und die eID-Verifikation
            abgeschlossen ist, erfolgt die Abrechnung.
            <br />
            Transparente Abrechnung. Fair. Sicher.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Neues Design für QR-Code-Beiblatt:
          </h3>
          <p>
            Noch schärfer. Noch klarer. Und: Kein e-passtransfer-Logo mehr!
            <br />
            Sie haben die komplette Fläche für Ihr eigenes Branding, Hinweise
            oder Logo.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            6er-Passbildset (3,5 × 4,5 cm):
          </h3>
          <p>
            Direkt aus der Software druckbar oder als Datei speicherbar –
            perfekt zur Übergabe an Kund:innen.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Hinweis für Mac-Nutzer:
          </h2>
          <p>
            Bitte deinstallieren Sie die bisherige Version vollständig, bevor
            Sie die neue installieren.
            <br />
            Login in den Verwaltungsbereich:{" "}
            <a
              href="https://www.e-passtransfer.de"
              className="text-blue-600 hover:underline"
            >
              www.e-passtransfer.de
            </a>
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Warum wir das Update NICHT während der Öffnungszeiten ausrollen
          </h2>
          <p>
            Wir wissen: Ihr Studioalltag ist voll.
            <br />
            Deshalb führen wir alle Updates ausschließlich sonntags oder abends
            durch – niemals während Ihrer Geschäftszeiten.
            <br />
            So stellen wir sicher, dass Sie ohne Unterbrechung weiterarbeiten
            können.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Warum e-passtransfer die Wahl von immer mehr Studios ist
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Keine Lizenzgebühr</li>
            <li>Kein Monatsabo</li>
            <li>Keine Cloudkosten</li>
            <li>Nur echte Übertragungen werden berechnet – Pay-per-Use</li>
          </ul>
          <p>
            Und das Beste: Immer mehr Kunden finden unsere Partnerstudios über
            Google.
            <br />
            Denn wir investieren gezielt in SEO & Sichtbarkeit, damit auch Ihre
            Stadt bald ganz oben steht.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Unser Support-Team ist für Sie da:
          </h2>
          <p>
            <strong>Telefon:</strong> 0431 979 944 52
            <br />
            <strong>E-Mail:</strong> registrierung@e-passtransfer.de
            <br />
            <strong>e-passtransfer GmbH</strong>
            <br />
            Schauenburgerstraße 116
            <br />
            24118 Kiel
          </p>

          <div className="mt-6">
            <Link
              to="/Registrierung"
              className="inline-block px-6 py-3 bg-yellow-300 text-black rounded-lg font-semibold hover:bg-yellow-200 transition-colors"
            >
              Jetzt registrieren und auf Nummer sicher gehen
            </Link>
            <br />
            <br />
            <a href="https://e-passtransfer.de" className="mt-4 text-blue-600">
              e-passtransfer.de
            </a>
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

export default Blogs38;
