const Uberuns = () => {
  return (
    <section
      aria-label="Über uns"
      className="bg-cover bg-center  h-screen "
      style={{ backgroundImage: "url('/passport_bg10.png')" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 text-center lg:text-left mt-[12px]">
            Über uns
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="text-gray-700 leading-relaxed text-base sm:text-lg text-center lg:text-left">
              <p className="mb-4">
                Die Passbild-App wird von der{" "}
                <strong className="font-semibold text-gray-900">
                  Dirk Rossmann GmbH
                </strong>{" "}
                angeboten.
              </p>

              <p className="mb-4">
                Ziel des Services ist es, Kundinnen und Kunden eine einfache
                Möglichkeit zu bieten, Passbilder bequem zu Hause zu erstellen
                und diese über einen QR-Code in teilnehmenden Rossmann-Filialen
                ausdrucken zu lassen.
              </p>

              <p className="mb-0">
                Der Service ist auf die Nutzung innerhalb des Rossmann-Angebots
                beschränkt und richtet sich an private Nutzer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uberuns;

{
  /* <div className="absolute inset-0 bg-black/60" aria-hidden="true" />; */
}
