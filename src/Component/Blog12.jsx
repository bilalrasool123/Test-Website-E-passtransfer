/* eslint-disable no-irregular-whitespace */
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import blog12 from "../assets/blog12.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blogs12 = () => {
  return (
    <>
      <Helmet>
        <title>
          Vom Foto zum Pass: Wie QR-Codes die Übermittlung vereinfachen
        </title>
        <meta
          name="description"
          content="Erfahren Sie, wie QR-codebasierte Fotoübertragungen mit Behördensystemen funktionieren."
        />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        {/* Blog Header */}
        <div className="md:flex md:items-center md:gap-8 mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={blog12}
              alt="Vom Foto zum Pass: Wie QR-Codes die Übermittlung für Fotostudios vereinfachen"
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              Vom Foto zum Pass: Wie QR-Codes die Übermittlung für Fotostudios
              vereinfachen
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
          <p>
            In diesem Leitfaden erfahren Sie, wie QR-Code-basierte Workflows –
            wie sie von Plattformen wie E-Passtransfer angeboten werden –
            Fotograf:innen helfen, sich in der neuen Gesetzeslandschaft zu
            behaupten. Wir beleuchten die rechtlichen Hintergründe und zeigen,
            wie diese Innovation Sie ins Zentrum sicherer, skalierbarer
            Fotoübermittlungen stellt.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Warum der Wandel? Neue gesetzliche Anforderungen einfach erklärt
          </h2>
          <p>
            Seit dem 01. Mai 2025 dürfen in Deutschland keine Papier- oder
            Datenträgerbilder mehr für Ausweisdokumente verwendet werden. Der
            Grund: Schutz vor Bildmanipulation und sichere Identitätskontrolle.
          </p>
          <p>Was das für Fotostudios bedeutet:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Nur digitale Fotos von zertifizierten Studios werden akzeptiert
            </li>
            <li>Die Fotos müssen verschlüsselt übertragen werden</li>
            <li>Es gelten TR-03170, ICAO, ISO/IEC Standards</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            QR-Code: Der neue Standard in der Passbildübertragung
          </h2>
          <p>
            Die digitale Übergabe erfolgt nicht per E-Mail oder App, sondern
            ausschließlich über einen lokal im Studio ausgedruckten QR-Code –
            kein Smartphone, keine Installation nötig.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Fälschungssicher: QR-Code enthält eine verschlüsselte Bildreferenz
            </li>
            <li>
              Fotograf:innen behalten Kontrolle – keine automatische Ablehnung
              durch KI
            </li>
            <li>
              Barrierefrei: nutzbar für Babys, Senioren, Menschen mit
              Einschränkungen
            </li>
            <li> 6 Monate gültig: für Reisepass, Ausweis oder Visum</li>
          </ul>

          {/* <h2 className="text-2xl font-semibold mb-4">
            Studioalltag – neu gedacht, nicht neu erfunden
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b">Herausforderung</th>
                  <th className="py-2 px-4 border-b">Herkömmlich</th>
                  <th className="py-2 px-4 border-b">Mit E-Passtransfer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Bildprüfung</td>
                  <td className="py-2 px-4 border-b">
                    Manuell, fehleranfällig
                  </td>
                  <td className="py-2 px-4 border-b">
                    Studiointerne Kontrolle, kein KI-Zwang
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Softwarebindung</td>
                  <td className="py-2 px-4 border-b">
                    Nur lokal installierbar
                  </td>
                  <td className="py-2 px-4 border-b">
                    Browserbasiert, cloudfähig
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Technikkosten</td>
                  <td className="py-2 px-4 border-b">
                    Lizenz, Dongle, Scanner
                  </td>
                  <td className="py-2 px-4 border-b">
                    Keine Kosten für Software
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Übermittlung</td>
                  <td className="py-2 px-4 border-b">USB, CD, Ausdruck</td>
                  <td className="py-2 px-4 border-b">
                    QR-Ausdruck – sicher & anerkannt
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Kundenkontakt</td>
                  <td className="py-2 px-4 border-b">
                    oft erklärungsbedürftig
                  </td>
                  <td className="py-2 px-4 border-b">
                    verständlich durch klaren QR-Workflow
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}

          <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 italic my-6">
            „Seit wir E-Passtransfer nutzen, werden unsere Bilder nicht mehr
            abgelehnt, und keiner unserer Kunden braucht ein Smartphone.&quot;
            <footer className="mt-2 font-semibold">
              Studio Next Digital Media, NRW
            </footer>
          </blockquote>

          <h2 className="text-2xl font-semibold mb-4">
            Warum sich der Umstieg jetzt lohnt
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li> Gesetzeskonform ab Tag 1</li>
            <li> Kein Risiko durch veraltete Übertragungswege</li>
            <li> Einhaltung von TR-03170, ICAO, ISO</li>
            <li>
              Kein Lizenzmodell – nur 0,75 € pro erfolgreicher Übertragung
            </li>
            <li> Kein Drag & Drop – Upload per Klick</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Fazit: Vom Foto zum Pass – einfach, sicher, digital
          </h2>
          <p>
            Die neue Regelung ist kein Zukunftsprojekt – sie gilt jetzt. Mit
            E-Passtransfer sichern Sie sich einen Wettbewerbsvorteil, bieten
            Ihren Kund:innen Sicherheit, und bleiben rechtskonform – ohne
            technische Hürden.
          </p>
          <div className="mt-6">
            <Link
              to="/Registrierung"
              className="inline-block px-6 py-3 bg-yellow-300 text-black rounded-lg font-semibold hover:bg-yellow-200 transition-colors"
            >
              Jetzt registrieren & starten
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

export default Blogs12;
