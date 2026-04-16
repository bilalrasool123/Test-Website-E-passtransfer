const videos = [
  {
    title: "Profilverwaltung",
    url: "https://epass-transfer-videos.vercel.app/Profilverwaltung-Epass.webm",
  },
  {
    title: "Mitarbeiterverwaltung",
    url: "https://epass-transfer-videos.vercel.app/Mitarbeiterverwaltung-Epass-FINAL.webm",
  },
  {
    title: "Software installieren",
    url: "https://epass-transfer-videos.vercel.app/Software-installieren-Epass.webm",
  },
  {
    title: "Studioverwaltung",
    url: "https://epass-transfer-videos.vercel.app/Studioverwaltung-Epass.webm",
  },
  {
    title: "Registrierung",
    url: "https://epass-transfer-videos.vercel.app/Registrieren-Epass.webm",
  },
  {
    title: "E-ID-Verifizierung",
    url: "https://epass-transfer-videos.vercel.app/E-ID-Verifizierung.webm",
  },
];

const VideoPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto ">
      <h2 className="text-2xl font-bold mb-2">Anleitungsvideos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-20">
        {videos.map((video, index) => (
          <button
            key={index}
            onClick={() => window.open(video.url, "_blank")}
            className="bg-yellow-300 text-black py-3 px-4 rounded-lg hover:bg-yellow-200 transition"
          >
            {video.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
