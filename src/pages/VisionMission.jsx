import visionImg from "../assets/images/vision.jpg";
import missionImg from "../assets/images/mission.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function VisionMission() {
  return (
    <>
    <Navbar/>
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B3D91]">
            Vision & Mission
          </h1>

          <div className="w-28 h-1 bg-[#0B3D91] mx-auto mt-5 rounded-full"></div>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            The Department of Information Technology is committed to
            academic excellence, innovation, research, and holistic
            student development to meet the challenges of a rapidly
            evolving technological world.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Vision Card */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">

            <div className="overflow-hidden">
              <img
                src={visionImg}
                alt="Vision"
                className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-8">
              <h2 className="text-center text-3xl font-bold text-[#0B3D91] uppercase">
                Vision of the Program
              </h2>

              <div className="w-24 h-1 bg-[#0B3D91] mx-auto mt-4 mb-8 rounded-full"></div>

              <p className="text-gray-700 text-lg leading-9">
                The Department of Information Technology at IEM Kolkata
                strives to achieve excellence in academics, innovation,
                research, and student development. It is well-equipped
                to tackle novel challenges in this fast-evolving era of
                Information Technology through research and
                entrepreneurial initiatives, thereby creating true
                value for society.
              </p>

              <p className="text-gray-700 text-lg leading-9 mt-8">
                The department is internationally recognized in
                distinctive areas of education and research, driven by
                a professional and technology-oriented focus, based on a
                culture of innovation and excellence.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">

            <div className="overflow-hidden">
              <img
                src={missionImg}
                alt="Mission"
                className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-8">
              <h2 className="text-center text-3xl font-bold text-[#0B3D91] uppercase">
                Mission of the Program
              </h2>

              <div className="w-24 h-1 bg-[#0B3D91] mx-auto mt-4 mb-8 rounded-full"></div>

              <div className="space-y-6 text-gray-700 text-lg leading-9">
                <p>
                  To assist students in understanding and enjoying the
                  seamless nature of knowledge, encouraging them to
                  apply acquired knowledge to practical use, ensuring
                  they become socially responsible individuals sought
                  after for their leadership qualities.
                </p>

                <p>
                  To foster creativity, innovation, and excellence
                  through an example-based teaching-learning process
                  imparted in the most simple and understandable way.
                </p>

                <p>
                  To continuously upgrade knowledge bases, improve
                  infrastructure, adopt the latest technological tools,
                  and update curricula based on periodic stakeholder
                  feedback, enabling students to meet professional
                  requirements and expectations.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    <Footer/>
    </>
  );
}