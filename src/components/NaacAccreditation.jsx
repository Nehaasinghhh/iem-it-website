import React from "react";

import naacImage from "../assets/images/naac_certificate.jpg"; 
// Replace naac.jpg with your actual certificate image name

export default function NaacAccreditation() {
  return (
    <section className="bg-blue-50 py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 tracking-wide">
          NAAC ACCREDITATION
        </h2>

        <div className="w-20 h-1 bg-blue-900 mx-auto mt-4 rounded-full"></div>
      </div>


      {/* Cards Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">


        {/* LEFT TEXT CARD */}
        <div
          className="
          bg-white 
          rounded-2xl 
          shadow-lg 
          p-8
          text-gray-700
          leading-8
          transition-all
          duration-500
          hover:-translate-y-3
          hover:shadow-2xl
          border
          border-blue-100
          "
        >

          <p className="mb-6">
            The Dept. of Information Technology, at the Institute of Engineering
            and Management (IEM), Salt Lake, Kolkata came into existence in
            1999 with a Vision "To produce Creators of Creative Technological
            Solutions" for the benefit of Engineering, Science and Technology
            and the Nation on a larger scale.
          </p>


          <p className="mb-6">
            It has always strived to fulfill its Mission to impart Value Based
            Education and promote Research and Development at the International
            level. The Department has received Accreditation twice by the NBA
            and has since been running its programs successfully.
          </p>


          <p className="mb-6">
            The Dept. of Information Technology began with its first batch of 40
            students for the B.Tech Course. The student intake gradually
            increased and presently admits students for Undergraduate and
            Postgraduate programs.
          </p>


          <p>
            The IT Dept. makes full utilisation of its laboratories and provides
            opportunities for students to participate in projects, internships,
            entrepreneurship activities and develop professional skills with
            guidance from experienced faculty members.
          </p>

        </div>



        {/* RIGHT IMAGE CARD */}
        <div
          className="
          bg-white
          rounded-2xl
          shadow-lg
          p-6
          flex
          justify-center
          items-center
          transition-all
          duration-500
          hover:-translate-y-3
          hover:shadow-2xl
          border
          border-blue-100
          "
        >

          <img
            src={naacImage}
            alt="NAAC Accreditation Certificate"
            className="
            w-full
            max-w-md
            rounded-xl
            object-contain
            transition-transform
            duration-500
            hover:scale-105
            "
          />

        </div>


      </div>

    </section>
  );
}