/* eslint-disable no-irregular-whitespace */
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import AktuelleInformatonvom06Mai from "../assets/blog4.jpg"; // Import your image here

const Blogs4 = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      {/* Header Section */}
      <div className="md:flex md:items-center md:gap-8 mb-12">
        {/* Hero Image */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={AktuelleInformatonvom06Mai}
            alt="Cloud Probleme bei Behördenanbindung"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>

        {/* Title and Author */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            Aktuelle Information vom 06. Mai 2025: Probleme bei der behördlichen
            Anbindung der Clouddienste
          </h1>
          <p className="text-gray-600 text-sm">
            Veröffentlicht am 6. Mai 2025 • Von Süleyman Tevrat Acar
          </p>
          <div className="flex items-center gap-4 mt-4">
            <img
              src="/suliman.png"
              alt="Raza Abbas"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-base">Süleyman Tevrat Acar</p>
              <p className="text-gray-500 text-sm">
                Geschäftsführer, e-passtransfer GmbH
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Seit dem 01. Mai 2025 ist die cloudbasierte Übertragung von
          Passbildern an Behörden in Deutschland verpflichtend. Zahlreiche
          Fotostudios haben sich mit Softwarelösungen wie e-passtransfer
          frühzeitig vorbereitet. Dennoch erreichen uns aktuell zahlreiche
          Rückmeldungen zu Störungen im Livebetrieb.
        </p>
        <p>
          Am heutigen Dienstag, den 06.05.2025, wurde uns von offizieller Seite
          mitgeteilt, dass mehrere Clouddienste verschiedener Anbieter derzeit
          nicht korrekt mit dem DVDV-Livesystem (Deutsches
          Verwaltungsdiensteverzeichnis) kommunizieren. Während das Testsystem
          wie erwartet funktioniert, lassen sich einige Einträge im Livesystem
          nicht auffinden.
        </p>
        <p>
          Laut einer internen Mitteilung an unsere Entwicklungsabteilung ist das
          Problem beim Bundesministerium des Innern (BMI) bekannt. Dieses führt
          die Ursache auf Schwierigkeiten mit der DataMatrix-Verarbeitung
          zurück. Eine genaue Fehlerbeschreibung oder ein Zeitpunkt zur Behebung
          wurde jedoch bisher nicht genannt.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          Was bedeutet das für Fotostudios?
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li> Die Testsysteme funktionieren weiterhin problemlos.</li>
          <li>
            Beim Versand an das Livesystem kann es derzeit zu Problemen kommen.
          </li>
          <li> Die Ursache liegt nicht bei der Software oder den Nutzern.</li>
          <li>
            Eine Lösung durch das BMI ist in Arbeit, aber noch nicht terminiert.
          </li>
        </ul>

        <p>
          <strong>Wir halten euch auf dem Laufenden</strong>
        </p>
        <p>
          e-passtransfer ist bereit für die vollständige Anbindung. Unsere
          Software erfüllt alle Anforderungen der TR-03170-Standards und bleibt
          auch in dieser Übergangszeit vollständig einsatzfähig.
        </p>
        <p>
          Wir empfehlen allen Partnerstudios, die aktuellen Entwicklungen
          aufmerksam zu verfolgen und sich bei Fragen jederzeit an unser
          Support-Team zu wenden.
        </p>

        <div className="bg-yellow-200 border-l-4 border-yellow-400 p-4 rounded mt-6">
          <p className="font-semibold"> Tipp für Suchende:</p>
          <p>
            Du suchst nach einer behördlich konformen Lösung für die
            Passbildübertragung 2025? Oder kämpfst mit Problemen bei der
            DataMatrix-Verarbeitung, JPEG2000-Konvertierung oder der
            DVDV-Anbindung? Dann ist e-passtransfer deine zuverlässige und
            datenschutzkonforme Lösung – kostenlos verfügbar!
          </p>
          <p className="mt-2">
            Jetzt kostenlos registrieren und vorbereitet sein: <br />{" "}
            <a
              href="https://www.e-passtransfer.de"
              className="text-blue-600 underline"
            >
              www.e-passtransfer.de
            </a>
          </p>
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
  );
};

export default Blogs4;
