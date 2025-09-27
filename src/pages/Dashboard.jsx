import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">
            Selamat datang {user?.name}!
          </h1>
          <p className="mt-2 text-white/90">
            Semoga Semangat Belajarmu tetap ada dan teruslah Konsisten.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Aktifitas Belajar */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-blue-500">
                {/* Icon buku */}
                <svg xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24"
                  strokeWidth={2} stroke="currentColor"
                  className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 6.253v13m0-13C10.832 5.477 
                           9.246 5 7.5 5S4.168 5.477 
                           3 6.253v13C4.168 18.477 
                           5.754 18 7.5 18s3.332.477 
                           4.5 1.253m0-13C13.168 5.477 
                           14.754 5 16.5 5s3.332.477 
                           4.5 1.253v13C19.832 18.477 
                           18.246 18 16.5 18s-3.332.477-4.5 1.253" />
                </svg>
              </span>
              Aktifitas Belajar
            </h2>
            <span
              onClick={() => navigate("/progress")}
              className="text-xs text-gray-500 hover:underline cursor-pointer"
            >
              Selengkapnya
            </span>
          </div>

          {/* Item 1 */}
          <div className="flex items-center gap-4 mb-4 border rounded-lg p-3">
            <img
              src="/images/adobeptshp.jpg"
              alt="Design Grafis Profesional"
              className="w-24 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                Design Grafis Profesional
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full w-full"></div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-green-600 font-medium">100%</span>
                <button
                  onClick={() => navigate("/sertifikat/1")}
                  className="px-3 py-1 border border-blue-500 text-blue-500 text-xs rounded bg-white hover:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  Lihat Sertifikat
                </button>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4 border rounded-lg p-3">
            <img
              src="/images/Customer-Support.jpg"
              alt="Manajemen Media Sosial"
              className="w-24 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                Manajemen Media Sosial
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-blue-500 h-2 rounded-full w-3/5"></div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-blue-600 font-medium">60%</span>
                <button
                  onClick={() => navigate("/progress")}
                  className="px-3 py-1 border border-blue-500 text-blue-500 text-xs rounded bg-white hover:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  Lanjutkan Belajar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Aktifitas Lainnya */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                strokeWidth={2} stroke="currentColor"
                className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
              </svg>
            </span>
            Aktifitas Lainnya
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {/* Item 1 */}
            <button
              onClick={() => navigate("/magang")}
              className="bg-gray-700 text-white rounded-xl p-4 flex flex-col items-start hover:bg-gray-800 transition"
            >
              <span className="text-blue-400 mb-2">📘</span>
              <span className="font-medium text-left">Program Magang</span>
            </button>

            {/* Item 2 */}
            <button
              onClick={() => navigate("/mitra")}
              className="bg-gray-700 text-white rounded-xl p-4 flex flex-col items-start hover:bg-gray-800 transition"
            >
              <span className="text-blue-400 mb-2">💻</span>
              <span className="font-medium text-left">Mitra Lokal</span>
            </button>

            {/* Item 3 */}
            <button
              onClick={() => navigate("/mentoring")}
              className="bg-gray-700 text-white rounded-xl p-4 flex flex-col items-start hover:bg-gray-800 transition"
            >
              <span className="text-blue-400 mb-2">👥</span>
              <span className="font-medium text-left">Mentoring & Konsultasi</span>
            </button>

            {/* Item 4 */}
            <button
              onClick={() => navigate("/komunitas")}
              className="bg-gray-700 text-white rounded-xl p-4 flex flex-col items-start hover:bg-gray-800 transition"
            >
              <span className="text-blue-400 mb-2">🌐</span>
              <span className="font-medium text-left">Komunitas</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
