/* eslint-disable no-irregular-whitespace */
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import newblog23 from "../assets/blog32.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blogs32 = () => {
  return (
    <>
      <Helmet>
        <title>
          Passbildsoftware für Fotograf:innen – keine Lizenz, keine Abofalle
        </title>
        <meta
          name="description"
          content="
Keine Mitgliedschaft, keine Cloudkosten: e-passtransfer berechnet nur erfolgreiche Übertragungen mit QR-Code. Ideal für Studios – einfach, sicher, transparent.
"
        />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-12 text-gray-800">
        {/* Blog Header */}
        <div className="md:flex md:items-center md:gap-8 mb-12">
          <div className="md:w-1/2   mb-6 md:mb-0">
            <img
              src={newblog23}
              alt="Nur das zählt, was ankommt – e-passtransfer rechnet fair ab"
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              Nur das zählt, was ankommt – e-passtransfer rechnet fair ab
            </h1>
            <p className="text-gray-600 text-sm">
              Veröffentlicht am 25. Juni 2025 – von E-Passtransfer Team
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
            Fotograf:innen fragen – wir antworten: „Nein, wir berechnen keine
            leeren Uploads&quot;
          </h2>
          <p>
            Immer mehr Fotostudios in Deutschland wollen umsteigen. Doch eine
            Frage kommt besonders häufig:
            <br />
            „Wird jedes Bild berechnet, das ich hochlade – auch wenn es
            abgelehnt wird?“
            <br />
            Die Antwort:
            <br />
            Nein. Nur erfolgreiche Übertragungen – mit generiertem QR-Code –
            zählen bei uns.
            <br />
            Damit das klar ist:
            <br />
            Testbilder, abgebrochene Vorgänge oder verworfene Aufnahmen kosten
            nichts.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Keine versteckten Gebühren – keine Tricks
          </h2>
          <p>
            Wir berechnen NICHT:
            <br />
            keine Lizenzgebühr
            <br />
            keine Abo-Pflicht
            <br />
            keine monatliche Grundgebühr
            <br />
            keine Installationskosten
            <br />
            keine Supportkosten
            <br />
            keine Cloudspeicherpauschale
            <br /> keine „Mitgliedschaft&quot; oder Wartungsverträge
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Nur was zählt, wird gezählt – das ist fair.
          </h2>
          <p>
            Wir rechnen nur den erfolgreichen Upload mit QR-Code ab.
            <br />
            Die Abrechnung erfolgt monatlich gesammelt – ganz einfach in deinem
            Adminbereich einsehbar.
            <br />
            Kein Risiko. Kein Vertrag. Keine Überraschungen.
            <br />
            e-passtransfer ist die erste Passbild-Software mit echtem
            Pay-per-Use-Modell.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Für Fotograf:innen entwickelt – nicht für Lizenzverkäufer
          </h2>
          <p>
            Viele Wettbewerber verdienen an ihren Lizenzen, nicht am
            funktionierenden System.
            <br />
            Wir denken anders:
            <br />
            Wir verdienen nur dann, wenn du erfolgreich arbeitest.
            <br />
            Deshalb haben wir uns gegen alles entschieden, was dich ausbremst:
            <br />
            Keine langen Verträge
            <br />
            Kein Druck
            <br />
            Keine Upgrades oder „Premium-Stufen&quot;
            <br />
            Du brauchst nur eins: ein erfolgreiches Ergebnis.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Deshalb steigen täglich Studios auf e-passtransfer um
          </h2>
          <p>
            Studios aus ganz Deutschland registrieren sich täglich neu – aus
            genau einem Grund:
            <br />
            Sie müssen liefern, können sich Fehler nicht leisten und wollen sich
            nicht an Abomodelle ketten.
            <br />
            e-passtransfer funktioniert einfach. Und das spricht sich rum:
            <br />
            Positives Feedback von Behörden
            <br />
            Null Rückläufer durch fehlerhafte QR-Codes
            <br />
            Keine Supportwarteschlangen
            <br />
            Und: Faire Abrechnung, nachvollziehbar und ehrlich
          </p>

          <h2 className="text-2xl font-semibold mb-4">Ideal für…</h2>
          <p>
            Einzelstudios und kleine Fotofachgeschäfte
            <br />
            Apotheken oder Optiker mit Passfotodienst
            <br />
            Mobile Fotograf:innen
            <br />
            Studio-Ketten, die zentral auswerten wollen
            <br />
            Alle, die sicher und rechtlich korrekt arbeiten wollen
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Was du bekommst – kostenlos
          </h2>
          <p>
            Zugang zur Software
            <br />
            Onlineverwaltung und Uploadportal
            <br />
            Support per Telefon oder E-Mail
            <br />
            Zugang zur Fotografen-Suchmaschine auf unserer Website
            <br />
            Sichtbarkeit bei Behörden & Kund:innen
            <br />
            Du zahlst nur, wenn dein Bild erfolgreich zur Behörde geht.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Fazit: Kein Risiko – nur Erfolg zählt
          </h2>
          <p>
            Während andere Anbieter vor allem Lizenzen verkaufen, ermöglicht
            e-passtransfer echten Fortschritt:
            <br />
            Sofort loslegen. Kein Vertrag. Nur Zahlen, wenn&apos; klappt.
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

export default Blogs32;
