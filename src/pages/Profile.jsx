// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    location: "",
    birthdate: "",
    address: "",
    education: "",
  });

  // ambil user dari localStorage (kalau ada)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setProfile({
        name: user.name || "",
        location: user.location || "",
        birthdate: user.birthdate || "",
        address: user.address || "",
        education: user.education || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(profile));
    alert("Profil berhasil diperbarui!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        {/* Judul */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome, {profile.name || "User"}!
          </h2>
          <p className="text-gray-600 text-sm">
            Informasi mengenai profil dan preferensi kamu di seluruh layanan LantasID.
          </p>
        </div>

        {/* Form Profil */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Data Diri</h3>
            {/* Nama */}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                  bg-white text-gray-700 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Lokasi */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Lokasi
            </label>
            <select
              name="location"
              value={profile.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                  bg-white text-gray-700 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Pilih Lokasi</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Bandung">Bandung</option>
              <option value="Surabaya">Surabaya</option>
              <option value="Medan">Medan</option>
            </select>
          </div>

          {/* Tanggal Lahir */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tanggal Lahir
            </label>
            <input
              type="date"
              name="birthdate"
              value={profile.birthdate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                  bg-white text-gray-700 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Alamat */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Alamat
            </label>
            <textarea
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                  bg-white text-gray-700 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
          </div>

          {/* Pendidikan */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pendidikan Terakhir
            </label>
            <select
              name="education"
              value={profile.education}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                  bg-white text-gray-700 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Pilih Pendidikan</option>
              <option value="SMP">SMP</option>
              <option value="SMA">SMA</option>
              <option value="Diploma">Diploma</option>
              <option value="Sarjana">Sarjana</option>
              <option value="Magister">Magister</option>
              <option value="Doktor">Doktor</option>
            </select>
          </div>

          {/* Tombol */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
