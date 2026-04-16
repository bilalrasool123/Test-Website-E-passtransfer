/* eslint-disable no-irregular-whitespace */
import { Helmet } from "react-helmet";
import behordenbereichInformationBild from "../assets/behordenbereichInformationBild.jpg";
import razaabass from "../assets/raza.jpg";
import { Link } from "react-router-dom";

const Behordenbereich = () => {
  return (
    <>
      <Helmet>
        <title>
          {" "}
          Behördenzugriff – digitale & elektronische Passbilder empfangen
        </title>
        <meta
          name="description"
          content=" Behörden empfangen E-Passbilder sicher per QR-Code über die e-passtransfer Software – konform mit dem Gesetz für elektronische Passbilder ab 2025.

"
        />
      </Helmet>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
          <div className="w-full flex justify-center mb-6">
            <img
              src={behordenbereichInformationBild}
              alt="behordenbereichInformationBild"
              className="rounded-lg shadow-md w-full sm:w-5/6 md:w-3/4 lg:w-3/4 lg:h-auto h-[120px]"
            />
          </div>

          <div className="w-full sm:w-5/6 md:w-3/4 ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
              Das neue Verfahren: E-Passtransfer – Die sichere und effiziente
              Lösung für digitale Passfotos
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
              Wir sind eine engagierte Gemeinschaft professioneller Fotografen,
              die Bürgerämtern eine besonders einfache und effiziente Lösung für
              biometrische E-Passbilder bietet. Dank unseres sicheren und
              innovativen E-Passtransfer-Verfahrens können Bürgerämter
              Passbilder in höchster Qualität direkt und sicher über ihr
              Fachverfahren einbinden.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left mt-8">
              Das neue Verfahren
            </h2>
            <div className="space-y-4 ">
              <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
                <b> Teilnehmende Fotografen:</b>
                <br />
                Berufsfotografen nutzen modernste Technik, um E-Passbilder zu
                erstellen, die den biometrischen Anforderungen der BSI TR 03121
                entsprechen. Nachdem die Bilder professionell erstellt wurden,
                werden sie verschlüsselt in eine Safe Cloud hochgeladen.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
                <b>QR-Code-Übermittlung:</b>
                <br />
                Der Bürger erhält vom Fotografen einen individuellen QR-Code,
                über den das E-Passbild vom Amt abgerufen werden kann. Das Bild
                wird direkt in das Fachverfahren eingebunden – sicher und
                medienbruchfrei.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
                <b>Sichere Verschlüsselung:</b>
                <br />
                Das E-Passbild in der Safe Cloud ist so verschlüsselt, dass es
                nur über die Systeme der Behörden entschlüsselt werden kann.
                Dieser Prozess gewährleistet eine sichere und
                zuverlässige Übermittlung.
              </p>
            </div>
          </div>

          {/* Additional Text Section */}
          <div className="w-full sm:w-5/6 md:w-3/4 text-left mt-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6">
              Welche Vorteile hat das E-Passtransfer-Verfahren für Ihr Amt?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 rounded  gap-6">
              <div className="bg-yellow-300 hover:bg-yellow-200 text-black p-6 rounded text-center shadow-lg">
                <div className="mb-4"></div>
                <h3 className="text-xl font-bold mb-2"> Effizienz steigern:</h3>
                <p className="text-sm">
                  Nutzen Sie die Infrastruktur und Expertise unserer
                  professionellen Fotografen – ohne zusätzlichen Aufwand für Ihr
                  Amt.
                </p>
              </div>

              <div className="bg-yellow-300 hover:bg-yellow-200 text-black p-6 text-center shadow-lg rounded">
                <div className="mb-4">{/* Document with Checkmark Icon */}</div>
                <h3 className="text-xl font-bold mb-2">
                  {" "}
                  Qualität und Sicherheit:
                </h3>
                <p className="text-sm">
                  Unsere Fotografen sind speziell geschult, um E-Passbilder zu
                  erstellen, die den biometrischen und behördlichen
                  Anforderungen entsprechen.
                </p>
              </div>

              <div className="bg-yellow-300 hover:bg-yellow-200 text-black p-6 text-center shadow-lg rounded">
                <div className="mb-4"></div>
                <h3 className="text-xl font-bold mb-2">
                  Sechs Monate nutzbar:
                </h3>
                <p className="text-sm">
                  Der QR-Code kann sechs Monate lang genutzt werden. Nach Ablauf
                  dieser Zeit wird das Bild automatisch aus der
                  sicheren Cloud gelöscht.
                </p>
              </div>

              <div className="bg-yellow-300 hover:bg-yellow-200 text-black p-6  text-center shadow-lg rounded">
                <div className="mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Überall verfügbar:</h3>
                <p className="text-sm">
                  Unabhängig vom Standort des Fotografen kann der Bürger den
                  QR-Code bei jedem Amt deutschlandweit vorlegen.
                </p>
              </div>

              {/* Step 5 */}
            </div>
          </div>

          {/* New Text Section */}
          <div className="w-full sm:w-5/6 md:w-3/4 text-left mt-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6">
              Was müssen Sie als Amt unternehmen?
            </h2>
            <ol className="list-decimal pl-6 space-y-4 text-sm sm:text-base md:text-lg text-gray-700  mb-4 ">
              <li>
                <b>Fachverfahrensanbieter:</b>
                <br />
                Wir stehen in engem Kontakt mit allen Fachverfahrens­anbietern,
                darunter HSA, AKDB und Komm.one, sowie mit dem BSI, dem BMI, der
                TÜV IT und unserem Cloud- und E-ID-Dienstleister, um die
                Umsetzung des E-Passtransfer-Verfahrens optimal zu gestalten.
              </li>
              <li>
                <b>QR-Code-Scanner:</b>
                <br />
                Prüfen Sie die <span>Eignung Ihrer QR-Scanner</span> für unsere
                Anwendung.
              </li>
              <li>
                <b>Kommunikation:</b>
                <br />
                Unterstützen Sie die Fotostudios durch eine gemeinsame
                Kommunikation an die Bürger. Zum Beispiel können Sie unseren
                Webseitenlink zur Übersicht aller teilnehmenden Fotografen auf
                Ihrer Informationswebseite einbinden.<br></br>
                <Link to="/map" className="text-blue-600">
                  https://www.e-passtransfer.de/map
                </Link>
              </li>
            </ol>
          </div>

          <div className="w-full sm:w-5/6 md:w-3/4 text-left">
            <div
              className="mt-16 bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center"
              id="contact"
            >
              <div className="flex-shrink-0 md:mr-24">
                <img
                  src={razaabass}
                  alt="Raza Abbas"
                  className="rounded-lg w-full md:w-80 h-[400px] object-cover"
                />
              </div>
              <div className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6 mt-4">
                  Kontakt für Behörden und IT-Stellen
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
                  Bei Fragen zur Integration, technischen Umsetzung oder zum
                  Ablauf des E-Passtransfer-Verfahrens steht Ihnen unser
                  Ansprechpartner gerne zur Verfügung.
                </p>
                {/* <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
                Ihre Ansprechpartnerin für die digitale Zukunft der
                Passbildübertragung:
              </p> */}
                <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
                  M.Sc. Ing. Raza Abbas
                  <br />
                  Behördenkontakt & technischer
                  <br />
                  Projektkoordinator
                  <br />
                  e-passtransfer GmbH
                  <br />
                  c/o KITZ – Kieler Innovations- und
                  <br />
                  Technologiezentrum
                  <br />
                  Schauenburgerstraße 116
                  <br />
                  24118 Kiel
                  <br />
                  Deutschland
                  <br />
                  E-Mail:{" "}
                  <a
                    href="mailto:behoerden@e-passtransfer.de
"
                    className="text-blue-600 underline"
                  >
                    behoerden@e-passtransfer.de
                  </a>
                  <br></br>
                  Telefon:{" "}
                  <a
                    href="tel:+4943197994453"
                    className="text-blue-600 underline"
                  >
                    0431 / 979 944 53
                  </a>
                  <br></br>
                  {/* <p className="text-blue-600 underline">📠 Fax: +49 431 54321</p> */}
                </p>
                <p className=" cursor-pointer text-sm sm:text-base md:text-lg text-gray-700  mb-4 mt-4">
                  Gerne koordiniert Herr Abbas auch den direkten Austausch mit
                  Ihrer IT-Abteilung oder dem Fachverfahrensanbieter (z. B. HSH,
                  AKDB, Komm.one).
                </p>
                <Link to="/Registrierung">
                  <button
                    className=" text-black mt-4 block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition "
                    //onClick={scrollToMap}
                  >
                    Jetzt kostenlos registrieren
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Behordenbereich;
