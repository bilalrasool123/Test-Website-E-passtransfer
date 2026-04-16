/* eslint-disable no-irregular-whitespace */
import { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const BusinessStudios = () => {
  const [studios, setStudios] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [editingStudio, setEditingStudio] = useState(null);

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    zipcode: "",
    website: "",
    shop_phone: "",
    latitude: "",
    longitude: "",
    certificate_file: "",
    default: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [userType, setUserType] = useState(""); // 'owner' or 'employee'
  const [fetchingStudios, setFetchingStudios] = useState(false);

  const token = sessionStorage.getItem("authToken");
  const base_url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await fetch(`${base_url}/photobooth/profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserType(data.user_type);
          fetchStudios();
        }
      } catch (error) {
        console.error("Fehler beim Abrufen der Benutzerrolle:", error);
      }
    };

    fetchUserRole();
  }, [token]);

  const handleOpenModal = () => {
    const isFirstStudio = studios.length === 0;
    setForm({
      name: "",
      address: "",
      city: "",
      zipcode: "",
      website: "",
      shop_phone: "",
      latitude: "",
      longitude: "",
      certificate_file: "",
      default: isFirstStudio,
    });
    setUploadedFileName("");
    setShowModal(true);
  };

  const handleOpenEditModal = (studio) => {
    setEditingStudio(studio);
    setForm({
      name: studio.name,
      address: studio.address,
      city: studio.city,
      zipcode: studio.zipcode,
      website: studio.website,
      shop_phone: studio.shop_phone,
      latitude: studio.latitude,
      longitude: studio.longitude,
      certificate_file: studio.certificate_file,
      default: studio.default,
    });
    setUploadedFileName(studio.certificate_file ? "Existing file" : "");
    setShowEditModal(true);
  };

  const fetchStudios = async () => {
    try {
      setFetchingStudios(true);
      const response = await fetch(`${base_url}/photobooth/registered-shops/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      //  console.log("hhhhhhhhhh", data);
      if (response.ok) {
        const studiosWithCertificates = await Promise.all(
          data.map(async (studio) => {
            try {
              const certResponse = await fetch(
                `${base_url}/photobooth/get-certificate-url/${studio.id}/`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                },
              );
              if (certResponse.ok) {
                const certData = await certResponse.json();
                return {
                  ...studio,
                  certificate_file: certData.certificate_url || null,
                };
              }
              return studio;
            } catch (error) {
              console.error("Error fetching certificate URL:", error);
              return studio;
            }
          }),
        );

        setStudios(studiosWithCertificates);
      } else {
        setStatus("❌ Fehler beim Laden der Studios.");
      }
    } catch (error) {
      console.error("❌ Fehler beim Laden:", error);
      setStatus("❌ Netzwerkfehler.");
    } finally {
      setFetchingStudios(false);
    }
  };

  const geocodeAddress = async () => {
    if (!form.address || !form.city || !form.zipcode) {
      alert(
        "Bitte geben Sie eine vollständige Adresse ein (Straße, Stadt, PLZ)",
      );
      return null;
    }

    try {
      const fullAddress = `${form.address}, ${form.zipcode} ${form.city}, Germany`;
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          fullAddress,
        )}&key=AIzaSyBMFfmTUPok8HD1ZviaBfQfs2XFJKSB6LA`,
      );

      if (!response.ok) {
        throw new Error("Fehler beim Abrufen der Koordinaten.");
      }

      const data = await response.json();
      if (data.status === "ZERO_RESULTS") {
        alert("Adresse nicht gefunden. Bitte überprüfen Sie die Eingabe.");
        return null;
      }

      return data.results[0].geometry.location;
    } catch (error) {
      console.error("Geocoding error:", error);
      alert(
        "Fehler beim Abrufen der Koordinaten. Bitte versuchen Sie es später erneut.",
      );
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("❗Bitte erneut anmelden.");
      return;
    }

    if (!form.name || !form.address || !form.city || !form.zipcode) {
      alert("Bitte füllen Sie alle erforderlichen Felder aus!");
      return;
    }

    // Add alert for certificate file
    if (!form.certificate_file) {
      alert("Bitte laden Sie eine Gewerbeschein-Datei hoch!");
      return;
    }

    try {
      setLoading(true);

      const location = await geocodeAddress();
      if (!location) return;

      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("address", form.address);
      formData.append("city", form.city);
      formData.append("zipcode", form.zipcode);
      formData.append("website", form.website);
      formData.append("shop_phone", form.shop_phone);
      formData.append("latitude", location.lat.toFixed(7));
      formData.append("longitude", location.lng.toFixed(7));
      formData.append("default", form.default.toString());

      if (form.certificate_file) {
        formData.append("certificate_file", form.certificate_file);
      }

      const response = await fetch(`${base_url}/photobooth/registered-shops/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      // console.log("postdata", data);
      if (response.ok) {
        setForm({
          name: "",
          address: "",
          city: "",
          zipcode: "",
          website: "",
          shop_phone: "",
          latitude: "",
          longitude: "",
          certificate_file: null,
          default: false,
        });
        setStatus("");
        setShowModal(false);
        fetchStudios();
      } else {
        console.error("❌ Fehler:", data);
        setStatus("❌ Fehler beim Hinzufügen.");
      }
    } catch (error) {
      console.error("❌ Serverfehler:", error);
      setStatus("❌ Netzwerk-/Serverfehler.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!token || !editingStudio) {
      alert("❗Bitte erneut anmelden.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("address", form.address);
      formData.append("city", form.city);
      formData.append("zipcode", form.zipcode);
      formData.append("website", form.website);
      formData.append("shop_phone", form.shop_phone);
      formData.append("default", form.default.toString());

      if (form.certificate_file && typeof form.certificate_file !== "string") {
        formData.append("certificate_file", form.certificate_file);
      }

      const response = await fetch(
        `${base_url}/photobooth/registered-shops/${editingStudio.id}/`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );

      if (response.ok) {
        setShowEditModal(false);
        fetchStudios();
      } else {
        const data = await response.json();
        console.error("❌ Fehler:", data);
        setStatus("❌ Fehler beim Aktualisieren.");
      }
    } catch (error) {
      console.error("❌ Serverfehler:", error);
      setStatus("❌ Netzwerk-/Serverfehler.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (studioId) => {
    if (studios.length <= 1) {
      alert("Sie müssen mindestens ein Studio haben.");
      return;
    }

    const studioToDelete = studios.find((studio) => studio.id === studioId);
    if (studioToDelete?.default) {
      alert(
        "Sie können das Standard-Studio nicht löschen. Bitte setzen Sie zuerst ein anderes Studio als Standard.",
      );
      return;
    }

    const confirmDelete = window.confirm(
      "Möchten Sie dieses Studio wirklich dauerhaft löschen?",
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${base_url}/photobooth/registered-shops/${studioId}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.ok) {
        setStudios(studios.filter((studio) => studio.id !== studioId));
        alert("✅ Studio erfolgreich gelöscht.");
      } else {
        alert("❌ Fehler beim Löschen des Studios.");
      }
    } catch (error) {
      console.error("Löschfehler:", error);
      alert("❌ Netzwerk-/Serverfehler beim Löschen.");
    }
  };

  const handleSetDefault = async (studioId) => {
    try {
      const response = await fetch(
        `${base_url}/photobooth/registered-shops/${studioId}/`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            default: true,
          }),
        },
      );

      if (response.ok) {
        setStudios(
          studios.map((studio) => ({
            ...studio,
            default: studio.id === studioId,
          })),
        );
        fetchStudios();
      } else {
        alert("❌ Fehler beim Setzen des Standard-Studios.");
      }
    } catch (error) {
      console.error("Fehler beim Setzen des Standard-Studios:", error);
      alert("❌ Netzwerk-/Serverfehler.");
    }
  };

  const filteredStudios = studios.filter(
    (studio) =>
      studio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      studio.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      studio.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      studio.zipcode.toString().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div className="order-1 md:order-none">
          <h1 className="text-2xl md:text-3xl font-bold text-black">
            Meine Standorte
          </h1>
          <p className="mt-2 md:mt-8 text-gray-500 text-sm">
            Verwalten Sie hier alle Ihre registrierten Fotostandorte. Sie können
            <br></br>
            jederzeit weitere Standorte hinzufügen oder bestehende löschen.
          </p>
        </div>

        {/* Only show add button for owner */}
        {userType === "owner" && (
          <button
            onClick={handleOpenModal}
            className="order-2 md:order-none bg-yellow-300 hover:bg-yellow-200 text-black px-4 py-2 rounded font-semibold transition-colors duration-200 self-start md:self-auto "
          >
            Standort hinzufügen
          </button>
        )}
      </div>

      {/* Search input - visible to all */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Standort suchen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md border-b-2 border-gray-300 outline-none p-2 focus:border-yellow-300 transition-colors duration-200"
        />
      </div>

      {status && <p className="mb-4 text-sm text-gray-600">{status}</p>}

      {fetchingStudios ? (
        <div className="flex justify-center mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-300"></div>
        </div>
      ) : filteredStudios.length > 0 ? (
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700 font-medium">
              <tr>
                <th className="px-6 py-3 text-left">Standortname</th>
                <th className="px-6 py-3 text-left">Adresse</th>
                <th className="px-6 py-3 text-left">PLZ</th>
                <th className="px-6 py-3 text-left">Ort</th>
                <th className="px-6 py-3 text-left">Gewerbeschein</th>
                <th className="px-6 py-3 text-left">Standard</th>
                {userType === "owner" && (
                  <th className="px-6 py-3 text-center">Aktionen</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudios.map((studio, index) => (
                <tr
                  key={studio.id || index}
                  className={`hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">{studio.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {studio.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {studio.zipcode}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{studio.city}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {studio.certificate_file ? (
                      <a
                        href={studio.certificate_file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        Anzeigen
                      </a>
                    ) : (
                      <span className="text-gray-400 italic">
                        Nicht hochgeladen
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {studio.default ? (
                      <span className="text-green-600 font-medium">
                        ✓ Standard
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  {userType === "owner" && (
                    <td className="px-6 py-4 whitespace-nowrap text-center space-x-2">
                      <button
                        onClick={() => handleOpenEditModal(studio)}
                        className="text-blue-600 hover:text-blue-400 transition-colors duration-200"
                        title="Bearbeiten"
                      >
                        <MdEdit size={20} />
                      </button>
                      {!studio.default && (
                        <button
                          onClick={() => handleSetDefault(studio.id)}
                          className="text-green-600 hover:text-green-400 text-sm font-medium"
                        >
                          {/* Als Standard */}
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(studio.id)}
                        className="text-yellow-300 hover:text-yellow-200 transition-colors duration-200"
                        title="Löschen"
                      >
                        <MdDelete size={20} />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-8 text-center text-gray-500">
          Derzeit ist kein Standort hinterlegt.
        </p>
      )}

      {/* Add Studio Modal */}
      {userType === "owner" && showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
            <h2 className="text-xl font-semibold mb-4">
              Neuen Standort hinzufügen
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 scroll-y max-h-[80vh] overflow-y-auto"
            >
              <div>
                <input
                  type="text"
                  placeholder="Standortname"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full border-b-2 border-gray-300 outline-none p-2 focus:border-yellow-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Adresse (inkl. Hausnummer)"
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  required
                  className="w-full border-b-2 border-gray-300 outline-none p-2 focus:border-yellow-300"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Postleitzahl"
                  value={form.zipcode}
                  onChange={async (e) => {
                    let zip = e.target.value.replace(/\D/g, "");
                    if (zip.length > 5) {
                      zip = zip.slice(0, 5);
                    }

                    setForm((prev) => ({ ...prev, zipcode: zip, city: "" }));

                    if (zip.length === 5) {
                      try {
                        const res = await fetch(
                          `https://api.zippopotam.us/de/${zip}`,
                        );
                        const data = await res.json();
                        const city = data.places?.[0]["place name"];
                        if (city) {
                          setForm((prev) => ({ ...prev, city }));
                        }
                      } catch (err) {
                        console.error("ZIP not found:", err);
                      }
                    }
                  }}
                  required
                  className="w-full border-b-2 border-gray-300 outline-none p-2 focus:border-yellow-300"
                  inputMode="numeric"
                  maxLength={5}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Ort"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  required
                  className="w-full border-b-2 border-gray-300 outline-none p-2 focus:border-yellow-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Website"
                  value={form.website}
                  onChange={(e) =>
                    setForm({ ...form, website: e.target.value })
                  }
                  className="w-full border-b-2 border-gray-300 outline-none p-2 focus:border-yellow-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Telefon"
                  value={form.shop_phone}
                  onChange={(e) =>
                    setForm({ ...form, shop_phone: e.target.value })
                  }
                  className="w-full border-b-2 border-gray-300 outline-none p-2 focus:border-yellow-300 text-black"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="defaultStudio"
                  checked={form.default}
                  onChange={(e) =>
                    setForm({ ...form, default: e.target.checked })
                  }
                  className="mr-2"
                />
                <label
                  htmlFor="defaultStudio"
                  className="text-sm text-gray-700"
                >
                  Als Standard-Studio festlegen
                </label>
              </div>

              <div className="mb-4">
                <h2 className="font-semibold text-gray-800">
                  Nachweis der gewerblichen Tätigkeit
                </h2>
                <p className="text-sm text-gray-700 mt-1 mb-2">
                  Wenn Sie beim Gewerbeamt gemeldet sind, ist das großartig!
                  Falls nicht, reicht auch ein anderer Nachweis, wie zum
                  Beispiel:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
                  <li>Gewerbeanmeldung</li>
                  <li>Handelsregisterauszug (z. B. von der IHK oder HWK)</li>
                  <li>Handwerkskarte</li>
                  <li>Bescheinigung vom Finanzamt mit Tätigkeitsangabe</li>
                </ul>

                <label
                  htmlFor="certificate_file"
                  className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50 cursor-pointer hover:border-blue-400 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  {uploadedFileName ? (
                    <p className="text-sm text-gray-600 font-medium">
                      {uploadedFileName}
                    </p>
                  ) : (
                    <p className="text-sm text-gray-600">
                      Bitte laden Sie den Gewerbeschein als PDF-Datei hoch. Nur
                      PDF-Dateien werden akzeptiert.
                    </p>
                  )}
                </label>
                <input
                  id="certificate_file"
                  type="file"
                  accept=".pdf"
                  onChange={(e) => {
                    setForm({ ...form, certificate_file: e.target.files[0] });
                    setUploadedFileName(e.target.files[0]?.name || "");
                  }}
                  className="hidden"
                />
              </div>

              {form.latitude && form.longitude && (
                <div className="text-sm text-gray-500">
                  Koordinaten: {form.latitude}, {form.longitude}
                </div>
              )}

              <div className="flex justify-between float-right pt-4">
                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors duration-200"
                  >
                    Abbrechen
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-yellow-300 hover:bg-yellow-200 text-black rounded transition-colors duration-200 disabled:opacity-50"
                  >
                    {loading ? "Wird gesendet..." : "Hinzufügen"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Studio Modal */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
            <h2 className="text-xl font-semibold mb-4">Standort bearbeiten</h2>
            <form
              onSubmit={handleUpdate}
              className="space-y-4 scroll-y max-h-[80vh] overflow-y-auto"
            >
              <div>
                <input
                  type="text"
                  placeholder="Standortname"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full border-b-2 border-gray-300 outline-none p-2 focus:border-yellow-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Adresse (inkl. Hausnummer)"
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  required
                  className="w-full border-b-2 border-gray-300 outline-none p-2 focus:border-yellow-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Postleitzahl"
                  value={form.zipcode}
                  onChange={(e) =>
                    setForm({ ...form, zipcode: e.target.value })
                  }
                  required
                  className="w-full border-b-2 border-gray-300 outline-none p-2 focus:border-yellow-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Ort"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  required
                  className="w-full border-b-2 border-gray-300 outline-none p-2 focus:border-yellow-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Website"
                  value={form.website}
                  onChange={(e) =>
                    setForm({ ...form, website: e.target.value })
                  }
                  className="w-full border-b-2 border-gray-300 outline-none p-2 focus:border-yellow-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Telefon"
                  value={form.shop_phone}
                  onChange={(e) =>
                    setForm({ ...form, shop_phone: e.target.value })
                  }
                  className="w-full border-b-2 border-gray-300 outline-none p-2 focus:border-yellow-300 text-black"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="defaultStudioEdit"
                  checked={form.default}
                  onChange={(e) =>
                    setForm({ ...form, default: e.target.checked })
                  }
                  className="mr-2"
                />
                <label
                  htmlFor="defaultStudioEdit"
                  className="text-sm text-gray-700"
                >
                  Als Standard-Studio festlegen
                </label>
              </div>

              <div className="mb-4">
                <h2 className="font-semibold text-gray-800">
                  Nachweis der gewerblichen Tätigkeit
                </h2>
                <label
                  htmlFor="certificate_file_edit"
                  className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50 cursor-pointer hover:border-blue-400 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  {uploadedFileName ? (
                    <p className="text-sm text-gray-600 font-medium">
                      {uploadedFileName}
                    </p>
                  ) : (
                    <p className="text-sm text-gray-600">
                      {editingStudio?.certificate_file
                        ? "Zertifikat vorhanden (neues hochladen zum Ändern)"
                        : "Bitte laden Sie den Gewerbeschein als PDF-Datei hoch."}
                    </p>
                  )}
                </label>
                <input
                  id="certificate_file_edit"
                  type="file"
                  accept=".pdf"
                  onChange={(e) => {
                    setForm({ ...form, certificate_file: e.target.files[0] });
                    setUploadedFileName(e.target.files[0]?.name || "");
                  }}
                  className="hidden"
                />
              </div>

              <div className="flex justify-between float-right pt-4">
                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowEditModal(false)}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors duration-200"
                  >
                    Abbrechen
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-yellow-300 hover:bg-yellow-200 text-black rounded transition-colors duration-200 disabled:opacity-50"
                  >
                    {loading ? "Wird gespeichert..." : "Speichern"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessStudios;
