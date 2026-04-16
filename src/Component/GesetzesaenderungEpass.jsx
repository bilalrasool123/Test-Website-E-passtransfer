//import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import law3 from "../assets/law3.jpg";
import PassfotoGesetzesänderungabMai2025 from "../assets/blogs.jpg";
import hero2 from "../assets/hero2.jpg";
/* eslint-disable no-irregular-whitespace */
const GesetzesaenderungEpass = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* First Image Section */}
        <div className="w-full flex justify-center mb-6">
          <img
            src={law3}
            alt="GesetzesänderungfürPassfotos"
            className="rounded-lg shadow-md w-full sm:w-5/6 md:w-3/4 lg:w-3/4 lg:h-auto h-[120px]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-5/6 md:w-3/4 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
            Gesetzesänderung für Passfotos ab Mai 2025: Was Sie wissen müssen
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
            Ab dem 1. Mai 2025 treten neue gesetzliche Vorgaben für Passfotos in
            Deutschland in Kraft. Ziel dieser Reform ist es, die Sicherheit und
            Qualität biometrischer Fotos zu gewährleisten und Manipulationen zu
            verhindern. Hier erfahren Sie alles Wichtige über die Änderungen und
            das neue E-Passfoto-Verfahren.
          </p>
        </div>

        {/* Additional Text Section */}
        <div className="w-full sm:w-5/6 md:w-3/4 text-left mt-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6">
            Was ändert sich ab dem 01.05.2025?
          </h2>
          <h2 className="text-lg sm:text-2xl md:text-xl font-bold text-black mb-6">
            Passfotos nur vom zertifizierten Fotografen
          </h2>{" "}
          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
            <li>
              <span className="font-bold"></span> Ab dem 1. Mai 2025 dürfen
              Passfotos nur noch von zertifizierten Fotografen erstellt werden.
              <br></br>
            </li>
            <li>
              <span className="font-bold"></span> Selbstgemachte Fotos, Bilder
              aus Fotokabinen (außerhalb des Amtes) oder aus Foto-Apps sind
              nicht mehr zulässig.
              <br></br>
            </li>
          </ul>
        </div>

        {/* Second Image Section */}

        {/* New Text Section */}
        <div className="w-full sm:w-5/6 md:w-3/4 text-left">
          <h2 className="text-lg mt-6 sm:text-lg md:text-lg font-bold text-black mb-6">
            Digitale Übermittlung an Behörden
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
            <li>
              <span className="font-bold"></span> Ihr Foto wird vom Fotografen
              verschlüsselt über das E-Passtransfer-System in eine sichere Cloud
              übertragen.
              <br></br>
            </li>
            <li>
              <span className="font-bold"></span> Bei Vorlage des QR-Codes wird
              das Bild direkt und sicher an die zuständigen Behörden
              übermittelt. Es ist sofort einsatzbereit.
              <br></br>
            </li>
          </ul>
          <h2 className="text-lg sm:text-lg md:text-lg font-bold text-black mb-6 mt-4">
            Mehr Sicherheit für Dokumente
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
            <li>
              Die neue Regelung soll Identitätsdiebstahl verhindern und die
              Sicherheit hoheitlicher Dokumente, wie Reisepässe und
              Personalausweise, erhöhen.
            </li>
          </ul>

          <h2 className="text-lg sm:text-lg md:text-lg font-bold text-black mb-6 mt-4">
            Warum diese Änderung?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
            Die Passfoto-Gesetzesänderung ab Mai 2025 zielt darauf ab:
          </p>
          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
            <li>
              Die Qualität biometrischer Passfotos sicherzustellen, sodass diese
              den gesetzlichen Anforderungen entsprechen.
            </li>
            <li>
              Manipulationen und Missbrauch durch manipulierte oder gefälschte
              Fotos zu verhindern.
            </li>
            <li>
              Den Medienbruch zu vermeiden, indem Passfotos direkt und sicher
              vom Fotografen an die Behörde übermittelt werden.
            </li>
          </ul>
          <div className="w-full flex justify-center my-10">
            <img
              src={hero2}
              alt="PassfotoGesetzesänderung"
              className="rounded-lg shadow-md w-full sm:w-5/6 md:w-3/4 lg:w-[100%] lg:h-auto h-[120px]"
            />
          </div>
          {/* How the System Works */}
          <h2 className="text-lg sm:text-lg md:text-lg font-bold text-black mb-6 mt-4">
            So funktioniert das neue E-Passfoto-Verfahren
          </h2>
          <div className="space-y-4">
            <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
              <li>
                <strong>Professionelle Erstellung:</strong> Ein zertifizierter
                Fotograf erstellt Ihr Passfoto mit professioneller Ausrüstung
                und prüft es auf die biometrischen Vorgaben.
              </li>
              <li>
                <strong>Digitale Übertragung:</strong> Ihr Foto wird vom
                Fotografen verschlüsselt über das E-Passfoto-System in eine
                sichere Cloud hochgeladen.
              </li>
              <li>
                <strong>QR-Code-Generierung:</strong> Sie erhalten einen
                individuellen QR-Code, mit dem die Behörde Ihr Bild abrufen
                kann.
              </li>
              <li>
                <strong>Hohe Qualität und Sicherheit:</strong> Ihr E-Passbild
                wird erstellt und direkt vom Fotografen auf die aktuellen
                gesetzlichen Anforderungen geprüft.
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-center my-10">
            <img
              src={PassfotoGesetzesänderungabMai2025}
              alt="Passfoto Gesetzesänderung"
              className="rounded-lg shadow-md w-full sm:w-5/6 md:w-3/4 lg:w-[100%] lg:h-auto h-[120px]"
            />
          </div>
          {/* FAQ Section */}
          <h2 className="tex-t3xl sm:text-2xl md:text-3xl font-bold text-black mb-6 mt-4">
            Häufig gestellte Fragen (FAQs)
          </h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
              <strong>
                Warum dürfen ab Mai 2025 keine selbstgemachten Passfotos mehr
                verwendet werden?
              </strong>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
              Die neuen Regelungen sollen Manipulationen und Missbrauch
              verhindern. Selbstgemachte Fotos oder Fotos aus Fotokabinen
              außerhalb des Amtes erfüllen oft nicht die biometrischen
              Anforderungen. Mehr dazu erfahren Sie in unserem Artikel über
              häufige Fehler bei biometrischen Passfotos.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-black  mb-4">
              <strong>
                Wie funktioniert die Übermittlung der Passfotos an die Behörden?
              </strong>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
              Ein zertifizierter Fotograf überträgt Ihr Foto sicher und
              verschlüsselt über das E-Passfoto-System in eine geschützte Cloud.
              Der QR-Code ermöglicht es der Behörde, das Bild direkt und sicher
              abzurufen. Mehr dazu auf unserer Seite über das digitale Passfoto.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-black  mb-4">
              <strong>
                Kann ich mein Passfoto nachträglich bearbeiten lassen?
              </strong>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
              Nein, biometrische Passfotos dürfen nicht nachbearbeitet werden.
              Deshalb ist es wichtig, ein professionelles Studio aufzusuchen.
              Tipps zur Vorbereitung finden Sie in unserem Artikel über die
              richtige Kleidung für Ihr biometrisches Passbild oder das richtige
              Make-up für Ihr Passfoto.
            </p>
          </div>

          {/* Call-to-Action */}
          <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold text-black mb-6 mt-4">
            Fazit: Setzen Sie auf zertifizierte Fotografen
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
            Ab dem 1. Mai 2025 können Sie Ihre Passfotos weiterhin bei
            registrierten, professionellen Fotografen erstellen lassen. Mit dem
            E-Passtransfer-Verfahren profitieren Sie von:
          </p>
          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
            <li>
              Einem sicheren, manipulationsfreien Prozess, der den gesetzlichen
              Anforderungen entspricht.
            </li>
            <li>Hochwertigen, professionellen Passfotos.</li>
            <li>
              Einem schnellen, stressfreien Ablauf in entspannter Atmosphäre.
            </li>
          </ul>
          <div className="space-y-2 mt-6">
            <Link to="/map">
              <button className=" text-black block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition  ">
                Jetzt einen zertifizierten Fotografen in Ihrer Nähe finden
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GesetzesaenderungEpass;
