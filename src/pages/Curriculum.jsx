import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import FourthSem from "../components/curriculum/FourthSem";
import SixthSem from "../components/curriculum/SixthSem";
import EighthSem from "../components/curriculum/EighthSem";

export default function Curriculum() {
  const [activeSem, setActiveSem] = useState("4");

  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="bg-[#0B3D91] py-20 text-white">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold">
            Curriculum
          </h1>

          <p className="mt-4 text-xl text-slate-300">
            Department of Information Technology
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-slate-100 py-16 min-h-screen">
        <div className="container mx-auto px-4">

          <div className="flex justify-center gap-5 flex-wrap mb-14">

            <button
              onClick={() => setActiveSem("4")}
              className={`px-8 py-4 rounded-xl font-semibold shadow-md transition-all duration-300 ${
                activeSem === "4"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-slate-800 hover:bg-blue-50"
              }`}
            >
              4TH SEM
            </button>

            <button
              onClick={() => setActiveSem("6")}
              className={`px-8 py-4 rounded-xl font-semibold shadow-md transition-all duration-300 ${
                activeSem === "6"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-slate-800 hover:bg-blue-50"
              }`}
            >
              6TH SEM
            </button>

            <button
              onClick={() => setActiveSem("8")}
              className={`px-8 py-4 rounded-xl font-semibold shadow-md transition-all duration-300 ${
                activeSem === "8"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-slate-800 hover:bg-blue-50"
              }`}
            >
              8TH SEM
            </button>

          </div>

          {activeSem === "4" && <FourthSem />}
          {activeSem === "6" && <SixthSem />}
          {activeSem === "8" && <EighthSem />}

        </div>
      </section>

      <Footer />
    </>
  );
}