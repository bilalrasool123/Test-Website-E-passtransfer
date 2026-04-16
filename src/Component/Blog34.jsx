/* eslint-disable no-irregular-whitespace */
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import newblog23 from "../assets/blog34.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blogs34 = () => {
  return (
    <>
      <Helmet>
        <title>
          Rücktritt bei fehlerhafter Passbildsoftware – was Fotografen wissen
          sollten
        </title>
        <meta
          name="description"
          content="Viele Studios zahlen für nicht funktionierende Software. Erfahre hier, wann du Anspruch auf Rückerstattung hast und warum e-passtransfer eine sichere Alternative ist."
        />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-12 text-gray-800">
        {/* Blog Header */}
        <div className="md:flex md:items-center md:gap-8 mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={newblog23}
              alt="Wenn die Software versagt: Wann Fotograf:innen Anspruch auf Rückerstattung haben"
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              Wenn die Software versagt: Wann Fotograf:innen Anspruch auf
              Rückerstattung haben
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
            Fehlende QR-Codes, kein Support – was tun bei mangelhafter
            Passbildsoftware?
          </h2>
          <p>
            Immer mehr Fotostudios berichten uns, dass sie viel Geld für
            Passbild-Softwarelösungen ausgegeben haben, die nicht wie
            versprochen funktionieren.
            <br />
            Keine QR-Codes
            <br />
            Technische Ausfälle
            <br />
            Kein erreichbarer Support
            <br />
            <br />
            Die zentrale Frage:
            <br />
            Wann habe ich Anspruch auf Rücktritt – und Rückzahlung?
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Rücktrittsrecht bei mangelhafter Software – das sagt das Gesetz
          </h2>
          <p>
            Wenn eine Software gekauft wird, gelten dieselben gesetzlichen
            Rechte wie bei jedem anderen Produkt – vor allem, wenn sie nicht wie
            vereinbart funktioniert.
            <br />
            <br />
            Die wichtigsten Grundlagen:
            <br />
            § 437 BGB – Rechte bei Mängeln
            <br />
            § 323 BGB – Rücktritt bei Schlechtleistung
            <br />
            § 327 BGB ff. – Digitale Produkte (seit 2022 gültig)
            <br />
            <br />
            Das bedeutet konkret:
            <br />
            Du darfst eine Frist zur Nachbesserung setzen
            <br />
            Wenn der Fehler nicht behoben wird, darfst du zurücktreten
            <br />
            Bereits gezahlte Beträge müssen erstattet werden
            <br />
            <br />
            Beispieltext für dein Schreiben:
            <br />
            „Sehr geehrtes Team,
            <br />
            leider funktioniert Ihre Software nicht wie vertraglich vereinbart.
            Ich fordere Sie daher auf, den Mangel bis zum [Datum] zu beheben.
            Sollte das nicht geschehen, mache ich von meinem Rücktrittsrecht
            gemäß § 323 BGB Gebrauch und fordere die vollständige
            Rückerstattung.&quot;
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Datenschutzprobleme? Noch ein Grund zu wechseln
          </h2>
          <p>
            Viele Anbieter nutzen US-Clouds wie AWS oder Azure – ein Risiko für
            Datenschutz:
            <br />
            Der US CLOUD Act erlaubt Zugriff auf Daten – selbst wenn diese in
            Europa gespeichert sind.
            <br /> Das ist nicht mit der DSGVO vereinbar und stellt für viele
            Studios ein echtes Risiko dar.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            e-passtransfer: Sicher. Klar. In Deutschland gehostet.
          </h2>
          <p>
            Wir hosten ausschließlich in der Open Telekom Cloud (Bonn) – keine
            US-Zugriffe, kein CLOUD Act, keine Lizenzgebühren.
            <br />
            100 % DSGVO-konform
            <br />
            Rechenzentrum in Deutschland
            <br />
            Pay-per-use – keine Fixkosten
            <br />
            Sofort startklar – ohne Wartezeit
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Fazit: Du darfst wechseln – und solltest es vielleicht sogar
          </h2>
          <p>
            Wenn Software nicht funktioniert – besteht ein Rücktrittsrecht
            <br />
            Wenn Datenschutzrisiken bestehen – sind Wechselgründe legitim
            <br />
            Bei e-passtransfer gibt es keine Lizenzkosten, keine Mitgliedschaft,
            keine Cloudpflicht
            <br />
            <br />
            Jetzt registrieren & wechseln: www.e-passtransfer.de
            <br />
            Persönlicher Support – wir helfen dir beim Umstieg.
            <br />
            <br />
            #Passbildsoftware #FotostudioLösung #SoftwareRücktritt #DSGVOkonform
            <br />
            #OpenTelekomCloud #ePasstransfer #KeineLizenzen #QRCodePassfoto
            <br />
            #StudioSupport #MadeInGermany
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
            <a href="https://e-passtransfer.de" className="mt-4 text-blue-600">
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

export default Blogs34;
