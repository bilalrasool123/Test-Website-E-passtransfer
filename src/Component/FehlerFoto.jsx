/* eslint-disable no-irregular-whitespace */
import { Link } from "react-router-dom";
import FehlerFotoepass from "../assets/FehlerFotoepass.jpg";
const FehlerFoto = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* First Image Section */}
        <div className="w-full flex justify-center mb-6">
          <img
            src={FehlerFotoepass}
            alt="FehlerFotoepass"
            className="rounded-lg shadow-md w-full sm:w-5/6 md:w-3/4 lg:w-3/4 lg:h-auto h-[120px]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-5/6 md:w-3/4 ">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6">
            Vermeiden Sie die häufigsten Fehler bei E-Passbildern
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
            Biometrische Passbilder sind essenziell für Dokumente wie Reisepässe
            oder Personalausweise, doch Fehler bei der Erstellung können zu
            Ablehnungen durch Behörden führen. Achten Sie besonders auf folgende
            Punkte, um unnötige Verzögerungen zu vermeiden:
          </p>
        </div>

        {/* Additional Text Section */}
        <div className="w-full sm:w-5/6 md:w-3/4 text-left mt-2">
          <h2 className="text-lg sm:text-lg md:text-lg font-bold text-black mb-2">
            Kopfposition:
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
            <li>
              <span className="font-bold"></span>Halten Sie den Kopf gerade,
              ohne Neigung oder Drehung. Der Blick sollte direkt in die Kamera
              gerichtet sein, <br></br>um die biometrischen Anforderungen zu
              erfüllen.
            </li>
          </ul>
        </div>

        {/* Second Image Section */}

        {/* New Text Section */}
        <div className="w-full sm:w-5/6 md:w-3/4 text-left">
          <h2 className="text-lg sm:text-lg md:text-lg font-bold text-black mb-2 mt-4">
            Hintergrund:
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
            <li>
              <span className="font-bold"></span> Verwenden Sie einen
              einheitlich hellen Hintergrund (z. B. weiß oder hellgrau), der
              frei von Schatten, <br></br>Mustern oder anderen Störungen ist.
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-5/6 md:w-3/4 text-left">
          <h2 className="text-lg sm:text-lg md:text-lg font-bold text-black mb-2 mt-4">
            Beleuchtung
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
            <li>
              <span className="font-bold"></span>Sorgen Sie für eine
              gleichmäßige Ausleuchtung, um Schatten, Reflexionen und starke
              Kontraste zu vermeiden. Besonders wichtig ist dies bei
              Brillenträgern, da Reflexionen auf den Gläsern zu Ablehnungen
              führen können.
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-5/6 md:w-3/4 text-left">
          <h2 className="text-xl sm:text-lg md:text-lg font-bold text-black mb-2 mt-6">
            Wichtige Neuerung ab Mai 2025
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
            <li>
              <span className="font-bold"></span>
              Ab dem 1. Mai 2025 dürfen nur noch professionelle Studios
              biometrische Passbilder anfertigen. Dies soll sicherstellen, dass
              alle gesetzlichen Vorgaben eingehalten werden und Manipulationen
              ausgeschlossen sind.
            </li>
          </ul>
          <p className="text-sm mt-4 sm:text-base md:text-lg text-gray-700  mb-4">
            <b>Unser Tipp:</b> Vermeiden Sie DIY-Experimente und vertrauen Sie
            zertifizierten Fotografen, die Ihre Bilder professionell erstellen.
            Diese garantieren nicht nur die Einhaltung aller biometrischen
            Anforderungen, sondern übermitteln die Bilder direkt und sicher an
            die zuständigen Behörden.
          </p>

          <div className="space-y-2 mt-6">
            <Link to="/anforderungen-makeup">
              <button className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  ">
                Hier erfahren Sie mehr über die biometrischen Anforderungen an
                Passbilder
              </button>
              <br></br>
            </Link>
            <Link to="/map">
              <button className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  ">
                Jetzt Termin bei einem zertifizierten Fotografen buchen
              </button>
              <br></br>
            </Link>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
            Mit einem professionell erstellten E-Passbild sparen Sie wertvolle
            Zeit, minimieren Fehler und stellen sicher, dass Ihr Foto nicht nur
            den behördlichen Standards entspricht, sondern auch sicher und
            zuverlässig verarbeitet wird!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FehlerFoto;
