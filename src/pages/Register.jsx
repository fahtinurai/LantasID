
import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";

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


const Register = () => {
  return (
    <AuthLayout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-opacity-30 px-4">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8">
          {/* Judul */}
          <h2 className="text-2xl font-bold text-gray-700 text-center mb-2">
            Buat Akun Baru
          </h2>
          <p className="text-sm text-center text-gray-500 mb-6">
            Daftar gratis untuk memulai pelatihan di LantasID.
          </p>

          {/* Form */}
          <form className="space-y-4 text-gray-600">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Lokasi */}
            <div className="flex gap-4">
              <div className="w-1/2">
                  <label className="block text-sm mb-1 text-gray-600">Lokasi</label>
                  <select
                    className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Pilih Wilayah Anda</option>
                    {locations.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {loc.title}
                      </option>
                    ))}
              </select>

            </div>
              {/* Tanggal Lahir */}
              <div className="w-1/2">
                <label className="block text-sm mb-1 text-gray-600">Tanggal Lahir</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Alamat */}
            <div>
              <label className="block text-sm mb-1 text-gray-600">Alamat</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Pendidikan Terakhir */}
            <div>
              <label className="block text-sm mb-1 text-gray-600">Pendidikan Terakhir</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Pilih Pendidikan</option>
                <option value="sd">SD</option>
                <option value="smp">SMP</option>
                <option value="sma">SMA</option>
                <option value="kuliah">Kuliah</option>
              </select>
            </div>

            {/* Tombol Daftar */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Daftar
            </button>
          </form>

          {/* Link login */}
          <p className="text-xs text-center text-gray-500 mt-6">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-blue-600 font-medium hover:underline">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
