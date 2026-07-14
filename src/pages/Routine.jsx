import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import SecondYearRoutine from "../components/routine/SecondYearRoutine";
import ThirdYearRoutine from "../components/routine/ThirdYearRoutine";
import FourthYearRoutine from "../components/routine/FourthYearRoutine";

export default function Routine() {
  const [activeYear, setActiveYear] = useState("2nd");

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#0B3D91] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[5px] text-blue-200 font-semibold mb-4">
            Academic Schedule
          </p>

          <h1 className="text-5xl font-bold">
            Class Routine
          </h1>

          <p className="mt-5 text-lg text-blue-100">
            Department of Information Technology
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#F8FAFC] py-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">

          {/* Buttons */}
          <div className="flex justify-center gap-5 flex-wrap mb-14">

            <button
              onClick={() => setActiveYear("2nd")}
              className={`px-8 py-4 rounded-xl font-semibold shadow-md transition-all duration-300 ${
                activeYear === "2nd"
                  ? "bg-[#0B3D91] text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
            >
              2ND YEAR TIME TABLE
            </button>

            <button
              onClick={() => setActiveYear("3rd")}
              className={`px-8 py-4 rounded-xl font-semibold shadow-md transition-all duration-300 ${
                activeYear === "3rd"
                  ? "bg-[#0B3D91] text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
            >
              3RD YEAR TIME TABLE
            </button>

            <button
              onClick={() => setActiveYear("4th")}
              className={`px-8 py-4 rounded-xl font-semibold shadow-md transition-all duration-300 ${
                activeYear === "4th"
                  ? "bg-[#0B3D91] text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
            >
              4TH YEAR TIME TABLE
            </button>

          </div>

          {/* Routine Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 overflow-x-auto">

            {activeYear === "2nd" && <SecondYearRoutine />}
            {activeYear === "3rd" && <ThirdYearRoutine />}
            {activeYear === "4th" && <FourthYearRoutine />}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}