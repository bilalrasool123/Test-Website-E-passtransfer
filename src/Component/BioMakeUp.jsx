/* eslint-disable no-irregular-whitespace */
import { Link } from "react-router-dom";
import Makeupbiometrisches from "../assets/Make-up-biometrisches.jpg";

const BioMakeUp = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* First Image Section */}
        <div className="w-full flex justify-center mb-6">
          <img
            src={Makeupbiometrisches}
            alt="Hero Section"
            className="rounded-lg shadow-md w-full sm:w-5/6 md:w-3/4 lg:w-3/4 lg:h-auto h-[120px]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-5/6 md:w-3/4 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
            Make-up für Ihr biometrisches Passbild
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
            Ein dezentes Make-up ist für biometrische Passbilder erlaubt und
            kann Ihre Gesichtszüge vorteilhaft betonen. Damit Ihr Look den
            gesetzlichen Vorgaben entspricht und Sie auf dem Foto optimal
            wirken, beachten Sie bitte folgende Tipps:
          </p>
          <Link to="/map">
            <button className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  ">
              Finden Sie einen Fotografen in Ihrer Nähe
            </button>
          </Link>
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

        {/* Additional Text Section */}

        {/* Second Image Section */}

        {/* New Text Section */}
        <div className="w-full sm:w-5/6 md:w-3/4 text-left">
          <h2 className="text-lg sm:text-lg md:text-lg font-bold text-black mb-6 mt-4">
            Natürlichkeit bewahren
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Halten Sie Ihr Make-up so dezent wie möglich. Vermeiden Sie
            auffällige Farben wie grelles Rouge, kräftige Lippenstifte oder
            schimmernde Lidschatten, da diese das Bild unnatürlich wirken lassen
            können.
          </p>
          <h2 className="text-lg sm:text-lg md:text-lg font-bold text-black mb-6">
            Einheitlicher Hautton
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mt-4">
            Achten Sie darauf, dass Gesicht und Hals dieselbe Farbe haben.
            Verwenden Sie, falls nötig, eine leichte Foundation oder getönte
            Tagescreme, um einen gleichmäßigen Teint zu erzielen.
          </p>
        </div>
        <div className="w-full sm:w-5/6 md:w-3/4 my-6">
          <h2 className="text-lg sm:text-lg md:text-lg font-bold text-black  mb-4">
            Glanz vermeiden
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            Transparente Puder helfen dabei, unerwünschte Glanzstellen auf
            Stirn, Nase und Kinn zu verhindern. Ein mattes Finish sorgt für ein
            professionelles Ergebnis.
          </p>
          <h2 className="text-lg sm:text-2xl md:text-lg font-bold text-black  mb-4 mt-4">
            Augen betonen – aber dezent
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            Mascara und ein leichtes Augen-Make-up sind erlaubt, sollten jedoch
            nicht übertrieben wirken. Eyeliner und dunkle Lidschatten können die
            biometrische Erkennung erschweren und sollten daher sparsam
            eingesetzt werden.
          </p>
          <h2 className="text-lg sm:text-2xl md:text-lg font-bold text-black  mb-4 mt-4">
            Lippen und Augenbrauen
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            Ein Lippenbalsam oder ein farbloser Lipgloss sorgt für gepflegte
            Lippen, während die Augenbrauen leicht mit einem Augenbrauenstift
            oder Gel definiert werden können, um Ihr Gesicht harmonisch wirken
            zu lassen.
          </p>
          <h2 className="text-lg sm:text-lg md:text-lg font-bold text-black  mb-4 mt-4">
            Professionelle Unterstützung für perfekte Ergebnisse
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            Unsere erfahrenen Fotografen setzen Sie mit optimalem Licht und
            modernster Technik perfekt in Szene. So erhalten Sie ein E-Passbild,
            das sowohl den biometrischen Anforderungen entspricht als auch Ihre
            natürliche Schönheit betont.
          </p>
          <div className="mt-8">
            <Link to="/anforderungen-makeup">
              <button className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  ">
                Hier erfahren Sie mehr über die Anforderungen an biometrische
                Passbilder
              </button>
              <br></br>
            </Link>
            <Link to="/map">
              <button className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  ">
                Jetzt einen Termin bei einem zertifizierten Fotografen buchen
              </button>
            </Link>
          </div>

          {/* Final Call-to-Action */}
          <p className="text-gray-700 mt-8">
            Passen Sie Ihr Make-up Ihren Bedürfnissen an, bleiben Sie jedoch so
            natürlich wie möglich – und überlassen Sie den Rest den Profis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioMakeUp;
