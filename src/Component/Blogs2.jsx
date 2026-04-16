/* eslint-disable no-irregular-whitespace */

import { Link } from "react-router-dom";
import img2 from "../assets/blog2.jpg";
import raza1 from "../assets/raza.jpg";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
const Blogs2 = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800 scroll-smooth">
      {/* Header Section */}
      <div className="md:flex md:items-center md:gap-8 mb-12">
        {/* Hero Image Left */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={img2}
            alt="Top 5 Security Tips for Managing ePass"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>

        {/* Title + Author Right */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            02. Mai: Das System läuft – Hunderte Passbild-Übertragungen
            erfolgreich umgesetzt
          </h1>
          <p className="text-gray-600 text-sm">
            Veröffentlicht am 2. Mai 2025 • Von E-passtransfer Team
          </p>
          {/* Author Info */}
          <div className="flex items-center gap-4 mt-4">
            <img
              src={raza1}
              alt="Raza Abbas"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-base">E-passtransfer Team</p>
              <p className="text-gray-500 text-sm">e-passtransfer GmbH</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Blog Content */}
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Am 01.05.2025 ist die neue gesetzliche Pflicht zur digitalen
          Passbildübertragung an Behörden offiziell in Kraft getreten – und wir
          freuen uns, heute sagen zu können:
          <br />
          <strong>Das System funktioniert. Und zwar einwandfrei.</strong>
        </p>

        <p>
          <strong>Was heute zählt: Zuverlässigkeit für Fotostudios</strong>
          <br />
          Zahlreiche Fotostudios in ganz Deutschland – vom Einzelunternehmer bis
          zur Kette – haben sich bereits für E-PassTransfer entschieden. Am
          ersten Tag wurden mehrere Hundert E-Passfotos erfolgreich und
          gesetzeskonform übertragen.
        </p>

        <p>
          Diese Rückmeldungen bestätigen:
          <ul className="list-disc ml-6 mt-2">
            <li>Die Software ist schnell, stabil und einfach zu bedienen.</li>
            <li>
              Die Umstellung gelingt nahtlos mit vorhandener Kamera- und
              Studiotechnik.
            </li>
            <li>
              Alle Übertragungen erfolgen sicher, DSGVO-konform und nach dem
              Standard TR-03170.
            </li>
          </ul>
        </p>

        <p>
          <strong>Warum finden immer mehr Fotografen den Weg zu uns?</strong>
          <br />
          Ganz einfach:
          <ul className="list-disc ml-6 mt-2">
            <li>Keine Softwarekosten oder Lizenzgebühren</li>
            <li>0,75 € pro erfolgreicher E-Passbildübertragung</li>
            <li>0,99 € einmalig pro Mitarbeiter für die Freischaltung</li>
          </ul>
        </p>

        <p>
          <strong>Sofort startklar – keine Hardware nötig</strong>
          <br />
          Wir sind kein Drittanbieter, sondern die Entwickler selbst – mit
          direktem Support für Ihr Fotostudio.
        </p>

        <p>
          <strong>Was bedeutet das für Sie?</strong>
          <br />
          Wenn Sie als Fotograf oder Fotostudio noch auf der Suche nach einer
          zuverlässigen Lösung für die neue Passbildpflicht sind: Jetzt ist der
          beste Zeitpunkt, um einzusteigen.
        </p>
        <Link to="/Registrierung">
          <p className="text-blue-600 mt-3 font-semibold underline">
            Hier registrieren und loslegen
          </p>
        </Link>
      </div>

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

      {/* Optional: Social Icons (if it's somewhere else, just confirm placement) */}
    </div>
  );
};

export default Blogs2;
