import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import blog19 from "../assets/blog19.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blogs19 = () => {
  return (
    <>
      <Helmet>
        <title>
          AWS-Cloud gefährdet Passbild-Sicherheit – E-Passtransfer setzt auf
          Deutsche Telekom
        </title>
        <meta
          name="description"
          content="Millionen biometrischer Passbilder landen in der Amazon-Cloud – dabei gibt es mit E-Passtransfer eine souveräne Lösung auf Telekom-Infrastruktur."
        />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        {/* Blog Header */}
        <div className="md:flex md:items-center md:gap-8 mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={blog19}
              alt="Achtung AWS-Cloud: Warum jeder Passbild-Upload ins Ausland ein Risiko ist – und wie E-Passtransfer jetzt mit der Deutschen Telekom schützt"
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              Achtung AWS-Cloud: Warum jeder Passbild-Upload ins Ausland ein
              Risiko ist – und wie E-Passtransfer jetzt mit der Deutschen
              Telekom schützt
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
          <p>
            Es ist offiziell: E-Passtransfer läuft ab sofort vollständig auf der
            Deutschen Telekom Open Cloud. Wir haben uns bewusst gegen Amazon Web
            Services (AWS) entschieden. Warum? Weil jeder einzelne Upload in die
            AWS-Cloud ein potenzielles Datenschutzrisiko für Ihre Kund:innen
            ist.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Was viele nicht wissen – oder bewusst verschweigen
          </h2>
          <p>
            Anbieter wie dm, Ringfoto und Alfo speichern biometrische Passbilder
            temporär in der AWS-Cloud. Was technisch effizient klingt, ist in
            Wirklichkeit ein Sicherheitsrisiko:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Die AWS-Cloud unterliegt dem US CLOUD Act</li>
            <li>
              US-Behörden können – theoretisch – Zugriff auf europäische Daten
              verlangen
            </li>
            <li>
              Die Server mögen in Frankfurt stehen – das Gesetz sitzt in
              Washington
            </li>
          </ul>
          <p>
            Und das bei hochsensiblen, biometrischen Passbildern? Würden Sie
            Ihre Ausweisfotos an die US-Regierung senden? Nein? Dann lesen Sie
            weiter.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            E-Passtransfer macht Schluss mit fremder Cloud. Wir bleiben in
            Deutschland.
          </h2>
          <p>
            Wir setzen auf die Open Telekom Cloud – gehostet in deutschen
            Hochsicherheitsrechenzentren, betrieben durch ein europäisches
            Unternehmen, abgesichert nach BSI, ISO & DSGVO.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li> Kein US-Zugriff</li>
            <li> Kein Amazon</li>
            <li> Kein Risiko</li>
          </ul>
          <p>
            Nur Sie, Ihre Kund:innen – und ein QR-Code, der sicher im Amt
            landet.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Wir warnen: Jeder Upload in die falsche Cloud gefährdet Vertrauen
            und Daten
          </h2>
          <p>Was bedeutet das für Fotostudios?</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Kunden geben Ihnen ihr Gesicht an die Hand</li>
            <li>Sie sind verantwortlich für den Übertragungsweg</li>
            <li>
              Eine falsche Cloud-Wahl kann zum Reputationsverlust führen – oder
              Schlimmerem
            </li>
          </ul>
          <p>
            Ein Aufruf an alle Fotostudios in Deutschland: Jetzt wechseln. Jetzt
            schützen.
          </p>

          <h2 className="text-2xl font-semibold mb-4">E-Passtransfer ist:</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>TR-03170-konform</li>
            <li>Kompatibel mit allen Fachverfahren (AKDB, VOIS, HSH)</li>
            <li>
              Barrierefrei & menschlich – kein KI-Zwang, kein Smartphone nötig
            </li>
            <li>100 % gehostet in Deutschland – mit der Deutschen Telekom</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Fazit: Passbilder gehören nicht in die USA. Punkt.
          </h2>
          <p>
            Wenn Sicherheit, Datenschutz und digitale Souveränität mehr als nur
            Buzzwords sein sollen, müssen wir als Branche jetzt Verantwortung
            übernehmen. Mit E-Passtransfer übertragen Sie nicht nur Bilder – Sie
            übertragen Vertrauen.
          </p>
          <p>
            Jetzt kostenlos registrieren – mit Telekom-Cloud & Datenschutz made
            in Germany
          </p>

          <div className="mt-6">
            <Link
              to="/Registrierung"
              className="inline-block px-6 py-3 bg-yellow-300 text-black rounded-lg font-semibold hover:bg-yellow-200 transition-colors"
            >
              Jetzt kostenlos starten
            </Link>
            <p className="font-semibold mt-4">
              passbild amazon cloud, aws cloud passfoto, datenschutz aws
              passbilder, telekom cloud tr-03170, e-passfoto lösung deutschland,
              digitale passbildübertragung, fotostudio qr code übertragung,
              deutsche cloudlösung biometrie
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
    </>
  );
};

export default Blogs19;
