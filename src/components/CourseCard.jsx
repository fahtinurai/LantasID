// src/components/CourseCard.jsx
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="border rounded shadow p-4 bg-white">
      <img src={course.thumbnail} alt={course.title} className="mb-3 rounded" />
      <h3 className="font-semibold text-xl mb-1">{course.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{course.description}</p>
      <Link to={`/courses/${course.id}`} className="text-green-700 font-medium">
        Lihat Detail
      </Link>
    </div>
  );
};

export default CourseCard;
