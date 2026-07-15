import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import bg1 from "../assets/images/bg_1.jpg";
import bg2 from "../assets/images/bg_12.jpeg";
import bg3 from "../assets/images/bg_13.jpeg";
import bg4 from "../assets/images/bg_14.jpg";
import bg5 from "../assets/images/bg_5.jpg";
import bg6 from "../assets/images/bg_6.jpeg";
import bg7 from "../assets/images/bg_7.jpeg";
import bg8 from "../assets/images/bg_8.jpg";

export default function IEMHackOasis() {
  const gallery = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8];

  return (
    <>
    
     <Navbar />
    <section className="bg-gray-50">

      {/* HERO SECTION */}
      <div className="bg-blue-900 text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-blue-200 font-semibold mb-5">
            The Flagship Hackathon
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            IEM HackOasis
          </h1>

          <div className="w-28 h-1 bg-white mx-auto rounded-full mb-8"></div>

          <p className="max-w-4xl mx-auto text-xl leading-10 text-blue-100">
            Where innovation meets execution. The annual technical
            extravaganza of the Department of Information Technology.
          </p>

          

        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900">
            About HackOasis
          </h2>

          <div className="w-32 h-1 bg-blue-900 mx-auto mt-5 rounded-full"></div>
        </div>

        <div
          className="
            bg-white
            rounded-3xl
            shadow-xl
            border
            border-blue-100
            overflow-hidden
            grid
            lg:grid-cols-2
            gap-10
            p-8
          "
        >
          <div className="overflow-hidden rounded-2xl group cursor-pointer">
  <img
    src={bg1}
    alt="HackOasis"
    onClick={(e) =>
      e.target.classList.toggle("scale-125")
    }
    className="
      w-full
      h-[420px]
      object-cover
      rounded-2xl
      transition-all
      duration-700
      group-hover:scale-105
      cursor-zoom-in
    "
  />
</div>

          <div className="flex flex-col justify-center">

            <h3 className="text-4xl font-bold text-blue-900 mb-8">
              Innovation • Collaboration • Excellence
            </h3>

            <p className="text-gray-700 leading-9 text-lg mb-6">
              HackOasis is the flagship hackathon of the Department of
              Information Technology. It provides students with an
              opportunity to collaborate, innovate and develop
              real-world solutions under time constraints.
            </p>

            <p className="text-gray-700 leading-9 text-lg">
              Participants engage in problem solving, web development,
              automation, artificial intelligence, cloud technologies,
              cybersecurity and emerging domains while working alongside
              peers, mentors and industry experts.
            </p>

          </div>
        </div>

      </div>

      {/* GALLERY */}
      <div className="max-w-7xl mx-auto px-6 pb-24">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900">
            HackOasis Moments
          </h2>

          <div className="w-32 h-1 bg-blue-900 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {gallery.map((img, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-2xl
                shadow-lg
                border
                border-blue-100
                bg-white
              "
            >
              <img
                src={img}
                alt=""
                className="
                  w-full
                  h-64
                  object-cover
                  hover:scale-110
                  transition-all
                  duration-700
                "
              />
            </div>
          ))}

        </div>

      </div>

      {/* JOURNEY */}
      <div className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-900">
              HackOasis Journey
            </h2>

            <div className="w-32 h-1 bg-blue-900 mx-auto mt-5 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            <div
              className="
                bg-white
                border-2
                border-blue-100
                rounded-3xl
                p-10
                shadow-lg
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >
              <span className="text-blue-700 font-bold">
                Sept 28, 2024
              </span>

              <h3 className="text-3xl font-bold text-blue-900 mt-4 mb-6">
                The Inception
              </h3>

              <p className="text-gray-700 leading-9 text-lg">
                HackOasis 1.0 marked the beginning of a legacy.
                It ignited coding culture within the department and
                encouraged students to innovate, collaborate and solve
                real-world challenges through technology.
              </p>
            </div>

            <div
              className="
                bg-white
                border-2
                border-blue-100
                rounded-3xl
                p-10
                shadow-lg
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >
              <span className="text-blue-700 font-bold">
                Sept 20, 2025
              </span>

              <h3 className="text-3xl font-bold text-blue-900 mt-4 mb-6">
                Growth & Innovation
              </h3>

              <p className="text-gray-700 leading-9 text-lg">
                HackOasis expanded with greater participation,
                advanced technical tracks, industry mentoring and
                innovative project development, becoming one of the
                most anticipated technical events of the department.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* HIGHLIGHTS */}
      <div className="bg-blue-900 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white">
              Event Highlights
            </h2>

            <div className="w-32 h-1 bg-white mx-auto mt-5 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              { value: "150+", title: "Teams Participated" },
              { value: "300+", title: "Students" },
              { value: "50+", title: "Projects Built" },
              { value: "24 Hrs", title: "Innovation" },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  text-center
                  p-8
                  shadow-xl
                "
              >
                <h3 className="text-5xl font-bold text-blue-900 mb-4">
                  {item.value}
                </h3>

                <p className="text-gray-700 font-medium">
                  {item.title}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* WHY PARTICIPATE */}
      <div className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-900">
              Why Participate?
            </h2>

            <div className="w-32 h-1 bg-blue-900 mx-auto mt-5 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Innovation",
              "Collaboration",
              "Networking",
              "Industry Exposure",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  p-10
                  rounded-2xl
                  border
                  border-blue-100
                  shadow-lg
                  text-center
                  hover:-translate-y-3
                  hover:shadow-2xl
                  transition-all
                  duration-500
                "
              >
                <h3 className="text-2xl font-bold text-blue-900">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="bg-blue-900 py-24">

        <div
          className="
            max-w-5xl
            mx-auto
            bg-white
            rounded-3xl
            shadow-2xl
            text-center
            p-12
          "
        >
          <h2 className="text-5xl font-bold text-blue-900 mb-6">
            Ready To Join The Next HackOasis?
          </h2>

          <p className="text-gray-700 text-lg leading-8 max-w-3xl mx-auto">
            Be part of innovation, technology, teamwork and
            problem-solving. Join the next edition of IEM HackOasis
            and showcase your skills.
          </p>

          <button
            className="
              mt-8
              px-8
              py-3
              bg-blue-900
              text-white
              rounded-lg
              font-semibold
              hover:bg-blue-800
              transition-all
            "
          >
            Register Now
          </button>
        </div>

      </div>

    </section>
    <Footer />
    </>
  );
}