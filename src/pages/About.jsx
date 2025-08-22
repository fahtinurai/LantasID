import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, MapPin } from "lucide-react";

const locations = [
  {
    id: "bandung",
    title: "Bandung",
    potensi: "Industri kreatif, digital, fashion",
    pelatihan: "Desain grafis, media sosial, fashion",
  },
  {
    id: "sukabumi",
    title: "Sukabumi & Cianjur",
    potensi: "Pertanian, perkebunan",
    pelatihan: "Pertanian modern, digitalisasi tani",
  },
  {
    id: "bogor",
    title: "Bogor & Depok",
    potensi: "Teknologi, jasa",
    pelatihan: "Digital marketing, coding dasar",
  },
  {
    id: "garut",
    title: "Garut & Tasikmalaya",
    potensi: "UMKM, kerajinan tangan",
    pelatihan: "Pemasaran online, produk lokal",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-6">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-blue-700"
        >
          Program Pelatihan Kerja Berbasis Potensi Daerah
        </motion.h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Kami percaya setiap daerah memiliki potensi unik. Melalui program ini, 
          kami menghadirkan pelatihan yang relevan agar masyarakat dapat 
          berkembang sesuai kebutuhan lokal sekaligus siap menghadapi era digital.
        </p>
      </div>

      {/* Grid Cards Section */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {locations.map((loc, index) => (
          <motion.div
            key={loc.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    {loc.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-3">
                  <span className="font-semibold text-blue-700">Potensi:</span>{" "}
                  {loc.potensi}
                </p>
                <p className="text-gray-600 mb-5">
                  <span className="font-semibold text-blue-700">Pelatihan:</span>{" "}
                  {loc.pelatihan}
                </p>
                <Link to="/login">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
                >
                    <BookOpen size={18} />
                    Ikuti Pelatihan
                </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
