/* eslint-disable no-irregular-whitespace */
import { Link } from "react-router-dom";
import passbildDigitalisierungBild from "../assets/passbildDigitalisierungBild.jpg";
import { Helmet } from "react-helmet";

const PassbildDigitalisierung = () => {
  return (
    <>
      <Helmet>
        <title>
          {" "}
          Passbild-Digitalisierung – E-Passbild Software für Fotografen
        </title>
        <meta
          name="description"
          content=" Digitalisiere Passbilder für Ausweis & Reisepass mit der e-passtransfer Software – ideal für E-Passbild, digitales & elektronisches Passbild.

"
        />
      </Helmet>
      <div className="bg-white py-10">
        <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
          {/* First Image Section */}
          <div className="w-full flex justify-center mb-6">
            <img
              src={passbildDigitalisierungBild}
              alt="passbildDigitalisierungBild"
              className="rounded-lg shadow-md w-full sm:w-5/6 md:w-3/4 lg:w-3/4 lg:h-auto h-[110px]"
            />
          </div>

          {/* Text Section */}
          <div className="w-full sm:w-5/6 md:w-3/4 ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
              Was ist ein E-Passbild?
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
              Ein E-Passbild ist die moderne Form des klassischen Passbildes,
              optimiert für Reisepässe, Personalausweise und Führerscheine. Es
              wird in digitaler Form bereitgestellt, erfüllt alle biometrischen
              Vorgaben und garantiert höchste Qualität und Sicherheit bei der
              Übermittlung an Behörden.
            </p>
            <Link to="/map">
              <button className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  ">
                Jetzt klicken und Passbildstudio finden
              </button>
            </Link>
          </div>

          {/* Additional Text Section */}
          <div className="w-full sm:w-5/6 md:w-3/4 text-left mt-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2">
              So funktioniert die Erstellung eines digitalen Passfotos beim
              Fotografen:
            </h2>
            <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
              <li>
                <span className="font-bold"> Fotografensuche:</span> Finden Sie
                mit unserer Suchfunktion zertifizierte Fotografen oder
                Passbildstudios in Ihrer Nähe, die die gesetzlichen
                Anforderungen erfüllen.
              </li>
              <li>
                <span className="font-bold">Professionelle Bildaufnahme:</span>{" "}
                Lassen Sie Ihr Passfoto von erfahrenen Fotografen nach den
                neuesten biometrischen Standards erstellen – präzise und
                zuverlässig.
              </li>
              <li>
                <span className="font-bold"> Sichere Übermittlung:</span> Das
                geprüfte Foto wird verschlüsselt in unsere Safe Cloud
                hochgeladen. Mit einem individuellen QR-Code können Sie das
                Passfoto direkt bei Ihrem Amt vorlegen.
              </li>
            </ul>
          </div>

          {/* Second Image Section */}

          {/* New Text Section */}
          <div className="w-full sm:w-5/6 md:w-3/4 text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6 mt-6">
              Warum ein digitales E-Passbild vom Fotografen?
            </h2>
            <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
              <li>
                <span className="font-bold">
                  {" "}
                  Präzise und biometrisch geprüft:
                </span>{" "}
                Ihre Bilder werden professionell erstellt und geprüft, um alle
                behördlichen Anforderungen zu erfüllen.
              </li>
              <li>
                <span className="font-bold"> Mehrfach nutzbar:</span> Ihr
                E-Passbild bleibt bis zu sechs Monate in der Cloud gespeichert
                und kann für mehrere Anträge verwendet werden.
              </li>
              <li>
                <span className="font-bold">Zeit und Geld sparen:</span> Im
                Gegensatz zu E-Passbildern, die direkt im Amt nur für einen
                einzelnen Vorgang verwendet werden können, bleibt Ihr
                professionell erstelltes E-Passbild sechs Monate lang nutzbar
                und kann flexibel für verschiedene Dokumente verwendet werden.
              </li>
              <li>
                <span className="font-bold">
                  {" "}
                  Deutschlandweite Verfügbarkeit:
                </span>{" "}
                Finden Sie ganz einfach Fotografen in Ihrer Nähe, die höchste
                Qualitätsstandards bieten.
              </li>
              <li>
                <span className="font-bold">Schnelle Bearbeitung:</span> Der
                gesamte Prozess ist effizient, und Ihre Daten sind
                sicher geschützt.
              </li>
            </ul>
            <Link to="/map">
              <button className=" text-black block lg:inline-block font-medium bg-yellow-300  mt-4 px-3 py-3  rounded-lg hover:bg-yellow-200 transition  ">
                Jetzt klicken und Passbildstudio finden
              </button>
            </Link>
          </div>
          <div className="w-full sm:w-5/6 md:w-3/4 my-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black  mb-4">
              Biometrische Anforderungen für digitale E-Passbilder:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 rounded-lg gap-6">
              <div className="bg-yellow-300 hover:bg-yellow-200 text-black p-6 rounded-lg text-center shadow-lg">
                <div className="mb-4"></div>
                <h3 className="text-xl font-bold mb-2">
                  {" "}
                  Gesichtsausdruck & Beleuchtung
                </h3>
                <p className="text-sm">
                  Ein natürlicher, neutraler Ausdruck ist erforderlich. Die
                  Beleuchtung muss gleichmäßig sein, um Schatten zu vermeiden.
                </p>
              </div>

              <div className="bg-yellow-300 hover:bg-yellow-200 text-black p-6 text-center shadow-lg rounded-lg">
                <div className="mb-4">{/* Document with Checkmark Icon */}</div>
                <h3 className="text-xl font-bold mb-2">
                  {" "}
                  Einheitlicher Hintergrund:
                </h3>
                <p className="text-sm">
                  Hell und neutral (z. B. Weiß oder Hellgrau).
                </p>
              </div>

              <div className="bg-yellow-300 hover:bg-yellow-200 text-black p-6 text-center shadow-lg rounded-lg">
                <div className="mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Technische Vorgaben:</h3>
                <p className="text-sm">
                  Größe (35 x 45 mm) und Auflösung entsprechen den behördlichen
                  Standards.
                </p>
              </div>

              <div className="bg-yellow-300 hover:bg-yellow-200 text-black p-6  text-center shadow-lg rounded-lg">
                <div className="mb-4"></div>
                <h3 className="text-xl font-bold mb-2">
                  Maximale Datensicherheit:
                </h3>
                <p className="text-sm">
                  Verschlüsselte Speicherung und Übertragung Ihrer Bilder
                  <br></br>
                  garantieren höchsten Datenschutz.
                </p>
              </div>

              {/* Step 5 */}
            </div>
          </div>
          <div className="w-full sm:w-5/6 md:w-3/4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
              Biometrische E-Passbilder für alle Lebenssituationen – Individuell
              angepasst
            </h1>
            <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
              <li>
                <span className="font-bold"> Für Babys:</span> Unsere Fotografen
                sind geduldig und erfahren, um auch bei kleinen Kindern perfekte
                Ergebnisse zu erzielen.
              </li>
              <li>
                <span className="font-bold"> Für Senioren:</span> Wir sorgen für
                eine stressfreie und angenehme Atmosphäre.
              </li>
              <li>
                <span className="font-bold">Für Menschen mit Handicap:</span>{" "}
                Viele unserer Studios sind barrierefrei, und wir bieten
                individuelle Unterstützung, wo immer es möglich ist.
              </li>
            </ul>
            <Link to="/map">
              <button className=" text-black block lg:inline-block font-medium bg-yellow-300 mt-6  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  ">
                Fotografen in Ihrer Nähe finden
              </button>
            </Link>
          </div>
          <div className="w-full sm:w-5/6 md:w-3/4 ">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
              Neben biometrischen Passfotos bieten wir
            </h2>
            <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
              <li>
                <span className="font-bold"> Bewerbungsfotos:</span>{" "}
                Präsentieren Sie sich von Ihrer besten Seite.
              </li>
              <li>
                <span className="font-bold"> Businessporträts:</span> Perfekt
                für professionelle Auftritte.
              </li>
              <li>
                <span className="font-bold">
                  {" "}
                  Familien- und Porträtfotografie:
                </span>{" "}
                Halten Sie Ihre schönsten Momente fest.
              </li>
            </ul>
            <h4 className="text-2xl mt-4 sm:text-3xl md:text-3xl font-bold text-black">
              Häufig gestellte Fragen:
            </h4>
            <h4 className="text-2xl mt-4 sm:text-3xl md:text-2xl font-bold text-black mb-2">
              Was kostet ein digitales E-Passbild?
            </h4>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed ">
              Die Preise variieren je nach Studio und Region. Erkundigen Sie
              sich bei Fotografen in Ihrer Nähe.
            </p>
            <h2 className="text-2xl mt-4 sm:text-4xl md:text-2xl font-bold text-black mb-2">
              Kann ich mein E-Passbild selbst erstellen?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed ">
              Nein, ab Mai 2025 ist dies nicht mehr erlaubt. Passfotos müssen
              von zertifizierten Fotografen erstellt und über das sichere
              E-Passtransfer-Verfahren übermittelt werden.
            </p>
            <h4 className="text-2xl mt-4 sm:text-3xl md:text-2xl font-bold text-black mb-2">
              Wie lange dauert das E-Passbild?
            </h4>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Das Erstellen eines E-Passbildes dauert in der Regel nur wenige
              Minuten, und Ihr fertiges Bild steht Ihnen entweder als Beiblatt
              mit QR-Code für den digitalen Download durch die Behörde oder als
              klassischer Ausdruck zur Verfügung.
            </p>
            {/* <Link to="/map">
            <button className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  ">
              Finden Sie jetzt zertifizierte Fotografen
            </button>
          </Link> */}

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Unsere Fotografen sind geschult, auf individuelle Anforderungen
              einzugehen, und nehmen sich die nötige Zeit, um perfekte
              Ergebnisse zu erzielen.
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 mt-4">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Mit unserer benutzerfreundlichen Suchfunktion finden Sie schnell
                und einfach zertifizierte Fotografen in Ihrer Nähe, die
                gesetzeskonforme und sichere E-Passbilder anbieten.
              </p>
            </h2>
            <Link to="/map">
              <button className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  ">
                Finden Sie jetzt zertifizierte Fotografen
              </button>
            </Link>
            {/* <Link to="/map">
            <button className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition ">
              Fotografen suchen
            </button>
          </Link> */}
            {/* <br></br>
          <Link to="/map">
            <button className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition ">
              Mein Standort ermitteln
            </button>
          </Link> */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              {" "}
              Falls keine Ergebnisse angezeigt werden, erweitern Sie bitte den
              Suchradius oder passen Sie die Filtereinstellungen an.
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 mt-4">
              Warum E-Passtransfer?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Mit E-Passtransfer profitieren Sie von einem deutschlandweiten
              Netzwerk zertifizierter Fotografen, höchster Qualität und einer
              sicheren Übermittlung Ihres Passfotos – schnell, zuverlässig und
              gesetzeskonform.
            </p>
            <Link to="/map">
              <button className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  ">
                Überzeugen Sie sich selbst – Jetzt zertifizierten
                Fotografen finden
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassbildDigitalisierung;
