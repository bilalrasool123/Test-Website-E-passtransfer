/* eslint-disable no-irregular-whitespace */
import FotografenportalBild from "../assets/FotografenportalBild.jpg";
import model from "../assets/sina.jpg";
import { Link } from "react-router-dom";
import video from "../assets/video.png";
import { Helmet } from "react-helmet";
//import { useNavigate } from "react-router-dom";

const EpassInformation = () => {
  ///const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>
          {" "}
          Fotografenportal – E-Passbild Software für digitale Passbilder
        </title>
        <meta
          name="description"
          content=" Das Portal für Studios & Fotografen: Mit e-passtransfer digitale & elektronische Passbilder gesetzeskonform erstellen & übermitteln – bereit für 2025."
        />
      </Helmet>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
          {/* First Image Section */}
          <div className="w-full flex justify-center mb-6">
            <img
              src={FotografenportalBild}
              alt="FotografenportalBild"
              className="rounded-lg shadow-md w-full sm:w-5/6 md:w-3/4 lg:w-3/4 lg:h-auto h-[120px]"
            />
          </div>

          {/* Text Section */}
          <div className="w-full sm:w-5/6 md:w-3/4 ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
              Einfach starten – ohne Softwarekosten, mit klarer Abrechnung pro
              Übertragung
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
              Mit dem E-Passtransfer-Verfahren erhalten Sie eine moderne,
              rechtssichere und anwenderfreundliche Lösung für die digitale
              Erstellung und Übertragung biometrischer E-Passbilder.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
              Die Software steht Ihnen vollumfänglich zur Verfügung – es fallen
              keinerlei Gebühren für Einrichtung, Nutzung oder Updates an. Für
              jeden Mitarbeitenden, der die Software verwendet, ist eine
              einmalige Freischaltung erforderlich (0,99 € pro Person).
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
              <b>Unser faires Pay-per-Use-Modell:</b>
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Sie zahlen nur dann, wenn Sie Bilder übertragen</li>
              <li>0,75 € pro erfolgreicher E-Passbildübertragung</li>
              <li>
                Keine Grundgebühr, keine Vorauszahlung, keine Vertragsbindung
              </li>
            </ul>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 mt-4">
              <b>Alles aus einer Hand – direkt vom Entwicklerteam: </b>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Eigene Software, eigene Cloud, persönlicher Support</li>
              <li>
                Keine Drittanbieter, keine Abhängigkeiten – 100 % Kontrolle
              </li>
            </ul>
            <button
              className=" text-black block lg:inline-block font-medium bg-yellow-300 mt-8 px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  "
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Kontaktieren Sie uns
            </button>
            <div className="w-full sm:w-5/6 md:w-full text-left ">
              <video
                src="https://epass-transfer-videos.vercel.app/Fotografenseite.webm"
                controls
                poster={video}
                className="w-full h-auto"
                type="video/webm"
              >
                <p>Your browser does not support HTML5 video.</p>
              </video>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6 mt-10">
              Ihre Vorteile auf einen Blick – fair & transparent{" "}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
              <div className="bg-yellow-300 shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold text-black mb-2 text-center ">
                  Registriere dein Unternehmen
                </h3>
                <p className="text-black text-center">
                  Melden Sie sich und Ihr Fotostudio kostenlos für das
                  E-Passtransfer-System an. Die Registrierung ist kostenfrei,
                  weitere Kosten entstehen erst bei der Mitarbeitereinbindung
                  (0,99 € pro Person).
                </p>
              </div>
              <div className="bg-yellow-300 shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold text-black mb-2 text-center ">
                  Software kostenlos verfügbar
                </h3>
                <p className="text-black text-center">
                  Nach der Registrierung können Sie die Software uneingeschränkt
                  kostenlos nutzen – eine separate Testversion ist nicht
                  erforderlich. Die Vollversion sowie alle künftigen Updates
                  sind dauerhaft kostenfrei.
                </p>
              </div>
              <div className="bg-yellow-300 shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold text-black mb-2 text-center">
                  Integration
                </h3>
                <p className="text-black text-center">
                  Unser Support-Team unterstützt Sie bei der Installation und
                  Integration der Software in Ihren Arbeitsprozess – kostenfrei
                  und unkompliziert.
                </p>
              </div>
              <div className="bg-yellow-300 shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold text-black mb-2 text-center">
                  Mitarbeitereinbindung
                </h3>
                <p className="text-black text-center">
                  Melden Sie Ihr Team im System an. Einmalige Identifikation pro
                  Mitarbeitendem: 0,99 €.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Text Section */}
          <div className="w-full sm:w-5/6 md:w-3/4 text-left mt-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6">
              Transparente Transfergebühr: Nur 0,75 € pro Übertragung
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Für die sichere, verschlüsselte Übertragung eines biometrischen
              E-Passbildes in die Cloud und direkt an die Behörde fällt eine
              geringe Gebühr von 0,75 € an. Diese Pauschale deckt alle Kosten
              für die verschlüsselte Übermittlung, die Nutzung der sicheren
              Cloud und die Einhaltung gesetzlicher Vorgaben. Keine versteckten
              Kosten – Sie zahlen nur für die tatsächlichen Übertragungen. Die
              Abrechnung erfolgt monatlich per SEPA-Lastschrift. Keine Pakete,
              Kontingente oder Guthaben erforderlich.
              <br></br>
              {/* <b>Hinweis: </b> Die Software ist nach einer einmaligen Zahlung
              von 49 € verfügbar. Eine Lizenz gilt für eine Installation pro
              Standort. Für zusätzliche Installationen ist eine separate Lizenz
              erforderlich. Keine weiteren Kosten außer der Übertragungsgebühr. */}
            </p>
          </div>

          {/* New Text Section */}
          <div className="w-full sm:w-5/6 md:w-3/4 text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
              Ihre Vorteile mit E-Passtransfer
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 lg:w-[1000px]">
              <b>Transparente Lizenzkosten:</b> Nur bei uns gebührenfrei. Die
              Vollversion der Software ist dauerhaft kostenfrei – inklusive
              Nutzung auf beliebig vielen Geräten und an allen Standorten. Es
              entstehen keine Folgekosten – nur bei uns.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              <b>Sichere Datenübertragung:</b> Verschlüsselung und Datenschutz
              gemäß BSI TR-03170 (Teil 2), TÜV-Vortest bestanden.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              <b>Zukunftssicher:</b> Erfüllen Sie bereits heute die gesetzlichen
              Anforderungen für E-Passbilder ab dem 01.05.2025.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 ">
              <b>Einfache Anwendung:</b> Eine moderne, benutzerfreundliche
              Lösung, die sich nahtlos in Ihre Prozesse integriert.
            </p>
            {/* <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Kostenfreie Mitarbeitereinbindung: Alle Teammitglieder können
            kostenlos im System registriert werden.
          </p> */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6">
              So werden Sie Teil des Netzwerks
            </h2>
            <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
              <li>
                <span className="font-bold">Registrierung:</span> Die Anmeldung
                erfolgt ausschließlich online über unsere Website – schnell,
                unkompliziert und sicher.
              </li>
              <li>
                <span className="font-bold">Software herunterladen:</span> Nach
                der Registrierung steht Ihnen die E-Passtransfer-Software zum
                Download bereit und kann direkt in Ihrem Fotostudio installiert
                und getestet werden. Die Nutzung ist unbegrenzt, aber für jede
                Installation innerhalb Ihres Unternehmens ist eine separate
                Lizenz erforderlich.
              </li>
              <li>
                <span className="font-bold">Einrichtung:</span> Lassen Sie sich
                bei der Integration von unserem Support-Team unterstützen –
                kostenfrei und effizient.
              </li>
              <li>
                <span className="font-bold">Mitarbeiter registrieren:</span>{" "}
                Fügen Sie Ihr gesamtes Team ins System ein, damit alle
                Mitarbeiterinnen den Service nutzen können. Für jeden fällt
                einmalig eine Identifikationsgebühr von 0,99 € an.
              </li>
              <li>
                <span className="font-bold">Fotos übertragen:</span> Starten Sie
                die sichere und verschlüsselte Übertragung biometrischer
                E-Passbilder – für nur 0,75 € pro erfolgreicher Übertragung.
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-5/6 md:w-3/4 text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6 mt-8">
              Nutzung der E-Passtransfer-Software und zusätzliche Anforderungen
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Für die Nutzung der E-Passtransfer-Software und die Übertragung
              biometrischer E-Passbilder benötigen Sie ein Chipkartenlesegerät
              zur Identifikation Ihrer Mitarbeitenden. Dies ist erforderlich, um
              den Identifikationsprozess sicher und gemäß den gesetzlichen
              Vorgaben abzuschließen.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              <b>
                Beispiel für ein kompatibles Chipkartenlesegerät (falls keines
                vorhanden ist):
              </b>
            </p>
            <ul className="list-inside list-disc text-sm sm:text-base md:text-lg text-gray-700 mb-6">
              <li>
                <a
                  href="https://www.mediamarkt.de/de/product/_reiner-sct-cyberjack-rfid-basis-chipkartenleser-2852581.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 "
                >
                  Reiner SCT Cyberjack RFID Basis Chipkartenleser bei MediaMarkt
                </a>
              </li>
              <li>
                <a
                  href="https://www.bueromarkt-ag.de/chipkartenleser_reinersct_cyberjack_rfid_basis,p-2718500100.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  Reiner SCT Cyberjack RFID Basis Chipkartenleser bei BüroMarkt
                </a>
              </li>
              {/* <li>
                <a
                  // href="https://www.amazon.de/dp/B01LZZZP6E"
                  //  target="_blank"
                  //  rel="noopener noreferrer"
                  className="text-black"
                >
                  Alternativ auch bei Amazon
                </a>
              </li> */}
            </ul>
            <p className="text-sm sm:text-base md:text-base text-gray-700 leading-relaxed mb-6">
              Nach der Einrichtung der Software können Sie diese direkt in Ihrem
              Fotostudio installieren und nutzen. Unser Support-Team hilft Ihnen
              bei der Integration des Lesegeräts und der Software, um den
              Prozess schnell und unkompliziert umzusetzen.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed ">
              <b>Hinweis zu externen Links:</b>
            </p>
            <p className="text-sm sm:text-base md:text-base text-gray-700 leading-relaxed mb-6">
              Wir verlinken auf Produkte, die von Drittanbietern angeboten
              werden. Bitte beachten Sie, dass die Datenschutzbestimmungen und
              Nutzungsbedingungen der verlinkten Anbieter gelten, sobald Sie
              deren Website besuchen.
            </p>
          </div>

          <div className="w-full sm:w-5/6 md:w-[100%] text-left">
            <div
              className="mt-16 bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-start md:items-start"
              id="contact"
            >
              {/* Image Section */}
              <div className="flex-shrink-0 md:mr-16 mb-8 md:mb-0">
                <img
                  src={model}
                  alt="Frau Sina Acar"
                  className="rounded-lg w-full md:w-80 h-[400px] object-cover"
                />
              </div>

              {/* Contact Information */}
              <div className="text-left flex-1 mb-8 md:mb-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6">
                  Kontaktieren Sie uns
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
                  Die Registrierung für das E-Passtransfer-System ist für Sie
                  als Fotograf weiterhin kostenlos. Die Nutzung der Software
                  erfolgt anschließend auf Grundlage unserer transparenten
                  Preisstruktur – ganz ohne monatliche Pauschalen oder
                  versteckte Kosten.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
                  Ihre Ansprechpartnerin für die digitale Zukunft der
                  Passbildübertragung:
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
                  Frau Sina Acar
                  <br />
                  Leitung E-Passtransfer GmbH
                  <br />
                  c/o KITZ – Kieler Innovations- und
                  <br />
                  Technologiezentrum
                  <br />
                  Schauenburgerstraße 116
                  <br />
                  24118 Kiel
                  <br />
                  E-Mail:{" "}
                  <a
                    href="mailto:registrierung@e-passtransfer.de"
                    className="text-blue-600 underline"
                  >
                    registrierung@e-passtransfer.de
                  </a>
                  <br /> Telefon:{" "}
                  <a
                    href="tel:+4943197994453"
                    className="text-blue-600 underline"
                  >
                    0431 / 979 944 53
                  </a>
                </p>

                {/* Registration Button */}
                <Link to="/Registrierung">
                  <button className="text-black mt-4 block font-semibold bg-yellow-300 px-10 lg:px-8 py-3 rounded-lg shadow-md hover:bg-yellow-200 transition text-center">
                    Jetzt kostenlos registrieren
                  </button>
                </Link>
              </div>

              {/* Button Section on the Right */}
              <div className="flex flex-col gap-4 md:ml-16 lg:mt-72">
                <a href="https://epass-transfer-videos.vercel.app/Registrieren-Epass.webm">
                  <button className="text-black font-semibold bg-yellow-300 px-12 py-3 rounded-lg shadow-md hover:bg-yellow-200 transition text-center">
                    So funktioniert’s (Video)
                  </button>
                </a>

                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Benutzerhandbuch e-passtransfer V.1.0.pdf";
                    link.download = "Benutzerhandbuch e-passtransfer V.1.0.pdf";
                    link.click();
                  }}
                  className="text-black font-semibold bg-yellow-300 px-8 py-3 rounded-lg shadow-md hover:bg-yellow-200 transition text-center"
                >
                  Installation & Erste Schritte
                </button>

                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/plakat.pdf";
                    link.download = "/plakat.pdf";
                    link.click();
                  }}
                  className="text-black font-semibold bg-yellow-300 px-8 py-3 rounded-lg shadow-md hover:bg-yellow-200 transition text-center"
                >
                  Werbematerial & Vorlagen
                </button>
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href =
                      "/Häufige Fragen & Antworten – e-passtransfer.pdf";
                    link.download =
                      "/Häufige Fragen & Antworten – e-passtransfer.pdf";
                    link.click();
                  }}
                  className="text-black font-semibold bg-yellow-300 px-8 py-3 rounded-lg shadow-md hover:bg-yellow-200 transition text-center"
                >
                  Hilfe & FAQ{" "}
                </button>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-5/6 md:w-3/4 text-left mt-16 ">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
              Fazit: Zukunftssicheres System – dauerhaft gebührenfrei, nur
              0,75 € pro Übertragung
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Mit dem E-Passtransfer-System profitieren Sie von einem modernen
              und zukunftssicheren Setup. Die Software steht Ihnen dauerhaft
              lizenzfrei zur Verfügung – ohne Einrichtungsgebühr, ohne Abo. Sie
              zahlen lediglich 0,75 € pro erfolgreicher E-Passbildübertragung –
              es entstehen keine weiteren laufenden Kosten. Bleiben Sie auch
              nach der Gesetzesänderung ab Mai 2025 der verlässliche
              Ansprechpartner für hochwertige, gesetzeskonforme E-Passbilder.
            </p>
            <Link to="/Registrierung">
              <button className=" text-black mt-4 block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition ">
                Jetzt kostenlos registrieren
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EpassInformation;
