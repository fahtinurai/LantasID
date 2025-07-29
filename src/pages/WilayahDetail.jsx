import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

// Fungsi untuk normalisasi nama wilayah (hapus spasi, "&", dan ganti "-" agar bisa dicocokkan)
const normalize = (str) =>
  str.toLowerCase().replace(/[\s&]+/g, "-"); // sukabumi & cianjur → sukabumi-cianjur

const WilayahDetail = () => {
  const { namaWilayah } = useParams();

  const filteredCourses = courses.filter(
    (course) => normalize(course.region) === namaWilayah.toLowerCase()
  );

  return (
        <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
        <button
        onClick={() => window.history.back()}
        className="mb-6 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
        >
        Kembali
        </button>

        <h2 className="text-3xl font-bold mb-6 text-teal-700 capitalize">
        Pelatihan di Wilayah {namaWilayah.replace(/-/g, " ")}
        </h2>

        {filteredCourses.length === 0 ? (
        <p className="text-gray-500 text-lg">Tidak ada pelatihan di wilayah ini.</p>
        ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
            <div key={course.id} className="border rounded p-4 shadow">
                <h3 className="text-xl font-bold text-teal-700 mb-2">{course.title}</h3>
                <p className="text-gray-700 mb-2">{course.description}</p>
                <p className="text-sm text-gray-500">Durasi: {course.duration}</p>
                <p className="text-sm text-gray-500">Level: {course.level}</p>
            </div>
            ))}
        </div>
        )}
    </div>
    </div>

  );
};

export default WilayahDetail;
