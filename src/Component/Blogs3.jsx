import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import EPassTransfer from "../assets/blog3.jpg";
/* eslint-disable no-irregular-whitespace */
const Blogs3 = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      {/* Header Section */}
      <div className="md:flex md:items-center md:gap-8 mb-12">
        {/* Hero Image */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={EPassTransfer} // Replace with your actual image
            alt="E-PassTransfer Gebührenfrei"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>

        {/* Title and Author */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            05. Mai: Keine Lizenzgebühr mehr – E-PassTransfer ist jetzt komplett
            gebührenfrei nutzbar!
          </h1>
          <p className="text-gray-600 text-sm">
            Veröffentlicht am 05. Mai 2025 • Von Sina Acar
          </p>
          <div className="flex items-center gap-4 mt-4">
            <img
              src="/sina.jpg"
              alt="Raza Abbas"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-base">Sina Acar</p>
              <p className="text-gray-500 text-sm">
                Leitung, e-passtransfer GmbH Ansprechpartnerin für Fotostudios
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          <strong>Wir hören zu. Und wir handeln.</strong>
        </p>

        <p>
          Aufgrund der zahlreichen Rückmeldungen und Wünsche unserer
          Fotostudio-Kund:innen verzichten wir ab sofort vollständig auf die
          ursprünglich vorgesehene Lizenzgebühr von 49 €.
        </p>

        <p> Das bedeutet konkret:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Alle, die E-PassTransfer bereits heruntergeladen haben, zahlen keine
            Lizenzgebühr.
          </li>
          <li>
            Alle neuen Nutzer:innen erhalten die Vollversion direkt ohne
            Berechnung.
          </li>
          <li>Wir stellen diese Gebühr auch rückwirkend nicht in Rechnung.</li>
        </ul>

        <p>
          <strong>Warum dieser Schritt?</strong>
        </p>

        <p>
          Viele Studios haben uns signalisiert, dass eine Einzelplatzlizenz für
          ihre Arbeitsabläufe nicht ausreicht. Mehrere Rechner, Arbeitsplätze
          oder mobile Geräte sind heute Standard.
        </p>

        <p>
          Deshalb haben wir uns entschlossen:
          <br />
          Echte Praxisnähe statt starrer Lizenzmodelle – keine Gebühren, keine
          Einschränkungen.
        </p>

        <p>
          <strong>Wir stehen an der Seite unserer Kunden</strong>
        </p>

        <p>
          E-PassTransfer soll nicht nur gesetzeskonform sein, sondern auch
          unkompliziert, fair und solidarisch. Gerade in der Anfangsphase des
          neuen Passbildgesetzes möchten wir Ihnen als verlässlicher Partner zur
          Seite stehen – ohne Lizenzhürden.
        </p>

        <p>
          <strong>Ab sofort ist E-PassTransfer:</strong>
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>frei installierbar auf beliebig vielen Geräten,</li>
          <li>voll nutzbar ohne Lizenzzahlung,</li>
          <li>schnell, sicher und sofort startklar.</li>
        </ul>

        <p className="mt-6 text-lg font-semibold text-blue-700">
          Jetzt registrieren und von der vollständigen Freischaltung
          profitieren:
        </p>
        <Link to="/Registrierung">
          <p className="text-blue-600 underline mt-3"> Zur Registrierung</p>
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
    </div>
  );
};

export default Blogs3;
