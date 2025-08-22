import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/Landing";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import FinancialLiteracy from "./pages/FinancialLiteracy";
import About from "./pages/about"; 
import Login from "./pages/Login";
import Register from "./pages/Register";
import WilayahDetail from "./pages/WilayahDetail";
import CourseContent from "./pages/CourseContent";
import LessonPage from "./pages/LessonPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/financialliteracy" element={<FinancialLiteracy />} />
          <Route path="/about" element={<About />} />   {/* ✅ pakai komponen About */}
          <Route path="/wilayah/:namaWilayah" element={<WilayahDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses/:id/content" element={<CourseContent />} />
          <Route path="/courses/:id/lesson" element={<LessonPage />} />
          <Route
            path="/courses/:id/lesson/:topicIndex"
            element={<LessonPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
