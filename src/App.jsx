// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/Landing";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import CourseContent from "./pages/CourseContent";
import LessonPage from "./pages/LessonPage";
import FinancialLiteracy from "./pages/FinancialLiteracy";
import About from "./pages/about";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WilayahDetail from "./pages/WilayahDetail";
import PrivateRoute from "./components/PrivateRoute";
import ProgressPage from "./pages/ProgressPage";
import ArticleDetail from "./pages/ArticleDetail";
import Dashboard from "./pages/Dashboard";
import Komunitas from "./pages/Community";
import Mentoring from "./pages/Mentoring";
import Magang from "./pages/ProgramMagang";
import Mitra from "./pages/MitraLokal";
import Profile from "./pages/Profile";
import Training from "./pages/Training";  
import CertificatePage from "./pages/CertificatePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Halaman publik */}
          <Route path="/" element={<Landing />} />
          <Route path="/financialliteracy" element={<FinancialLiteracy />} />
          <Route path="/about" element={<About />} />
          <Route path="/wilayah/:namaWilayah" element={<WilayahDetail />} />
          <Route path="/mentoring" element={<Mentoring />} />

          {/* Halaman Auth publik */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Pelatihan publik */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />

          {/* Materi pelatihan sekarang publik */}
          <Route path="/courses/:id/content" element={<CourseContent />} />

          {/* Lesson tetap private */}
          <Route
            path="/courses/:id/lesson"
            element={
              <PrivateRoute>
                <LessonPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/courses/:id/lesson/:topicIndex"
            element={
              <PrivateRoute>
                <LessonPage />
              </PrivateRoute>
            }
          />

          {/* Dashboard private */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          {/* ProgressPage private */}
          <Route
            path="/progress"
            element={
              <PrivateRoute>
                <ProgressPage />
              </PrivateRoute>
            }
          />

          {/* Komunitas private */}
          <Route
            path="/komunitas"
            element={
              <PrivateRoute>
                <Komunitas />
              </PrivateRoute>
            }
          />

          {/* Magang private */}
          <Route
            path="/magang"
            element={
              <PrivateRoute>
                <Magang />
              </PrivateRoute>
            }
          />

          {/* Mitra private */}
          <Route
            path="/mitra"
            element={
              <PrivateRoute>
                <Mitra />
              </PrivateRoute>
            }
          />

          {/* ✅ Profile private */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          {/* ✅ Training private dengan param courseId & topicIndex */}
          <Route
            path="/training/:courseId/:topicIndex"
            element={
              <PrivateRoute>
                <Training />
              </PrivateRoute>
            }
          />

          {/* ✅ Certificate Page private */}
          <Route
            path="/sertifikat/:courseId"
            element={
              <PrivateRoute>
                <CertificatePage />
              </PrivateRoute>
            }
          />

          {/* Halaman detail artikel publik */}
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
