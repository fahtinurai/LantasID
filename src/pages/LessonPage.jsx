// src/pages/LessonPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/courses"; // pastikan path sesuai

export default function LessonPage() {
  const { id, topicIndex } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("deskripsi"); // tab aktif
  const selectedLesson = course.content[selectedIndex];

  // kalau ada topicIndex, otomatis pilih "Materi Belajar"
  useEffect(() => {
    if (topicIndex !== undefined) {
      const materiIndex = course.content.findIndex(
        (c) => c.title === "Materi Belajar"
      );
      if (materiIndex !== -1) {
        setSelectedIndex(materiIndex);
      }
    }
  }, [topicIndex, course]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4">
        <h2 className="text-lg font-bold mb-4">
          {topicIndex !== undefined && course.topics[topicIndex]
            ? course.topics[topicIndex].name // tampilkan topik yang dipilih
            : course.title}
        </h2>

        <ul className="space-y-2">
          {course.content.map((lesson, idx) => (
            <li
              key={idx}
              onClick={() => setSelectedIndex(idx)}
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
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">{selectedLesson.title}</h1>

        {/* Video hanya untuk Materi Belajar */}
        {selectedLesson.title === "Materi Belajar" && (
          <div className="bg-gray-300 aspect-video rounded mb-6 flex items-center justify-center w-[300px] md:w-[480px] lg:w-[640px] mx-auto">
            <span className="text-gray-600">[ Video Placeholder ]</span>
          </div>
        )}

        {/* Tabs */}
        <div className="border-b border-gray-300 mb-4 flex space-x-4">
          <button
            onClick={() => setActiveTab("deskripsi")}
            className={`pb-2 ${
              activeTab === "deskripsi"
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Deskripsi
          </button>
          <button
            onClick={() => setActiveTab("resource")}
            className={`pb-2 ${
              activeTab === "resource"
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Resource
          </button>
        </div>

        {/* Konten */}
        <div className="bg-white p-4 rounded shadow">
          {activeTab === "deskripsi" ? (
            <>
              {selectedLesson.title === "Pengantar" ? (
                topicIndex !== undefined ? (
                  <div>
                    <h3 className="font-semibold mb-2">
                      Pengantar: {course.topics[topicIndex].name}
                    </h3>
                    <p className="text-gray-700">
                      {course.topics[topicIndex].intro}
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-700">
                    Silakan pilih salah satu materi untuk melihat pengantar.
                  </p>
                )
              ) : selectedLesson.title === "Materi Belajar" ? (
                <div>
                  <h3 className="font-semibold mb-2">Materi yang Dipelajari:</h3>
                  <ul className="space-y-3">
                    {topicIndex !== undefined ? (
                      <li className="border p-3 rounded bg-gray-50">
                        <h4 className="font-medium">
                          {course.topics[topicIndex].name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {course.topics[topicIndex].description}
                        </p>
                      </li>
                    ) : (
                      course.topics.map((topic, i) => (
                        <li key={i} className="border p-3 rounded bg-gray-50">
                          <h4 className="font-medium">{topic.name}</h4>
                          <p className="text-sm text-gray-600">
                            {topic.description}
                          </p>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              ) : (
                <>
                  <h3 className="font-semibold mb-2">Tentang Pelajaran Ini</h3>
                  <p className="text-gray-700">{selectedLesson.description}</p>
                </>
              )}
            </>
          ) : (
            <>
              {topicIndex !== undefined && course.topics[topicIndex].resources ? (
                <ul className="list-disc list-inside space-y-2">
                  {course.topics[topicIndex].resources.map((res, i) => (
                    <li key={i} className="text-blue-600 underline cursor-pointer">
                      {res}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">Belum ada resource untuk materi ini.</p>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
