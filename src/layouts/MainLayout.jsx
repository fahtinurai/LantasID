import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterComponent";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf8] text-gray-900">
      <Navbar />
      
      {/* Full-width main content */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
  