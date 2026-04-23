import { Link } from "react-router-dom";

/* eslint-disable no-irregular-whitespace */
const Pressebereich = () => {
  return (
    <div className="bg-white py-10 text-center">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full sm:w-5/6 md:w-3/4 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 ">
            ALLGEMEINE GESCHÄFTSBEDINGUNGEN (AGB)
          </h1>

          <p className="mb-6 text-gray-700">
            Version 1.1 – Stand: 14.04.2026
          </p>

          {/* 1 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>1. Geltungsbereich</b>
            <br />
            <br />
            Diese AGB gelten für alle Verträge zwischen der e-passtransfer GmbH
            und Unternehmern im Sinne des § 14 BGB. Verbraucher sind
            ausgeschlossen.
          </p>

          {/* 2 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>2. Vertragsgegenstand</b>
            <br />
            <br />
            Der Anbieter stellt eine Softwarelösung zur gesetzeskonformen
            Übertragung biometrischer Passbilder bereit.
            <br />
            <br />
            Die Software wird lokal installiert und genutzt.
            <br />
            <br />
            Die Datenübertragung erfolgt verschlüsselt über gesicherte
            Verbindungen.
            <br />
            <br />
            Die Verarbeitung erfolgt über zertifizierte Dienstleister in
            Deutschland.
          </p>

          {/* 3 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>3. Vertragsschluss</b>
            <br />
            <br />
            Der Vertrag kommt durch Registrierung und Freischaltung zustande.
          </p>

          {/* 4 */}
          <div className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>4. Preise und Zahlungsbedingungen</b>
            <br />
            <br />
            Alle Preise verstehen sich zzgl. gesetzlicher Umsatzsteuer.
            <br />
            <br />
            Die Nutzung erfolgt entweder nutzungsbasiert oder im Rahmen eines
            Abonnements:
            <ul className="list-disc list-inside space-y-2 text-center mt-4">
              <li>Pro erfolgreicher Bildübertragung: 0,75 €</li>
              <li>Einmalige Identifikation: 0,99 €</li>
              <li>Monatliches Abonnement: 49,00 € pro Standort</li>
            </ul>
            <p className="mt-4">
              Die Abrechnung erfolgt monatlich per SEPA-Lastschrift.
            </p>
          </div>

          {/* 5 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>5. Nutzungsrechte</b>
            <br />
            <br />
            Der Kunde erhält ein einfaches, nicht übertragbares Nutzungsrecht.
            <br />
            <br />
            Eine Weitergabe oder Manipulation ist untersagt.
          </p>

          {/* 6 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>6. Nutzung der Software</b>
            <br />
            <br />
            Die Nutzung ist ausschließlich für biometrische Passbilder zulässig.
            <br />
            <br />
            Missbrauch ist untersagt.
            <br />
            <br />
            Bei Verstößen kann der Zugang gesperrt werden.
          </p>

          {/* 7 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>7. Verfügbarkeit</b>
            <br />
            <br />
            Der Anbieter stellt die Software im Rahmen der technischen
            Möglichkeiten bereit.
            <br />
            <br />
            Eine unterbrechungsfreie Verfügbarkeit wird nicht geschuldet.
            <br />
            <br />
            Ein Anspruch auf eine bestimmte Verfügbarkeit besteht nicht.
          </p>

          {/* 8 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>8. Drittanbieter</b>
            <br />
            <br />
            Der Anbieter kann Schnittstellen zu Drittsoftware bereitstellen.
            <br />
            <br />
            Der Anbieter haftet nicht für Schäden, die durch Drittanbieter,
            Hosting-Dienstleister oder externe Systeme verursacht werden, sofern
            diese nicht vom Anbieter zu vertreten sind.
          </p>

          {/* 9 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>9. Behördenkontext</b>
            <br />
            <br />
            Der Anbieter stellt ausschließlich die technische Übertragung
            bereit.
            <br />
            <br />
            Eine Haftung für Entscheidungen von Behörden ist ausgeschlossen.
          </p>

          {/* 10 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>10. Haftung</b>
            <br />
            <br />
            Der Anbieter haftet unbeschränkt bei Vorsatz und grober
            Fahrlässigkeit sowie bei Schäden aus der Verletzung von Leben,
            Körper oder Gesundheit.
            <br />
            <br />
            Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung
            wesentlicher Vertragspflichten (Kardinalpflichten). In diesem Fall
            ist die Haftung auf den typischerweise vorhersehbaren Schaden
            begrenzt.
            <br />
            <br />
            Die Haftung ist – unabhängig vom Rechtsgrund – auf 1.000.000 € pro
            Schadensfall begrenzt.
            <br />
            <br />
            Eine Haftung für mittelbare Schäden ist ausgeschlossen,
            insbesondere für entgangenen Gewinn und Folgeschäden.
            <br />
            <br />
            Der Anbieter haftet nicht für Schäden durch Drittanbieter, Hosting
            oder externe Systeme.
          </p>

          {/* 11 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>11. Datenschutz</b>
            <br />
            <br />
            Es gilt die Datenschutzerklärung.
          </p>

          {/* 12 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>12. Vertragslaufzeit</b>
            <br />
            <br />
            Unbefristet. Kündigung mit 14 Tagen Frist zum Monatsende.
          </p>

          {/* 13 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>13. Nachweisverpflichtung</b>
            <br />
            <br />
            Der Kunde darf nur echte Nachweise verwenden. Verstöße führen zur
            Sperrung.
          </p>

          {/* 14 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>14. Änderungen</b>
            <br />
            <br />
            Der Anbieter kann die AGB für die Zukunft anpassen.
          </p>

          {/* 15 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>15. Schlussbestimmungen</b>
            <br />
            <br />
            Es gilt deutsches Recht. Gerichtsstand ist Kiel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pressebereich;