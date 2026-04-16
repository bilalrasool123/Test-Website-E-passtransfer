import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  IbanElement,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const base_url = import.meta.env.VITE_BASE_URL;

const PaymentForm = () => {
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    company_name: "",
  });
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [countryLoading, setCountryLoading] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [authorizationChecked, setAuthorizationChecked] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [isUpdatingPayment, setIsUpdatingPayment] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const [currentUsage, setCurrentUsage] = useState(null);
  const [invoicesLoading, setInvoicesLoading] = useState(false);
  const [usageLoading, setUsageLoading] = useState(false);

  // Function to get payment method logo
  const getPaymentMethodLogo = (method) => {
    if (!method) return "";
    if (method.type === "sepa_debit") {
      return "/sepa.jpg";
    } else if (method.type === "card") {
      return `/visa.jpg`;
    } else if (method.type === "mastercard") {
      return `/master.png`;
    }
    return "";
  };

  const fetchInvoices = async () => {
    try {
      setInvoicesLoading(true);
      const authToken = sessionStorage.getItem("authToken");
      if (!authToken) return;

      const response = await fetch(`${base_url}/payments/get-invoices/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        //  console.log("invoices data", data);
        setInvoices(data);
      }
    } catch (error) {
      console.error("Error fetching invoices:", error);
    } finally {
      setInvoicesLoading(false);
    }
  };
  const calculateCurrentAmount = (numPictures, currentUsage) => {
    // Decide price per picture based on current usage
    const pricePerPicture = currentUsage >= 1000 ? 0.6 : 0.75;
    const subtotal = numPictures * pricePerPicture;
    const vat = subtotal * 0.19;
    const total = subtotal + vat;

    return total.toFixed(2); // Format to 2 decimal places
  };

  const fetchCurrentUsage = async () => {
    try {
      setUsageLoading(true);
      const authToken = sessionStorage.getItem("authToken");
      if (!authToken) return;

      const response = await fetch(`${base_url}/payments/get-current-usage/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      // console.log("curret", response);
      if (response.ok) {
        const data = await response.json();
        //  console.log(data);
        //console.log("Fetching current usage with auth token:", data);

        setCurrentUsage(data);
      }
    } catch (error) {
      console.error("Error fetching current usage:", error);
    } finally {
      setUsageLoading(false);
    }
  };

  const downloadInvoicePdf = async (paymentId) => {
    try {
      const authToken = sessionStorage.getItem("authToken");
      //console.log("Auth token:", authToken);
      if (!authToken) {
        alert("Bitte anmelden, um Rechnungen herunterzuladen");
        return;
      }

      // console.log("Attempting to download invoice PDF for ID:", paymentId);

      const response = await fetch(
        `https://backend.e-passtransfer.de/api/payments/get-invoice-pdf/${paymentId}/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json", // Add this if needed
            // Accept: "application/pdf",
          },
        }
      );
      // console.log("pdf", response);
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(
          errorText || "Rechnung konnte nicht heruntergeladen werden"
        );
      }

      // Check if response is PDF
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/pdf")) {
        const responseData = await response.text();
        console.error("Unexpected response format:", responseData);
        throw new Error("Unerwartetes Antwortformat der Rechnung");
      }

      // Create download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `rechnung_${paymentId}.pdf`;
      document.body.appendChild(a);
      a.click();

      // Cleanup
      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error("Fehler beim Herunterladen der Rechnung:", error);
      alert(error.message || "Fehler beim Herunterladen der Rechnung");
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2"
        );
        if (!response.ok) {
          throw new Error("Fehler beim Abrufen der Länder");
        }

        const data = await response.json();

        const formattedCountries = data
          .map((country) => ({
            name: country.name.common,
            code: country.cca2,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(formattedCountries);
      } catch (error) {
        console.error("Fehler beim Abrufen der Länder:", error);
      } finally {
        setCountryLoading(false);
      }
    };

    const fetchProfileData = async () => {
      try {
        const authToken = sessionStorage.getItem("authToken");
        if (!authToken) {
          throw new Error("Kein Authentifizierungs-Token gefunden");
        }

        const response = await fetch(`${base_url}/photobooth/profile/`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Fehler beim Abrufen der Profildaten");
        }

        const profileData = await response.json();
        const capitalizeName = (name) => {
          return name.toUpperCase();
        };

        setFormData((prev) => ({
          ...prev,
          name: `${capitalizeName(
            profileData.first_name || ""
          )} ${capitalizeName(profileData.last_name || "")}`,
          email: profileData.email || "",
          phone: profileData.phone || "",
          company_name: profileData.company_name || "",
        }));
      } catch (error) {
        console.error("Fehler beim Abrufen der Profildaten:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchPaymentSetup = async () => {
      try {
        const authToken = sessionStorage.getItem("authToken");
        if (!authToken) return;

        const response = await fetch(`${base_url}/payments/setup/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          //  console.log("pymenth dt", data);
          if (data.payment_method) {
            const pm = data.payment_method;
            if (pm.type === "card") {
              setPaymentDetails({
                type: pm.type,
                brand: pm.card.brand,
                last4: pm.card.last4,
              });
            } else if (pm.type === "sepa_debit") {
              setPaymentDetails({
                type: pm.type,
                last4: pm.sepa_debit.last4,
                bank_code: pm.sepa_debit.bank_code,
                country: pm.sepa_debit.country,
              });
            }
            setShowPaymentForm(false);
          } else {
            setShowPaymentForm(true);
          }
        }
      } catch (error) {
        console.error("Error fetching payment setup:", error);
      }
    };

    fetchCountries();
    fetchProfileData();
    fetchPaymentSetup();
    fetchInvoices();
    fetchCurrentUsage();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    const countryCode =
      countries.find((c) => c.name === selectedCountry)?.code || "DE";
    setFormData((prev) => ({
      ...prev,
      country: countryCode,
    }));
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      country: "DE",
    }));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPaymentProcessing(true);

    if (!stripe || !elements) {
      alert(
        "Stripe ist noch nicht initialisiert. Bitte versuchen Sie es erneut."
      );
      setPaymentProcessing(false);
      return;
    }

    if (!authorizationChecked) {
      alert("Bitte bestätigen Sie die Zahlungsautorisierung.");
      setPaymentProcessing(false);
      return;
    }

    try {
      let paymentMethodResult;

      if (paymentMethod === "card") {
        const cardElement = elements.getElement(CardElement);
        paymentMethodResult = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: {
            name: formData.name,
          },
        });
      } else if (paymentMethod === "sepa") {
        const ibanElement = elements.getElement(IbanElement);
        paymentMethodResult = await stripe.createPaymentMethod({
          type: "sepa_debit",
          sepa_debit: ibanElement,
          billing_details: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: {
              line1: formData.line1,
              country: formData.country || "DE",
            },
          },
        });
      }

      if (paymentMethodResult.error) {
        alert(`Fehler: ${paymentMethodResult.error.message}`);
        setPaymentProcessing(false);
        return;
      }

      const authToken = sessionStorage.getItem("authToken");
      if (!authToken) {
        alert(
          "Fehler: Kein Authentifizierungs-Token gefunden. Bitte melden Sie sich zuerst an."
        );
        setPaymentProcessing(false);
        return;
      }

      const endpoint = isUpdatingPayment
        ? `${base_url}/payments/update-payment-method/`
        : `${base_url}/payments/setup/`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          payment_method_id: paymentMethodResult.paymentMethod.id,
          payment_type: paymentMethod,
          customer_details: formData,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert(
          `✅ Zahlungsmethode erfolgreich ${
            isUpdatingPayment ? "aktualisiert" : "eingerichtet"
          }!`
        );

        const refreshResponse = await fetch(`${base_url}/payments/setup/`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (refreshResponse.ok) {
          const refreshData = await refreshResponse.json();
          if (refreshData.payment_method) {
            const pm = refreshData.payment_method;
            if (pm.type === "card") {
              setPaymentDetails({
                type: pm.type,
                brand: pm.card.brand,
                last4: pm.card.last4,
              });
            } else if (pm.type === "sepa_debit") {
              setPaymentDetails({
                type: pm.type,
                last4: pm.sepa_debit.last4,
                bank_code: pm.sepa_debit.bank_code,
                country: pm.sepa_debit.country,
              });
            }
          }
        }

        setShowPaymentForm(false);
        setIsUpdatingPayment(false);
        navigate("/verwaltungsbereich");
      } else {
        alert(
          `${data?.message || "Fehler beim Einrichten der Zahlungsmethode."}`
        );
      }
    } catch (err) {
      console.error("Fehler:", err);
      alert(
        "Fehler: Zahlung konnte nicht verarbeitet werden. Bitte versuchen Sie es erneut."
      );
    } finally {
      setPaymentProcessing(false);
    }
  };

  const handleUpdatePayment = () => {
    setIsUpdatingPayment(true);
    setShowPaymentForm(true);
    setAuthorizationChecked(false);
  };

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("de-DE", options);
  };

  const formatDateTime = (dateString) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("de-DE", options);
  };

  const getCurrentMonthYear = () => {
    const now = new Date();
    const month = now.toLocaleString("de-DE", { month: "long" });
    const year = now.getFullYear();
    return `${month} ${year}`;
  };
  const formatMonthYear = (dateString) => {
    const options = { month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("de-DE", options);
  };
  if (loading || countryLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-yellow-300"></div>
        <span className="ml-4 text-lg">Daten werden geladen...</span>
      </div>
    );
  }

  return (
    <>
      {paymentProcessing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-yellow-300 mb-4"></div>
            <span className="text-lg">
              {paymentMethod === "card"
                ? "Zahlung wird verarbeitet..."
                : "Lastschrift wird autorisiert..."}
            </span>
          </div>
        </div>
      )}

      <div className="p-6 max-w-[967px] mx-auto bg-white rounded-lg shadow-lg mt-10 space-y-6 relative mb-20">
        <h2 className="text-2xl font-bold text-gray-800">Zahlungsformular</h2>

        {/* Current Usage Section */}
        {/* {currentUsage && (
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <h3 className="font-bold mb-2">Aktueller Verbrauch</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Abrechnungszeitraum:</p>
                <p className="font-medium">
                  {formatDate(currentUsage.start_date)} -{" "}
                  {formatDate(currentUsage.end_date)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Verwendete Uploads:</p>
                <p className="font-medium">{currentUsage.current_usage}</p>
              </div>
            </div>
          </div>
        )} */}

        {/* Display saved payment method if exists */}
        {paymentDetails && (
          <div className="bg-yellow-300 p-4 rounded-md mb-4 lg:w-[920px]">
            <h3 className="font-medium mb-2">Gespeicherte Zahlungsmethode:</h3>
            <div className="flex items-start">
              <img
                src={getPaymentMethodLogo(paymentDetails)}
                alt={
                  paymentDetails.type === "sepa_debit"
                    ? "SEPA"
                    : paymentDetails.brand
                }
                className="h-6 mr-3 mt-1"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="flex-1">
                <div className="flex justify-between items-baseline">
                  <p className="font-medium">
                    {paymentDetails.type === "sepa_debit"
                      ? "SEPA Debit"
                      : paymentDetails.brand.charAt(0).toUpperCase() +
                        paymentDetails.brand.slice(1)}
                  </p>
                  <p className="text-black">
                    •••• •••• •••• {paymentDetails.last4}
                  </p>
                </div>

                <div className="mt-1">
                  <p className="text-sm text-black">{formData.name}</p>
                  {paymentDetails.type === "card" && (
                    <p className="text-xs text-black">
                      {paymentDetails.brand.toUpperCase()} Card
                    </p>
                  )}
                  {paymentDetails.type === "sepa_debit" &&
                    paymentDetails.bank_code && (
                      <p className="text-xs text-gray-600">
                        Bank: {paymentDetails.bank_code}{" "}
                        {paymentDetails.country &&
                          `(Land: ${paymentDetails.country})`}
                      </p>
                    )}
                </div>
              </div>
            </div>

            {!showPaymentForm && (
              <button
                onClick={handleUpdatePayment}
                className="mt-4 bg-yellow-100 text-black px-4 py-2 rounded-md transition"
              >
                Zahlungsmethode aktualisieren
              </button>
            )}
          </div>
        )}

        {showPaymentForm && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Payment method selector */}
            <div className="flex space-x-4 mb-4">
              <button
                type="button"
                onClick={() => {
                  setPaymentMethod("card");
                  setAuthorizationChecked(false);
                }}
                className={`px-4 py-2 rounded-md ${
                  paymentMethod === "card"
                    ? "bg-yellow-300 text-black"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Kreditkarte
              </button>
              <button
                type="button"
                onClick={() => {
                  setPaymentMethod("sepa");
                  setAuthorizationChecked(false);
                }}
                className={`px-4 py-2 rounded-md ${
                  paymentMethod === "sepa"
                    ? "bg-yellow-300 text-black"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                SEPA-Lastschrift
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Firma - Always show company name */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Firma
                </label>
                <input
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  type="text"
                  className="w-full border-b border-gray-300 outline-none focus:border-yellow-300 px-3 py-2"
                />
              </div>

              {/* Name des Karteninhabers / Kontoinhabers */}
              <div>
                <label className="block text-sm font-medium  text-gray-600 mb-1">
                  {paymentMethod === "sepa"
                    ? "Kontoinhaber"
                    : "Name des Karteninhabers"}
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full border-b border-gray-300 outline-none focus:border-yellow-300 px-3 py-2"
                />
              </div>

              {/* Card or SEPA Element */}
              <div className="md:col-span-2 border mt-8 mb-8 border-gray-300 rounded p-4">
                {paymentMethod === "card" ? (
                  <CardElement className="p-2" />
                ) : (
                  <IbanElement
                    supportedCountries={["SEPA"]}
                    options={{
                      supportedCountries: ["SEPA"],
                      placeholderCountry: formData.country || "DE",
                    }}
                    className="p-2"
                  />
                )}
              </div>

              {/* Show Ort and Land only for SEPA */}
              {paymentMethod === "sepa" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Ort
                    </label>
                    <input
                      name="line1"
                      value={formData.line1}
                      onChange={handleChange}
                      type="text"
                      className="w-full border-b border-gray-300 outline-none focus:border-yellow-300 px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Land <span className="text-black"></span>
                    </label>
                    <select
                      name="country"
                      value={
                        countries.find((c) => c.code === formData.country)
                          ?.name || ""
                      }
                      onChange={handleCountryChange}
                      required
                      className="w-full border-b border-gray-300 outline-none focus:border-yellow-300 py-2"
                    >
                      <option value="">Land auswählen</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                          {country.name} ({country.code})
                        </option>
                      ))}
                    </select>
                    {formData.country && (
                      <div className="mt-1 text-sm text-gray-500">
                        Ausgewählter Ländercode: {formData.country}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Authorization text and checkbox */}
            {paymentMethod === "sepa" ? (
              <div className="bg-gray-50 p-4 rounded-md text-sm">
                <h3 className="font-bold mb-2">SEPA-Lastschriftmandat</h3>
                <p className="mb-2 text-gray-700">
                  Mit der Eingabe meiner IBAN und durch Klicken auf „Lastschrift
                  autorisieren&quot; erteile ich der
                </p>
                <p className="mb-2 font-medium text-gray-700">
                  e-passtransfer GmbH
                  <br />
                  c/o KITZ – Kieler Innovations- und Technologiezentrum GmbH
                  <br />
                  Schauenburgerstraße 116, 24118 Kiel
                </p>
                <p className="mb-2 text-gray-700">
                  die Ermächtigung, Zahlungen von meinem Konto mittels
                  SEPA-Lastschrift einzuziehen. Zugleich weise ich mein
                  Kreditinstitut an, die von der e-passtransfer GmbH auf mein
                  Konto gezogenen Lastschriften einzulösen.
                </p>
                <p className="mb-2 text-gray-700">
                  Die Abrechnung erfolgt monatlich auf Grundlage der tatsächlich
                  genutzten Leistungen (Pay-per-Use-Modell). Der genaue Betrag
                  wird jeweils vor Abbuchung in einer Leistungsübersicht
                  mitgeteilt.
                </p>
                <p className="mb-2 text-gray-700">
                  Gläubiger-Identifikationsnummer: DE09ZZZ00002805338
                </p>
                <p className="mb-2 text-gray-700">
                  <b>Hinweis:</b> <br></br>Ich kann innerhalb von acht Wochen,
                  beginnend mit dem Belastungsdatum, die Erstattung des
                  belasteten Betrags verlangen. Es gelten dabei die mit meinem
                  Kreditinstitut vereinbarten Bedingungen.
                </p>
                <p className="mb-2 text-gray-700">
                  <b>Datenschutzhinweis:</b> <br></br> Die Verarbeitung Ihrer
                  Daten erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO ausschließlich
                  zur Zahlungsabwicklung im Rahmen unseres
                  Vertragsverhältnisses. Weitere Informationen finden Sie in
                  unserer Datenschutzerklärung.
                </p>
                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="sepaAuthorization"
                    checked={authorizationChecked}
                    onChange={(e) => setAuthorizationChecked(e.target.checked)}
                    className="mr-2"
                  />
                  <label className="text-gray-700" htmlFor="sepaAuthorization">
                    Ich erteile der e-passtransfer GmbH ein
                    SEPA-Lastschriftmandat im Rahmen des monatlichen
                    Pay-per-Use-Modells.
                  </label>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-md text-sm">
                <h3 className="font-bold mb-2 text-black">
                  Kreditkartenzahlung
                </h3>
                <p className="mb-2 text-gray-700">
                  Mit der Eingabe meiner Kreditkartendaten und durch Klicken auf
                  „Kreditkarte autorisieren&quot; erteile ich der
                </p>
                <p className="mb-2 font-medium text-gray-700">
                  e-passtransfer GmbH
                  <br />
                  c/o KITZ – Kieler Innovations- und Technologiezentrum GmbH
                  <br />
                  Schauenburgerstraße 116, 24118 Kiel
                </p>
                <p className="mb-2 text-gray-700">
                  die Ermächtigung, meine Kreditkarte im Rahmen eines
                  monatlichen Pay-per-Use-Modells zu belasten. Die Abrechnung
                  erfolgt automatisch auf Basis der tatsächlich genutzten
                  Leistungen.
                </p>
                <p className="mb-2 text-gray-700">
                  <b>Datenschutzhinweis:</b> <br></br>Die Verarbeitung Ihrer
                  Zahlungsdaten erfolgt verschlüsselt und gemäß Art. 6 Abs. 1
                  lit. b DSGVO ausschließlich zur Zahlungsabwicklung im Rahmen
                  unseres Vertragsverhältnisses. Weitere Informationen finden
                  Sie in unserer Datenschutzerklärung.
                </p>
                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="cardAuthorization"
                    checked={authorizationChecked}
                    onChange={(e) => setAuthorizationChecked(e.target.checked)}
                    className="mr-2"
                  />
                  <label className="text-gray-700" htmlFor="cardAuthorization">
                    Ich erteile der e-passtransfer GmbH die Zustimmung zur
                    monatlichen Kreditkartenbelastung gemäß Pay-per-Use-Modell.
                  </label>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={!stripe || !authorizationChecked || paymentProcessing}
              className="w-full bg-yellow-300 text-black py-3 rounded-md font-semibold hover:bg-yellow-200 transition disabled:bg-gray-300"
            >
              {isUpdatingPayment
                ? "Zahlungsmethode aktualisieren"
                : paymentMethod === "card"
                ? "Kreditkarte autorisieren"
                : "Lastschrift autorisieren"}
            </button>
          </form>
        )}

        {/* Show Monatliche Abrechungen section only when payment method exists */}
        {paymentDetails && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Monatliche Abrechungen
            </h3>
            {invoicesLoading ? (
              <div className="flex justify-center items-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-yellow-300"></div>
                <span className="ml-4">Rechnungen werden geladen...</span>
              </div>
            ) : (
              <div className="overflow-x-auto lg:w-[920px]">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase tracking-wider">
                        Abrechnungsmonat
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase tracking-wider">
                        Verwendete Uploads
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase tracking-wider">
                        Gesamtbetrag
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase tracking-wider">
                        Fälligkeitsdatum
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase tracking-wider">
                        Rechnung
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* Current usage row */}
                    {currentUsage && (
                      <tr key="current" className="bg-gray-50">
                        <td className="px-4 py-2 whitespace-nowrap ">
                          {getCurrentMonthYear()} (aktuell)
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          {currentUsage.current_usage}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          {calculateCurrentAmount(
                            currentUsage.current_usage,
                            currentUsage.current_usage
                          )}{" "}
                          €
                        </td>

                        <td className="px-4 py-2 whitespace-nowrap">
                          {formatDate(currentUsage.end_date)}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <span className="px-2 py-1  ">Laufend</span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-gray-400">
                          Wird erstellt
                        </td>
                      </tr>
                    )}

                    {/* Existing invoices */}
                    {invoices.length > 0 ? (
                      invoices
                        .sort(
                          (a, b) =>
                            new Date(b.billing_period_start) -
                            new Date(a.billing_period_start)
                        )
                        .map((invoice) => (
                          <tr key={invoice.id}>
                            <td className="px-4 py-2 whitespace-nowrap">
                              {formatMonthYear(invoice.billing_period_start)}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              {invoice.photo_upload_count}
                            </td>
                            <td className="px-4 py-2 pl-6 whitespace-nowrap">
                              {invoice.amount} €
                              {/* {invoice.currency.toUpperCase()} */}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              {formatDate(invoice.payment_date)}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              <span
                                className={`px-2 py-1  rounded-full ${
                                  invoice.status === "succeeded"
                                    ? "bg-green-100 text-green-800"
                                    : invoice.status === "processing"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {invoice.status === "succeeded"
                                  ? "Bezahlt"
                                  : invoice.status === "processing"
                                  ? "In Bearbeitung"
                                  : "Fehlgeschlagen"}
                              </span>
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              {invoice.status === "processing" ||
                              invoice.status === "succeeded" ? (
                                <button
                                  onClick={() => downloadInvoicePdf(invoice.id)}
                                  className="text-blue-600 flex gap-2 hover:text-blue-500"
                                >
                                  <FaDownload className="mt-1 text-black" />
                                  PDF
                                </button>
                              ) : (
                                <span className="text-gray-400">
                                  Nicht verfügbar
                                </span>
                              )}
                            </td>
                          </tr>
                        ))
                    ) : (
                      <tr>
                        <td
                          colSpan="6"
                          className="px-4 py-2 text-center text-gray-500"
                        >
                          Keine Rechnungen vorhanden
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

const StripePayment = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default StripePayment;
