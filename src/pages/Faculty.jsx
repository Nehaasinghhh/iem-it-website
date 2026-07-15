


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

      <section className="bg-slate-50 min-h-screen py-12">
        <div className="container mx-auto px-6">

          {/* PAGE TITLE */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
              Department of Information Technology
            </h1>

            <div className="w-72 h-1 bg-blue-700 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* HOD CARD */}
          <div className="flex justify-center mb-12">
            <div
              className="
              bg-white
              rounded-2xl
              shadow-md
              border
              border-blue-100
              p-5
              w-[280px]
              text-center
              hover:-translate-y-1
              transition
              duration-300
              "
            >
              <img
                src={hodImg}
                alt="HOD"
                className="
                w-24
                h-24
                rounded-full
                object-cover
                mx-auto
                border-4
                border-blue-700
                mb-4
                "
              />

              <h2 className="text-xl font-bold text-blue-800 mb-3">
                Prof. Dr. Moutushi Singh
              </h2>

              <p className="text-slate-700 text-sm leading-6">
                Professor Head Of Department
                <br />
                Department of IT, CSE(IoT),
                <br />
                CSE(IoTCSBT)
              </p>
            </div>
          </div>

          {/* PROGRAM INCHARGE */}
          <div className="flex justify-center mb-12">
            <div
              className="
              bg-white
              rounded-2xl
              shadow-md
              border
              border-blue-300
              p-5
              w-[280px]
              text-center
              hover:-translate-y-1
              transition
              duration-300
              "
            >
              <img
                src={piImg}
                alt="Program Incharge"
                className="
                w-24
                h-24
                rounded-full
                object-cover
                mx-auto
                border-4
                border-blue-700
                mb-4
                "
              />

              <h2 className="text-xl font-bold text-blue-800 mb-3">
                Prof. Dr. Baisakhi Das
              </h2>

              <p className="text-slate-700 text-sm">
                Program Incharge
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">

            <button
              onClick={() => setActiveSection("mentors")}
              className="
              px-6
              py-2.5
              border-2
              border-blue-700
              text-blue-700
              rounded-lg
              text-sm
              font-medium
              hover:bg-blue-700
              hover:text-white
              transition
              "
            >
              IT MENTORS LIST
            </button>

            <button
              onClick={() => setActiveSection("faculty")}
              className="
              px-6
              py-2.5
              border-2
              border-blue-700
              text-blue-700
              rounded-lg
              text-sm
              font-medium
              hover:bg-blue-700
              hover:text-white
              transition
              "
            >
              IT FACULTY LIST
            </button>

            <button
              onClick={() => setActiveSection("teachers")}
              className="
              px-6
              py-2.5
              border-2
              border-blue-700
              text-blue-700
              rounded-lg
              text-sm
              font-medium
              hover:bg-blue-700
              hover:text-white
              transition
              "
            >
              CLASS TEACHERS LIST
            </button>

          </div>

          {/* IT MENTORS */}
          {activeSection === "mentors" && (
            <div>

              <h2 className="text-center text-3xl font-bold text-blue-800 mb-4">
                IT Mentors List
              </h2>

              <div className="w-40 h-1 bg-blue-700 mx-auto mb-12"></div>

              {/* HOD */}
              <div className="flex justify-center mb-16">

                <div
                  className="
                  bg-white
                  rounded-2xl
                  shadow-md
                  border
                  border-slate-200
                  p-5
                  text-center
                  w-[280px]
                  "
                >
                  <img
                    src={hodImg}
                    alt=""
                    className="
                    w-24
                    h-24
                    rounded-full
                    mx-auto
                    border-4
                    border-blue-700
                    mb-4
                    object-cover
                    "
                  />

                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    Prof. Dr. Moutushi Singh
                  </h3>

                  <p className="text-slate-600 text-sm">
                    Professor Head Of Department
                  </p>

                </div>

              </div>

              {/* PROFESSORS */}
              <h3 className="text-center text-2xl font-bold text-blue-800 mb-4">
                Professors
              </h3>

              <div className="w-32 h-1 bg-blue-700 mx-auto mb-10"></div>

              <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">

                <div
                  className="
                  bg-white
                  rounded-2xl
                  shadow-md
                  border
                  border-blue-200
                  p-5
                  text-center
                  w-[240px]
                  mx-auto
                  "
                >
                  <img
                    src={prof1}
                    alt=""
                    className="
                    w-20
                    h-20
                    rounded-full
                    mx-auto
                    border-4
                    border-blue-700
                    mb-4
                    object-cover
                    "
                  />

                  <h4 className="text-lg font-bold text-blue-800">
                    Prof. Dr. Sanchita Ghosh
                  </h4>

                  <p className="text-slate-600 text-sm mt-2">
                    Professor
                  </p>
                </div>

                <div
                  className="
                  bg-white
                  rounded-2xl
                  shadow-md
                  border
                  border-blue-200
                  p-5
                  text-center
                  w-[240px]
                  mx-auto
                  "
                >
                  <img
                    src={piImg}
                    alt=""
                    className="
                    w-20
                    h-20
                    rounded-full
                    mx-auto
                    border-4
                    border-blue-700
                    mb-4
                    object-cover
                    "
                  />

                  <h4 className="text-lg font-bold text-blue-800">
                    Prof. Dr. Baisakhi Das
                  </h4>

                  <p className="text-slate-600 text-sm mt-2">
                    Professor
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* FACULTY SECTION */}
          {activeSection === "faculty" && (
            <div className="text-center">

              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                IT Faculty List
              </h2>

              <div className="w-40 h-1 bg-blue-700 mx-auto mb-10"></div>

              <p className="text-base text-slate-700">
                Add faculty members here.
              </p>

            </div>
          )}

          {/* CLASS TEACHERS */}
          {activeSection === "teachers" && (
            <>
              <div className="text-center">

                <h2 className="text-3xl font-bold text-blue-800 mb-4">
                  Class Teachers List
                </h2>

                <div className="w-40 h-1 bg-blue-700 mx-auto mb-10"></div>

                <p className="text-base text-slate-700">
                  Add class teachers here.
                </p>

              </div>

              {/* ASSOCIATE PROFESSORS */}
              <div className="mt-20">

                <h3 className="text-center text-2xl font-bold text-blue-800 mb-4">
                  Associate Professors
                </h3>

                <div className="w-40 h-1 bg-blue-700 mx-auto mb-12"></div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

                  {/* CARD 1 */}
                  <div className="bg-white rounded-2xl shadow-md border border-blue-200 p-5 text-center w-[240px] mx-auto">

                    <img
                      src={rupayanImg}
                      alt=""
                      className="w-20 h-20 rounded-full mx-auto border-4 border-blue-700 mb-4 object-cover"
                    />

                    <h4 className="text-lg font-bold text-blue-800 leading-6">
                      Prof. Dr. Rupayan Das
                    </h4>

                    <p className="text-sm text-slate-600 mt-2">
                      Associate Professor
                    </p>

                  </div>

                  {/* CARD 2 */}
                  <div className="bg-white rounded-2xl shadow-md border border-blue-200 p-5 text-center w-[240px] mx-auto">

                    <img
                      src={susovanImg}
                      alt=""
                      className="w-20 h-20 rounded-full mx-auto border-4 border-blue-700 mb-4 object-cover"
                    />

                    <h4 className="text-lg font-bold text-blue-800 leading-6">
                      Prof. Dr. Susovan Jana
                    </h4>

                    <p className="text-sm text-slate-600 mt-2">
                      Program Incharge of CSE(IoT)
                    </p>

                  </div>

                  {/* CARD 3 */}
                  <div className="bg-white rounded-2xl shadow-md border border-blue-200 p-5 text-center w-[240px] mx-auto">

                    <img
                      src={soumadipImg}
                      alt=""
                      className="w-20 h-20 rounded-full mx-auto border-4 border-blue-700 mb-4 object-cover"
                    />

                    <h4 className="text-lg font-bold text-blue-800 leading-6">
                      Prof. Dr. Soumadip Biswas
                    </h4>

                    <p className="text-sm text-slate-600 mt-2">
                      Associate Professor
                    </p>

                  </div>

                  {/* CARD 4 */}
                  <div className="bg-white rounded-2xl shadow-md border border-blue-200 p-5 text-center w-[240px] mx-auto">

                    <img
                      src={koushikImg}
                      alt=""
                      className="w-20 h-20 rounded-full mx-auto border-4 border-blue-700 mb-4 object-cover"
                    />

                    <h4 className="text-lg font-bold text-blue-800 leading-6">
                      Prof. Dr. Koushik Dutta
                    </h4>

                    <p className="text-sm text-slate-600 mt-2">
                      Associate Professor
                    </p>

                  </div>

                  {/* CARD 5 */}
                  <div className="bg-white rounded-2xl shadow-md border border-blue-200 p-5 text-center w-[240px] mx-auto">

                    <img
                      src={sudiptaImg}
                      alt=""
                      className="w-20 h-20 rounded-full mx-auto border-4 border-blue-700 mb-4 object-cover"
                    />

                    <h4 className="text-lg font-bold text-blue-800 leading-6">
                      Prof. Dr. Sudipta Bhuyan
                    </h4>

                    <p className="text-sm text-slate-600 mt-2">
                      Associate Professor
                    </p>

                  </div>

                  {/* CARD 6 */}
                  <div className="bg-white rounded-2xl shadow-md border border-blue-200 p-5 text-center w-[240px] mx-auto">

                    <img
                      src={soumyenduImg}
                      alt=""
                      className="w-20 h-20 rounded-full mx-auto border-4 border-blue-700 mb-4 object-cover"
                    />

                    <h4 className="text-lg font-bold text-blue-800 leading-6">
                      Prof. Dr. Soumyendu Sekhar Bandyopadhyay
                    </h4>

                    <p className="text-sm text-slate-600 mt-2">
                      Associate Professor
                    </p>

                  </div>

                </div>

              </div>

              {/* ASSISTANT PROFESSORS */}
              <div className="mt-20 mb-8">

                <h3 className="text-center text-2xl font-bold text-blue-800 mb-4 tracking-wide">
                  Assistant Professors
                </h3>

                <div className="w-40 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-12 rounded-full"></div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">

                  {assistantProfessors.map((person, index) => (
                    <div
                      key={index}
                      className="
                      bg-orange-50
                      rounded-2xl
                      shadow-md
                      border
                      border-orange-400
                      p-5
                      text-center
                      w-[220px]
                      mx-auto
                      hover:-translate-y-1
                      transition
                      duration-300
                      "
                    >
                      <img
                        src={person.img}
                        alt={person.name}
                        className="
                        w-20
                        h-20
                        rounded-full
                        mx-auto
                        border-4
                        border-purple-600
                        mb-4
                        object-cover
                        "
                      />

                      <h4 className="text-base font-bold text-slate-800 leading-6">
                        {person.name}
                      </h4>

                      <p className="text-sm text-slate-600 mt-2">
                        {person.role}
                      </p>

                    </div>
                  ))}

                </div>

              </div>
            </>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}