import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  { key: "all", label: "Semua Kategori" },
  { key: "anggaran", label: "Anggaran" },
  { key: "investasi", label: "Investasi" },
  { key: "utang", label: "Utang" },
  { key: "dana-darurat", label: "Dana Darurat" },
];

const ARTICLES = [
  {
    id: 1,
    title: "Dana Darurat: Bagaimana dan Di Mana Mempersiapkannya",
    category: "dana-darurat",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "5 Alasan Kenapa Uang Perlu Bekerja untuk Kita",
    category: "anggaran",
    image: "/images/duit.jpg", // pakai gambar lokal
  },
  {
    id: 3,
    title: "7 Tujuan Investasi yang Wajib Kamu Miliki untuk Masa Depan Sukses dan Sejahtera",
    category: "investasi",
    image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Cara Melunasi Hutang dengan Perencanaan Keuangan",
    category: "utang",
    image: "public/images/Menu-Knowledge.jpg",
  },
  {
    id: 5,
    title: "Tempat Terbaik Menyimpan Dana Darurat: Aman, Akses Mudah, dan Menguntungkan",
    category: "dana-darurat",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "8 Tips Menabung Harian yang Mudah, Cepat, dan Makin Cuan",
    category: "anggaran",
    image: "public/images/Local-History.jpg",
  },
  {
    id: 7,
    title: "Inflasi vs Deflasi: Apa Bedanya dan Bagaimana Dampaknya pada Ekonomi?",
    category: "investasi",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Utang Lancar: Pengertian, Ciri, Jenis dan Contohnya",
    category: "utang",
    image: "public/images/Digital-Marketing.jpg",
  },
  {
    id: 9,
    title: "Strategi Mengelola Utang agar Tetap Sehat Finansial",
    category: "utang",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
  },
];


function CategoryTabs({ active, onChange }) {
  return (
    <div className="mx-auto mt-6 flex max-w-6xl w-full px-4 gap-0">
      {CATEGORIES.map(({ key, label }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`flex-1 flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-200 
              ${isActive 
                ? "bg-black text-white relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-red-500" 
                : "bg-gray-300 text-black hover:bg-gray-400"
              }`}
            style={{
              borderRadius: "0px", // bener² kotak, ga ada rounded
              position: "relative", // biar garis merah bawah bisa muncul
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

function ArticleCard({ title, image, category }) {
  const cat = CATEGORIES.find((c) => c.key === category);
  return (
    <article className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]" />
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="capitalize">{cat?.label || "Artikel"}</span>
        </div>
        <h3 className="line-clamp-2 text-base font-semibold leading-snug">{title}</h3>
          <Link to="/login">
          <button className="mt-2 inline-flex items-center text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-lg hover:bg-blue-200">
            Baca selengkapnya
          </button>
        </Link>
      </div>
    </article>
  );
}

export default function FinancialLiteracy() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return ARTICLES;
    return ARTICLES.filter((a) => a.category === active);
  }, [active]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
        <section className="relative w-full">
        {/* Gambar background */}
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="/images/booksdesk.jpg"
            alt="Hero"
          />
          {/* Overlay hitam transparan */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Konten */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Pusat Literasi Keuangan
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-300">
            Tingkatkan pemahaman finansial Anda untuk masa depan yang lebih sejahtera.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <CategoryTabs active={active} onChange={setActive} />

      {/* Articles */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <ArticleCard key={a.id} {...a} />)
          )}
        </div>
      </section>
    </div>
  );
}
