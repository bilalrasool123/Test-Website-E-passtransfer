const ImpressumRossmaan = () => {
  return (
    <section
      aria-label="Impressum"
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: "url('/passport_bg10.png')" }}
    >
      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 lg:px-0 py-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 text-center">
          Impressum
        </h2>

        <div className="text-gray-700 text-center space-y-4">
          <p>
            <strong>Dirk Rossmann GmbH</strong>
            <br />
            Isernhägener Straße 16
            <br />
            30938 Burgwedel
            <br />
            Deutschland
          </p>

          <p>
            <strong className="text-red-600">
              E-Mail: passbildservice@rossmann.de
            </strong>
          </p>

          <p>Vertreten durch die Geschäftsführung.</p>

          <p>
            Handelsregister: Amtsgericht Hannover
            <br />
            Registernummer: HRB 12010
          </p>

          <p>
            <strong>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
            </strong>
            <br />
            DE115801763
          </p>

          <div className="w-14 h-[2px] bg-gray-300 mx-auto my-6" />

          <h3 className="text-lg font-semibold">Rechtlicher Hinweis</h3>
          <p>
            Die Inhalte dieser App dienen der Erstellung und Bereitstellung
            digitaler Passbilder für den privaten Gebrauch.
          </p>
          <p>Eine behördliche Übermittlung von Daten findet nicht statt.</p>
        </div>
      </div>
    </section>
  );
};

export default ImpressumRossmaan;
