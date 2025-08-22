import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white w-full border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/LogoLantasID.png"
            alt="LantasID Logo"
            className="h-20 w-auto" // logo lebih gede
          />
          <span className="text-gray-900 text-xl font-bold">
            LantasID
          </span>
        </Link>

        {/* Menu */}
       <nav className="flex items-center space-x-4 md:space-x-6 text-sm md:text-base font-medium">
        <Link
          to="/"
          className="px-3 py-2 font-bold text-gray-800 hover:text-gray-900 hover:bg-gray-200/60 rounded-lg transition"
        >
          Beranda
        </Link>
        <Link
          to="/courses"
          className="px-3 py-2 font-bold text-gray-800 hover:text-gray-900 hover:bg-gray-200/60 rounded-lg transition"
        >
          Pelatihan
        </Link>
        <Link
          to="/financialliteracy"
          className="px-3 py-2 font-bold text-gray-800 hover:text-gray-900 hover:bg-gray-200/60 rounded-lg transition"
        >
          Keuangan
        </Link>
        <Link
          to="/about"
          className="px-3 py-2 font-bold text-gray-800 hover:text-gray-900 hover:bg-gray-200/60 rounded-lg transition"
        >
          Tentang
        </Link>

        {/* Link Masuk */}
        <Link
          to="/login"
          className="px-3 py-2 font-bold text-blue-600 hover:bg-gray-200/60 rounded-lg transition"
        >
          Masuk
        </Link>

        {/* Tombol Daftar Sekarang */}
        <Link
          to="/register"
          className="bg-blue-600 font-bold text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Daftar Sekarang
        </Link>
      </nav>
      </div>
    </header>
  );
};

export default Navbar;
