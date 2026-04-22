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
            Version 1.0 – Stand: 14.04.2026
          </p>

          {/* 1 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>1. Geltungsbereich</b>
            <br /><br />
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der e-passtransfer GmbH (nachfolgend „Anbieter“) und Unternehmern im Sinne des § 14 BGB.
            <br /><br />
            Verbraucher im Sinne des § 13 BGB sind von der Nutzung ausgeschlossen.
          </p>

          {/* 2 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>2. Vertragsgegenstand</b>
            <br /><br />
            Der Anbieter stellt eine Softwarelösung zur gesetzeskonformen Übertragung biometrischer Passbilder bereit.
            <br /><br />
            Die Software wird lokal installiert und genutzt. Die Datenübertragung erfolgt verschlüsselt über gesicherte Verbindungen.
            <br /><br />
            Die Speicherung und Verarbeitung erfolgt über zertifizierte Dienstleister in Deutschland, insbesondere die Open Telekom Cloud sowie Identifikationsdienste wie Governikus eID.
          </p>

          {/* 3 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>3. Vertragsschluss</b>
            <br /><br />
            Der Vertrag kommt durch Registrierung des Kunden und Freischaltung durch den Anbieter zustande.
          </p>

          {/* 4 */}
          <div className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>4. Preise und Zahlungsbedingungen</b>
            <br /><br />
            Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.
            <br /><br />
            Es gelten folgende Modelle:

            <ul className="list-disc list-inside space-y-2 text-center mt-4">
              <li>Pro erfolgreicher Bildübertragung: 0,75 €</li>
              <li>Einmalige Identifikation: 0,99 €</li>
              <li>Monatliches Abonnement: 49,00 € pro Standort</li>
            </ul>

            <p className="mt-4">
              Das Abonnement gilt jeweils pro Standort. Für mehrere Standorte sind separate Abonnements erforderlich.
              <br /><br />
              Die Abrechnung erfolgt monatlich per SEPA-Lastschrift.
            </p>
          </div>

          {/* 5 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>5. Nutzungsrechte</b>
            <br /><br />
            Der Kunde erhält ein einfaches, nicht übertragbares und standortgebundenes Nutzungsrecht.
            <br /><br />
            Eine Weitergabe, Vervielfältigung oder Manipulation der Software ist untersagt.
          </p>

          {/* 6 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>6. Nutzung der Software</b>
            <br /><br />
            Die Nutzung ist ausschließlich für die Erstellung und Übertragung biometrischer Passbilder zulässig.
            <br /><br />
            Missbrauch, insbesondere durch Verwendung nicht zulässiger Inhalte oder falscher Nachweise, ist untersagt.
            <br /><br />
            Der Anbieter ist berechtigt, bei Verstößen den Zugang zu sperren.
          </p>

          {/* 7 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>7. Verfügbarkeit</b>
            <br /><br />
            Der Anbieter stellt die Software im Rahmen der technischen Möglichkeiten bereit.
            <br /><br />
            Eine jederzeitige oder unterbrechungsfreie Verfügbarkeit wird nicht geschuldet.
            <br /><br />
            Wartungsarbeiten und technisch bedingte Ausfälle sind möglich.
          </p>

          {/* 8 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>8. Drittanbieter und Schnittstellen</b>
            <br /><br />
            Der Anbieter kann Schnittstellen zu Drittsoftware (z. B. Adobe Lightroom) bereitstellen.
            <br /><br />
            Für die Verfügbarkeit, Funktionsfähigkeit und Änderungen dieser Drittanbieter übernimmt der Anbieter keine Haftung.
          </p>

          {/* 9 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>9. Behördenkontext</b>
            <br /><br />
            Der Anbieter stellt ausschließlich die technische Übertragung bereit.
            <br /><br />
            Eine Haftung für Entscheidungen, Verzögerungen oder Ablehnungen durch Behörden ist ausgeschlossen.
          </p>

          {/* 10 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>10. Haftung</b>
            <br /><br />
            Der Anbieter haftet unbeschränkt für Schäden aus Vorsatz und grober Fahrlässigkeit sowie bei Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
            <br /><br />
            Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). In diesem Fall ist die Haftung auf den typischerweise vorhersehbaren Schaden begrenzt.
            <br /><br />
            Die Haftung ist auf 1.000.000 € pro Schadensfall begrenzt.
            <br /><br />
            Eine Haftung für mittelbare Schäden ist ausgeschlossen, insbesondere für entgangenen Gewinn und Folgeschäden.
          </p>

          {/* 11 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>11. Datenschutz</b>
            <br /><br />
            Es gilt die gesonderte Datenschutzerklärung des Anbieters.
          </p>

          {/* 12 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>12. Vertragslaufzeit und Kündigung</b>
            <br /><br />
            Der Vertrag wird auf unbestimmte Zeit geschlossen.
            <br /><br />
            Die Kündigung ist mit einer Frist von 14 Tagen zum Monatsende möglich.
          </p>

          {/* 13 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>13. Nachweisverpflichtung</b>
            <br /><br />
            Der Kunde ist verpflichtet, ausschließlich echte und rechtmäßige Nachweise zu verwenden.
            <br /><br />
            Bei Verstößen ist der Anbieter berechtigt, den Zugang zu sperren und rechtliche Schritte einzuleiten.
          </p>

          {/* 14 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>14. Änderungen der AGB</b>
            <br /><br />
            Der Anbieter behält sich vor, diese AGB mit Wirkung für die Zukunft anzupassen.
            <br /><br />
            Änderungen werden dem Kunden rechtzeitig mitgeteilt.
          </p>

          {/* 15 */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            <b>15. Schlussbestimmungen</b>
            <br /><br />
            Es gilt deutsches Recht.
            <br /><br />
            Gerichtsstand ist der Sitz des Anbieters, sofern der Kunde Kaufmann ist.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Pressebereich;