/* eslint-disable no-irregular-whitespace */
import {
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import Passbildübertragung from "../assets/blog1.jpg";
import raza from "../assets/raza.jpg";
import { Link } from "react-router-dom";

const Blog1 = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12 text-gray-800">
      {/* Left Column: Hero image and blog content */}
      <div className="lg:col-span-2 ">
        <img
          src={Passbildübertragung}
          alt="Digitale Passbildübertragung Pflicht"
          className="w-full lg:h-96 h-48 object-cover rounded-lg shadow mb-8"
        />
        <h1 className="text-4xl font-bold mb-4 leading-snug">
          01. Mai – Es ist so weit: Die digitale Passbildübertragung ist jetzt
          Pflicht!
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Veröffentlicht am 01. Mai 2025 • Raza Abbas
        </p>
        <div className="space-y-6 text-lg leading-relaxed ">
          <p>
            Seit dem 01.05.2025 gilt in Deutschland eine neue gesetzliche
            Regelung: Passbilder für Ausweisdokumente dürfen nur noch digital
            und sicher an die Behörden übermittelt werden.
          </p>
          <p>
            Das betrifft alle Fotograf:innen, Fotostudios und Passbildanbieter –
            und stellt viele vor technische und organisatorische
            Herausforderungen.
          </p>
          <p>
            Doch die gute Nachricht ist: Mit E-PassTransfer sind Sie ab Tag 1
            perfekt vorbereitet.
          </p>

          <h2 className="text-2xl font-semibold text-black mt-6">
            Was ändert sich ab dem 01.05.?
          </h2>
          <p>
            Laut Vorgabe des Bundesministeriums des Innern müssen biometrische
            Passbilder nun elektronisch und verschlüsselt über zertifizierte
            Systeme übermittelt werden. Fotos auf CD, USB-Stick oder Papier sind
            nicht mehr zulässig.
          </p>

          <h2 className="text-2xl font-semibold text-black mt-6">
            Warum ist das wichtig?
          </h2>
          <p>
            Die digitale Übertragung verhindert Manipulationen und Missbrauch
            von Lichtbildern und sorgt für mehr Sicherheit im Ausweiswesen. Nur
            zertifizierte Übertragungswege und Standards wie TR-03170 dürfen
            verwendet werden.
          </p>

          <h2 className="text-2xl font-semibold text-black mt-6">
            Ihre Lösung: E-PassTransfer
          </h2>
          <p>
            Unsere Software erfüllt alle technischen und rechtlichen
            Anforderungen und wird bereits bundesweit von zahlreichen Studios
            erfolgreich eingesetzt.
          </p>
          <ul className="list-disc list-inside ">
            <li>Keine Softwarekosten</li>
            <li>Keine Lizenzgebühr</li>
            <li>Nur 0,75 € pro erfolgreicher Übertragung</li>
            <li>0,99 € einmalig pro Mitarbeitendem für die Freischaltung</li>
            <li>Keine Vertragsbindung, keine Vorauszahlung</li>
          </ul>
          <p>
            E-PassTransfer funktioniert mit Ihrem bestehenden Setup – ohne
            zusätzliche Hardware. Sie brauchen nur unsere Software, Ihre Kamera
            – und können direkt loslegen.
          </p>

          <h2 className="text-2xl font-semibold text-black mt-6">
            Jetzt starten & zukunftssicher arbeiten
          </h2>
          <p>
            Nutzen Sie die Gelegenheit und steigen Sie heute noch auf die
            digitale Übertragung um. Mit E-PassTransfer bleiben Sie
            gesetzeskonform, professionell und flexibel.
          </p>

          <Link to="/Registrierung">
            <button className=" text-black mt-4 block lg:inline-block font-medium bg-yellow-300   px-3 py-2 mb-4 rounded-lg hover:bg-yellow-200 transition ">
              Zur Registrierung
            </button>
          </Link>
        </div>

        {/* Mobile view: Show author at bottom */}
        <div className="mt-12 flex items-center gap-4 border-t pt-6 lg:hidden">
          <img
            src="/raza.jpg"
            alt="Raza Abbas"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-lg">Raza Abbas</p>
            <p className="text-gray-500 text-sm">
              Behördenkontakt & technischer Projektkoordinator e-passtransfer
              GmbH
            </p>
            {/* Social Icons */}
            {/* <div className="flex gap-4 mt-2 text-xl text-gray-600">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaEnvelope />
              <FaLinkedin />
              <FaTiktok />
            </div> */}
          </div>
        </div>
      </div>

      {/* Right Column: Sidebar */}
      <aside className="hidden lg:flex flex-col space-y-6">
        {/* Author Info */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-yellow-300 mb-4">
            Über den Autor
          </h2>
          <img
            src={raza}
            alt="Raza Abbas"
            className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
          />
          <p className="font-semibold">Raza Abbas</p>
          <p className="text-gray-500 text-sm mb-4">
            Behördenkontakt & technischer Projektkoordinator e-passtransfer GmbH
          </p>
        </div>
      </aside>

      <div className="hidden lg:flex flex-col space-y-6">
        <h3 className="text-xl font-semibold mb-2">Teilen Sie unsere Blogs</h3>
        <div className="flex  gap-4 text-lg">
          <a
            href="https://www.facebook.com/profile.php?id=61575091301676"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <FaFacebook /> Facebook
          </a>

          <a
            href="https://twitter.com/intent/tweet?url=https://yourblog.com&text=Check%20out%20this%20blog!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:underline"
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
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://yourblog.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:underline"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://www.instagram.com/e_passtransfer/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-600 hover:underline"
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

export default Blog1;
