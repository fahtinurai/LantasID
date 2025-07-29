import { Link } from "react-router-dom";
import { courses } from "../data/courses";

const Courses = () => {
  return (
    <div className="bg-white py-16 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-700 text-center mb-12">
          Pelatihan Tersedia
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative group bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-1"
            >
              {/* Hover Blur Layer */}
              <div className="absolute inset-0 bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 z-0 rounded-2xl" />

              <div className="relative z-10">
                <div className="bg-teal-700 text-white p-4 font-semibold text-lg rounded-t-2xl">
                  {course.title}
                </div>
                <div className="p-5">
                  <p className="text-sm mb-4 text-gray-700">{course.description}</p>
                  <h4 className="font-semibold text-teal-700 mb-2">Yang akan dipelajari:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-800 mb-4 space-y-1">
                    {course.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <div>🕒 {course.duration}</div>
                    <div>📊 {course.level}</div>
                  </div>

                  <div className="flex gap-3">
                    <Link to="/login" className="flex-1">
                    <button className="w-full border border-blue-100 text-blue-600 font-semibold py-2 rounded hover:bg-teal-50 transition duration-200 flex items-center justify-center gap-1">
                      <span className="text-lg"></span> Mulai Belajar
                    </button>
                  </Link>
                  
                    <Link
                      to={`/courses/${course.id}`}
                      className="flex-1 bg-blue-500 hover:bg-teal-600 active:bg-teal-700 text-white hover:text-white font-semibold py-2 rounded transition duration-200 text-center"
                    >
                      Lihat Detail
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
