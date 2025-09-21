// src/pages/ArticleDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ARTICLE_DETAILS } from "../data/articles";

export default function ArticleDetail() {
  const { id } = useParams();
  const article = ARTICLE_DETAILS[Number(id)];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Artikel tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Tombol kembali */}
        <Link
          to="/financialliteracy"
          className="mb-6 flex items-center gap-2 cursor-pointer group"
        >
          <span className="text-red-600 text-lg font-bold transition-transform duration-300 group-hover:-translate-x-2">
            &lt;
          </span>
          <span className="text-black text-lg font-medium">
            Kembali ke Literasi Keuangan
          </span>
        </Link>

        {/* CARD PUTIH MENGAMBANG */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* HEADER BIRU */}
          <div className="bg-blue-500 flex flex-col md:flex-row items-stretch">
            {/* Judul di kiri */}
            <div className="flex-1 p-6 flex flex-col items-start justify-start">
              {/* Category pill */}
              <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-gray-700 rounded-full mb-2">
                {article.category}
              </span>
              {/* Title */}
              <h1 className="text-xl md:text-2xl font-semibold text-white leading-snug">
                {article.title}
              </h1>
            </div>

            {/* Gambar di kanan */}
            <div className="w-full md:w-64">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 md:h-full object-cover"
              />
            </div>
          </div>

          {/* Konten + Sidebar */}
          <div className="p-6 flex flex-col md:flex-row gap-8">
            {/* Artikel */}
            <div className="flex-1 space-y-4 text-gray-800 leading-relaxed whitespace-pre-line">
              {article.content}
            </div>

            {/* Point Kunci */}
            <div className="w-full md:w-72 flex-shrink-0">
              <div className="p-5 bg-blue-50 border border-gray-200 rounded-xl shadow-sm">
                <h2 className="font-bold text-blue-800 text-lg">Point Kunci:</h2>
                <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
                  {article.keyPoints?.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
