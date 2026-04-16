/* eslint-disable no-irregular-whitespace */
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg"; // Replace with your hero image path
import hero1 from "../assets/hero2.jpg"; // Replace with the second image
import Diagrammbild from "../assets/Diagrammbild.jpg"; // Replace with the final
// image
import video from "../assets/video2.png"; // Replace with the video poster image
//import digital from "../assets/img1.jpg"; // Replace with the digital image
//import Photography from "../assets/img3.jpg"; // Replace with the photography
// image

//import leftimg1 from "../assets/img2.jpg"; // Replace with the left image
//import passport from "../assets/img4.jpg"; // Replace with the passport image

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import //faCamera,
//faCameraRetro,
//faFileCheck,
//faFileAlt,
//faCloudUploadAlt,
//faQrcode,
//faImage,
"@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
//import { useRef } from "react";
//import Map from "../Component/Map";
//import MaP from "./Map";

const Hero = () => {
  const scrollToMap = () => {
    const mapSection = document.getElementById("map");
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the map section
    }
  };
  return (
    <>
      <Helmet>
        <title>
          {" "}
          Software für digitales & elektronisches Passbild – e-passtransfer 2025
          bereit
        </title>
        <meta
          name="description"
          content=" e-passtransfer ist die führende Softwarelösung für Fotografen zur gesetzeskonformen Übermittlung von E-Passbildern ab Mai 2025 – schnell, sicher & anerkannt."
        />
      </Helmet>
      <div className="bg-white py-10">
        <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
          {/* First Image Section */}
          <div className="w-full flex justify-center mb-6">
            <img
              src={hero}
              alt="ÜberblickBild"
              className="rounded-lg shadow-md w-full sm:w-5/6 md:w-3/4 lg:w-3/4 lg:h-auto h-[120px]"
            />
          </div>

          {/* Text Section */}
          <div className="w-full sm:w-5/6 md:w-3/4 ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
              Erstellen Sie Ihre biometrischen E-Passbilder schnell und bequem –
              direkt beim zertifizierten Fotografen in Ihrer Nähe
            </h1>
            <button
              className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  "
              onClick={scrollToMap}
            >
              Jetzt klicken und Passbildstudio finden
            </button>
            <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
              Herzlich willkommen bei{" "}
              <span className="font-bold"> e-passtransfer</span>, Ihrem
              deutschlandweiten Netzwerk für hochwertige biometrische
              Passbilder! Benötigen Sie ein Bild, das den gesetzlichen Standards
              entspricht? Unsere zertifizierten Fotografen sorgen dafür, dass
              Ihr E-Passbild nicht nur den biometrischen Anforderungen
              entspricht, sondern auch durch perfekte Ausleuchtung und präzise
              Anpassung optimal dargestellt wird.
              <span className="font-bold">
                {" "}
                Auch in Zukunft bleiben wir Ihr verlässlicher Partner!
              </span>{" "}
              Ab dem 1. Mai 2025 tritt das neue E-Passfoto-Verfahren in Kraft.
              Lassen Sie Ihre E-Passbilder weiterhin von Profis erstellen und
              profitieren Sie von herausragender Qualität sowie einer sicheren
              Übermittlung. Ihre Bilder werden verschlüsselt und direkt an die
              zuständigen Behörden übermittelt.
            </p>

            {/* <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            <span className="font-bold">
              Wir bleiben auch in Zukunft Ihr zuverlässiger Partner!
            </span>{" "}
            Das neue E-Passfotoverfahren ist ab Mai 2025 verpflichtend! Lassen
            Sie Ihre Passbilder auch in Zukunft professionell bei unseren
            Fotografen erstellen und profitieren Sie von höchster Qualität und
            Schnelligkeit. Ihre biometrischen Passbilder werden ab dem 1.5.2025
            direkt und sicher an das zuständige Amt übermittelt.
          </p> */}
          </div>
          <div className="w-full sm:w-5/6 md:w-3/4 text-left 2">
            <video
              src="https://epass-transfer-videos.vercel.app/Startseite.webm"
              controls
              poster={video}
              className="w-full h-auto"
              type="video/webm"
            >
              <p>Your browser does not support HTML5 video.</p>
            </video>
          </div>

          {/* Additional Text Section */}
          <div className="w-full sm:w-5/6 md:w-3/4 text-left mt-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6">
              Warum sollten Sie sich für einen professionellen Fotografen
              entscheiden?
            </h2>
            <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
              <li>
                <span className="font-bold">Fachwissen und Erfahrung:</span>{" "}
                Unsere erfahrenen Fotografen setzen Sie mit modernster Technik
                gekonnt in Szene. Dank idealer Beleuchtung und präziser
                Anpassung werden Schatten und Reflexionen minimiert, wodurch Ihr
                E-Passbild biometrisch korrekt und von höchster Qualität ist –
                ein Ergebnis, das Sie mit Freude vorzeigen können.
                <br></br>
                <Link to="/make-up" className="text-blue-600 underline ">
                  Entdecken Sie unsere Tipps für das perfekte Make-up für
                  Passbilder.
                </Link>
              </li>
              <li>
                <span className="font-bold">Schnell und unkompliziert:</span>{" "}
                Sparen Sie sich lange Wartezeiten im Amt! Bei uns erhalten Sie
                Ihr E-Passbild sofort – auch außerhalb der regulären
                Öffnungszeiten und an Wochenenden.
                <br></br>
                <Link
                  to="/anforderungen-makeup"
                  className="text-blue-600 underline "
                >
                  Erfahren Sie hier mehr über die Anforderungen an Passbilder.
                </Link>
              </li>
              <li>
                <span className="font-bold">Professionelle Ergebnisse:</span>{" "}
                Besonders bei Kleinkindern, älteren Menschen oder Personen mit
                besonderen Bedürfnissen nehmen wir uns die nötige Zeit, um die
                besten Ergebnisse zu erzielen. Ihre Zufriedenheit steht für uns
                an erster Stelle. Erfahren Sie mehr über die passende Kleidung
                für Passbilder.
                <br></br>
                <Link to="/kleidung-Tips" className="text-blue-600 underline ">
                  Lesen Sie mehr über die passende Kleidung für Passbilder.
                </Link>
              </li>
              <li>
                <span className="font-bold">Zeit- und Kostenersparnis:</span>{" "}
                E-Passbilder, die direkt beim Amt aufgenommen werden, sind
                häufig bis zu 4 Tage gültig und ausschließlich für einen
                einzigen Antrag nutzbar. Bei uns bleibt Ihr E-Passbild sechs
                Monate sicher gespeichert und kann für mehrere Anträge wie
                Reisepass, Personalausweis oder Visum genutzt werden – ohne
                zusätzliche Kosten.
              </li>
              <li>
                <span className="font-bold">
                  Biometrische Prüfung inklusive:
                </span>{" "}
                Alle Fotos und Passbilder werden auf die Einhaltung der
                biometrischen Vorgaben geprüft, sodass Sie unnötige Rückfragen
                vermeiden.
                <br></br>
                <Link to="/Fehler-Foto" className="text-blue-600 underline ">
                  Hier erfahren Sie, wie Sie typische Fehler bei Passbildern
                  vermeiden können.
                </Link>
              </li>
              <li>
                <span className="font-bold">Bundesweit verfügbar:</span> Mit nur
                wenigen Klicks finden Sie ein zertifiziertes E-Passbild Studio
                in Ihrer Nähe. Profitieren Sie von unserer professionellen
                Beratung und der zuverlässigen Übermittlung Ihrer Passbilder.
                <br></br>
                <br></br>
                Sichern Sie sich noch heute Ihren Termin und erleben Sie den
                Unterschied, den professionelle Passbilder machen!
              </li>
              <button
                className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  "
                onClick={scrollToMap}
              >
                Klick hier Passbildstudio suchen
              </button>
            </ul>
          </div>

          {/* Second Image Section */}
          <div className="w-full flex justify-center my-10">
            <img
              src={hero1}
              alt="ZweiteÜberblickBild"
              className="rounded-lg shadow-md w-full sm:w-5/6 md:w-3/4 lg:w-3/4 lg:h-auto h-[120px]"
            />
          </div>

          {/* New Text Section */}
          <div className="w-full sm:w-5/6 md:w-3/4 text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6">
              Hintergrund zur Gesetzesänderung 2025<br></br> Warum digitale
              E-Passbilder die Zukunft sind
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Ab dem 1. Mai 2025 gelten in Deutschland neue Vorschriften für
              Passfotos, die darauf abzielen, die Sicherheit und Qualität
              biometrischer Bilder zu verbessern und Manipulationen zu
              verhindern. Ab diesem Datum ist es verpflichtend, Passbilder
              digital an die zuständigen Behörden übermitteln zu lassen.
              Selbstgemachte Fotos oder Ausdrucke zur Abgabe im Amt sind dann
              nicht mehr zulässig.
              <br></br>
              <Link
                to="/gesetzesaenderung-Epassfoto"
                className="text-blue-600 underline "
              >
                Was Sie über die Gesetzesänderung für Passfotos ab Mai 2025
                wissen müssen.
              </Link>
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6">
              Das neue E-Passbild-Verfahren bringt zahlreiche Vorteile mit sich,
              die sowohl für Bürger als auch für Behörden zukunftsweisend sind:
            </h2>
            <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
              <li>
                <span className="font-bold">Professionelle Erstellung:</span>{" "}
                Lassen Sie Ihr E-Passbild bei einem zertifizierten Fotografen
                erstellen, der mit allen gesetzlichen Vorgaben vertraut ist. So
                erhalten Sie ein Bild, das den höchsten Qualitätsstandards
                entspricht.
              </li>
              <li>
                <span className="font-bold">
                  Prüfung auf biometrische Standards:
                </span>{" "}
                Ihre Passbilder werden vor der Übermittlung geprüft, um
                sicherzustellen, dass sie den gesetzlichen Anforderungen
                entsprechen – z. B. hinsichtlich Kopfposition, Augenhöhe und
                neutralem Hintergrund.
              </li>
              <li>
                <span className="font-bold">Manipulationssicherheit:</span> Ihre
                Bilder werden verschlüsselt in eine sichere Cloud übertragen, wo
                sie nur von den zuständigen Behörden abgerufen werden können. So
                wird Manipulation ausgeschlossen und die Sicherheit erhöht.
              </li>
              <li>
                <span className="font-bold">Flexibilität:</span> Ein großer
                Vorteil: Ihr E-Passbild bleibt bis zu 6 Monate gespeichert und
                kann während dieser Zeit für mehrere Dokumentenanträge wie
                Reisepass, Personalausweis oder Visum verwendet werden. Dies
                spart Zeit und zusätzliche Kosten.
              </li>
              <li>
                <span className="font-bold">
                  Unsere Lösung für das neue E-Passbild-Verfahren:
                </span>{" "}
                Unser E-Passbild-System wurde gemeinsam von einem erfahrenen
                Softwareunternehmen und einem Team professioneller Fotografen
                entwickelt, um die sichere Erstellung und Übermittlung von
                Passbildern zu gewährleisten. <br></br>
                <br></br>
                <b>Mit diesem System bieten wir Ihnen:</b> Fotos, die den
                aktuellen und zukünftigen gesetzlichen Vorgaben entsprechen. Ein
                professionelles und ansprechendes Ergebnis, das Sie gerne
                vorzeigen. Eine reibungslose Übertragung Ihrer Bilder direkt an
                die zuständigen Behörden.
              </li>
            </ul>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mt-4 ml-5">
              Mit digitalen ePassbildern sind Sie für die Änderungen im Jahr
              2025 bestens gerüstet – sicher, schnell und professionell!
            </p>
          </div>
          <div className="w-full sm:w-5/6 md:w-3/4 my-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black  mb-10">
              So funktioniert das digitale E-Passbild-Verfahren in 6 einfachen
              Schritten
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Step 1 */}
              {/* Step 1 */}
              <div className="bg-yellow-300 hover:bg-yellow-200 text-black p-6 rounded-lg text-center shadow-lg">
                <div className="mb-4">
                  {/* Customized Camera Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-12 h-12 text-black mx-auto"
                  >
                    {/* Camera Body */}
                    <rect
                      x="3"
                      y="8"
                      width="18"
                      height="12"
                      rx="2"
                      className="stroke-current"
                    />
                    {/* Camera Lens */}
                    <circle cx="12" cy="14" r="4" className="stroke-current" />
                    {/* Flash Element */}
                    <path d="M15 2h-6l1 3h4l1-3z" className="stroke-current" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">1. Fotografensuche:</h3>
                <p className="text-sm">
                  Nutzen Sie unsere Plattform, um zertifizierte Fotografen oder
                  Passbildstudios in Ihrer Nähe zu finden, die den gesetzlichen
                  Vorgaben entsprechen.
                </p>
              </div>

              {/* Step 2 */}
              {/* Step 2 */}
              <div className="bg-yellow-300 hover:bg-yellow-200 text-black p-6 rounded-lg text-center shadow-lg">
                <div className="mb-4">
                  {/* Document with Checkmark Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-12 h-12 text-black mx-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M12 20H7a2 2 0 01-2-2V6a2 2 0 012-2h5m3.586 3L21 9.414M15 3h6v6m-6-6l6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">2. Bildaufnahme:</h3>
                <p className="text-sm">
                  Ein zertifizierter Fotograf erstellt Ihr biometrisches
                  Passbild mit professioneller Ausrüstung. Das Bild wird
                  anschließend sicher gespeichert und den gesetzlichen
                  Anforderungen angepasst.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-yellow-300 hover:bg-yellow-200 text-black p-6 rounded-lg text-center shadow-lg">
                <div className="mb-4">
                  {/* Cloud with Lock Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-12 h-12 text-black mx-auto"
                  >
                    {/* Cloud */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 15a4 4 0 014-4h1a4 4 0 018 0h1a4 4 0 010 8H7a4 4 0 01-4-4z"
                    />
                    {/* Lock */}
                    <rect
                      x="9"
                      y="13"
                      width="6"
                      height="6"
                      rx="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13v-2a2 2 0 114 0v2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">3. Datenprüfung:</h3>
                <p className="text-sm">
                  Das Passbild wird nach der Aufnahme geprüft und gemäß den
                  Passbildvorgaben optimiert. Nach Ihrer Auswahl und Bestätigung
                  wird es für die sichere Übertragung freigegeben.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-yellow-300 hover:bg-yellow-200 text-black p-6 rounded-lg text-center shadow-lg">
                <div className="mb-4">
                  {/* QR Code Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-12 h-12 text-black mx-auto"
                  >
                    {/* Large square */}
                    <rect
                      x="2"
                      y="2"
                      width="6"
                      height="6"
                      fill="currentColor"
                    />
                    {/* Small square inside large square */}
                    <rect x="4" y="4" width="2" height="2" fill="white" />

                    {/* Top-right square */}
                    <rect
                      x="16"
                      y="2"
                      width="6"
                      height="6"
                      fill="currentColor"
                    />
                    <rect x="18" y="4" width="2" height="2" fill="white" />

                    {/* Bottom-left square */}
                    <rect
                      x="2"
                      y="16"
                      width="6"
                      height="6"
                      fill="currentColor"
                    />
                    <rect x="4" y="18" width="2" height="2" fill="white" />

                    {/* Center dots */}
                    <rect
                      x="10"
                      y="10"
                      width="2"
                      height="2"
                      fill="currentColor"
                    />
                    <rect
                      x="14"
                      y="10"
                      width="2"
                      height="2"
                      fill="currentColor"
                    />
                    <rect
                      x="10"
                      y="14"
                      width="2"
                      height="2"
                      fill="currentColor"
                    />
                    <rect
                      x="14"
                      y="14"
                      width="2"
                      height="2"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  4. QR-Code-Generierung:
                </h3>
                <p className="text-sm">
                  Nach dem Hochladen erhalten Sie Ihren individuellen QR-Code
                  direkt ausgedruckt, den Sie zur Antragsstellung
                  verwenden können.
                </p>
              </div>

              {/* Step 5 */}
              <div className="bg-yellow-300 hover:bg-yellow-200 text-black p-6 rounded-lg text-center shadow-lg">
                <div className="mb-4">
                  {/* Government Emblem SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-12 h-12 text-black mx-auto"
                  >
                    <circle cx="12" cy="12" r="10" className="stroke-current" />
                    <path
                      d="M12 4v16M8 8h8M8 16h8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  5. Behördlicher Zugriff:
                </h3>
                <p className="text-sm">
                  Die zuständige Behörde ruft Ihr E-Passbild direkt aus der
                  sicheren Cloud ab, sobald Sie den QR-Code vorlegen. Unsere
                  zertifizierten Fotografen garantieren, dass das Bild sicher
                  und in Übereinstimmung mit den biometrischen
                  Vorgaben erstellt wurde.
                </p>
              </div>
              <div className="bg-yellow-300 hover:bg-yellow-200 text-black p-6 rounded-lg text-center shadow-lg">
                <div className="mb-4">
                  {/* Government Emblem SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                      width: "48px",
                      height: "48px",
                      margin: "0 auto",
                      display: "block",
                    }}
                  >
                    <path
                      d="M12 2L4 5v6c0 5.25 3.58 10.14 8 11 4.42-.86 8-5.75 8-11V5l-8-3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12l2 2 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  6. Sichere Übertragung:
                </h3>
                <p className="text-sm">
                  Das geprüfte Passbild wird verschlüsselt in eine zertifizierte
                  Cloud hochgeladen, die höchste Sicherheitsstandards erfüllt.
                  Ihre Daten sind vor unbefugtem Zugriff geschützt.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-5/6 md:w-3/4 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
              Das neue E-Passtransfer-Verfahren: So funktioniert die digitale
              Übermittlung Ihres Passfotos an das zuständige Amt
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Das E-Passtransfer-Verfahren revolutioniert, wie Passfotos
              erstellt und sicher an Behörden übermittelt werden. Wir
              garantieren Ihnen höchste Sicherheit und Qualität bei der
              Erstellung von biometrischen Fotos, die den gesetzlichen
              Anforderungen entsprechen. Ab dem 1. Mai 2025 wird dieses
              Verfahren deutschlandweit verpflichtend – und wir sind Ihr
              verlässlicher Partner für diesen innovativen Prozess. Die Vorteile
              des E-Passtransfer-Verfahrens für Sie.
            </p>
            <img
              src={Diagrammbild}
              alt="Diagrammbild"
              className="rounded-lg  w-full sm:w-5/6 md:w-3/4 lg:w-3/2 mx-auto"
            />
          </div>
          <div className="lg:mx-36 my-10 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
              Fazit
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Mit dem E-Passtransfer-Verfahren profitieren Sie von einer
              sicheren, effizienten und zukunftsorientierten Lösung – für Ihre
              Passbilder. Unsere erfahrenen Fotografen begleiten Sie durch den
              gesamten Prozess und stellen sicher, dass Ihr Passfoto biometrisch
              korrekt und gesetzeskonform ist. Es wird professionell und
              hochwertig erstellt und sicher sowie direkt an die zuständigen
              Behörden übermittelt. Vertrauen Sie auf das
              E-Passtransfer-Verfahren – die moderne Lösung für Ihre Passbilder!
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
              Zertifizierte E-Passbild-Fotografen in Ihrer Nähe:
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Sie benötigen ein biometrisches Passbild, das sicher, direkt und
              gesetzeskonform an die zuständige Behörde übermittelt wird? Mit
              unserer Standortsuche finden Sie zertifizierte Fotostudios, die
              das E-Passtransfer-Verfahren nutzen.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Geben Sie einfach Ihre Postleitzahl ein, und wir zeigen Ihnen,
              welche Fotografen in Ihrer Nähe bereits die digitale
              E-Passbildübertragung anbieten.
            </p>
          </div>
          {/* <div className="bg-white py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col  sm:flex-row justify-center items-center mb-10 lg:mx-12 mx-2">
              <img
                src={digital}
                alt="Digital Process"
                className="shadow-md w-full sm:w-1/2 md:w-1/2 h-auto"
              />
              <img
                src={Photography}
                alt="Photography Studio"
                className=" shadow-md w-full sm:w-1/2 md:w-1/2 lg:h-[346px]"
              />
            </div>

            <div className="mx-12 flex flex-col md:flex-row gap-8">
              <div className="flex flex-col gap-4 md:w-1/3">
                <img
                  src={leftimg1}
                  alt="Photographer Studio"
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <img
                  src={passport}
                  alt="Passport Process"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>

              <div className="md:w-2/3 hidden md:block   ">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
                  Unterstützer des E-Passfoto-Verfahrens für digitale Passbilder
                </h2>
                <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
                  <li>
                    <span className="font-bold">
                      Arbeitsgemeinschaft E-Passfoto des Fotofachhandels und der
                      Fotografen:
                    </span>{" "}
                    Die Arbeitsgemeinschaft E-Passfoto wurde im Dezember 2019
                    gegründet. Die Arbeitsgruppe hat das neue Verfahren zur
                    Übertragung der Lichtbilder konzipiert.
                  </li>
                  <li>
                    Der Fotoverbund RINGFOTO vertritt im Rahmen der
                    Arbeitsgemeinschaft über 1.100 eigene Mitglieder mit fast
                    1.500 Geschäften. An dieses System können auch alle anderen
                    Fotografinnen und Fotografen, die in Deutschland
                    biometrische Passbilder erstellen, angeschlossen werden.
                    Ziel ist es, ein modernes E-Passfoto-Verfahren zu
                    entwickeln, das auch zukünftig elektronische Passbilder für
                    hoheitliche Dokumente vom Fotostudio erstellt werden können.
                  </li>
                  <li>
                    <span className="font-bold">
                      Verbände und Berufsgruppen:
                    </span>{" "}
                    Centralverband Deutscher Berufsphotographen (cv), Bund der
                    Professionellen Portraitfotographen (bpp), Profi Portrait
                    Club (PPC), Bundesverband Technik (BVT), Hauptverband des
                    Einzelhandels (HDE).
                  </li>
                </ul>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                  Wir stehen im engen Austausch mit diesen Gruppen und
                  Verbänden. Sie decken damit nahezu 100% des deutschen
                  Fotofachhandels und der deutschen Fotostudios am
                  cloudbasierten E-Passfoto-Verfahren ab.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
