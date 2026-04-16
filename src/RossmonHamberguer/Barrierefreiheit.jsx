const Barrierefreiheit = () => {
  return (
    <section
      aria-label="Barrierefreiheit"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('/passport_bg10.png')" }}
    >
      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 lg:px-0 py-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          Erklärung zur Barrierefreiheit
        </h2>

        <div className="text-center text-gray-700">
          <p className="mb-6">
            Die Dirk Rossmann GmbH ist bemüht, die Passbild-App barrierefrei
            zugänglich zu machen.
            <br />
            Die App orientiert sich an den geltenden gesetzlichen Vorgaben zur
            digitalen Barrierefreiheit.
          </p>

          <div className="mx-auto my-6" />

          <h3 className="text-lg font-semibold mb-3">
            Stand der Vereinbarkeit
          </h3>
          <p className="mb-6">
            Diese App ist teilweise barrierefrei.
            <br />
            Einzelne Inhalte oder Funktionen können derzeit noch nicht
            vollständig barrierefrei umgesetzt sein.
          </p>

          <div className="mx-auto my-6" />

          <h3 className="text-lg font-semibold mb-3">
            Nicht barrierefreie Inhalte
          </h3>
          <ul className="mb-6 list-disc list-inside text-center mx-auto max-w-xl">
            <li>
              Einzelne grafische Elemente oder Darstellungen können für
              Screenreader eingeschränkt nutzbar sein.
            </li>
            <li>
              Die vollständige Bedienbarkeit über alternative Eingabemethoden
              kann in Einzelfällen eingeschränkt sein.
            </li>
          </ul>

          <p className="mb-6">
            Wir arbeiten kontinuierlich daran, die Barrierefreiheit weiter zu
            verbessern.
          </p>

          <div className="mx-auto my-6" />

          <h3 className="text-lg font-semibold mb-3">Feedback und Kontakt</h3>
          <p className="mb-6">
            Wenn dir Barrieren in der Nutzung der App auffallen oder du Hinweise
            zur Verbesserung hast, kannst du uns gerne kontaktieren:
            <br />
            <strong className="text-red-600">
              E-Mail: passbildservice@rossmann.de
            </strong>
          </p>

          <div className="mx-auto my-6" />

          <h3 className="text-lg font-semibold mb-3">Durchsetzungsverfahren</h3>
          <p className="mb-0">
            Solltest du der Ansicht sein, durch eine nicht ausreichende
            barrierefreie Gestaltung benachteiligt zu sein und keine
            zufriedenstellende Antwort erhalten, kannst du dich an die
            zuständige Durchsetzungsstelle wenden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Barrierefreiheit;
