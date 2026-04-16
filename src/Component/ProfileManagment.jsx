import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";

const ProfileManagement = () => {
  const [profile, setProfile] = useState(null);
  const [updatedProfile, setUpdatedProfile] = useState({});
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = sessionStorage.getItem("authToken");
        if (!token) throw new Error("No access token found. Please log in.");

        const response = await fetch(`${base_url}/photobooth/profile/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();
        // console.log("Profile data:", data);
        setProfile(data);
        setUpdatedProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError(error.message);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const token = sessionStorage.getItem("authToken");
      if (!token) throw new Error("No access token found. Please log in.");

      let profileUpdated = false;
      let passwordUpdated = false;

      const isProfileChanged =
        updatedProfile.salutation !== profile.salutation ||
        updatedProfile.first_name !== profile.first_name ||
        updatedProfile.last_name !== profile.last_name ||
        updatedProfile.date_of_birth !== profile.date_of_birth ||
        updatedProfile.phone !== profile.phone;

      if (isProfileChanged) {
        const profileRes = await fetch(`${base_url}/photobooth/profile/`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(updatedProfile),
        });

        if (profileRes.ok) {
          profileUpdated = true;
          const updatedData = await profileRes.json();
          setProfile(updatedData);
          setUpdatedProfile(updatedData);
        } else {
          throw new Error(
            `Profil konnte nicht aktualisiert werden (${profileRes.status})`
          );
        }
      }

      if (currentPassword && newPassword) {
        const passwordRes = await fetch(
          `${base_url}/photobooth/profile/change-password/`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              current_password: currentPassword,
              new_password: newPassword,
              confirm_password: newPassword,
            }),
          }
        );

        if (passwordRes.ok) {
          passwordUpdated = true;
          setCurrentPassword("");
          setNewPassword("");
        } else {
          const errorData = await passwordRes.json();
          throw new Error(
            errorData.detail || "Passwortänderung fehlgeschlagen."
          );
        }
      }

      if (profileUpdated && passwordUpdated) {
        alert("Profil und Passwort wurden erfolgreich aktualisiert!");
      } else if (profileUpdated) {
        alert("Profil wurde erfolgreich aktualisiert!");
      } else if (passwordUpdated) {
        alert("Passwort wurde erfolgreich aktualisiert!");
      } else {
        alert("Keine Änderungen vorgenommen.");
      }

      setIsEditing(false);

      if (passwordUpdated) {
        sessionStorage.removeItem("authToken");
        navigate("/login");
      }
    } catch (error) {
      console.error("Fehler:", error);
      alert(`❗ Fehler: ${error.message}`);
    }
  };

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 text-lg">
          Fehler: Kein Zugriffstoken gefunden. Bitte melden Sie sich an.
        </p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-8 h-8 border-2 border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600">Profil wird geladen...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Profilverwaltung
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-gray-600 text-sm mb-1">Anrede</label>
            <select
              className="w-full border-b-2 border-gray-400 outline-none bg-transparent p-1 focus:border-blue-600"
              value={updatedProfile.salutation || ""}
              onChange={(e) =>
                setUpdatedProfile({
                  ...updatedProfile,
                  salutation: e.target.value,
                })
              }
              disabled={!isEditing}
            >
              <option value="Herr">Herr</option>
              <option value="Frau">Frau</option>
              <option value="Divers">Divers</option>
              <option value="Keine-Anrede">Keine Anrede</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">Vorname</label>
            <input
              type="text"
              className="w-full border-b-2 border-gray-400 outline-none bg-transparent p-1 focus:border-blue-600"
              value={updatedProfile.first_name || ""}
              onChange={(e) =>
                setUpdatedProfile({
                  ...updatedProfile,
                  first_name: e.target.value,
                })
              }
              disabled={!isEditing}
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">Nachname</label>
            <input
              type="text"
              className="w-full border-b-2 border-gray-400 outline-none bg-transparent p-1 focus:border-blue-600"
              value={updatedProfile.last_name || ""}
              onChange={(e) =>
                setUpdatedProfile({
                  ...updatedProfile,
                  last_name: e.target.value,
                })
              }
              disabled={!isEditing}
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">
              Geburtsdatum
            </label>
            <input
              type="date"
              className="w-full border-b-2 border-gray-400 outline-none bg-transparent p-1 focus:border-blue-600"
              value={updatedProfile.date_of_birth || ""}
              onChange={(e) =>
                setUpdatedProfile({
                  ...updatedProfile,
                  date_of_birth: e.target.value,
                })
              }
              disabled={!isEditing}
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full border-b-2 border-gray-400 outline-none bg-transparent p-1 focus:border-blue-600"
              value={updatedProfile.email || ""}
              disabled
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">
              Telefonnummer
            </label>
            <input
              type="text"
              className="w-full border-b-2 border-gray-400 outline-none bg-transparent p-1 focus:border-blue-600"
              value={updatedProfile.phone || ""}
              onChange={(e) =>
                setUpdatedProfile({ ...updatedProfile, phone: e.target.value })
              }
              disabled={!isEditing}
            />
          </div>

          <div>
            <p className="text-xl font-semibold mb-4">Passwort ändern</p>
            <div className="relative">
              <label className="block text-gray-600 text-sm mb-1">
                Aktuelles Passwort
              </label>
              <input
                type={showCurrentPassword ? "text" : "password"}
                className="w-full border-b-2 border-gray-400 outline-none bg-transparent p-1 focus:border-blue-600"
                disabled={!isEditing}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute top-10 right-2 transform -translate-y-1/2 text-gray-500"
              >
                {showCurrentPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>
          </div>

          <div className="relative mt-11">
            <label className="block text-gray-600 text-sm mb-1">
              Neues Passwort
            </label>
            <input
              type={showNewPassword ? "text" : "password"}
              className="w-full border-b-2 border-gray-400 outline-none bg-transparent p-1 focus:border-blue-600"
              disabled={!isEditing}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute top-10 right-2 transform -translate-y-1/2 text-gray-500"
            >
              {showNewPassword ? <HiEyeOff /> : <HiEye />}
            </button>
          </div>
        </form>

        <div className="mt-6 flex justify-between">
          <Link to="/Verwaltungsbereich">
            <button className="bg-yellow-300 text-black px-[30px] py-2 rounded hover:bg-yellow-200">
              Zurück
            </button>
          </Link>

          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-300 text-black px-4 py-2 rounded hover:bg-yellow-200"
            >
              Bearbeiten
            </button>
          ) : (
            <button
              onClick={handleUpdateProfile}
              className="bg-yellow-300 text-black px-4 py-2 rounded hover:bg-yellow-200"
            >
              Änderungen speichern
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileManagement;
