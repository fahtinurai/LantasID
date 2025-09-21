import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // baca user awal
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // dengarkan event storage (dipicu saat login/logout)
  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("storage"));
    navigate("/login");
  };

  return (
    <header className="bg-white w-full border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/LogoLantasID.png"
            alt="LantasID Logo"
            className="h-20 w-auto"
          />
          <span className="text-gray-900 text-xl font-bold">LantasID</span>
        </Link>

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

          {/* Kalau belum login */}
          {!user && (
            <>
              <Link
                to="/login"
                className="px-3 py-2 font-bold text-blue-600 hover:bg-gray-200/60 rounded-lg transition"
              >
                Masuk
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 font-bold text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Daftar Sekarang
              </Link>
            </>
          )}

          {/* Kalau sudah login */}
          {user && (
            <div className="relative">
              {/* TOMBOL DROPDOWN */}
              <span
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="cursor-pointer text-gray-800 font-semibold hover:text-gray-900"
              >
                {user.name} ▾
              </span>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Edit Profile
                  </Link>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      handleLogout();
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
