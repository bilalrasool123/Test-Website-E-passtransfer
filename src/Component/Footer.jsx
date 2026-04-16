/* eslint-disable no-irregular-whitespace */
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-gray-800  text-white py-8 text-left lg:px-24 "
      id="footer"
    >
      <div className="container  px-4 sm:px-6 lg:px-8 ">
        {/* Grid layout with alignment fix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start text-sm text-center lg:text-left">
          {/* Left Section */}
          <div className="min-w-[250px] lg:ml-12 ">
            <h4 className="text-lg font-semibold">Werde Teil des Netzwerks</h4>
            <p className="mt-2 hover:text-blue-600">
              <Link to="/Registrierung" className="">
                Dein Unternehmen registrieren
              </Link>
            </p>
            <p className="mt-1 hover:text-blue-600">
              <Link to="/Fotografenportal" className="">
                Fotografenportal
              </Link>
            </p>
            <p className="mt-1 hover:text-blue-600">
              <Link to="/behordenbereich-Information" className="">
                Behördenbereich
              </Link>
            </p>
          </div>

          {/* Middle Section */}
          <div className="min-w-[250px] lg:ml-24">
            <h4 className="text-lg font-semibold">Links</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  to="/Pressebereich"
                  className="hover:text-blue-600 transition"
                >
                  AGB
                </Link>
              </li>
              <li>
                <Link
                  to="/datenschutz"
                  className="hover:text-blue-600 transition"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  to="/impressum"
                  className="hover:text-blue-600 transition"
                >
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="min-w-[250px] lg:ml-12">
            <h4 className="text-lg font-semibold mb-2">Kontaktiere uns</h4>
            <a
              href="mailto: info@e-passtransfer.de"
              className="hover:text-blue-600 transition"
            >
              info@e-passtransfer.de
            </a>
            <p className="mt-2 ">+49 431 97994452</p>
          </div>

          {/* Right Section */}
          <div className="min-w-[250px] lg:ml-12">
            <h4 className="text-lg font-semibold">e-passtransfer GmbH</h4>
            <p className="mt-2 ">c/o KITZ – Kieler Innovations- und</p>
            <p className="mt-1 ">Technologiezentrum GmbH</p>
            <p className="mt-1 ">Schauenburgerstraße 116</p>
            <p className="mt-1 ">24118 Kiel</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center">
          <p>
            © {new Date().getFullYear()} e-passtransfer GmbH. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
