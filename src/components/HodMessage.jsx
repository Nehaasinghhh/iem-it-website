import React from "react";

import hodImage from "../assets/images/hod_img.jpg";

export default function HodMessage() {
  return (
    <section className="bg-gray-100 py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-800 tracking-wide">
          MESSAGE FROM HOD
        </h2>

        <div className="w-20 h-1 bg-blue-700 mx-auto mt-3 rounded"></div>
      </div>


      {/* HOD Card */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-10">


        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">


          {/* HOD Image */}
          <div>
            <img
              src={hodImage}
              alt="HOD"
              className="
              w-56 h-56 
              object-cover 
              rounded-full 
              border-4 
              border-blue-700
              shadow-lg
              "
            />
          </div>



          {/* Message */}
          <div
            className="
            max-w-xl
            bg-blue-50
            border-l-4
            border-blue-700
            p-6
            rounded-md
            shadow
            "
          >

            <p className="text-gray-700 leading-7">
              It gives me immense pleasure to welcome you to the Department of
              Computer Science. The department is committed to providing
              quality education and creating innovative professionals.
            </p>

            <p className="mt-4 text-gray-700 leading-7">
              We focus on academic excellence, research activities and
              industry-oriented learning to prepare students for future
              challenges.
            </p>

          </div>


        </div>



        {/* HOD Details */}
        <div className="text-center mt-8">

          <h3 className="text-3xl font-semibold text-gray-700">
            PROF. DR. MOUTUSHI SINGH, PHD
          </h3>


          <p className="mt-4 text-gray-600 text-lg">
            Head of the Department of Computer Science
          </p>


          <p className="text-gray-600 text-lg">
            Institute of Engineering and Management
          </p>


          <p className="text-gray-600 text-lg">
            Y-12 Salt Lake Electronics Complex, Sector – V,
            Kolkata – 700091
          </p>



          <p className="mt-2 text-gray-700 font-semibold">

            Email ID:

            <a
              href="mailto:moutushi.singh@iem.edu.in"
              className="text-blue-600 underline ml-2"
            >
              moutushi.singh@iem.edu.in
            </a>

          </p>

        </div>


      </div>



      {/* Department Introduction Card */}
      <div
        className="
        max-w-6xl 
        mx-auto 
        mt-10
        bg-gradient-to-r 
        from-blue-900 
        to-blue-600
        text-white 
        rounded-xl 
        shadow-lg 
        p-8
        "
      >

        <p className="leading-7">
          It gives me immense pride and pleasure to introduce the Department of
          Information Technology. The Department of Information Technology was
          founded in 1999.
        </p>


        <p className="mt-6 leading-7">
          The Bachelor degree program was started in 1999. The Master degree
          program was started in 2011.
        </p>


        <p className="mt-6 leading-7">
          Currently, the Master degree program run by the department is Computer
          Science & Business Systems. The bachelor degree program is accredited
          by the National Board of Accreditation (NBA), New Delhi. All the
          academic programs are periodically reviewed and updated to incorporate
          the latest trends in information technology-driven society.
        </p>


        <p className="mt-6 leading-7">
          We are proud of our strong academic programs, which are based on
          theoretical and practical knowledge and match well within the
          requirements and demands of the industry. We are committed to
          students by offering short-term courses and pre-placement training
          classes that foster critical and analytical thinking and build the
          necessary skills to succeed in the industry.
        </p>


      </div>


    </section>
  );
}