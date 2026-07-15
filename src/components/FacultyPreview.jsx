import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import hodImg from "../assets/images/hod_img.jpg";
import piImg from "../assets/images/hod3.png";
import prof1 from "../assets/images/hod4.png";
import rupayanImg from "../assets/images/rupayan_das.png";
import susovanImg from "../assets/images/susovan_jana.png";
import soumadipImg from "../assets/images/soumadip_biswas.png";
import kaushikImg from "../assets/images/kaushik_dutta.png";
import sudiptaImg from "../assets/images/sudipta_bhuiya.png";
import soumyenduImg from "../assets/images/soumendu_shekhar.png";

import kajariImg from "../assets/images/kajori_sur.png";
import avijitImg from "../assets/images/avijit_bose.png";
import swagatamImg from "../assets/images/swagatam_basu.png";
import raviImg from "../assets/images/ravi_behera.png";
import amitImg from "../assets/images/amit_kumar.png";
import avipsitaImg from "../assets/images/avipsita_chat.png";
import pulakImg from "../assets/images/pulak_baral.png";
import subinduImg from "../assets/images/subindu_saha.jpg";
import parthaImg from "../assets/images/partha_sarthi.png";

export default function Faculty() {
  const [activeSection, setActiveSection] = useState("");

  const assistantProfessors = [
    { img: kajariImg, name: "Prof. Kajari Sur", role: "Assistant Professor" },
    { img: avijitImg, name: "Prof. Dr. Avijit Bose", role: "Assistant Professor" },
    { img: swagatamImg, name: "Prof. Swagatam Basu", role: "Assistant Professor" },
    { img: raviImg, name: "Prof. Rabi Narayan Behera", role: "Assistant Professor" },
    { img: amitImg, name: "Prof. Dr. Amit Kumar Mandal", role: "Assistant Professor" },
    { img: avipsitaImg, name: "Prof. Dr. Avipsita Chatterjee", role: "Assistant Professor" },
    { img: pulakImg, name: "Prof Pulak Baral", role: "Assistant Professor" },
    { img: subinduImg, name: "Prof. Subindu Saha", role: "Assistant Professor" },
    { img: parthaImg, name: "Prof. Partha Sarathi Paul", role: "IT Professor" },
  ];

  return (
    <>
      <Navbar />

       <section className="bg-gradient-to-b from-blue-50 via-white to-blue-100 py-20 px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-800">
          Department of Information Technology
        </h2>

        <div className="w-80 h-1 bg-blue-700 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Faculty Cards */}
      <div className="flex flex-col items-center gap-16">

        {/* HOD Card */}
        <div className="bg-white rounded-3xl border-2 border-blue-200 shadow-xl w-[340px] p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-blue-300 hover:shadow-2xl">

          <img
            src={hodImage}
            alt="HOD"
            className="w-32 h-32 rounded-full mx-auto object-cover border-[5px] border-blue-600 shadow-lg"
          />

          <h3 className="text-2xl font-bold text-blue-900 mt-6">
            Prof. Dr. Moutushi Singh
          </h3>

          <p className="text-gray-700 mt-4 leading-8 text-lg">
            Professor Head Of Department
            <br />
            Department of IT,
            CSE(IoT),
            <br />
            CSE(IoTCSBT)
          </p>
        </div>

        {/* Program Incharge */}
        <div className="bg-blue-50 rounded-3xl border-2 border-blue-500 shadow-xl w-[340px] p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:bg-blue-100 hover:shadow-blue-400 hover:shadow-2xl">

          <img
            src={programImage}
            alt="Program Incharge"
            className="w-32 h-32 rounded-full mx-auto object-cover border-[5px] border-blue-600 shadow-lg"
          />

          <h3 className="text-2xl font-bold text-blue-900 mt-6">
            Prof. Dr. Baisakhi Das
          </h3>

          <p className="text-gray-700 mt-4 text-lg">
            Program Incharge
          </p>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-8 mt-20">

        <button className="border-2 border-blue-700 text-blue-700 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-700 hover:text-white hover:shadow-xl hover:scale-105">
          IT MENTORS LIST
        </button>

        <button className="border-2 border-blue-700 text-blue-700 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-700 hover:text-white hover:shadow-xl hover:scale-105">
          IT FACULTY LIST
        </button>

        <button className="border-2 border-blue-700 text-blue-700 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-700 hover:text-white hover:shadow-xl hover:scale-105">
          CLASS TEACHERS LIST
        </button>

      </div>
      {/* ================= Associate Professors ================= */}

<div className="mt-24">

    <div className="text-center mb-12">

        <h2 className="text-4xl font-bold text-blue-800">
            ASSOCIATE PROFESSORS
        </h2>

        <div className="w-72 h-1 bg-blue-700 mx-auto rounded-full mt-3"></div>

    </div>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

        {associateProfessors.map((faculty, index) => (

            <div
                key={index}
                className="bg-white border-2 border-blue-200 rounded-3xl p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-blue-600 hover:shadow-blue-300 hover:shadow-2xl"
            >

                <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-blue-600"
                />

                <h3 className="text-xl font-bold text-blue-900 mt-6">
                    {faculty.name}
                </h3>

                <p className="text-gray-600 mt-3">
                    {faculty.designation}
                </p>

            </div>

        ))}

    </div>

</div>





{/* ================= Assistant Professors ================= */}

<div className="mt-28">

    <div className="text-center mb-12">

        <h2 className="text-4xl font-bold text-blue-800">
            ASSISTANT PROFESSORS
        </h2>

        <div className="w-72 h-1 bg-blue-700 mx-auto rounded-full mt-3"></div>

    </div>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

        {assistantProfessors.map((faculty, index) => (

            <div
                key={index}
                className="bg-gradient-to-b from-white to-blue-50 border-2 border-blue-200 rounded-3xl p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-blue-600 hover:bg-blue-100 hover:shadow-blue-300 hover:shadow-2xl"
            >

                <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-blue-600"
                />

                <h3 className="text-xl font-bold text-blue-900 mt-6">
                    {faculty.name}
                </h3>

                <p className="text-gray-600 mt-3">
                    {faculty.designation}
                </p>

            </div>

        ))}

    </div>

</div>

    </section>

      <Footer />
    </>
  );
}