// src/pages/ProgressPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProgressPage() {
  const [activeTab, setActiveTab] = useState("diikuti");
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="p-4 flex items-center gap-2 border-b">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z"
            />
          </svg>
          <span className="font-bold text-lg text-gray-700">LantasID</span>
        </div>

        <nav className="p-4 space-y-2">
          <a
            href="#"
            className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
          >
            📘 Progres Pelatihan
          </a>
          <a
            href="#"
            className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
          >
            🎓 Sertifikat
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("diikuti")}
            className={`px-4 py-2 text-sm rounded ${
              activeTab === "diikuti"
                ? "bg-blue-500 text-white"
                : "bg-white border text-gray-700 hover:bg-gray-50"
            }`}
          >
            Pelatihan Yang Diikuti
          </button>
          <button
            onClick={() => setActiveTab("selesai")}
            className={`px-4 py-2 text-sm rounded ${
              activeTab === "selesai"
                ? "bg-blue-500 text-white"
                : "bg-white border text-gray-700 hover:bg-gray-50"
            }`}
          >
            Pelatihan Yang Diselesaikan
          </button>
        </div>

        {/* Card list */}
        <div className="space-y-4">
          {activeTab === "diikuti" && (
            <div className="flex items-center gap-4 bg-white rounded-lg shadow p-3">
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
                  <button className="px-3 py-1 border border-blue-500 text-blue-500 text-xs rounded bg-white hover:bg-blue-50">
                    Lanjutkan Belajar
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "selesai" && (
            <div className="flex items-center gap-4 bg-white rounded-lg shadow p-3">
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
                  <span className="text-xs text-green-600 font-medium">
                    100%
                  </span>
                  <button
                    onClick={() => navigate("/sertifikat/1")}
                    className="px-3 py-1 border border-blue-500 text-blue-500 text-xs rounded bg-white hover:bg-blue-50"
                  >
                    Lihat Sertifikat
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
