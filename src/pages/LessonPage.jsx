// src/pages/LessonPage.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

export default function LessonPage() {
  const { id, topicIndex } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === parseInt(id));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("deskripsi");
  const [activeSection, setActiveSection] = useState(null);
  const [showAuthPopup, setShowAuthPopup] = useState(false);

  if (!course) return <p>Kursus tidak ditemukan.</p>;

  const restrictedTitles = new Set(["Materi Belajar", "Evaluasi Pembelajaran"]);

  // ambil topik yang dipilih (kalau ada param topicIndex)
  const selectedTopic =
    topicIndex !== undefined ? course.topics?.[parseInt(topicIndex)] : null;

  // handler klik item sidebar
  const handleSidebarClick = (lesson, idx) => {
    if (restrictedTitles.has(lesson.title)) {
      // Tampilkan popup auth jika menu yang dibatasi diklik
      setShowAuthPopup(true);
      return;
    }
    setSelectedIndex(idx);
    setActiveTab("deskripsi");
  };

  const currentLesson = course.content[selectedIndex];
  const isRestricted = restrictedTitles.has(currentLesson?.title);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar menu utama */}
        <aside className="w-64 bg-white border-r border-gray-200 p-4">
          <h2 className="text-lg font-bold mb-4">{course.title}</h2>

          <ul className="space-y-2">
            {course.content.map((lesson, idx) => (
              <li
                key={idx}
                onClick={() => handleSidebarClick(lesson, idx)}
                className={`p-2 rounded cursor-pointer ${
                  idx === selectedIndex
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {lesson.title}
              </li>
            ))}

            {/* Tombol kembali ke konten sebelumnya */}
            <li>
              <button
                onClick={() => window.history.back()
                }
                className="mt-4 w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-blue-300 transition"
              >
                Kembali
              </button>
            </li>
          </ul>
        </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {selectedIndex !== null && currentLesson && (
          <>
            <h1 className="text-2xl font-bold mb-4">
              {currentLesson.title}
            </h1>

            {/* Jika lesson dibatasi, jangan tampilkan konten dan minta login/daftar */}
            {isRestricted ? (
              <div className="p-6 border border-amber-200 bg-amber-50 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">
                  Akses terbatas
                </h3>
                <p className="text-gray-700 mb-4">
                  Untuk mengakses <strong>{currentLesson.title}</strong>,
                  silakan login atau daftar terlebih dahulu.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowAuthPopup(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    Login / Daftar
                  </button>
                </div>
              </div>
            ) : currentLesson.sections ? (
              /* Detail Kelas (punya sections) */
              <div className="space-y-4">
                {currentLesson.sections.map((section, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveSection(section)} // klik buka modal
                    className="p-4 border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition"
                  >
                    <h2 className="font-semibold text-lg mb-2">
                      {section.subtitle}
                    </h2>
                    <p className="text-gray-600 line-clamp-2">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {/* Materi Belajar */}
                {currentLesson.title === "Materi Belajar" && selectedTopic && (
                  <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                    {selectedTopic.image && (
                      <img
                        src={selectedTopic.image}
                        alt={selectedTopic.name}
                        className="w-full h-64 object-cover rounded mb-4"
                      />
                    )}
                    <h3 className="font-semibold text-xl mb-2">
                      {selectedTopic.name}
                    </h3>

                    {/* Tabs Deskripsi & Resource */}
                    <div className="flex gap-4 mb-4">
                      <button
                        onClick={() => setActiveTab("deskripsi")}
                        className={`px-4 py-2 rounded ${
                          activeTab === "deskripsi"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100"
                        }`}
                      >
                        Deskripsi
                      </button>
                      <button
                        onClick={() => setActiveTab("resource")}
                        className={`px-4 py-2 rounded ${
                          activeTab === "resource"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100"
                        }`}
                      >
                        Resource
                      </button>
                    </div>

                    {/* Konten Tab */}
                    {activeTab === "deskripsi" ? (
                      <p className="text-gray-600 text-base">
                        {selectedTopic.description}
                      </p>
                    ) : (
                      <div className="text-gray-600 text-base">
                        {selectedTopic.resource?.length ? (
                          <ul className="list-disc pl-6">
                            {selectedTopic.resource.map((res, i) => (
                              <li key={i}>
                                <a
                                  href={res.link}
                                  className="text-blue-600 hover:underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {res.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>Belum ada resource untuk materi ini.</p>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Default → deskripsi biasa */}
                {currentLesson.title !== "Materi Belajar" &&
                  !currentLesson.sections && (
                    <p className="text-gray-700">
                      {currentLesson.description}
                    </p>
                  )}
              </>
            )}

            {/* Modal Popup Detail Section */}
            {activeSection && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={() => setActiveSection(null)}
                aria-modal="true"
                role="dialog"
              >
                <div
                  className="bg-white p-6 rounded-2xl shadow-xl w-3/4 max-w-2xl max-h-[80vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h2 className="text-xl font-bold mb-4">
                    {activeSection.subtitle}
                  </h2>

                  <p className="text-gray-700 mb-4">{activeSection.detail}</p>

                  {activeSection.image && (
                    <img
                      src={activeSection.image}
                      alt={activeSection.subtitle}
                      className="w-full h-56 object-cover rounded mb-4"
                    />
                  )}

                  {activeSection.resources && (
                    <ul className="list-disc pl-6 text-gray-700">
                      {activeSection.resources.map((res, i) => (
                        <li key={i}>
                          <a
                            href={res.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {res.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setActiveSection(null)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* Popup Auth (Login / Daftar) */}
      {showAuthPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowAuthPopup(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-white p-6 rounded-2xl shadow-xl w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4 text-center">
              Apakah Anda sudah punya akun?
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Untuk mengakses <strong>Materi Belajar</strong> dan{" "}
              <strong>Evaluasi Pembelajaran</strong>, silakan login atau daftar
              terlebih dahulu.
            </p>

            <div className="flex justify-between gap-3">
              <button
                onClick={() => {
                  setShowAuthPopup(false);
                  navigate("/login");
                }}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Sudah Punya Akun
              </button>
              <button
                onClick={() => {
                  setShowAuthPopup(false);
                  navigate("/register"); // ganti sesuai rute daftar kamu
                }}
                className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Belum, Daftar
              </button>
            </div>

              <button
                onClick={() => setShowAuthPopup(false)}
                className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Batal
              </button>
          </div>
        </div>
      )}
    </div>
  );
}
