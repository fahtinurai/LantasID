import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const locations = [
  {
    id: 1,
    title: "Bandung",
    potensi: "Industri kreatif, digital, fashion",
    pelatihan: "Desain grafis, media sosial, fashion",
    selected: true,
  },
  {
    id: 2,
    title: "Sukabumi & Cianjur",
    potensi: "Pertanian, perkebunan",
    pelatihan: "Pertanian modern, digitalisasi tani",
  },
  {
    id: 3,
    title: "Bogor & Depok",
    potensi: "Teknologi, jasa",
    pelatihan: "IT support, customer service",
    selected: true,
  },
  {
    id: 4,
    title: "Garut & Tasikmalaya",
    potensi: "UMKM, kerajinan tangan",
    pelatihan: "Kerajinan kulit, bambu",
  },
  {
    id: 5,
    title: "Pangandaran",
    potensi: "Pariwisata & hospitality",
    pelatihan: "Tour guide, homestay",
  },
];

const features = [
  {
    icon: "📍",
    title: "Berbasis Lokasi",
    desc: "Pelatihan disesuaikan dengan potensi wilayah Anda",
  },
  {
    icon: "🤝",
    title: "Mitra Lokal",
    desc: "Kolaborasi dengan BLK dan UMKM setempat",
  },
  {
    icon: "📜",
    title: "Sertifikat Resmi",
    desc: "Sertifikat diakui oleh mitra kerja lokal",
  },
  {
    icon: "💼",
    title: "Program Magang",
    desc: "Kesempatan magang di UMKM dan mitra lokal",
  },
];

const toSlug = (text) =>
  text.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");


const Landing = () => {
  return (
    <div className="bg-[#fdfaf8] text-gray-900">
      {/* Hero Section */}
        <section className="py-20 rounded-t-[40px] shadow-md">
          <div className="w-full px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text Section */}
            <div className="text-center md:text-left md:max-w-xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Latih Skill, Atasi Masalah,<br />
              Sejahtera Bersama <span className="text-blue-600">LantasID.</span>
            </h1>
            <p className="mt-4 text-gray-600 text-base md:text-lg font-medium">
              <strong>Latih</strong>, <strong>A</strong>tasi kemiskinan, <strong>N</strong>gatur keuangan,
              <strong> T</strong>ekad, <strong>A</strong>ksi,<strong> S</strong>ejahtera.<br />
              Kami hadir untuk membantumu mencapai tujuan karir dan finansial.
            </p>
           <Link to="/courses" className="inline-block mt-6">
            <button className="flex items-center gap-3 border border-black bg-white text-black px-6 py-2 rounded-lg transition hover:bg-gray-100">
              <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                ▶
              </span>
              <span className="font-medium text-base">Mulai Pelatihan</span>
            </button>
          </Link>
        </div>

          {/* Image Section */}
          <div className="hidden md:block w-1/2 h-full">
            <img
              src="/images/sally.png"
              alt="Ilustrasi Hero"
              className=" w-[280px] 
                md:w-[400px] 
                lg:w-[480px] 
                xl:w-[520px] 
                relative 
                right-4 
                -top-4"
              />
             </div>
           </div>
      </section>

 {/* Wilayah Section */}
      <section className="bg-[#f2ebe5] py-16 w-full" id="pelatihan">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-10">
          Pilih Wilayah Anda
        </h2>
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {locations.map((loc) => (
              <Link
                to={`/wilayah/${toSlug(loc.title)}`}
                key={loc.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 cursor-pointer border-2 border-transparent hover:border-blue-600 block"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-2">{loc.title}</h3>
                <p className="text-sm mb-1 text-gray-800">
                  <strong className="font-semibold">Potensi:</strong> {loc.potensi}
                </p>
                <p className="text-sm text-gray-800">
                  <strong className="font-semibold">Pelatihan:</strong> {loc.pelatihan}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fitur Keunggulan Section */}
      <section className="bg-[#fdfaf8] text-gray-900 py-16">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
            Keunggulan Platform
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 text-center"
              >
                <div className="text-4xl bg-blue-700 text-white w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About LantasID */}
      <section className="py-16 px-4 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">  
          {/* Gambar + background elemen */}
          <div className="relative w-full md:w-1/2">
            {/* Shape biru di belakang */}
            <div className="absolute bottom-[-20px] right-[-50px] w-[120px] h-[100px] bg-blue-500 
  rounded-tr-[16px] rounded-bl-[16px] z-0"></div>

            {/* Gambar utama */}
            <img
              src="/images/tentang.png"
              alt="Laptop Working"
              className="rounded-xl relative z-10 shadow-md"
            />
          </div>

          {/* Teks */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="text-blue-600">LantasID</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              LantasID adalah platform terpadu yang lahir dari sebuah tekad untuk memutus mata rantai kemiskinan melalui peningkatan keterampilan dan literasi keuangan. Kami percaya bahwa setiap individu berhak mendapatkan kesempatan untuk sejahtera. Melalui pelatihan yang relevan, koneksi ke dunia kerja, dan pemahaman finansial yang kuat, kami mengajak Anda untuk beraksi dan membangun masa depan yang lebih cerah.
            </p>
          </div>
        </div>
      </section>
       </div>
  );
};
export default Landing;
