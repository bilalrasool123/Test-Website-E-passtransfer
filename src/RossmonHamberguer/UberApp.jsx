const UberApp = () => {
  return (
    <section
      aria-label="Über die App"
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/passport_bg10.png')" }}
    >
      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 lg:px-0 py-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          Über die App
        </h2>

        <div className="text-center text-gray-700">
          <p className="mb-6">
            Die Passbild-App ermöglicht es, digitale Passbilder bequem von zu
            Hause aus zu erstellen.
          </p>

          <p className="mb-6">
            Nach der Erstellung wird ein QR-Code bereitgestellt, mit dem das
            Passbild ausschließlich in teilnehmenden Rossmann-Filialen
            ausgedruckt werden kann.
          </p>

          <p className="mb-6">
            Ein Ausdruck bei anderen Anbietern oder eine Nutzung außerhalb des
            Rossmann-Services ist nicht vorgesehen.
          </p>

          <p className="mb-6">
            Die App dient ausschließlich der privaten Nutzung.
            <br />
            Eine Übermittlung von Daten oder Bildern an Behörden findet nicht
            statt.
          </p>

          <p className="mb-0">
            Die Verantwortung für die Auswahl und Verwendung des Passbildes
            liegt beim Nutzer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UberApp;
