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

  // 🔑 cek user login
  const user = JSON.parse(localStorage.getItem("user"));
  const restrictedTitles = new Set(["Materi Belajar", "Evaluasi Pembelajaran"]);

  if (!course) return <p>Kursus tidak ditemukan.</p>;

  const selectedTopic =
    topicIndex !== undefined ? course.topics?.[parseInt(topicIndex)] : null;

  const handleSidebarClick = (lesson, idx) => {
    if (lesson.title === "Evaluasi Pembelajaran") {
      setSelectedIndex(idx);
      return;
    }

    if (restrictedTitles.has(lesson.title) && !user) {
      setShowAuthPopup(true);
      return;
    }

    setSelectedIndex(idx);
    setActiveTab("deskripsi");
  };

  const currentLesson = course.content[selectedIndex];
  const isRestricted = restrictedTitles.has(currentLesson?.title) && !user;

  // Fungsi untuk embed YouTube
  const getEmbedUrl = (url) => {
    if (!url) return null;
    return url.includes("watch?v=") ? url.replace("watch?v=", "embed/") : url;
  };

  // 🔹 State progress untuk "To Do : View"
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem("lessonProgress");
    return saved ? JSON.parse(saved) : {};
  });

  // 🔹 Fungsi untuk menandai selesai
  const markAsDone = (lessonId) => {
    const newProgress = { ...progress, [lessonId]: true };
    setProgress(newProgress);
    localStorage.setItem("lessonProgress", JSON.stringify(newProgress));
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
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

          <li>
            <button
              onClick={() => window.history.back()}
              className="mt-4 w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-blue-300 transition"
            >
              Kembali
            </button>
          </li>
        </ul>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
        {selectedIndex !== null && currentLesson ? (
          currentLesson.title === "Evaluasi Pembelajaran" ? (
            // 🔹 Tampilan khusus Evaluasi Pembelajaran
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Evaluasi Pembelajaran
              </h1>
              <p className="text-gray-600 mb-6">
                Silahkan kerjakan evaluasi dari materi yang telah anda pelajari
                agar kami dapat menilai pemahaman anda terhadap materi yang
                telah diajarkan.
              </p>

              <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 max-w-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full mr-4">
                    📑
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Kuis</h3>
                    <p className="text-gray-600">Evaluasi Pengetahuan Dasar</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-1">5 soal pilihan ganda</p>
                <p className="text-gray-700 mb-6">Nilai Minimal 50</p>

                <button
                  onClick={() => navigate(`/training/${id}/${topicIndex}`)}
                  className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition flex items-center justify-center gap-2"
                >
                  Mulai Kuis <span>▶</span>
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Judul untuk selain Materi Belajar */}
              {currentLesson.title !== "Materi Belajar" && (
                <div className="mb-4">
                  <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
                </div>
              )}

              {/* Akses terbatas */}
              {isRestricted ? (
                <div className="p-6 border border-amber-200 bg-amber-50 rounded-xl">
                  <h3 className="font-semibold text-lg mb-2">Akses terbatas</h3>
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
                /* Detail Kelas */
                <div className="space-y-4">
                  {currentLesson.sections.map((section, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveSection(section)}
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
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      {/* Video */}
                      <div className="aspect-video w-full max-w-2xl mx-auto mb-4 rounded-lg overflow-hidden bg-gray-200">
                        {selectedTopic.video ? (
                          <iframe
                            src={getEmbedUrl(selectedTopic.video)}
                            title={selectedTopic.name}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <span className="text-gray-500 flex items-center justify-center h-full">
                            Video belum tersedia
                          </span>
                        )}
                      </div>

                      {/* Judul Materi Belajar + To do/Done */}
<div className="flex items-center justify-between mb-4">
  <h3 className="font-semibold text-xl">{selectedTopic.name}</h3>
  <button
    onClick={() => markAsDone(`${id}-${topicIndex}`)} // pakai ID unik
    className={`px-4 py-2 rounded mb-4 ${
      progress[`${id}-${topicIndex}`]
        ? "bg-green-500 text-white"
        : "bg-gray-300 text-black"
    }`}
  >
    {progress[`${id}-${topicIndex}`] ? "Done" : "To Do : View"}
  </button>
</div>


                      {/* Tabs */}
                      <div className="flex gap-2 mb-4">
                        <button
                          onClick={() => setActiveTab("deskripsi")}
                          className={`px-3 py-1 rounded text-sm font-medium ${
                            activeTab === "deskripsi"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          Deskripsi
                        </button>
                        <button
                          onClick={() => setActiveTab("resource")}
                          className={`px-3 py-1 rounded text-sm font-medium ${
                            activeTab === "resource"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          Resource
                        </button>
                      </div>

                      {/* Konten Tab */}
                      {activeTab === "deskripsi" ? (
                        <p className="text-gray-700 text-base">
                          {selectedTopic.description}
                        </p>
                      ) : (
                        <div className="text-gray-700 text-base">
                          {selectedTopic.resource?.length ? (
                            <ul className="list-disc pl-6">
                              {selectedTopic.resource.map((res, i) => (
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
                          ) : (
                            <p>Belum ada resource untuk materi ini.</p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}

              {/* Modal Section Detail */}
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

                    <p className="text-gray-700 mb-4">
                      {activeSection.detail}
                    </p>

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
          )
        ) : (
          <p className="text-gray-500">Silakan pilih menu di sidebar</p>
        )}
      </main>

      {/* Popup Auth */}
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
                  navigate("/register");
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
