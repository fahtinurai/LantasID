// src/pages/CourseContent.jsx
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

const CourseContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="text-center text-gray-500 py-20 text-lg">
        Pelatihan tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="bg-[#f4f4f4] py-12 px-4 md:px-12 lg:px-24">
      {/* Tombol Kembali */}
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 hover:text-white transition"
      >
        Kembali
      </button>

      <h2 className="text-3xl font-bold text-teal-700 text-center mb-12">
        Yang Akan Dipelajari:{" "}
        <span className="text-gray-800">{course.title}</span>
      </h2>

      <div className="space-y-8">
        {course.topics.map((topic, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden"
          >
            {/* Gambar kiri */}
            <div className="w-full md:w-1/4">
              <img
                src={topic.image}
                alt={topic.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Konten kanan */}
            <div className="w-full md:w-3/4 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {topic.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  Materi ini akan membahas topik{" "}
                  <strong>{topic.name}</strong> secara mendalam sesuai
                  kurikulum pelatihan.
                </p>
              </div>
              <div className="flex justify-end">
              <button
                onClick={() =>
                  navigate(`/courses/${course.id}/lesson/${idx}`)
                }
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Lihat Kelas
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
