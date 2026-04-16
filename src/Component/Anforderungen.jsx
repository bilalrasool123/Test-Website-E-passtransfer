/* eslint-disable no-irregular-whitespace */
//import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import AnforderungenBiometrisches from "../assets/AnforderungenBiometrisches.jpg";
const Anforderungen = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* First Image Section */}
        <div className="w-full flex justify-center mb-6">
          <img
            src={AnforderungenBiometrisches}
            alt="AnforderungenBiometrisches"
            className="rounded-lg shadow-md w-full sm:w-5/6 md:w-3/4 lg:w-3/4 lg:h-auto h-[120px]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-5/6 md:w-3/4 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
            Anforderungen für ein biometrisches Passbild
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
            Herzlich willkommen bei{" "}
            <span className="font-bold"> e-passtransfer.de</span> Ihrem
            Biometrische Passbilder müssen klaren Standards entsprechen, um für
            Dokumente wie Reisepässe und Ausweise akzeptiert zu werden. Beachten
            Sie die folgenden Kriterien, um sicherzustellen, dass Ihr Passbild
            den gesetzlichen Vorgaben entspricht.
          </p>
        </div>

        {/* Additional Text Section */}
        <div className="w-full sm:w-5/6 md:w-3/4 text-left mt-6">
          <h2 className="text-lg sm:text-lg md:text-lg font-bold text-black mb-2">
            Format und Hintergrund:
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
            <li>
              <span className="font-bold"></span> Größe: 35 x 45 mm.
              <br></br>
            </li>
            <li>
              <span className="font-bold"></span>
              Hintergrund: Einheitlich hell (z. B. weiß oder hellgrau) und ohne
              Muster.
              <br></br>
            </li>
          </ul>
        </div>

        {/* Second Image Section */}

        {/* New Text Section */}
        <div className="w-full sm:w-5/6 md:w-3/4 text-left">
          <h2 className="text-lg sm:text-lg md:text-lg font-bold text-black mb-6 mt-6">
            Gesicht und Ausdruck:
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
            <li>
              <span className="font-bold"></span> Das Gesicht muss zentriert und
              vollständig sichtbar sein.
            </li>
            <li>
              <span className="font-bold"></span> Der Gesichtsausdruck muss
              neutral sein, mit geschlossenem Mund und offenen Augen.
            </li>
            <li>
              <span className="font-bold"></span>
              Die Augenhöhe muss sich zwischen 11 mm und 15 mm vom unteren
              Bildrand befinden.
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-5/6 md:w-3/4 text-left">
          <h2 className="text-lg sm:text-lg md:text-lg font-bold text-black mb-6 mt-6">
            Beleuchtung:
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
            <li>
              <span className="font-bold"></span>Gleichmäßiges Licht ohne
              Schatten auf dem Gesicht oder Hintergrund.
            </li>
            <li>
              <span className="font-bold"></span> Keine Reflexionen auf Haut,
              Brille oder Schmuck.
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-5/6 md:w-3/4 text-left">
          <h2 className="text-xl sm:text-lg md:text-lg font-bold text-black mb-6 mt-6">
            Vermeiden Sie Verzögerungen oder Ablehnungen
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
            <li>
              <span className="font-bold"></span>Professionelle Fotografen
              stellen sicher, dass Ihr E-Passbild alle biometrischen
              Anforderungen erfüllt. So vermeiden Sie unnötige Rückfragen oder
              Ablehnungen seitens der Behörden.
            </li>
          </ul>
          <h2 className="text-lg sm:text-lg md:text-lg font-bold text-black mb-6 mt-6">
            Wichtige Neuerung ab Mai 2025:
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
            Ab dem 1. Mai 2025 werden Passbilder direkt und sicher an die
            zuständigen Behörden übermittelt, um Manipulationen auszuschließen.
            Vertrauen Sie auf erfahrene Fotografen, die Ihre Bilder
            professionell erstellen und eine verschlüsselte Übertragung
            garantieren.
          </p>
          <div className="space-y-2 mt-6">
            <Link to="/Fehler-Foto">
              <button className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  ">
                Hier erfahren Sie, wie Sie typische Fehler bei Passbildern
                vermeiden können
              </button>
              <br></br>
            </Link>
            <Link to="/map">
              <button className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  ">
                Jetzt einen Termin für Ihr biometrisches Passbild buchen
              </button>
              <br></br>
            </Link>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
            Mit einem professionell erstellten E-Passbild sind Sie auf der
            sicheren Seite – schnell, unkompliziert und garantiert akzeptiert!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Anforderungen;
