import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-teal-600 to-cyan-700 py-4 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <Link
          to="/"
          className="text-white text-xl md:text-2xl font-extrabold flex items-center gap-2"
        >
          <span role="img" aria-label="Graduation Cap">🎓</span> LantasID
        </Link>
        <nav className="space-x-4 md:space-x-8 text-sm md:text-base">
          {[
            { label: "Beranda", to: "/" },
            { label: "Pelatihan", to: "/courses" },
            { label: "Keuangan", to: "/dashboard" },
            { label: "Account", to: "/login" }
          ].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-white hover:text-white hover:bg-white/20 px-3 py-1 rounded transition"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
