import React from "react";
import { Building2, Scissors, Clock } from "lucide-react";

const mentors = [
  {
    name: "Megacahyani Putri",
    title: "Artworks Agency",
    role: "Digital Marketing Lead",
    exp: "10 tahun pengalaman industri",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ronald Harason",
    title: "Techbros",
    role: "AI Expert Specialist",
    exp: "7 tahun pengalaman industri",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Putra Haryadi",
    title: "DecodeID",
    role: "Tech Consultant",
    exp: "8 tahun pengalaman industri",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Dandi Jotianang",
    title: "Biz Consult",
    role: "Business Consultant",
    exp: "5 tahun pengalaman industri",
    img: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: "Dwi Sulistiyani",
    title: "HR Solutions",
    role: "HR Specialist",
    exp: "6 tahun pengalaman industri",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Agus Hamzah",
    title: "Finance Navigator",
    role: "Financial Advisor",
    exp: "12 tahun pengalaman industri",
    img: "https://randomuser.me/api/portraits/men/49.jpg",
  },
];

export default function Mentoring() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center py-20">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Dapatkan Bimbingan Eksklusif
        </h1>
        <p className="max-w-2xl mx-auto mb-6">
          Akselerasi karir Anda melalui sesi konsultasi 1-on-1 dengan para
          praktisi dan ahli industri terkemuka.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
          Temukan Mentor Anda
        </button>
      </div>

      {/* Bagaimana Cara Kerjanya */}
      <div className="text-center py-16 px-6">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          Bagaimana Cara Kerjanya
        </h2>
        <p className="text-gray-600 mb-12">
          Hanya dalam 3 langkah mudah untuk memulai sesi mentoring Anda.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              1
            </div>
            <h3 className="font-semibold">Pilih Mentor</h3>
            <p className="text-gray-600 text-sm mt-2">
              Jelajahi daftar mentor ahli dan pilih yang paling sesuai dengan
              tujuan karir Anda.
            </p>
          </div>
          <div>
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              2
            </div>
            <h3 className="font-semibold">Jadwalkan Sesi</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lihat ketersediaan jadwal mentor dan pesan sesi pada waktu yang
              Anda inginkan.
            </p>
          </div>
          <div>
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              3
            </div>
            <h3 className="font-semibold">Mulai Konsultasi</h3>
            <p className="text-gray-600 text-sm mt-2">
              Terhubung dengan mentor Anda melalui sesi online untuk diskusi
              mendalam.
            </p>
          </div>
        </div>
      </div>

      {/* Daftar Mentor */}
      <div className="bg-slate-50 py-16 px-6">
        <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">
          Daftar Mentor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden border hover:shadow-md transition flex flex-col"
            >
              {/* Foto mentor */}
              <img
                src={mentor.img}
                alt={mentor.name}
                className="w-full h-44 object-cover"
              />

              {/* Konten */}
              <div className="flex flex-col flex-1 p-4">
                <h3 className="font-semibold text-lg">{mentor.name}</h3>
                <p className="text-gray-500 text-sm">{mentor.title}</p>

                <div className="mt-2 space-y-1 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>{mentor.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Scissors className="w-4 h-4" />
                    <span>{mentor.role}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{mentor.exp}</span>
                  </div>
                </div>

                {/* Tombol selalu di bawah */}
                <div className="flex justify-between items-center mt-auto pt-6">
                  <button className="bg-blue-100 text-blue-700 font-semibold px-6 py-3 rounded-lg text-base hover:bg-blue-200">
                    Konsultasi
                  </button>
                  <a
                    href="#"
                    className="text-black text-base underline hover:text-gray-700"
                  >
                    Profile Lengkap
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
