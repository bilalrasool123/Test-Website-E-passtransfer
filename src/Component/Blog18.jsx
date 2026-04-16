import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import DigitalePassbildpflichtgestartet from "../assets/blog18.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blogs18 = () => {
  return (
    <>
      <Helmet>
        <title>
          Digitale Passbilder 2025 – Warum Behörden noch blockieren &
          E-Passtransfer längst funktioniert
        </title>
        <meta
          name="description"
          content="Während bundesweit Behörden mit Störungen kämpfen, ist E-Passtransfer zu 100 % live. So sichern sich Fotostudios jetzt den Vorsprung."
        />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        {/* Blog Header */}
        <div className="md:flex md:items-center md:gap-8 mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={DigitalePassbildpflichtgestartet}
              alt="Digitale Passbildpflicht gestartet – doch viele Behörden sind offline. E-Passtransfer liefert jetzt schon."
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              Digitale Passbildpflicht gestartet – doch viele Behörden sind
              offline. E-Passtransfer liefert jetzt schon.
            </h1>
            <p className="text-gray-600 text-sm">
              Veröffentlicht am 19. Mai 2025 • Von E-passtransfer Team
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
            Die neue Passbildpflicht ist da – aber die Ämter sind nicht bereit
          </h2>
          <p>
            Seit dem 1. Mai 2025 ist es offiziell: Passbilder dürfen nur noch
            digital und verschlüsselt an Behörden übermittelt werden. Doch die
            Realität sieht anders aus: Zahlreiche Städte und Kommunen kämpfen
            mit technischen Ausfällen, ungepatchten Systemen und nicht
            eingerichteten Schnittstellen.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Potsdam akzeptiert vorübergehend wieder Papierfotos</li>
            <li>
              Heidelberg kann keine QR-Codes scannen – Terminals sind
              unausgepackt
            </li>
            <li>
              Kiel wartet auf einen Hotfix – Bilder können nicht abgerufen
              werden
            </li>
          </ul>
          <p>
            Der bundesweite Start ist offiziell – aber de facto sind viele
            Behörden offline.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            E-Passtransfer funktioniert. Überall. Jetzt.
          </h2>
          <p>
            Während Behörden melden „noch nicht einsatzbereit&quot;, läuft
            E-Passtransfer bereits in über hunderte Fotostudios im Echtbetrieb.
            Wir übermitteln QR-gesichert, datenschutzkonform und direkt an die
            Behörden – sobald diese empfangsbereit sind.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>TR-03170 zertifiziert</li>
            <li>Sichere Cloud-Uploads nach BSI-Standard</li>
            <li>QR-Code wird lokal gedruckt, nicht digital versendet</li>
            <li>Funktioniert ohne App, ohne Smartphone</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Fotostudios in der Warteschleife? Nicht mit E-Passtransfer.
          </h2>
          <blockquote className="border-l-4 border-yellow-300 pl-4 italic">
            „Die Stadt Kiel hat bestätigt, dass der Fehler bekannt ist, der Fix
            aber noch nicht installiert wurde. Bis dahin kann kein Bild
            abgerufen werden.&quot;
            <br />– Stadtverwaltung Kiel (Mail vom 16. Mai)
          </blockquote>
          <p>Was bedeutet das?</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Studios, die E-Passtransfer nutzen, können Bilder vorbereiten und
              hochladen.
            </li>
            <li>
              Sobald das Amt freigeschaltet ist, ruft es die Daten automatisiert
              über QR-Code ab.
            </li>
            <li>
              Kein Risiko, keine Ablehnung, keine Wartezeit für Kund:innen.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Warum diese Störungen kein Grund zum Warten sind
          </h2>
          <p>E-Passtransfer bietet:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Sicherheit auf höchstem Standard</li>
            <li>Kompatibilität mit AKDB, HSA, VOIS/MESO & eKOMM</li>
            <li>Volle Kontrolle für Fotograf:innen</li>
            <li>Eine Lösung, die funktioniert – jetzt.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Vorteile für Ihr Studio – auch bei Behördenverzug
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Sie arbeiten wie gewohnt – keine Umstellung notwendig</li>
            <li>
              Bilder werden DSGVO-konform übertragen – auch wenn das Amt erst
              später abrufen kann
            </li>
            <li>Kunden bekommen ihren QR-Code direkt mit</li>
            <li>Keine Daten auf USB-Stick, kein E-Mail-Risiko</li>
            <li>
              Volle Flexibilität für Babys, Senioren, Menschen mit
              Einschränkungen
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Fazit: Die Behörden brauchen noch – Ihre Kunden nicht.
          </h2>
          <p>
            Während viele kommunale Systeme noch auf Updates warten, können Sie
            heute starten. Mit E-Passtransfer sichern Sie sich den
            technologischen Vorsprung – unabhängig vom Tempo der Behörden.
          </p>
          <p>Jetzt registrieren & vorbereitet sein:</p>

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

export default Blogs18;
