import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Academics from "./pages/Academics";
import Students from "./pages/Students";
import Routine from "./pages/Routine";
import Curriculum from "./pages/Curriculum";
import Infrastructure from "./pages/Infrastructure";
import Faculty from "./pages/Faculty";
import Innovation from "./pages/Innovation";
import ContactPage from "./pages/ContactPage";
import VisionMission from "./pages/VisionMission";
import POPEOPSO from "./pages/POPEOPSO";

import Placement from "./pages/Placement";
import IEMIEPC from "./pages/IEMIEPC";
import IEMHackOasis from "./pages/IEMHackOasis";
import Assignments from "./pages/Assignments";
import StudentAchievement from "./pages/StudentAchievement";
import DepartmentEvents from "./pages/DepartmentEvents";

import FacultyPublication from "./pages/FacultyPublication";
import AnnualReport from "./pages/AnnualReport";
import StudentPublication from "./pages/StudentPublication";
import AlumniReport from "./pages/AlumniReport";

import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/students" element={<Students />} />
        <Route path="/routine" element={<Routine />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* About Dropdown */}
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/po-peo-pso" element={<POPEOPSO />} />

        {/* Students Dropdown */}
        <Route path="/placement" element={<Placement />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route
          path="/student-achievement"
          element={<StudentAchievement />}
        />

        {/* Innovation Dropdown */}
        <Route path="/iem-iepc" element={<IEMIEPC />} />
        <Route path="/hack" element={<IEMHackOasis />} />
        <Route
          path="/department-events"
          element={<DepartmentEvents />}
        />

        {/* Faculty Dropdown */}
        <Route
          path="/faculty-publication"
          element={<FacultyPublication />}
        />
        <Route
          path="/annual-report"
          element={<AnnualReport />}
        />

        {/* Alumni / Research */}
        <Route
          path="/student-publication"
          element={<StudentPublication />}
        />
        <Route
          path="/alumni-report"
          element={<AlumniReport />}
        />
      </Routes>
    </>
  );
}