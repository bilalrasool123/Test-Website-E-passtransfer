import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import passtransferbleibtstabilundmenschlich from "../assets/blog5.jpg";

const Blogs5 = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      <div className="md:flex md:items-center md:gap-8 mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={passtransferbleibtstabilundmenschlich}
            alt="Cloud Probleme bei Behördenanbindung"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            Chaos bei der digitalen Passbildübertragung – e-passtransfer bleibt
            stabil und menschlich
          </h1>
          <p className="text-gray-600 text-sm">
            Veröffentlicht am 07. Mai 2025 • Von E-passtransfer Team
          </p>
          <div className="flex items-center gap-4 mt-4">
            <img
              src="/favicon.jpg"
              alt="Süleyman Tevrat Acar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-base">E-passtransfer Team</p>
              <p className="text-gray-500 text-sm">e-passtransfer GmbH</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Während deutschlandweit Städte wie Potsdam, Heidelberg, Wiesbaden und
          viele weitere Kommunen mit massiven technischen Störungen bei der
          neuen digitalen Passbild-Übertragungspflicht kämpfen, beweist
          e-passtransfer, wie eine durchdachte Lösung funktionieren kann – ohne
          Komplexität, ohne Barrieren, ohne Ausgrenzung.
        </p>
        <ul className="list-disc  space-y-2">
          <strong>Behörden überfordert – Bürger frustriert</strong>
          <ul className=" list-none space-y-2">
            <li>
              In Potsdam akzeptieren die Behörden aktuell nur noch Papierfotos
            </li>
            <li>
              In Heidelberg funktionieren QR-Codes nicht, Terminals sind noch
              unausgepackt, Menschen werden abgewiesen oder selbst fotografiert
            </li>
            <li>
              Babys, Senioren, Menschen mit Behinderung werden zurückgeschickt,
              weil die neuen Terminals noch nicht auf ihre Bedürfnisse
              eingestellt sind
            </li>
          </ul>
        </ul>
        <p>
          Ein öffentliches Chaos – mitten in einer der wichtigsten
          Verwaltungsumstellungen.
        </p>
        <p>
          <strong> Warum e-passtransfer heute schon besser ist</strong>
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li> Verlässliche Übertragung ohne unausgereifte Technik.</li>
          <li>
            Fotografen können weiterhin gewohnt arbeiten – wir übernehmen die
            sichere Übermittlung.
          </li>
          <li>
            Kein Bildverlust, keine unnötigen Fehler durch instabile
            KI-Erkennung.
          </li>
        </ul>
        <p>
          <strong>Unser Plan:</strong> Ende 2025 wird e-passtransfer durch ein
          kostenloses Update eine KI-gestützte Bildprüfung erhalten – aber erst,
          wenn das System sicher, ausgereift und ausreichend trainiert ist.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li> Jedes korrekte Passbild wird akzeptiert</li>
          <li> Kein Bild geht verloren</li>
          <li> Keine unnötigen Fehler durch instabile KI-Erkennung</li>
        </ul>
        <p>
          <strong>Fazit:</strong> e-passtransfer ist keine Übergangslösung –
          sondern die durchdachte Zukunft. Ob Baby, Senior oder Mensch mit
          Handicap – bei uns bleibt niemand außen vor. e-passtransfer
          funktioniert heute, morgen – und bald noch intelligenter.
        </p>
        <p>
          <strong>
            #GOEPASSTRANSFER – weil Passbilder Sicherheit brauchen, keine
            Experimente.
          </strong>
        </p>
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

export default Blogs5;
