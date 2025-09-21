  // src/pages/Community.jsx
  import React, { useState } from "react";

  export default function Community() {
    const [activeTab, setActiveTab] = useState("kisah");

    // contoh data dummy
    const kisahSukses = [
      {
        id: 1,
        author: "Aditya Nanda",
        time: "2 bulan lalu",
        title: "Perjalanan Saya Menguasai Design Grafis",
        desc: "Saya Memulai Dari Nol hingga lancar design...",
        category: "Design Grafis",
        image: "/images/Design-Innovation.jpg", // simpan di public/images
      },
      {
        id: 2,
        author: "Agus Saputra",
        time: "3 bulan lalu",
        title: "Mengubah Warung Tradisional Menjadi Toko Online Sukses",
        desc: "Warung keluarga kini jadi online store berkat pelatihan digital marketing...",
        category: "UMKM",
        image: "/images/SKII.jpg", // simpan di public/images
      },
    ];

    const forumDiskusi = [
      {
        id: 1,
        author: "Andi Pratama",
        wilayah: "Sukabumi & Cianjur",
        title: "Tips Sukses Menggunakan Pupuk Organik",
        desc: "Halo semua, saya ingin berbagi pengalaman...",
        comments: [
          { id: 1, name: "Sri Amirah", text: "Wah menarik sekali!" },
          {
            id: 2,
            name: "Andi Pratama",
            text: "Saya pakai merk 'Sukses Jaya' bu, mudah ditemukan.",
          },
        ],
      },
      {
        id: 2,
        author: "Sri Amirah",
        wilayah: "Bandung",
        title: "Mencari Desainer Grafis untuk Logo UMKM",
        desc: "Salam kenal, saya butuh desainer grafis untuk logo UMKM saya...",
        comments: [],
      },
    ];

    return (
      <div className="bg-white min-h-screen">
        {/* Banner */}
        <div
          className="h-64 bg-cover bg-center flex flex-col justify-center items-center text-white"
          style={{
            backgroundImage: `url('/images/Customer-Relations.jpg')`, // taruh banner di public/images
          }}
        >
          <h1 className="text-3xl font-bold">Komunitas LantasID</h1>
          <p className="text-center mt-2 max-w-2xl">
            Bergabung dengan komunitas LantasID dan bertukar pengalaman bersama.
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-8 border-b border-gray-300 pb-1">
            {/* Kisah Sukses */}
            <button
              onClick={() => setActiveTab("kisah")}
              className={`relative pb-2 text-base font-semibold bg-transparent border-0 focus:outline-none transition
                ${
                  activeTab === "kisah"
                    ? "text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:w-full after:h-[3px] after:bg-blue-600 after:rounded-full after:z-10"
                    : "text-black hover:text-blue-600"
                }`}
            >
              Kisah Sukses
            </button>

            {/* Forum Diskusi */}
            <button
              onClick={() => setActiveTab("forum")}
              className={`relative pb-2 text-base font-semibold bg-transparent border-0 focus:outline-none transition
                ${
                  activeTab === "forum"
                    ? "text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:w-full after:h-[3px] after:bg-blue-600 after:rounded-full after:z-10"
                    : "text-black hover:text-blue-600"
                }`}
            >
              Forum Diskusi
            </button>
          </div>

          {/* Content */}
          {activeTab === "kisah" && (
            <div className="mt-6">
              <div className="flex justify-end mb-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                  + Cerita Sukses
                </button>
              </div>

              <div className="space-y-6">
                {kisahSukses.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow border overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center text-sm text-gray-500 gap-4">
                        <span>👤 {item.author}</span>
                        <span>⏱️ {item.time}</span>
                      </div>
                      <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                      <p className="text-gray-700 mt-1">{item.desc}</p>
                      <div className="mt-3 flex gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          {item.category}
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          LantasID
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "forum" && (
            <div className="mt-6">
              {/* Form Posting */}
              <div className="bg-white border rounded-xl shadow p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  Forum Diskusi
                </h3>
                <p className="text-gray-600 mb-6">
                  Diskusi dan cerita sukses dari peserta pelatihan per wilayah
                </p>

                <h4 className="text-lg font-semibold mb-4">Buat Postingan Baru</h4>

                <form className="space-y-5">
                  {/* Judul */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Judul
                    </label>
                    <input
                      type="text"
                      placeholder="Judul diskusi Anda"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                  bg-white text-gray-700 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Isi Pesan */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Isi Pesan
                    </label>
                    <textarea
                      placeholder="Apa yang ingin Anda diskusikan?"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                  bg-white text-gray-700 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  {/* Wilayah */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Wilayah
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                  bg-white text-gray-700 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Pilih Wilayah</option>
                      <option>Bandung</option>
                      <option>Sukabumi</option>
                    </select>
                  </div>

                  {/* Tombol kirim */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg 
                        hover:bg-blue-600 transition"
                    >
                      Kirim
                    </button>
                  </div>
                </form>
              </div>

              {/* List Diskusi */}
              <div className="space-y-6">
                {forumDiskusi.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border rounded-xl shadow p-4"
                  >
                    {/* Header Post */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold">
                        {item.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold">{item.author}</p>
                        <p className="text-xs text-gray-500">{item.wilayah}</p>
                      </div>
                    </div>

                    {/* Isi Post */}
                    <h4 className="font-bold text-blue-600 mb-1">{item.title}</h4>
                    <p className="text-gray-700 mb-3">{item.desc}</p>

                    {/* Komentar */}
                    {item.comments.length > 0 && (
                      <div className="ml-12 space-y-3">
                        {item.comments.map((c) => (
                          <div key={c.id} className="flex gap-2">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold text-sm">
                              {c.name.charAt(0)}
                            </div>
                            <div className="bg-gray-100 px-3 py-2 rounded-lg text-sm text-gray-800">
                              <span className="font-semibold">{c.name}: </span>
                              {c.text}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Input balasan */}
                    <div className="flex items-center gap-2 mt-4 ml-12">
                      <input
                        type="text"
                        placeholder="Tulis Balasan..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                                  bg-white text-gray-700 placeholder-gray-400
                                  focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm">
                        Kirim
                      </button> 
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
