import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="w-full text-center text-gray-500 text-lg py-20">
        Pelatihan tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-16 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          {course.title}
        </h2>
        {/* Gambar default karena data tidak punya thumbnail */}
        <img
          src={course.thumbnail}
          alt={course.title}
          className="mb-6 rounded-lg w-full max-w-3xl mx-auto"
        />
        <p className="text-gray-800 mb-6 text-lg leading-relaxed">{course.description}</p>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
          <p className="font-semibold text-blue-700 mb-2">Level: {course.level}</p>
          <p className="text-yellow-600 mb-4">Durasi: {course.duration}</p>
          <h4 className="font-semibold text-blue-700 mb-2">Konten Pelatihan:</h4>
          <ul className="space-y-3">
            {course.topics.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="w-8 h-8 object-cover rounded-md" />
                <span className="text-gray-700">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      <div className="flex justify-end gap-2 mt-8">
        <Link
          to="/courses"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:text-white transition"
        >
          Kembali
        </Link>
        <Link
          to={`/courses/${course.id}/content`}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:text-white transition"
        >
          Lihat Materi Pelatihan
        </Link>
      </div>
      </div>
    </div>
  );
};

export default CourseDetail;
