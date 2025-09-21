import React from "react";
import TabSwitcher from "./TabSwitcher";

const MitraLokal = () => {
  const mitra = [
    { code: "KSI", name: "Kreatif Studio Indonesia", desc: "Desain Grafis", loc: "Jakarta, Indonesia" },
    { code: "DGI", name: "Digital Grow Indonesia", desc: "Pemasaran Digital", loc: "Bandung, Indonesia" },
    { code: "HLF", name: "Hijau Lestari Farm", desc: "Pertanian Organik", loc: "Bogor, Indonesia" },
    { code: "BCI", name: "BrandCraft Indonesia", desc: "Branding & Design", loc: "Surabaya, Indonesia" },
    { code: "AIN", name: "Agro Inovasi Nusantara", desc: "Pertanian Modern", loc: "Malang, Indonesia" },
    { code: "SMM", name: "Social Media Movers", desc: "Manajemen Media Sosial", loc: "Jakarta, Indonesia" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Gerbang Menuju Karir Impianmu</h1>
        <p className="mb-6">
          Salurkan keahlian yang telah Anda pelajari langsung ke industri
          melalui program magang eksklusif dengan mitra lokal terverifikasi kami.
        </p>
        <button className="px-6 py-2 bg-blue-500 rounded text-white">
          Lihat Lowongan
        </button>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center mt-6">
        <TabSwitcher />
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-xl font-bold text-center mb-2">Mitra Lokal Kami</h2>
        <p className="text-center text-gray-600 mb-8">
          Perusahaan-perusahaan yang siap menyambut talenta baru seperti Anda.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {mitra.map((m, idx) => (
            <div key={idx} className="shadow-lg p-6 rounded-xl border text-center">
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-gray-100 rounded-full font-bold text-gray-700">
                {m.code}
              </div>
              <h3 className="text-blue-700 font-semibold mt-3">{m.name}</h3>
              <p className="text-sm text-gray-600">{m.desc}</p>
              <p className="text-sm text-gray-500 mb-3">📍 {m.loc}</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded">
                Lihat Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MitraLokal;
