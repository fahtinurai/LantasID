// src/pages/LessonPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

export default function LessonPage() {
  const { id, topicIndex } = useParams(); 
  const course = courses.find((c) => c.id === parseInt(id));
  const [selectedIndex, setSelectedIndex] = useState(0);

  // state untuk tab Deskripsi/Resource
  const [activeTab, setActiveTab] = useState("deskripsi");

  if (!course) return <p>Kursus tidak ditemukan.</p>;

  // ambil topik yang dipilih (kalau ada param topicIndex)
  const selectedTopic =
    topicIndex !== undefined ? course.topics[parseInt(topicIndex)] : null;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar menu utama */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4">
        <h2 className="text-lg font-bold mb-4">{course.title}</h2>

        <ul className="space-y-2">
          {course.content.map((lesson, idx) => (
            <li
              key={idx}
              onClick={() => {
                setSelectedIndex(idx);
                setActiveTab("deskripsi");
              }}
              className={`p-2 rounded cursor-pointer ${
                idx === selectedIndex
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {lesson.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {selectedIndex !== null && (
          <>
            <h1 className="text-2xl font-bold mb-4">
              {course.content[selectedIndex].title}
            </h1>

            {/* Detail Kelas */}
            {course.content[selectedIndex].sections ? (
              <div className="space-y-4">
                {course.content[selectedIndex].sections.map((section, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveTab(section.subtitle)} // klik card
                    className="p-4 border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition"
                  >
                    <h2 className="font-semibold text-lg mb-2">{section.subtitle}</h2>
                    <p className="text-gray-600 line-clamp-2">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {/* Materi Belajar */}
                {course.content[selectedIndex].title === "Materi Belajar" &&
                  selectedTopic && (
                    <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                      <img
                        src={selectedTopic.image}
                        alt={selectedTopic.name}
                        className="w-full h-64 object-cover rounded mb-4"
                      />
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
                          {selectedTopic.resource ? (
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
                {/* Default → description biasa */}
                {course.content[selectedIndex].title !== "Materi Belajar" && !course.content[selectedIndex].sections && (
                  <p className="text-gray-700">
                    {course.content[selectedIndex].description}
                  </p>
                )}
              </>
            )}

          </>
        )}
      </main>
    </div>
  );
}