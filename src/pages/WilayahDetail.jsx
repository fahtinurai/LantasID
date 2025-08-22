import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

const normalize = (str) =>
  str.toLowerCase().replace(/[\s&]+/g, "-");

const WilayahDetail = () => {
  const { namaWilayah } = useParams();

  const filteredCourses = courses.filter(
    (course) => normalize(course.region) === namaWilayah.toLowerCase()
  );

  return (
    <div className="relative py-16 px-4 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-100" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 -skew-x-6 origin-top-right" />
        <div className="absolute top-10 right-20 w-32 h-32 rounded-full border-4 border-white opacity-70" />
        <div className="absolute bottom-20 right-40 w-16 h-16 rounded-full border-2 border-white opacity-60" />
      </div>

      {/* Konten */}
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Tombol kembali */}
        <div
          onClick={() => window.history.back()}
          className="mb-6 flex items-center gap-2 cursor-pointer group"
        >
          <span className="text-red-600 text-lg font-bold transition-transform duration-300 group-hover:-translate-x-2">
            &lt;
          </span>
          <span className="text-black text-lg font-medium">
            Kembali ke Daftar Wilayah
          </span>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-blue-700 capitalize">
          Pelatihan di Wilayah {namaWilayah.replace(/-/g, " ")}
        </h2>

        {filteredCourses.length === 0 ? (
          <p className="text-gray-600 text-lg">
            Tidak ada pelatihan di wilayah ini.
          </p>
        ) : (
          <div className="space-y-12">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="border rounded-lg shadow bg-white/90 backdrop-blur-sm p-6"
              >
                {/* Thumbnail */}
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                {/* Judul + deskripsi */}
                <h3 className="text-2xl font-bold text-blue-700 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <p className="text-sm text-gray-500 mb-1">
                  Durasi: {course.duration}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Level: {course.level}
                </p>

                {/* Topics */}
                <h4 className="text-xl font-semibold text-blue-600 mb-4">
                  Materi Utama
                </h4>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {course.topics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="border rounded-lg p-4 bg-gray-50 hover:shadow-md transition"
                    >
                      <img
                        src={topic.image}
                        alt={topic.name}
                        className="w-full h-32 object-cover rounded mb-3"
                      />
                      <h5 className="text-lg font-semibold text-blue-700">
                        {topic.name}
                      </h5>
                      <p className="text-sm text-gray-600 mt-1">
                        {topic.intro}
                      </p>
                      <p className="text-sm text-gray-500 mt-2 italic">
                        {topic.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Content / Sections */}
                <h4 className="text-xl font-semibold text-blue-600 mb-4">
                  Detail Kursus
                </h4>
                <div className="space-y-4">
                  {course.content
                    .filter(
                      (section) =>
                        section.title !== "Materi Belajar" &&
                        section.title !== "Evaluasi Pembelajaran"
                    )
                    .map((section, idx) => (
                      <div key={idx} className="p-4 border rounded-lg bg-gray-50">
                        <h5 className="text-lg font-bold text-gray-800 mb-2">
                          {section.title}
                        </h5>
                        {section.sections ? (
                          <div className="space-y-3">
                            {section.sections.map((sub, i) => (
                              <div key={i}>
                                <h6 className="font-semibold text-blue-700">
                                  {sub.subtitle}
                                </h6>
                                <p className="text-sm text-gray-700">
                                  {sub.description}
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                  {sub.detail}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-700">{section.description}</p>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WilayahDetail;
