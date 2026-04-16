/* eslint-disable no-irregular-whitespace */
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import ePassTransferbiometrischesBild from "../assets/blog15.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blogs15 = () => {
  return (
    <>
      <Helmet>
        <title>
          So sichert E-Passtransfer die gesetzliche Übertragung biometrischer
          Passbilder – ohne Ihren Workflow zu verändern
        </title>
        <meta
          name="description"
          content="Seit dem 1. Mai 2025 dürfen Passbilder in Deutschland nur noch digital und zertifiziert an Behörden übermittelt werden. E-Passtransfer erfüllt diese Anforderungen – ohne KI, ohne Cloud-Zwang."
        />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        {/* Blog Header */}
        <div className="md:flex md:items-center md:gap-8 mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={ePassTransferbiometrischesBild}
              alt="So sichert E-Passtransfer die gesetzliche Übertragung biometrischer Passbilder"
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              So sichert E-Passtransfer die gesetzliche Übertragung
              biometrischer Passbilder – ohne Ihren Workflow zu verändern
            </h1>
            <p className="text-gray-600 text-sm">
              Veröffentlicht am 16. Mai 2025 • Von E-passtransfer Team
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
            Warum die digitale Passbildübertragung jetzt zählt
          </h2>
          <p>
            Seit dem 1. Mai 2025 dürfen Passbilder in Deutschland nur noch
            digital und zertifiziert an Behörden übermittelt werden. Die
            Anforderungen an Sicherheit und Datenintegrität sind hoch – für
            Fotostudios bedeutet das vor allem eins: Die Übertragung muss
            gesetzeskonform, verschlüsselt und zuverlässig sein.
          </p>
          <p>
            E-Passtransfer erfüllt genau diese Anforderungen – ohne KI, ohne
            Cloud-Zwang, ohne Eingriffe in Ihre gewohnten Arbeitsabläufe.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Was macht E-Passtransfer aus?
          </h2>
          <p>
            E-Passtransfer ist eine lokal installierte Software, die
            ausschließlich für die gesetzliche Übertragung von Passbildern an
            deutsche Behörden entwickelt wurde. Die Bildaufnahme, Bearbeitung
            und Auswahl bleiben wie gewohnt im Studio – E-Passtransfer übernimmt
            lediglich die sichere Übermittlung.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Der Übertragungsprozess in 6 klaren Schritten:
          </h2>
          <ol className="list-decimal ml-6 space-y-2">
            <li>
              <strong>Fotoaufnahme im Studio</strong>
              <br />→ Sie arbeiten wie gewohnt mit Ihrer eigenen Kamera, Ihrem
              PC und Ihrer gewohnten Software.
            </li>
            <li>
              <strong>Bildauswahl durch das Studio</strong>
              <br />→ Es gibt keine automatische Bildkontrolle oder
              Biometrie-KI. Die Qualität bleibt in Ihrer Hand.
            </li>
            <li>
              <strong>QR-Code wird erstellt und gedruckt</strong>
              <br />→ Dieser ist bis zu 6 Monate gültig und kann für Pass,
              Ausweis oder Visum verwendet werden.
            </li>
            <li>
              <strong>
                Installierte E-Passtransfer-Software übernimmt den Upload
              </strong>
              <br />→ Sie übertragen das gewählte Bild aktiv per Klick.
            </li>
            <li>
              <strong>
                Behörden rufen das Bild über den QR-Code sicher ab
              </strong>
              <br />→ Die Datenübertragung erfolgt über zertifizierte Server in
              Deutschland.
            </li>
            <li>
              <strong>
                Die Fotodaten werden nach dem Upload nicht lokal gespeichert
              </strong>
            </li>
          </ol>

          <h2 className="text-2xl font-semibold mb-4">
            Ihre Vorteile mit E-Passtransfer
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Installationssoftware, kein Browser, keine Cloud-Plattform</li>
            <li> Keine KI, kein Drag-and-Drop, keine automatische Prüfung</li>
            <li> Manueller Upload, volle Kontrolle durch das Studio</li>
            <li> Telekom Cloud-Hosting – DSGVO- und TR-03170-konform</li>
            <li>0,99 € einmalig pro Nutzerfreischaltung + 0,75 € pro Upload</li>
            <li>
              Keine Lizenzgebühren, kein Abonnement, keine Vertragsbindung
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Häufige Fragen</h2>
          <p className="font-semibold">Wird das Bild automatisch geprüft?</p>
          <p>
            Nein – es erfolgt keine KI-gestützte Prüfung oder automatische
            Bewertung. Das Studio bleibt für die Biometriequalität
            verantwortlich.
          </p>

          <p className="font-semibold mt-4">Muss ich etwas installieren?</p>
          <p>
            Ja. E-Passtransfer ist eine installierte Software für Windows und
            macOS – kein Browser-Tool.
          </p>

          <p className="font-semibold mt-4">Wie wird das Bild übergeben?</p>
          <p>
            Das Bild wird durch das Studio aktiv hochgeladen. Die Kund:in erhält
            einen gedruckten QR-Code, der bei der Behörde vorgelegt wird.
          </p>

          <p className="font-semibold mt-4">
            Ist eine Internetverbindung notwendig?
          </p>
          <p>
            Ja – zur Übermittlung an die Behörde. Die Übertragung erfolgt
            verschlüsselt über zertifizierte Telekom-Infrastruktur.
          </p>

          <p className="font-semibold mt-4">
            Was passiert bei technischen Problemen?
          </p>
          <p>
            Unser Supportteam steht Ihnen zur Verfügung – zudem können Behörden
            über ihre EDV den Zugriff über die Firewall aktivieren
            (Domain-Freigabe: *.e-passtransfer.de).
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Fazit: Gesetzeskonforme Übertragung ohne Eingriff in Ihre Arbeit
          </h2>
          <p>
            E-Passtransfer verändert nicht, wie Sie fotografieren oder mit Ihren
            Kund:innen arbeiten.
          </p>
          <p>
            Es übernimmt lediglich, was jetzt gesetzlich verlangt wird: die
            digitale, verschlüsselte Übertragung an Behörden.
          </p>
          <p>
            Mit klarer Preisstruktur, deutschem Hosting und ohne technische
            Fallstricke.
          </p>
          <p>Jetzt registrieren: </p>
          <a className="text-blue-600" href="https://www.e-passtransfer.de">
            www.e-passtransfer.de
          </a>
          <p>Fragen? Schreiben Sie uns an:</p>
          <a className="text-blue-600" href="mailto:info@e-passtransfer.de">
            info@e-passtransfer.de
          </a>

          <p>Oder rufen Sie an: </p>
          <a className="text-blue-600" href="tel:+493012345678">
            +49 30 12345678
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

export default Blogs15;
