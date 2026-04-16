import { Link } from "react-router-dom";
import kleidungTips from "../assets/kleidungTips.jpg"; // Replace with the actual path to your image

const KleidungTips = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Main Title */}

      {/* Image Section */}
      <div className="w-full flex justify-center mb-6">
        <img
          src={kleidungTips}
          alt="kleidungTips"
          className="rounded-lg shadow-md w-full sm:w-5/6 md:w-3/4 lg:w-full lg:h-auto h-[120px]"
        />
      </div>

      {/* Content Section */}
      <div className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
        {/* Introduction */}
        <h1 className="text-3xl font-bold text-black mt-4  mb-8">
          Tipps für das perfekte Outfit auf Ihrem E-Passbild
        </h1>
        <p>
          Die Wahl des richtigen Outfits für ein biometrisches Passbild ist
          entscheidend, um den Fokus auf Ihr Gesicht zu lenken und den
          behördlichen Anforderungen zu entsprechen. Halten Sie sich an die
          folgenden Tipps, um ein professionelles und vorteilhaftes Ergebnis zu
          erzielen:
        </p>

        {/* Tips */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-black mt-4">
            Schlichte Farben:
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
            <li>
              Wählen Sie dunkle, gedeckte Farben wie Grau, Dunkelblau oder
              Schwarz.
            </li>
            <li>
              Diese Farben schaffen einen klaren Kontrast zum hellen Hintergrund
              und lassen Ihr Gesicht besser hervortreten.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-black">
            Vermeiden Sie Ablenkungen:
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
            <li>
              Tragen Sie keine Kleidung mit auffälligen Mustern, großen Logos
              oder Schriftzügen.
            </li>
            <li>
              Vermeiden Sie tiefe Ausschnitte, da diese dazu führen können, dass
              der Kragen auf dem Foto nicht sichtbar ist, was unvorteilhaft
              wirken kann.
            </li>
            <li>
              Schmuck und Accessoires sollten minimal gehalten werden, um den
              Fokus auf Ihr Gesicht zu legen.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-black">
            Gepflegtes Erscheinungsbild:
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
            <li>
              Achten Sie darauf, dass Ihre Kleidung sauber und frei von
              Knitterfalten ist.
            </li>
            <li>
              Ein ordentlicher Haarschnitt und ein gepflegtes Styling sorgen für
              ein harmonisches Gesamtbild.
            </li>
          </ul>
        </div>

        {/* Additional Notes */}
        <div className="">
          <h2 className="text-2xl font-semibold mb-4 text-black mt-5">
            Zusätzliche Hinweise
          </h2>
          <p className="mb-4">
            Professionelle Fotografen achten darauf, dass Ihr Outfit optimal im
            Bild wirkt und gleichzeitig den biometrischen Standards entspricht.
            Falls Sie unsicher sind, bringen Sie eine Alternative mit – unsere
            Fotografen beraten Sie gerne vor Ort.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-2 mt-6">
          <Link to="/make-up">
            <button className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  ">
              Entdecken Sie weitere Tipps für ein gelungenes E-Passbild
            </button>
            <br></br>
          </Link>
          <Link to="/map">
            <button className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  ">
              Jetzt einen Termin bei einem zertifizierten Fotografen vereinbaren
            </button>
            <br></br>
          </Link>
        </div>

        {/* Final Note */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
          Mit diesen einfachen Tipps stellen Sie sicher, dass Ihr E-Passbild
          nicht nur den behördlichen Vorgaben entspricht, sondern auch
          professionell und stilvoll aussieht!
        </p>
      </div>
    </div>
  );
};

export default KleidungTips;
