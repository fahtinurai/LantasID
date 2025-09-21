import React from "react";
import TabSwitcher from "./TabSwitcher";

const ProgramMagang = () => {
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
        <h2 className="text-xl font-bold text-center mb-2">
          Program Magang Tersedia
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Temukan posisi magang yang paling sesuai dengan keahlian Anda.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="shadow-lg p-6 rounded-xl border">
            <h3 className="text-blue-700 font-semibold mb-2">
              Designer Grafis Junior
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              Kreatif Studio Indonesia
            </p>
            <p className="text-sm text-gray-500 mb-2">📍 Jakarta, Indonesia</p>
            <p className="text-sm text-gray-500 mb-2">📅 Magang 3 Bulan</p>
            <p className="text-sm font-semibold">Keahlian Yang Dibutuhkan:</p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Photoshop</li>
              <li>Illustrator</li>
            </ul>
            <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded">
              Lihat Detail
            </button>
          </div>

          {/* Card 2 */}
          <div className="shadow-lg p-6 rounded-xl border">
            <h3 className="text-blue-700 font-semibold mb-2">
              Spesialis Media Sosial
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              Digital Grow Indonesia
            </p>
            <p className="text-sm text-gray-500 mb-2">📍 Bandung, Indonesia</p>
            <p className="text-sm text-gray-500 mb-2">📅 Magang 4 Bulan</p>
            <p className="text-sm font-semibold">Keahlian Yang Dibutuhkan:</p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Content Planning</li>
              <li>Copywriting</li>
            </ul>
            <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded">
              Lihat Detail
            </button>
          </div>

          {/* Card 3 */}
          <div className="shadow-lg p-6 rounded-xl border">
            <h3 className="text-blue-700 font-semibold mb-2">
              Asisten Agroindustri
            </h3>
            <p className="text-sm text-gray-700 mb-2">Hijau Lestari Farm</p>
            <p className="text-sm text-gray-500 mb-2">📍 Bogor, Indonesia</p>
            <p className="text-sm text-gray-500 mb-2">📅 Magang 6 Bulan</p>
            <p className="text-sm font-semibold">Keahlian Yang Dibutuhkan:</p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Hidroponik</li>
              <li>Organic Certification</li>
            </ul>
            <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded">
              Lihat Detail
            </button>
          </div>

          {/* Card 4 */}
          <div className="shadow-lg p-6 rounded-xl border">
            <h3 className="text-blue-700 font-semibold mb-2">
              Web Developer Intern
            </h3>
            <p className="text-sm text-gray-700 mb-2">Techbros Indonesia</p>
            <p className="text-sm text-gray-500 mb-2">📍 Surabaya, Indonesia</p>
            <p className="text-sm text-gray-500 mb-2">📅 Magang 5 Bulan</p>
            <p className="text-sm font-semibold">Keahlian Yang Dibutuhkan:</p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>React.js</li>
              <li>Node.js</li>
            </ul>
            <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded">
              Lihat Detail
            </button>
          </div>

          {/* Card 5 */}
          <div className="shadow-lg p-6 rounded-xl border">
            <h3 className="text-blue-700 font-semibold mb-2">
              Data Analyst Intern
            </h3>
            <p className="text-sm text-gray-700 mb-2">Insight Lab</p>
            <p className="text-sm text-gray-500 mb-2">📍 Yogyakarta, Indonesia</p>
            <p className="text-sm text-gray-500 mb-2">📅 Magang 3 Bulan</p>
            <p className="text-sm font-semibold">Keahlian Yang Dibutuhkan:</p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Python</li>
              <li>SQL</li>
            </ul>
            <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded">
              Lihat Detail
            </button>
          </div>

          {/* Card 6 */}
          <div className="shadow-lg p-6 rounded-xl border">
            <h3 className="text-blue-700 font-semibold mb-2">
              Marketing Intern
            </h3>
            <p className="text-sm text-gray-700 mb-2">Cahaya Abadi Group</p>
            <p className="text-sm text-gray-500 mb-2">📍 Medan, Indonesia</p>
            <p className="text-sm text-gray-500 mb-2">📅 Magang 4 Bulan</p>
            <p className="text-sm font-semibold">Keahlian Yang Dibutuhkan:</p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Strategic Marketing</li>
              <li>Communication</li>
            </ul>
            <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded">
              Lihat Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramMagang;
