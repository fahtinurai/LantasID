// src/pages/FinancialLiteracy.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES, ARTICLES } from "../data/articles"; // import dari data

// tabs kategori
function CategoryTabs({ active, onChange }) {
  return (
    <div className="mx-auto mt-6 flex max-w-6xl w-full px-4">
      {CATEGORIES.map(({ key, label }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`flex-1 flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-none
          ${
            isActive
              ? "bg-black text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-red-600"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

// card artikel
function ArticleCard({ id, title, image, category }) {
  const cat = CATEGORIES.find((c) => c.key === category);
  const isLoggedIn = !!localStorage.getItem("user");
  const linkTo = isLoggedIn ? `/articles/${id}` : "/login";

  return (
    <article className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="capitalize">{cat?.label || "Artikel"}</span>
        </div>
        <h3 className="line-clamp-2 text-base font-semibold leading-snug">
          {title}
        </h3>
        <Link to={linkTo}>
          <button className="mt-2 inline-flex items-center text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-lg hover:bg-blue-200">
            Baca selengkapnya
          </button>
        </Link>
      </div>
    </article>
  );
}

// page utama
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
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="/images/booksdesk.jpg"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Pusat Literasi Keuangan
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-300">
            Tingkatkan pemahaman finansial Anda untuk masa depan yang lebih
            sejahtera.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <CategoryTabs active={active} onChange={setActive} />

      {/* Articles */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <ArticleCard key={a.id} {...a} />
          ))}
        </div>
      </section>
    </div>
  );
}
