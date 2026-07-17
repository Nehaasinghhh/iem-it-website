import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import FacultyCard from "../components/FacultyCard";
import FacultySection from "../components/FacultySection";
import MentorSection from "../components/MentorSection";
import ClassTeacherSection from "../components/ClassTeacherSection";

import { hod, programIncharge } from "../data/facultyData";

export default function Faculty() {
  const [activeTab, setActiveTab] = useState("faculty");

  const buttonStyle = (tab) =>
    `px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2
    ${
      activeTab === tab
        ? "bg-blue-700 text-white border-blue-700 shadow-lg"
        : "bg-white text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white"
    }`;

  return (
    <>
      <Navbar />

      <section className="bg-slate-50 min-h-screen py-12">

        <div className="max-w-[1500px] mx-auto px-8">

          {/* Heading */}

          <div className="text-center mb-14">

            <h1 className="text-4xl font-bold text-blue-800">
              Department of Information Technology
            </h1>

            <div className="w-72 h-1 bg-blue-700 mx-auto mt-4 rounded-full"></div>

          </div>

          {/* Top Cards */}

          <div className="flex flex-col items-center gap-12 mb-24">

            <FacultyCard
              image={hod.image}
              name={hod.name}
              designation={hod.designation}
              cardColor="bg-white"
              borderColor="border-violet-500"
            />

            <FacultyCard
              image={programIncharge.image}
              name={programIncharge.name}
              designation={programIncharge.designation}
              cardColor="bg-white"
              borderColor="border-blue-500"
            />

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap justify-center gap-5 mb-16">

            <button
              onClick={() => setActiveTab("faculty")}
              className={buttonStyle("faculty")}
            >
              IT FACULTY LIST
            </button>

            <button
              onClick={() => setActiveTab("mentor")}
              className={buttonStyle("mentor")}
            >
              IT MENTORS LIST
            </button>

            <button
              onClick={() => setActiveTab("teacher")}
              className={buttonStyle("teacher")}
            >
              CLASS TEACHERS
            </button>

          </div>

          {/* Dynamic Section */}

          {activeTab === "faculty" && <FacultySection />}

          {activeTab === "mentor" && <MentorSection />}

          {activeTab === "teacher" && <ClassTeacherSection />}

        </div>

      </section>

      <Footer />
    </>
  );
}