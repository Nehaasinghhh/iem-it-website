import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import icdcImg from "../assets/images/icdc.png";

export default function IEMICDC() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-50 min-h-screen">

        {/* HERO */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 py-28">

          <div className="max-w-7xl mx-auto px-6 text-center">

            <span
              className="
                inline-block
                px-5
                py-2
                bg-white/20
                border
                border-white/30
                text-white
                rounded-full
                text-sm
                font-semibold
                tracking-wider
                mb-6
              "
            >
              INTERNATIONAL CONFERENCE 2025
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              IEM-ICDC 2025
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              3rd International Conference on Computational Intelligence,
              Data Science and Cloud Computing
            </p>

          </div>

        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-6 py-20">

          {/* HEADING */}
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-blue-800">
              About The Conference
            </h2>

            <div className="w-36 h-1 bg-blue-700 mx-auto mt-5 rounded-full"></div>

          </div>

          {/* MAIN CARD */}
          <div
            className="
              bg-white
              rounded-3xl
              border-2
              border-blue-100
              shadow-xl
              overflow-hidden
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center p-10 md:p-14">

              {/* IMAGE */}
              <div className="overflow-hidden rounded-2xl">

                <img
                  src={icdcImg}
                  alt="IEM ICDC 2025"
                  className="
                    w-full
                    rounded-2xl
                    border-2
                    border-blue-200
                    transition-all
                    duration-700
                    hover:scale-105
                  "
                />

              </div>

              {/* CONTENT */}
              <div>

                <span
                  className="
                    inline-block
                    px-4
                    py-2
                    bg-blue-100
                    text-blue-800
                    rounded-full
                    font-semibold
                    mb-6
                  "
                >
                  International Conference
                </span>

                <h3 className="text-4xl font-bold text-blue-800 mb-8">
                  IEM-ICDC 2025
                </h3>

                <p className="text-slate-600 leading-8 text-lg mb-8">
                  The International Conference on Computational Intelligence,
                  Data Science and Cloud Computing is an endeavour to spark
                  interest in these domains through research and innovation.
                  As the world embraces Industry 4.0, these technologies have
                  become essential across multiple disciplines.
                </p>

                <p className="text-slate-600 leading-8 text-lg">
                  This three-day event features keynotes, technical sessions,
                  and workshops in cutting-edge fields such as Artificial
                  Intelligence, Robotics, NLP, Image Processing, Cloud
                  Computing, Big Data, Cybersecurity, Blockchain, and IoT.
                  Researchers and industry professionals are invited to join
                  and make this event a grand success.
                </p>

              </div>

            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="mt-20">

            <div className="text-center mb-12">

              <h2 className="text-4xl font-bold text-blue-800">
                Conference Highlights
              </h2>

              <div className="w-28 h-1 bg-blue-700 mx-auto mt-4 rounded-full"></div>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              {/* CARD 1 */}
              <div
                className="
                  bg-white
                  border-2
                  border-blue-100
                  rounded-3xl
                  p-10
                  text-center
                  shadow-lg
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-2xl
                "
              >
                <h3 className="text-5xl font-bold text-blue-700 mb-4">
                  3
                </h3>

                <p className="text-slate-700 font-medium">
                  International Conference Edition
                </p>
              </div>

              {/* CARD 2 */}
              <div
                className="
                  bg-white
                  border-2
                  border-blue-100
                  rounded-3xl
                  p-10
                  text-center
                  shadow-lg
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-2xl
                "
              >
                <h3 className="text-5xl font-bold text-blue-700 mb-4">
                  10+
                </h3>

                <p className="text-slate-700 font-medium">
                  Technical Tracks
                </p>
              </div>

              {/* CARD 3 */}
              <div
                className="
                  bg-white
                  border-2
                  border-blue-100
                  rounded-3xl
                  p-10
                  text-center
                  shadow-lg
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-2xl
                "
              >
                <h3 className="text-5xl font-bold text-blue-700 mb-4">
                  100+
                </h3>

                <p className="text-slate-700 font-medium">
                  Researchers & Participants
                </p>
              </div>

            </div>

          </div>

          {/* BUTTON */}
          <div className="text-center mt-20">

            <a
              href="https://easychair.org/cfp/iem-icdc2025"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                px-10
                py-4
                bg-blue-700
                text-white
                text-lg
                font-semibold
                rounded-xl
                border-2
                border-blue-700
                shadow-lg
                transition-all
                duration-300
                hover:bg-white
                hover:text-blue-700
                hover:scale-105
              "
            >
              Visit Official Website →
            </a>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}