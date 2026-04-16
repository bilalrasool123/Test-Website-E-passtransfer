const Kontakt = () => {
  return (
    <section
      aria-label="Kontakt"
      className="relative bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/passport_bg10.png')" }}
    >
      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 lg:px-0 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          Kontakt
        </h2>

        <p className="mb-4 text-gray-700">
          Bei Fragen zur Passbild-App oder zum Passbild-Service erreichst du uns
          per E-Mail:
        </p>
        <h2
          className="text-md
         sm:text-2xl md:text-md font-semibold text-gray-900 "
        >
          E-Mail
        </h2>
        <p className="text-red-600 font-medium">passbildservice@rossmann.de</p>
      </div>
    </section>
  );
};

export default Kontakt;
