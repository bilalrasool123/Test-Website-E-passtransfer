/* eslint-disable no-irregular-whitespace */
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import preismodelltransparenzBild from "../assets/blog22.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blogs22 = () => {
  return (
    <>
      <Helmet>
        <title>
          Vorsicht US-Cloud: Wer heute AWS nutzt, gefährdet seine Kunden
        </title>
        <meta
          name="description"
          content="Warum der CLOUD Act eine reale Bedrohung für Fotostudios ist – und wie E-Passtransfer Ihre Daten schützt"
        />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        {/* Blog Header */}
        <div className="md:flex md:items-center md:gap-8 mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={preismodelltransparenzBild}
              alt="Vorsicht US-Cloud: Wer heute AWS nutzt, gefährdet seine Kunden"
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              Vorsicht US-Cloud: Wer heute AWS nutzt, gefährdet seine Kunden
            </h1>
            <p className="text-gray-600 text-sm">
              Veröffentlicht am 23. Mai 2025 • Von e-passtransfer GmbH
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
          <h2 className="text-2xl font-semibold mb-4">
            Warum der CLOUD Act eine reale Bedrohung für Fotostudios ist – und
            wie E-Passtransfer Ihre Daten schützt
          </h2>
          <p>
            Kundendaten in US-Händen? Genau das passiert gerade. Seit dem 1. Mai
            2025 müssen Passbilder in Deutschland ausschließlich digital und
            sicher an Behörden übermittelt werden. Doch während Sie alles
            richtig machen wollen, nutzen viele Anbieter weiterhin Amazon Web
            Services (AWS). Und das ist brandgefährlich.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Was ist das Problem mit AWS?
          </h2>
          <p>Die Amazon-Cloud unterliegt dem US CLOUD Act. Das heißt:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>US-Behörden können Zugriff auf Ihre Passbilder verlangen</li>
            <li>Auch wenn die Daten physisch in Frankfurt gespeichert sind</li>
            <li>🇺🇸 US-Gesetz geht vor. Nicht deutsches Recht</li>
          </ul>
          <p>
            Sie verlieren die Kontrolle – ohne es zu merken. Damit stehen
            hochsensible biometrische Daten – das Gesicht Ihrer Kund:innen –
            potenziell US-Behörden offen.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Fragen Sie sich selbst:
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Würden Ihre Kund:innen zustimmen, wenn sie das wüssten?</li>
            <li>Wollen Sie dafür verantwortlich sein?</li>
            <li>Was, wenn Datenschutzbehörden nachfragen?</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            E-Passtransfer: Die einzige Lösung ohne CLOUD Act
          </h2>
          <p>
            Wir haben uns bewusst gegen AWS entschieden. Unsere Software läuft
            ausschließlich in Deutschland, in der Open Telekom Cloud – auf
            zertifizierter, deutscher Infrastruktur.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li> Kein US-Zugriff</li>
            <li> Keine Weitergabe</li>
            <li> 100 % konform mit DSGVO, TR-03170, BSI-Vorgaben</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Warum das zählt:</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Behörden vertrauen nur zertifizierten Übertragungswegen</li>
            <li>Ihre Kund:innen erwarten Schutz ihrer Daten</li>
            <li>
              Abmahnungen, Bußgelder und Reputationsverlust drohen, wenn Sie
              nicht umsteigen
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Das müssen Sie wissen:
          </h2>
          <ul>
            <li>
              <strong>AWS:</strong>
            </li>
            <ul>
              <li>US-Gesetzeslage (CLOUD Act)</li>
              <li>Zugriff durch FBI, NSA & Co. nicht ausgeschlossen</li>
              <li>Serverstandort Deutschland = Trugschluss</li>
            </ul>
            <li>
              <strong>E-Passtransfer:</strong>
            </li>
            <ul>
              <li>Deutsche Telekom Cloud</li>
              <li>Kein US-Recht, kein Zugriff von außen</li>
              <li>Klarer Datenschutz, maximale Sicherheit</li>
            </ul>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Fazit: Wer AWS nutzt, spielt mit dem Vertrauen seiner Kunden.
          </h2>
          <p>
            Bei biometrischen Daten gibt es keine zweite Chance. Nur
            E-Passtransfer schützt Sie – und Ihre Kund:innen.
          </p>

          <div className="mt-6">
            <Link
              to="/Registrierung"
              className="inline-block px-6 py-3 bg-yellow-300 text-black rounded-lg font-semibold hover:bg-yellow-200 transition-colors"
            >
              Jetzt registrieren und auf Nummer sicher gehen
            </Link>
            <br></br>
            <br></br>
            <a href="https://e-passtransfer.de" className="mt-4 text-blue-600 ">
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

export default Blogs22;
