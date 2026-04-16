/* eslint-disable no-irregular-whitespace */
import { Link } from "react-router-dom";
import HilfeAntwortenBild from "../assets/HilfeAntwortenBild.jpg";
import { Helmet } from "react-helmet";

const FAQS = () => {
  return (
    <>
      <Helmet>
        <title>
          {" "}
          Hilfe zur Passbild-Software – Antworten zu e-passtransfer & E-Pass
        </title>
        <meta
          name="description"
          content="Alles zur Software e-passtransfer: So funktioniert die Übertragung digitaler & elektronischer Passbilder mit QR-Code und Cloud – Fragen & Antworten.

"
        />
      </Helmet>
      <div className="bg-white py-10">
        <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
          {/* First Image Section */}
          <div className="w-full flex justify-center mb-6">
            <img
              src={HilfeAntwortenBild}
              alt="HilfeAntwortenBild"
              className="rounded-lg shadow-md w-full sm:w-5/6 md:w-3/4 lg:w-3/4 lg:h-auto h-[120px]"
            />
          </div>

          {/* Text Section */}
          <div className="w-full sm:w-5/6 md:w-3/4 ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
              Häufig gestellte Fragen zu E-Passbildern – Biometrisch &
              Gesetzlich
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
              Sie suchen Informationen rund um E-Passbilder? Hier erfahren Sie
              alles Wichtige: Was sind biometrische Anforderungen? Wie
              funktionieren digitale E-Passbilder? Und wie funktioniert das neue
              E-Passtransfer-Verfahren? Hier finden Sie die Antworten, die Sie
              suchen!
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
              Unser deutschlandweites Netzwerk aus zertifizierten Fotografen
              erstellt Ihr biometrisches E-Passbild mit größter Sorgfalt und
              prüft es auf die aktuellen Anforderungen. Finden Sie ganz
              unkompliziert einen Fotografen in Ihrer Nähe, der Ihr E-Passbild
              professionell und gesetzeskonform anfertigt.
            </p>
          </div>

          {/* Additional Text Section */}
          <div className="w-full sm:w-5/6 md:w-3/4 text-left mt-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6">
              1. Allgemeines zu E-Passbildern
            </h2>
            <h2 className="text-lg sm:text-2xl md:text-2xl font-semibold text-gray-700 mb-6">
              Was ist ein biometrisches E-Passbild?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
              Ein biometrisches E-Passbild erfüllt die gesetzlichen
              Anforderungen für Reisepässe, Personalausweise und andere
              offizielle Dokumente. Es wird in einem festgelegten Format von 35
              x 45 mm erstellt, zeigt Ihr Gesicht frontal und verzichtet auf
              verdeckende Elemente wie Hüte oder Sonnenbrillen.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
              Unsere Fotografen sind darauf spezialisiert, sowohl klassische als
              auch digitale biometrische E-Passbilder professionell und
              zuverlässig anzufertigen.
            </p>
            <h2 className="text-lg sm:text-2xl md:text-2xl font-semibold text-gray-700 mb-2">
              Welche Anforderungen muss ein E-Passbild erfüllen?{" "}
            </h2>
            <li className="text-gray-700 ml-2">35 x 45 mm groß sein</li>
            <li className="text-gray-700 ml-2">
              einen neutralen Gesichtsausdruck zeigen
            </li>
            <li className="text-gray-700 ml-2">
              den Kopf zentriert und frontal aufnehmen
            </li>
            <li className="text-gray-700 ml-2">
              einen hellen, neutralen Hintergrund haben
            </li>
            <br></br>
            <p className="text-sm sm:text-base  text-gray-700  mb-4  ml-2">
              Unsere zertifizierten Fotografen garantieren, dass Ihr E-Passbild
              die gesetzlichen Anforderungen <br></br>erfüllt und problemlos
              akzeptiert wird.
            </p>
            <h2 className="text-lg sm:text-2xl md:text-2xl font-semibold text-gray-700 mb-4">
              2. Das E-Passtransfer-Verfahren
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
              {/* Card 1 */}
              <div className="bg-yellow-300 shadow-lg rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-center">
                  Was ist das neue E-Passtransfer-Verfahren?
                </h3>
                <p className="text-center">
                  Das E-Passtransfer-Verfahren ist eine innovative, sichere und
                  medienbruchfreie Methode zur Erstellung und Übertragung von
                  biometrischen E-Passbildern. Teilnehmende Fotografen laden die
                  E-Passbilder in eine sichere Safe Cloud hoch, von der aus sie
                  über einen QR-Code direkt von den Behörden abgerufen werden
                  können. Dieses Verfahren gewährleistet höchste Sicherheit und
                  Qualität.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-yellow-300 shadow-lg rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-center">
                  Kann ich die biometrischen E-Passbilder öfter verwenden?
                </h3>
                <p className="text-center">
                  Ja, der QR-Code bleibt sechs Monate ab dem Aufnahmedatum
                  gültig. In diesem Zeitraum können Sie das E-Passbild mehrfach
                  nutzen – z. B. für Reisepässe, Personalausweise oder
                  vorläufige Reisepässe.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-yellow-300 shadow-lg rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-center">
                  Ist die Übermittlung meiner E-Passbilder sicher?
                </h3>
                <p className="text-center">
                  Ja, Ihre E-Passbilder werden über eine sichere und
                  verschlüsselte Verbindung in die Safe Cloud übertragen. Das
                  verschlüsselte Bild kann ausschließlich mit dem QR-Code und
                  der behördlichen Software entschlüsselt werden, gemäß den
                  Sicherheitsstandards des BSI TR-03170.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-yellow-300 shadow-lg rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-center">
                  Warum brauche ich ein biometrisches E-Passbild?
                </h3>
                <p className="text-center">
                  Biometrische E-Passbilder sind gesetzlich vorgeschrieben für
                  offizielle Dokumente wie Reisepässe, Personalausweise und
                  Führerscheine. Sie sorgen dafür, dass Ihr Bild maschinenlesbar
                  ist und internationalen Standards entspricht – für eine
                  schnelle und reibungslose Bearbeitung bei Behörden.
                </p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <h2 className="text-lg sm:text-2xl md:text-2xl font-semibold text-gray-700 mb-4">
                Wie wird die Qualität der biometrischen E-Passbilder
                sichergestellt?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
                Unsere zertifizierten Fotografen legen höchsten Wert auf
                Qualität. Jedes E-Passbild wird auf die biometrischen Vorgaben
                geprüft und erfüllt die Anforderungen für Dokumente wie
                Reisepässe und Personalausweise.
              </p>
              <h2 className="text-lg sm:text-2xl md:text-2xl font-semibold text-gray-700 mb-6 ">
                3. Lokale Fotografensuche
              </h2>
              <h2 className="text-lg sm:text-2xl md:text-2xl font-semibold text-gray-700 mb-6 ">
                Wie finde ich den nächstgelegenen Fotografen?
              </h2>
              {/* <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
              Nutzen Sie unsere Fotografensuche und geben Sie Ihren Standort
              ein. Sie erhalten eine Liste von zertifizierten Fotografen in
              Ihrer Nähe.
            </p> */}
              <div className=" mt-8 ">
                <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-2">
                  Finden Sie den passenden Fotografen in Ihrer Nähe ganz einfach
                  mit unserer Fotografensuche!{" "}
                  {/* <a
                  href="https://www.e-passtransfer.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  www.e-passtransfer.de
                </a> */}
                  Klicken Sie auf den Button unten, um zertifizierte Fotografen
                  oder Passbildstudios in ihrer Region zu finden, die den
                  gesetzlichen Anforderungen entsprechen.
                </p>
                <Link to="/map">
                  <button className=" text-black mt-4 block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition ">
                    Fotografen suchen{" "}
                  </button>
                </Link>
                <p className="text-sm sm:text-base md:text-lg text-gray-700  mb-4">
                  Unser Team freut sich darauf, Sie zu unterstützen!
                </p>
                {/* <h2 className="text-lg sm:text-2xl md:text-2xl font-semibold text-gray-700 mb-6">
                Kontaktieren Sie uns!
              </h2>
              <Link to="/Epass-Information">
                <button className=" text-black mt-4 block lg:inline-block font-medium bg-yellow-300  px-3 py-3 mb-4 rounded-lg hover:bg-yellow-200 transition ">
                  Jetzt kontaktieren{" "}
                </button>
              </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQS;
