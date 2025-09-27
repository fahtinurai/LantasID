// src/pages/ProgressPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProgressPage() {
  const [activeSidebar, setActiveSidebar] = useState("progres");
  const [activeTab, setActiveTab] = useState("diikuti");
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <nav className="p-4 space-y-2">
          <button
            type="button"
            onClick={() => setActiveSidebar("progres")}
            className={`flex items-center gap-2 p-2 text-sm w-full text-left rounded ${
              activeSidebar === "progres"
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-700 hover:bg-blue-50"
            }`}
          >
            📘 Progres Pelatihan
          </button>
          <button
            type="button"
            onClick={() => setActiveSidebar("sertifikat")}
            className={`flex items-center gap-2 p-2 text-sm w-full text-left rounded ${
              activeSidebar === "sertifikat"
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-700 hover:bg-blue-50"
            }`}
          >
            🎓 Sertifikat
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activeSidebar === "progres" && (
          <>
            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              <button
                type="button"
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
                type="button"
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
                      <span className="text-xs text-blue-600 font-medium">
                        60%
                      </span>
                      <button
                        type="button"
                        onClick={() => navigate("/courses/2")}
                        className="px-3 py-1 border border-blue-500 text-blue-500 text-xs rounded bg-white hover:bg-blue-50"
                      >
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
                        type="button"
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
          </>
        )}

        {activeSidebar === "sertifikat" && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white rounded-lg shadow p-3">
              <img
                src="/images/adobeptshp.jpg"
                alt="Design Grafis Profesional"
                className="w-24 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">
                  Sertifikat: Design Grafis Profesional
                </h3>
                <p className="text-sm text-gray-600">
                  Diterbitkan pada 20 Agustus 2025
                </p>
                <div className="mt-2">
                  <button
                    type="button"
                    onClick={() => navigate("/sertifikat/1")}
                    className="px-3 py-1 border border-blue-500 text-blue-500 text-xs rounded bg-white hover:bg-blue-50"
                  >
                    Lihat Sertifikat
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
