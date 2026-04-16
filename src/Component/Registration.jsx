/* eslint-disable no-irregular-whitespace */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import relogo from "../assets/newlogo4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Registration = () => {
  const [searchParams] = useSearchParams();
  const isEmployee = searchParams.get("invitation_code") !== null;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [studios, setStudios] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [emailVerify, setEmailVerify] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showStudioForm, setShowStudioForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [shop_phone, setShop_phone] = useState("");
  const [website, setWebsite] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEditingStudio, setIsEditingStudio] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const [useOneFileForAll, setUseOneFileForAll] = useState(false);
  const [sharedFile, setSharedFile] = useState(null); // For single shared file

  // const isValidPhone1 = (phone) => {
  //   if (!phone) return false;
  //   const phoneWithoutPrefix = phone.replace(/^\+/, "");
  //   return phone.startsWith("+49") && /^\d{10,14}$/.test(phoneWithoutPrefix);
  // };
  const base_url = import.meta.env.VITE_BASE_URL;

  const isValidPassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`#$!%^&*()_\-+=[\]{}|\\?'"":;,.<>@]).{8,}$/;
    return passwordRegex.test(password);
  };

  const isStepOneValid = () => {
    if (
      formData.firstName?.trim() === "" ||
      formData.lastName?.trim() === "" ||
      (!isEmployee && formData.phonenumber?.trim() === "") ||
      formData.email?.trim() === "" ||
      formData.password?.trim() === "" ||
      formData.birthDate?.trim() === "" ||
      formData.salutation?.trim() === "" ||
      (!isEmployee && formData.legal_form?.trim() === "") ||
      (isEmployee && formData.invitation_code?.trim() === "")
    ) {
      return false;
    }

    // Check if birth date is in the future
    const today = new Date();
    const selectedDate = new Date(formData.birthDate);
    if (selectedDate > today) {
      alert("❗ Birth date cannot be in the future.");
      return false;
    }

    // Check if password is valid
    if (!isValidPassword(formData.password)) {
      return false;
    }

    return true;
  };

  const isStepTwoValid = () => {
    return (
      studios.length > 0 &&
      studios.every(
        (studio) => studio.uploadedFiles && studio.uploadedFiles.length > 0,
      )
    );
  };

  const isStepThreeValid = () => {
    return uploadedFiles.length > 0; // Changed from uploadedFile !== null
  };

  const [formData, setFormData] = useState({
    salutation: "",
    firstName: "",
    lastName: "",
    username: "",
    birthDate: "",
    phone: "",
    company_name: "",
    legal_form: "",
    website: "",
    email: "",
    phonenumber: "",
    phonenumber1: "",
    password: "",
    user_type: searchParams.get("invitation_code")
      ? searchParams.get("user_type") || "employee"
      : "owner",
    invitation_code: "",
  });

  useEffect(() => {
    const userTypeFromParams = searchParams.get("user_type");
    const determinedType =
      userTypeFromParams === "manager"
        ? "manager"
        : isEmployee
          ? "employee"
          : "owner";

    setFormData((prev) => ({
      ...prev,
      email: searchParams.get("email") || "",
      company_name: searchParams.get("company_name") || "",
      invitation_code: searchParams.get("invitation_code") || "",
      website: searchParams.get("website") || "",
      legal_form: searchParams.get("legal_form") || "",
      user_type: determinedType,
    }));
  }, [searchParams, isEmployee]);

  const [checkboxes, setCheckboxes] = useState({
    privacyPolicy: false,
    termsAndConditions: false,
    mailSubscription: false,
    pilot: false,
  });

  const handleDownload = () => {
    const pdfUrl = "/AGB_E-Passtransfer.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "AGB_E-Passtransfer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadDatenschutz = () => {
    const pdfUrl = "/Datenschutz_E-Passtransfer.pdf"; // relative to public folder
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Datenschutz_E-Passtransfer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isFutureDate = (dateString) => {
    const selected = new Date(dateString);
    const today = new Date();
    return selected > today;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "birthDate" && isFutureDate(value)) {
      alert("❗ Das Geburtsdatum darf nicht in der Zukunft liegen.");
      return; // Prevent setting invalid date
    }
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  useEffect(() => {
    sessionStorage.removeItem("uploadedFiles"); // Changed from uploadedFile
    setUploadedFiles([]); // Changed from setUploadedFile(null)
  }, []);

  const fetchAddressFromZip = async (zip) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${zip}|country:DE&key=AIzaSyBMFfmTUPok8HD1ZviaBfQfs2XFJKSB6LA`,
      );

      const data = await response.json();

      if (data.status === "OK") {
        const result = data.results[0];
        const components = result.address_components;

        let city = "";
        let street = "";
        let address = "";

        components.forEach((component) => {
          if (component.types.includes("locality")) {
            city = component.long_name;
          }
          if (component.types.includes("route")) {
            street = component.long_name;
          }
          if (component.types.includes("route")) {
            address = component.long_name;
          }
        });

        if (city) setCity(city);
        if (street) setAddress(street);
        if (address) setAddress(address); // optional if street is found
      } else {
        console.warn("No result found for the ZIP code.");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files);

    if (newFiles.length > 0) {
      const fileReaders = newFiles.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve({
              name: file.name,
              type: file.type,
              data: reader.result,
            });
          };
          reader.readAsDataURL(file);
        });
      });

      Promise.all(fileReaders).then((newFileData) => {
        const existingFiles =
          JSON.parse(sessionStorage.getItem("uploadedFiles")) || [];
        const updatedFiles = [...existingFiles, ...newFileData];

        sessionStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
        setUploadedFiles(updatedFiles);
      });
    }
  };

  const handleDeleteFile = (indexToRemove) => {
    const updatedFiles = uploadedFiles.filter(
      (_, index) => index !== indexToRemove,
    );
    sessionStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
    setUploadedFiles(updatedFiles);
  };
  const handleCheckboxChange = (key) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const allCheckboxesChecked =
    checkboxes.privacyPolicy &&
    checkboxes.termsAndConditions;
    // && checkboxes.pilot;

  useEffect(() => {
    sessionStorage.removeItem("studios");
    setStudios([]);
  }, []);

  const handleAddStudio = async () => {
    if (!name || !address || !city || !zipcode) {
      alert("Bitte füllen Sie alle erforderlichen Felder aus!");
      return;
    }

    try {
      const fullAddress = `${address}, ${zipcode} ${city} , Germany`;
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          fullAddress,
        )}&key=AIzaSyBMFfmTUPok8HD1ZviaBfQfs2XFJKSB6LA`,
      );

      if (!response.ok) throw new Error("Fehler beim Abrufen der Koordinaten.");

      const data = await response.json();

      if (data.status === "ZERO_RESULTS") {
        alert("Adresse nicht gefunden. Bitte überprüfen Sie die Eingabe.");
        return;
      }

      const latitude = data.results[0].geometry.location.lat;
      const longitude = data.results[0].geometry.location.lng;

      const studioData = {
        name,
        address,
        city,
        zipcode,
        latitude,
        longitude,
        shop_phone,
        website,
        uploadedFiles:
          useOneFileForAll && sharedFile
            ? [sharedFile.name]
            : [uploadedFiles[uploadedFiles.length - 1]],
        default: true, // 🔥 Always set true when adding new studio
      };

      let updatedStudios = [...studios];

      if (isEditingStudio && editIndex !== null) {
        updatedStudios[editIndex] = studioData;
      } else {
        updatedStudios.push(studioData);
      }

      sessionStorage.setItem("studios", JSON.stringify(updatedStudios));
      setStudios(updatedStudios);

      // Reset form
      setName("");
      setAddress("");
      setCity("");
      setZipcode("");
      setShop_phone("");
      setWebsite("");
      setUploadedFiles([]);
      setEditIndex(null);
      setIsEditingStudio(false);
      setShowStudioForm(false);

      alert(
        isEditingStudio
          ? "Standort erfolgreich bearbeitet!"
          : "Fotostandort erfolgreich hinzugefügt!",
      );
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      alert(
        "Fehler beim Abrufen der Koordinaten. Bitte versuchen Sie es erneut.",
      );
    }
  };

  useEffect(() => {
    const storedStudios = JSON.parse(sessionStorage.getItem("studios")) || [];
    setStudios(storedStudios);
  }, []);

  const handleDelete = (indexToRemove) => {
    const updatedStudios = studios.filter(
      (_, index) => index !== indexToRemove,
    );
    sessionStorage.setItem("studios", JSON.stringify(updatedStudios));
    setStudios(updatedStudios);
    const storedFiles =
      JSON.parse(sessionStorage.getItem("uploadedFiles")) || [];
    const updatedFiles = storedFiles.filter(
      (_, index) => index !== indexToRemove,
    );
    sessionStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
    setUploadedFiles(updatedFiles);
  };

  // Edit studio function
  const handleEditStudio = (index) => {
    const studioToEdit = studios[index];
    setName(studioToEdit.name);
    setAddress(studioToEdit.address);
    setCity(studioToEdit.city);
    setZipcode(studioToEdit.zipcode);
    setShop_phone(studioToEdit.shop_phone);
    setWebsite(studioToEdit.website);
    setEditIndex(index);
    setIsEditingStudio(true);
    setShowStudioForm(true);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      password,
      phonenumber,
      birthDate,
      salutation,
      user_type,
      website,
      company_name,
      legal_form,
      invitation_code,
    } = formData;

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !birthDate ||
      !salutation
    ) {
      alert("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }

    // Ensure owner_code is provided for employees and managers
    if (
      (user_type === "employee" || user_type === "manager") &&
      !invitation_code
    ) {
      alert(
        "Für eingeladene Mitarbeitende und Manager ist der owner_code erforderlich.",
      );
      return;
    }

    // Check if all terms and conditions are agreed to
    if (!allCheckboxesChecked) {
      alert("Bitte stimmen Sie allen Bedingungen zu.");
      return;
    }

    // Sanitize username
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    const sanitizedUsername =
      `${firstName}${lastName}`.toLowerCase().replace(/[^a-z0-9@.+-_]/g, "") +
      randomNumber;

    // Prepare request body
    const requestBody = {
      user: {
        username: sanitizedUsername,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      },
      phone:
        user_type === "employee" || user_type === "manager"
          ? "123456788556"
          : phonenumber, // For employees, use a default number
      date_of_birth: birthDate,
      salutation: salutation,
      website: website,
      company_name: company_name || undefined,
      legal_form: user_type === "employee" ? undefined : legal_form, // Don't include legal_form for employees
      user_type: user_type,
    };

    // Add owner_code for managers and employees
    if (
      (user_type === "employee" || user_type === "manager") &&
      invitation_code
    ) {
      requestBody.invitation_code = invitation_code;
    }

    try {
      const response = await fetch(`${base_url}/photobooth/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      //console.log("Request Body:", requestBody);
      const result = await response.json();
      // console.log(result);
      if (response.ok) {
        setEmail(email);
        setEmailVerify(false);

        // Redirect to OTP verification page
        if (user_type === "employee") {
          alert("✅ Registrierung erfolgreich! ");
          navigate("/Code-Verifizierung", {
            state: {
              email,
              isOwner: false,
            },
          });
        } else {
          navigate("/Code-Verifizierung", {
            state: {
              email,
              isOwner: true, // For manager/owner
            },
          });
        }

        setShowSuccessModal(true);
        return;
      }

      // Handle already registered or verification issues
      if (
        result.user?.email &&
        result.user.email === "Please verify your email."
      ) {
        alert(
          "Registrierung fehlgeschlagen! Ihre E-Mail-Adresse ist bereits registriert. Bitte überprüfen Sie Ihre E-Mail.",
        );
        await handleResendOtp(email);
        setEmail(email);
        setEmailVerify(false);
        navigate("/Code-Verifizierung", { state: { email } });
        setShowSuccessModal(true);
        return;
      }

      if (result.user?.is_verified === true) {
        setEmailVerify(true);
        alert(
          "✅ Benutzer mit dieser E-Mail ist bereits registriert und verifiziert. Bitte melden Sie sich an.",
        );
        return;
      }

      alert(
        "❌ Der Benutzer mit dieser E-Mail-Adresse ist bereits registriert",
      );
    } catch (error) {
      console.error("Netzwerkfehler:", error);
      alert("❗ Es gab ein Problem mit der Verbindung zum Server.");
    }
  };

  const handleResendOtp = async (email) => {
    if (!email) {
      alert("❗ Bitte geben Sie zuerst Ihre E-Mail-Adresse ein.");
      return;
    }

    const requestBody = { email };

    try {
      const response = await fetch(`${base_url}/photobooth/resend-otp/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      //console.log("Resend OTP Response:", data);

      if (response.ok) {
        //  console.log("✅ Ein neues OTP wurde an die E-Mail-Adresse gesendet.");
      } else {
        //   console.log("❌ OTP konnte nicht gesendet werden.");
      }
    } catch (error) {
      console.error("❗ Fehler beim erneuten Senden des OTP:", error);
    }
  };

  const steps = [
    {
      label: "Persönliche Daten",
      content: (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              label: "Anrede *",
              type: "select",
              id: "salutation",
              options: [
                { value: "", text: "Anrede wählen" },
                { value: "Herr", text: "Herr" },
                { value: "Frau", text: "Frau" },
                { value: "Divers", text: "Divers" },
                { value: "Keine Anrede", text: "Keine Anrede" },
              ],
            },
            { label: "Vorname *", type: "text", id: "firstName" },
            { label: "Nachname *", type: "text", id: "lastName" },
            {
              label: "Geburtsdatum *",
              type: "date",
              id: "birthDate",
              max: new Date().toISOString().split("T")[0], // This prevents future dates
            },

            {
              label: "Telefonnummer *",
              type: "text",
              id: "phonenumber",
              // placeholder: "401234567",
            },
            { label: "Firmenname *", type: "text", id: "company_name" },
            {
              label: "Rechtsform *",
              type: "select",
              id: "legal_form",
              options: [
                { value: "", text: "Rechtsform wählen" },
                { value: "ag", text: "AG" },
                { value: "einzelunternehmung", text: "Einzelunternehmung" },
                { value: "ek", text: "e.K." },
                { value: "gbr", text: "GbR" },
                { value: "ug", text: "UG" },
                { value: "gmbh", text: "GmbH" },
                { value: "gmbh-co-kg", text: "GmbH & Co KG" },
                { value: "ohg", text: "OHG" },
              ],
            },
            { label: "Webseite *", type: "url", id: "website" },
            { label: "E-Mail *", type: "email", id: "email" },
            { label: "Passwort *", type: "password", id: "password" },
          ]
            .filter(({ id }) => {
              if (isEmployee && ["phonenumber", "legal_form"].includes(id))
                return false;
              return true;
            })

            .filter(Boolean)
            .map(({ label, type, id, placeholder, options, readOnly }, idx) => (
              <div key={idx}>
                <label className="block text-sm font-bold mb-1" htmlFor={id}>
                  {label}
                </label>
                {type === "select" ? (
                  <select
                    id={id}
                    value={formData[id]}
                    onChange={handleInputChange}
                    readOnly={
                      readOnly || (isEmployee && ["legal_form"].includes(id))
                    }
                    className="w-full border-b-2 border-gray-400 outline-none bg-transparent p-1 focus:border-yellow-300"
                  >
                    {options.map(({ value, text }) => (
                      <option key={value} value={value}>
                        {text}
                      </option>
                    ))}
                  </select>
                ) : id === "password" ? (
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id={id}
                      value={formData[id]}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-400 outline-none p-1 focus:border-yellow-400 pr-8"
                    />
                    <button
                      type="button"
                      className="absolute right-2 mt-4 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                ) : (
                  <input
                    type={type}
                    id={id}
                    value={formData[id]}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    readOnly={
                      readOnly ||
                      (isEmployee &&
                        [
                          "company_name",
                          "legal_form",
                          "website",
                          "invitation_code",
                          "email",
                        ].includes(id))
                    }
                    className={`w-full border-b-2 outline-none p-1 ${
                      readOnly ||
                      (isEmployee &&
                        [
                          "company_name",
                          "legal_form",
                          "website",
                          "invitation_code",
                          "email",
                        ].includes(id))
                        ? "border-gray-300 bg-gray-100 text-gray-600 cursor-not-allowed"
                        : "border-gray-400 focus:border-yellow-300"
                    }`}
                  />
                )}

                {/* {id === "phonenumber" &&
                  formData.phonenumber &&
                  !isValidPhone1(formData.phonenumber) && (
                    <p className="text-red-500 text-sm mt-1">
                      Telefonnummer muss mit <strong>+49</strong> beginnen.
                    </p>
                  )} */}

                {/* {id === "phonenumber" &&
                  formData.phonenumber &&
                  !isValidPhone1(formData.phonenumber) && (
                    <p className="text-red-500 text-sm mt-1">
                      Telefonnummer zwischen <strong>10 bis 14 Ziffern</strong>{" "}
                      enthalten.
                    </p>
                  )} */}
                {id === "password" &&
                  formData.password &&
                  !isValidPassword(formData.password) && (
                    <p className="text-red-500 text-sm mt-1">
                      Das Passwort muss mindestens 8 Zeichen lang sein und einen
                      Großbuchstaben, einen Kleinbuchstaben, eine Zahl und ein
                      Sonderzeichen enthalten.
                    </p>
                  )}
              </div>
            ))}

          <p className="text-sm lg:w-[900px]  text-gray-500 mt-2 texlef">
            Unser Angebot richtet sich ausschließlich an Unternehmer im Sinne
            von § 14 BGB. Ein Vertragsabschluss mit Verbrauchern ist
            ausgeschlossen.{" "}
          </p>
          <br></br>
          <p className="text-sm text-gray-500 mt-2">
            Felder mit * sind Pflichtangaben.{" "}
          </p>
        </form>
      ),
    },
    ...(!isEmployee && formData.user_type !== "manager"
      ? [
          {
            label: "Standort hinzufügen",
            content: (
              <div className="">
                {studios.length === 0 && (
                  <>
                    <p className="text-gray-700 mb-4">
                      Angaben zu Ihrem Standort – Es können mehrere Standorte
                      erfasst werden.
                    </p>
                  </>
                )}

                {studios.length > 0 && (
                  <div className="mt-6 overflow-auto">
                    <table className="w-full border-collapse border border-gray-300 bg-gray-50">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="border border-gray-300 px-4 py-2">
                            Standort
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Adresse{" "}
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            PLZ
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Stadt
                          </th>
                          {/* <th className="border border-gray-300 px-4 py-2">
                            Aktion
                          </th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {studios.map((studio, index) => (
                          <tr key={index} className="border-b">
                            <td className="border text-center border-gray-300 px-4 py-2">
                              {studio.name}
                            </td>
                            <td className="border border-gray-300 text-center px-4 py-2">
                              {studio.address}
                            </td>
                            <td className="border border-gray-300 text-center px-4 py-2">
                              {studio.zipcode}
                            </td>
                            <td className="border text-center border-gray-300 px-4 py-2">
                              {studio.city}
                            </td>
                            {/* <td className="border border-gray-300 px-4 py-2 text-center">
                              <button
                                onClick={() => handleDelete(index)}
                                className="text-yellow-300 hover:text-yellow-200"
                                title="Löschen"
                              >
                                <MdDelete size={23} />
                              </button>
                            </td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div
                  className="flex items-center gap-4 justify-start mt-6 cursor-pointer"
                  onClick={() => setShowStudioForm(true)}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 9l9-7 9 7"></path>
                      <path d="M9 22V12h6v10"></path>
                      <path d="M12 16v6"></path>
                      <path d="M9 19h6"></path>
                    </svg>
                  </div>
                  <span className="text-black text-lg font-semibold">
                    Standort hinzufügen{" "}
                  </span>
                </div>
              </div>
            ),
          },
        ]
      : []),
    ...(!isEmployee && formData.user_type !== "manager"
      ? [
          {
            label: "Standort Übersicht",
            content: (
              <div className="mt-6 overflow-auto">
                <table className="w-full border-collapse border border-gray-300 bg-gray-50">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2">
                        Standort
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Adresse{" "}
                      </th>
                      <th className="border border-gray-300 px-4 py-2">PLZ</th>
                      <th className="border border-gray-300 px-4 py-2">
                        Stadt
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Gewerbenachweis
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Bearbeiten
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Aktion
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {studios.map((studio, index) => (
                      <tr key={index} className="border-b">
                        <td className="border text-center border-gray-300 px-4 py-2">
                          {studio.name}
                        </td>
                        <td className="border border-gray-300 text-center px-4 py-2">
                          {studio.address}
                        </td>
                        <td className="border border-gray-300 text-center px-4 py-2">
                          {studio.zipcode}
                        </td>
                        <td className="border text-center border-gray-300 px-4 py-2">
                          {studio.city}
                        </td>
                        <td className="border text-center border-gray-300 px-4 py-2">
                          {studio.uploadedFiles &&
                          studio.uploadedFiles.length > 0 ? (
                            <ul className="list-disc list-inside text-center">
                              {studio.uploadedFiles.map((file, i) => (
                                <p key={i}>
                                  {file?.name ?? file ?? "Keine Datei"}
                                </p>
                              ))}
                            </ul>
                          ) : (
                            <span className="text-gray-400 italic">
                              Keine Datei
                            </span>
                          )}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => handleEditStudio(index)}
                              className="text-yellow-300 hover:text-yellow-200"
                              title="Bearbeiten"
                            >
                              <MdEdit size={20} />
                            </button>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => handleDelete(index)}
                              className="text-yellow-300 hover:text-yellow-200"
                              title="Löschen"
                            >
                              <MdDelete size={20} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ),
          },
        ]
      : []),
    {
      label: "Zusammenfassung",
      content: (
        <div className="p-6 rounded-lg ">
          <h2 className="text-lg font-bold mb-4">
            {isEmployee
              ? "Überprüfen Sie Ihre Angaben und akzeptieren Sie die erforderlichen rechtlichen Hinweise, um Ihre Registrierung rechtssicher abzuschließen und das System nutzen zu können."
              : "Überprüfen Sie Ihre Angaben und stimmen Sie den Bedingungen zu."}
          </h2>

          <div className="bg-gray-100 p-4 rounded-lg text-gray-900">
            <p className="font-semibold">
              Anrede: {formData.salutation || "-"}
            </p>
            <p className="font-semibold">
              Vorname: {formData.firstName || "-"}
            </p>
            <p className="font-semibold">
              Nachname: {formData.lastName || "-"}
            </p>
            <p className="font-semibold">
              Geburtsdatum: {formData.birthDate || "-"}
            </p>

            {/* Conditionally render Telefonnummer and Rechtsform */}
            {!isEmployee && (
              <>
                <p className="font-semibold">
                  Telefonnummer: {formData.phonenumber || "-"}
                </p>
                <p className="font-semibold">
                  Rechtsform: {formData.legal_form || "-"}
                </p>
              </>
            )}

            <p className="font-semibold">
              Firmenname: {formData.company_name || "-"}
            </p>
            <p className="font-semibold">Webseite: {formData.website || "-"}</p>
            <p className="font-semibold">E-Mail: {formData.email || "-"}</p>

            {isEmployee && (
              <p className="font-semibold">
                {/* Owner Code: {formData.owner_code || "-"} */}
              </p>
            )}
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Zustimmungserklärung</h3>
            <p className="font-semibold mt-4 mb-2">
              Hiermit bestätige ich, dass ich die folgenden Hinweise zur
              Kenntnis genommen habe:
            </p>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={checkboxes.privacyPolicy}
                  onChange={() => handleCheckboxChange("privacyPolicy")}
                  className="form-checkbox text-yellow-300"
                />
                <span className="ml-2 text-base">
                  <span className="">Datenschutz­erklärung *</span>{" "}
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox bg-yellow-300"
                  checked={checkboxes.termsAndConditions}
                  onChange={() => handleCheckboxChange("termsAndConditions")}
                />
                <span className="ml-2 text-base">AGB von E-Passtransfer *</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={checkboxes.mailSubscription}
                  onChange={() => handleCheckboxChange("mailSubscription")}
                  className="form-checkbox text-yellow-300"
                />
                <span className="ml-2 text-base w-full">
                  Ich möchte per E-Mail über Updates, Informationen und Angebote zu E-Passtransfer informiert werden. (Widerruf jederzeit möglich)*
                </span>
              </label>
              {/* <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={checkboxes.pilot}
                  onChange={() => handleCheckboxChange("pilot")}
                  className="form-checkbox text-yellow-300"
                />
                <span className="ml-2 text-base">
                  Das Projekt befindet sich in der Pilotphase. Über Änderungen
                  werde ich per E-Mail informiert. *
                </span>
              </label> */}
            </div>
          </div>

          <div className="flex justify-between mt-6"></div>
          <span>
            Hinweis: Die Datenschutzerklärung und die AGB können Sie hier
            einsehen:
          </span>
          <div className="flex mt-2 gap-4">
            <button
              className="flex items-center text-black"
              onClick={() => handleDownload()}
            >
              <FontAwesomeIcon
                icon={faDownload}
                className="mr-1 text-yellow-300"
              />
              AGB
            </button>

            <button
              className="flex items-center text-black"
              onClick={() => handleDownloadDatenschutz()}
            >
              <FontAwesomeIcon
                icon={faDownload}
                className="mr-1 text-yellow-300"
              />
              Datenschutzerklärung
            </button>
          </div>
          <p className="font-semibold mt-4 mb-2">
            Felder mit * sind Pflichtangaben.
          </p>
        </div>
      ),
    },
  ];

  const nextStep = () => {
    // Step 1: Standort hinzufügen
    if (currentStep === 1) {
      if (studios.length === 0) {
        alert("❗Bitte fügen Sie mindestens einen Standort hinzu.");
        return;
      }

      // ⛔️ DO NOT block user here if files are missing
      // Let them go to Step 3 (Zusammenfassung) anyway
    }

    // Step 2: Zusammenfassung
    if (currentStep === 2) {
      const hasAtLeastOneFile = useOneFileForAll
        ? sharedFile !== null
        : studios.every(
            (studio) =>
              studio.uploadedFiles &&
              studio.uploadedFiles.length > 0 &&
              studio.uploadedFiles[0]?.data,
          );

      if (!hasAtLeastOneFile) {
        alert("❗Bitte laden Sie für jedes Studio mindestens eine Datei hoch.");
        return;
      }
    }

    // ✅ Proceed to next step if checks passed
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <Helmet>
        <title>
          {" "}
          Registrieren – e-passtransfer Software für E-Passbilder nutzen
        </title>
        <meta
          name="description"
          content=" Jetzt kostenlos registrieren & digitale Passbilder mit e-passtransfer gesetzeskonform übermitteln – mit AI-Prüfung & QR-Code-System.

"
        />
      </Helmet>
      <div className="flex flex-col md:flex-row gap-6 p-4">
        {/* Left Side */}
        <div className="w-full md:w-1/4 bg-gray-100 flex flex-col justify-center items-center p-6 md:p-8">
          {/* <img
            src={relogo}
            alt="epasstransfer Logo"
            className="mb-4 w-64 md:w-64"
          /> */}
          <h2 className="text-center text-base md:text-xl font-bold mb-4">
            E-Passtransfer ist Ihr Online-Service für die sichere und digitale
            Übermittlung biometrischer Fotos an Behörden im Ausweiswesen
          </h2>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-full bg-gray-50 flex justify-center items-center p-4 md:p-8">
          <div
            className={`w-full max-w-4xl bg-white rounded-lg shadow-lg ${
              isEmployee && currentStep === 2 ? "p-4 md:p-2" : "p-6 md:p-4"
            }`}
          >
            {isEmployee ? (
              currentStep === 0 ? (
                <>
                  <h1 className="text-xl md:text-2xl font-bold mb-2">
                    Mitarbeitenden-Identifikation
                  </h1>
                  <p className="text-gray-600 mb-4">
                    Bitte vervollständigen Sie Ihre persönlichen Angaben, um
                    Ihre Einladung zu bestätigen und Zugriff auf das
                    E-Passtransfer-System zu erhalten.
                  </p>
                </>
              ) : currentStep === 2 ? (
                <h1 className="text-xl md:text-2xl font-bold mb-2">
                  Datenprüfung & Einwilligung
                </h1>
              ) : (
                <h1 className="text-xl md:text-2xl font-bold mb-2">
                  Datenprüfung & Einwilligung
                </h1>
              )
            ) : (
              <h1 className="text-xl md:text-2xl font-bold mb-2">
                Registrierung
              </h1>
            )}

            {/* Steps */}
            <div className="flex flex-wrap  items-center mb-6 gap-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 ${
                    index === currentStep ? "text-yellow-300" : "text-gray-500"
                  }`}
                >
                  <div
                    className={`rounded-full h-8 w-8 flex items-center justify-center font-bold ${
                      index === currentStep
                        ? "bg-yellow-300 text-white"
                        : "border-2 border-gray-300"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-sm">{step.label}</span>
                </div>
              ))}
            </div>

            {/* Current Step Content */}
            {steps[currentStep].content}

            <div className="flex justify-between mt-6">
              {showSuccessModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-md">
                    <h2 className="text-xl font-bold mb-4 text-center">
                      Registrierung erfolgreich
                    </h2>
                    <div className="flex justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-yellow-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-center text-gray-600 mb-6">
                      Ihr Antrag wurde erfolgreich an E-Passtransfer
                      übermittelt. Nach erfolgreicher Prüfung erhalten Sie eine
                      E-Mail zur Aktivierung Ihres Accounts.
                    </p>
                    <div className="flex justify-center">
                      <button
                        className="px-6 py-2 bg-yellow-300 text-white rounded-lg hover:bg-yellow-200"
                        onClick={() => setShowSuccessModal(false)}
                      >
                        Ok
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex justify-between mt-6 lg:gap-[670px] gap-16">
                <button
                  className={`px-6 py-2 rounded-lg ${
                    currentStep === 0
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-yellow-300 text-black hover:bg-yellow-200"
                  }`}
                  disabled={currentStep === 0}
                  onClick={prevStep}
                >
                  Zurück
                </button>

                {currentStep === steps.length - 1 ? (
                  <button
                    className={`px-4 py-2 rounded-lg lg:-ml-10 ${
                      allCheckboxesChecked
                        ? "bg-yellow-300 text-black hover:bg-yellow-200"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    onClick={handleRegistration}
                    disabled={!allCheckboxesChecked}
                  >
                    Registrieren
                  </button>
                ) : (
                  <button
                    className={`px-6 py-2 rounded-lg ${
                      currentStep === steps.length - 1 || !isStepOneValid()
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-yellow-300 text-black hover:bg-yellow-200"
                    }`}
                    disabled={
                      currentStep === steps.length - 1 || !isStepOneValid()
                    }
                    onClick={nextStep}
                  >
                    Weiter
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Fotostudio hinzufügen */}
        {showStudioForm && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 p-4 sm:p-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto overflow-y-auto max-h-screen">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
                Standort oder Fotostudio hinzufügen
              </h2>
              <p className="mb-4 text-gray-600 text-sm sm:text-base text-center sm:text-left">
                Alle erforderlichen Daten müssen für die Erfassung vollständig
                ausgefüllt werden.
              </p>

              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-1">
                    Bitte den Namen des Standorts angeben*
                  </label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-gray-400 outline-none bg-transparent p-1 focus:border-blue-600"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">Adresse </label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-gray-400 outline-none bg-transparent p-1 focus:border-blue-600"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">PLZ *</label>
                  <input
                    type="text"
                    maxLength={5}
                    className="w-full border-b-2 border-gray-400 outline-none bg-transparent p-1 focus:border-blue-600"
                    value={zipcode}
                    onChange={async (e) => {
                      const zip = e.target.value.replace(/\D/g, "");
                      setZipcode(zip);

                      if (zip.length === 5) {
                        try {
                          const response = await fetch(
                            `https://api.zippopotam.us/de/${zip}`,
                          );
                          const data = await response.json();
                          const placeName = data.places?.[0]?.["place name"];
                          if (placeName) {
                            setCity(placeName);
                          }
                          fetchAddressFromZip(zip);
                        } catch (error) {
                          console.error("ZIP code validation failed:", error);
                        }
                      }
                    }}
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">Ort *</label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-gray-400 outline-none bg-transparent p-1 focus:border-blue-600"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">
                    Telefonnummer *
                  </label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-gray-400 outline-none bg-transparent p-1 focus:border-blue-600"
                    value={shop_phone}
                    onChange={(e) => setShop_phone(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">Website *</label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-gray-400 outline-none bg-transparent p-1 focus:border-blue-600"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="sm:col-span-2 mb-4">
                  <label className="block font-bold mb-1">
                    Gewerbeschein hochladen
                  </label>

                  <div className="flex items-start mb-4">
                    <input
                      type="checkbox"
                      id="useOneFile"
                      checked={useOneFileForAll}
                      onChange={(e) => {
                        setUseOneFileForAll(e.target.checked);
                        setUploadedFiles([]);
                        setSharedFile(null);
                      }}
                      className="mt-1 mr-2"
                    />
                    <label
                      htmlFor="useOneFile"
                      className="text-sm text-gray-700"
                    >
                      <strong>Für alle Standorte übernehmen</strong>
                      <br />
                      Bei rechtlich getrennten Einheiten ist ggf. ein eigener
                      Nachweis nötig.
                      <br />
                      <br />
                      <strong>Nachweis der gewerblichen Tätigkeit</strong>
                      <br />
                      Wenn Sie beim Gewerbeamt gemeldet sind, ist das großartig!
                      Falls nicht, reicht auch ein anderer Nachweis, wie zum
                      Beispiel:
                      <ul className="list-disc list-inside mt-1">
                        <li>Gewerbeanmeldung</li>
                        <li>
                          Handelsregisterauszug (z. B. von der IHK oder HWK)
                        </li>
                        <li>Handwerkskarte</li>
                        <li>
                          Bescheinigung vom Finanzamt mit Tätigkeitsangabe
                        </li>
                      </ul>
                    </label>
                  </div>

                  <div className="border-dashed border-2 border-gray-300 bg-gray-100 p-6 flex flex-col items-center justify-center rounded-lg">
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (useOneFileForAll) {
                            const reader = new FileReader();
                            reader.onload = () => {
                              const fileObject = {
                                name: file.name,
                                type: file.type,
                                data: reader.result,
                              };
                              sessionStorage.setItem(
                                "uploadedFiles",
                                JSON.stringify([fileObject]),
                              );
                              setSharedFile(file);
                            };
                            reader.readAsDataURL(file);
                          } else {
                            handleFileUpload(e);
                          }
                        }}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </label>
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      Bitte laden Sie den Gewerbeschein als PDF-Datei hoch (max.
                      5 MB).
                    </p>
                  </div>

                  {useOneFileForAll && sharedFile && (
                    <div className="space-y-2 w-full sm:w-1/2 mt-4">
                      <div className="border p-4 rounded-lg bg-gray-50 flex items-center justify-between">
                        <div>
                          <p className="font-semibold">
                            Hochgeladenes Dokument:
                          </p>
                          <p className="text-gray-700">{sharedFile.name}</p>
                        </div>
                        <button
                          onClick={() => setSharedFile(null)}
                          className="text-yellow-300 hover:text-yellow-200"
                          title="Löschen"
                        >
                          <MdDelete size={23} />
                        </button>
                      </div>
                    </div>
                  )}

                  {!useOneFileForAll && uploadedFiles.length > 0 && (
                    <div className="space-y-2 w-full sm:w-1/2 mt-4">
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="border p-4 rounded-lg bg-gray-50 flex items-center justify-between"
                        >
                          <div>
                            <p className="font-semibold">
                              Hochgeladenes Dokument {index + 1}:
                            </p>
                            <p className="text-gray-700">{file.name}</p>
                          </div>
                          <button
                            onClick={() => handleDeleteFile(index)}
                            className="text-yellow-300 hover:text-yellow-200"
                            title="Löschen"
                          >
                            <MdDelete size={23} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </form>

              <p className="text-sm text-gray-500 mt-2">
                * Felder sind Pflichtfelder
              </p>

              <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
                <button
                  className="w-full sm:w-auto px-4 py-2 bg-yellow-300 text-black rounded-lg hover:bg-yellow-200"
                  onClick={() => setShowStudioForm(false)}
                >
                  Abbrechen
                </button>
                <button
                  className="w-full sm:w-auto px-4 py-2 bg-yellow-300 text-black rounded-lg hover:bg-yellow-200"
                  onClick={handleAddStudio}
                >
                  Hinzufügen
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Registration;
