import { Link } from "react-router-dom";
import blogss from "../assets/blogs.jpg";
import { Helmet } from "react-helmet";

const blogs = [
  {
    id: 38,
    title:
      "Neues Update für e-passtransfer: Noch mehr Funktionen für Passbild-Profis",
    date: "22. july 2025",
    description: "",
    image: "blog38.jpg",
    link: "/Das-neue-e-passtransfer-Update-ist-da",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 37,
    title:
      "Warum bei e-passtransfer ganz Deutschland nach „e Passbild“ sucht – und unsere Studios davon profitieren",
    date: "8. july 2025",
    description: "",
    image: "blog37.jpg",
    link: "/Warum-bei-e-passtransfer-ganz-Deutschland-nach-e-Passbild-sucht",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 36,
    title: "Was ist ein e-Passbild?",
    date: "8. july 2025",
    description: "",
    image: "blog36.jpg",
    link: "/epassbild-2025-digitales-passfoto",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 35,
    title: "Passbilder in deiner Stadt – mit e-passtransfer",
    date: "8. july 2025",
    description: "",
    image: "blog35.jpg",
    link: "/Passbilder-in-deiner-Stadt-mit-e-passtransfer",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 34,
    title:
      "   Wenn die Software versagt: Wann Fotograf:innen Anspruch auf Rückerstattung haben",
    date: "25. jun 2025",
    description: "",
    image: "blog34.jpg",
    link: "/Rücktritt-bei-fehlerhafter-Passbildsoftware-was-Fotografen-wissen-sollten",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 33,
    title:
      "Keine Ausfälle im Studio – deshalb gibt’s unsere Software-Updates nur sonntags",
    date: "25. jun 2025",
    description: "",
    image: "blog33.jpg",
    link: "/e-passtransfer-Updates-nur-sonntags-für-ungestörten-Studiobetrieb",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 32,
    title: "Nur das zählt, was ankommt – e-passtransfer rechnet fair ab",
    date: "25. jun 2025",
    description: "",
    image: "blog32.jpg",
    link: "/Passbildsoftware-für-Fotograf-innen–keine-Lizenz-keine-Abofalle",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 31,
    title:
      "Telefon steht nicht still: So finden Privatpersonen jetzt ihr Passbildstudio – mit e-passtransfer",
    date: "25. jun 2025",
    description: "",
    image: "blog31.jpg",
    link: "/Passbilder-gesucht-Jetzt-Studio-finden-mit-e-passtransfer",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 30,
    title:
      "Blogbeitrag: Schluss mit Amazon – Warum e-passtransfer die sicherere Alternative für Passbildübertragungen ist",
    date: "24. jun 2025",
    description: "",
    image: "blog30.jpg",
    link: "/Passbilder-sicher-übertragen–ohne-Amazon-e-passtransfer",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 29,
    title:
      "Digitale Passbild-Software für Fotograf:innen – wenn andere ausfallen, liefert e-passtransfer zuverlässig",
    date: "18. jun 2025",
    description: "",
    image: "blog29.jpg",
    link: "/Digitale-Passbild-Software-für-Fotograf",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 28,
    title:
      "Wichtige Frist verpasst? So holen Studios den Umstieg auf digitale Passbilder schnell nach",
    date: "16. jun 2025",
    description: "",
    image: "Blog28.jpg",
    link: "/Veröffentlicht-am-16-Juni-2025–von-E-Passtransfer-Team",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 27,
    title: "Gefunden werden! So profitieren Fotografen von e-passtransfer",
    date: "11. jun 2025",
    description: "",
    image: "blog27.jpg",
    link: "/Gefunden-werden-So-profitieren-Fotografen-von-e-passtransfer",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 26,
    title:
      "Digitale Passbilder: Warum epasstransfer jetzt der sicherste Weg ist",
    date: "10. jun 2025",
    description: "",
    image: "blog26.jpg",
    link: "/Warum-epasstransfer-jetzt-der-sicherste-Weg-ist",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 25,
    title:
      "Digitale Passbilder ab Mai 2025: Chance für Fotostudios trotz Übergangsfristen",
    date: "02. jun 2025",
    description: "",
    image: "blog25.jpg",
    link: "/Chance-für-Fotostudios-trotz-Übergangsfristen",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 24,
    title:
      "Digitalisierungspflicht als Wachstumsmotor: Wie Fotostudios mit E-Passtransfer rechtssicher und profitabel arbeiten",
    date: "30. Mai 2025",
    description: "",
    image: "blog24.jpg",
    link: "/Digitalisierungspflicht-als-Wachstumsmotor",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 23,
    title:
      "Digitale Passbilder in sicheren Händen: Warum jetzt alle auf e-passtransfer setzen",
    date: "27. Mai 2025",
    description: "",
    image: "blog23.jpg",
    link: "/e-passtransfer-als-beste-Lösung-2025",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 22,
    title: "Vorsicht US-Cloud: Wer heute AWS nutzt, gefährdet seine Kunden",
    date: "23. Mai 2025",
    description: "",
    image: "blog22.jpg",
    link: "/Vorsicht-US-Cloud",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 21,
    title: "Keine Pakete, keine Fallstricke: E-Passtransfer ist fair. Punkt.",
    date: "20. Mai 2025",
    description: "",
    image: "blog21.jpg",
    link: "/preismodell-transparenz",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 20,
    title:
      "Behörde kann Bild nicht abrufen? So lösen Sie das Problem – mit einem Anruf in der IT!",
    date: "20. Mai 2025",
    description: "",
    image: "blog20.jpg",
    link: "/firewall-freischaltung-passbildproblem",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 19,
    title:
      "Achtung AWS-Cloud: Warum jeder Passbild-Upload ins Ausland ein Risiko ist – und wie E-Passtransfer jetzt mit der Deutschen Telekom schützt",
    date: "19. Mai 2025",
    description: "",
    image: "blog19.jpg",
    link: "/aws-gefahr-telekom-loesung",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 18,
    title:
      "Digitale Passbildpflicht gestartet – doch viele Behörden sind offline. E-Passtransfer liefert jetzt schon.",
    date: "19. Mai 2025",
    description: "",
    image: "blog18.jpg",
    link: "/behörden-störungen-digitale-passbilder",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 17,
    title:
      "Warum die digitale Fotoübertragung die Zukunft der Identitätsprüfung ist",
    date: "19. Mai 2025",
    description: "",
    image: "blog17.jpg",
    link: "/digital-photo-transfer-id-verification",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 16,
    title:
      "Der einfachste Weg für Studios, digitale Passbilder mit Zertifizierung „in meiner Nähe“ anzubieten",
    date: "19. Mai 2025",
    description: "",
    image: "blog16.jpg",
    link: "/find-digital-passport-photo-near-you",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 15,
    title:
      "So sichert E-Passtransfer die gesetzliche Übertragung biometrischer Passbilder – ohne Ihren Workflow zu verändern",
    date: "16. Mai 2025",
    description: "",
    image: "blog15.jpg",
    link: "/ki-biometrische-konformitaet",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 14,
    title: "Sichere Cloud-Uploads: Wie E-Passtransfer Ihre Daten schützt",
    date: "12. Mai 2025",
    description: "",
    image: "blog14.jpg",
    link: "/sichere-cloud-uploads-passfotos",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 13,
    title:
      "E-Passtransfer vs. klassische Passbildmethoden: Der große Vergleich für Fotograf:innen",
    date: "12. Mai 2025",
    description: "",
    image: "blog13.jpg",
    link: "/e-passtransfer-vs-traditionelle-methoden",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 12,
    title:
      "Vom Foto zum Pass: Wie QR-Codes die Übermittlung für Fotostudios vereinfachen",
    date: "12. Mai 2025",
    description: "",
    image: "blog12.jpg",
    link: "/qr-code-passfoto-uebertragung",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 11,
    title: "Warum Fotograf:innen jetzt auf E-Passtransfer umsteigen sollten",
    date: "08. Mai 2025",
    description: "",
    image: "blog11.jpg",
    link: "/e-passtransfer-fuer-fotografen",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 10,
    title: "Wie E-Passtransfer typische Herausforderungen in Fotostudios löst",
    date: "08. Mai 2025",
    description: "",
    image: "blog10.jpg",
    link: "/studio-herausforderungen-loesen",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 9,
    title:
      "Die wichtigsten Vorteile der digitalen Passbildübertragung für Fotograf:innen & Studios",
    date: "08. Mai 2025",
    description: "",
    image: "blog9.jpg",
    link: "/vorteile-digitaler-passfotos",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 8,
    title:
      "So funktioniert E-Passtransfer: Schritt-für-Schritt-Anleitung für Fotograf:innen",
    date: "08. Mai 2025",
    description: "",
    image: "blog8.jpg",
    link: "/e-passtransfer-anleitung",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 7,
    title:
      "Erfahren Sie alles über die neuen gesetzlichen Vorschriften für digitale Passfotos ab Mai 2025.",
    date: "08. Mai 2025",
    description: "",
    image: "blog7.jpg",
    link: "/passfoto-gesetz-2025",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 6,
    title:
      "Erfahren Sie, warum gedruckte oder selbst hochgeladene Passbilder ab Mai 2025 nicht mehr akzeptiert werden.",
    date: "07. Mai 2025",
    description: "",
    image: "blog6.jpg",
    link: "/gedruckte-passfotos-abgelehnt-2025",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 5,
    title:
      "07. Mai 2025 Chaos bei der digitalen Passbildübertragung – e-passtransfer bleibt stabil und menschlich",
    date: "07. Mai 2025",
    description: "",
    image: "blog5.jpg",
    link: "/07-Mai-2025-Chaos-bei-der-digitalen-Passbildübertragung",
    author: {
      name: "E-passtransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 4,
    title:
      "Aktuelle Information vom 06. Mai 2025: Probleme bei der behördlichen Anbindung der Clouddienste",
    date: "06. Mai 2025",
    description: "",
    image: "blog4.jpg",
    link: "/clouddienste-anbindungsprobleme",
    author: {
      name: "Süleyman Tevrat Acar",
      avatar: "suliman.png",
    },
  },
  {
    id: 3,
    title:
      "05. Mai: E-PassTransfer ab sofort komplett kostenlos und gebührenfrei nutzbar!",
    date: "05. Mai 2025",
    description: "",
    image: "blog3.jpg",
    link: "/e-passtransfer-ohne-lizenzgebuehr-05-mai-2025",
    author: {
      name: "Sina Acar",
      avatar: "sina.jpg",
    },
  },
  {
    id: 2,
    title:
      "02. Mai: Das System läuft – Hunderte Passbild-Übertragungen erfolgreich umgesetzt",
    date: "02. Mai 2025",
    description: "",
    image: "blog2.jpg",
    link: "/passbilduebertragungen-erfolgreich-gestartet-02-mai-2025",
    author: {
      name: "ePassTransfer Team",
      avatar: "favicon.jpg",
    },
  },
  {
    id: 1,
    title:
      "01. Mai – Es ist so weit: Die digitale Passbildübertragung ist jetzt Pflicht!",
    date: "01. Mai 2025",
    description: "",
    image: "blog1.jpg",
    link: "/digitale-passbilduebertragung-pflicht-01-mai-2025",
    author: {
      name: "Raza Abbas",
      avatar: "raza1.jpg",
    },
  },
];

function Blog() {
  return (
    <>
      <Helmet>
        <title>
          Blog – News zur Passbild-Software, E-Passbild & Gesetz 2025
        </title>
        <meta
          name="description"
          content="Neuigkeiten zur e-passtransfer Software, E-Passbild-Gesetz, digitalen Passbildern & Tipps für Fotografen – alles zur Pflicht ab Mai 2025."
        />
      </Helmet>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div className="w-full  flex justify-center mb-10">
          <img
            src={blogss}
            alt="PassfotoGesetzesänderung"
            className="rounded-lg shadow-md w-full sm:w-5/6 md:w-3/4 lg:w-3/4 lg:h-auto h-[120px]"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-center  mb-12">
          Aktuelle News zur Passbild-Digitalisierung & e-passtransfer
        </h1>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:mx-36 lg:grid-cols-3 gap-8 ">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              to={blog.link}
              className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-78 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-1">{blog.date}</p>
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                {blog.description && (
                  <p className="text-gray-700 mb-4">{blog.description}</p>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <a
                      href={blog.author.profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      {blog.author.name}
                    </a>
                    {blog.author.bio && (
                      <p className="text-sm text-gray-500">{blog.author.bio}</p>
                    )}
                  </div>
                </div>
                <span className="text-blue-600 font-medium hover:underline">
                  Weiterlesen →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
