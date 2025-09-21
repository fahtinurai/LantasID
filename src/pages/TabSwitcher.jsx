import { Briefcase, Handshake } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const TabSwitcher = () => {
  const location = useLocation();

  const active = location.pathname.includes("mitra") ? "mitra" : "magang";

  return (
    <div className="flex gap-2 bg-gray-100 p-2 rounded-lg inline-flex">
      {/* Program Magang */}
      <Link
        to="/magang"
        className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
          active === "magang"
            ? "bg-blue-500 text-white"
            : "bg-white text-black border border-gray-200"
        }`}
      >
        <Briefcase size={18} />
        Program Magang
      </Link>

      {/* Mitra Lokal */}
      <Link
        to="/mitra"
        className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
          active === "mitra"
            ? "bg-blue-500 text-white"
            : "bg-white text-black border border-gray-200"
        }`}
      >
        <Handshake size={18} />
        Mitra Lokal
      </Link>
    </div>
  );
};

export default TabSwitcher;
