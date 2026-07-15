import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import slide1 from "../assets/images/Slide1.png";
import slide2 from "../assets/images/Slide2.png";
import slide3 from "../assets/images/Slide3.png";
import slide4 from "../assets/images/Slide4.png";
import slide5 from "../assets/images/Slide5.png";
import slide6 from "../assets/images/Slide6.png";

const alumniData = [
  {
    image: slide1,
    title: "LEGACY BUILDERS",
    description: "Empowering the next generation with wisdom and experience.",
  },
  {
    image: slide2,
    title: "INNOVATION & IMPACT",
    description: "Alumni shaping the future with cutting-edge ideas.",
  },
  {
    image: slide3,
    title: "SUCCESS STORIES",
    description: "Celebrating milestones and achievements.",
  },
  {
    image: slide4,
    title: "NETWORKING",
    description: "Connecting minds, building opportunities.",
  },
  {
    image: slide5,
    title: "INSPIRING JOURNEYS",
    description: "Turning dreams into reality.",
  },
  {
    image: slide6,
    title: "FUTURE LEADERS",
    description: "Shaping tomorrow's world today.",
  },
];

export default function AlumniReport() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Alumni Report
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mt-4 rounded-full"></div>
          </div>
        </section>

      <section className="min-h-screen bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">

            <p className="text-blue-600 font-semibold text-lg uppercase tracking-[4px]">
              Legends Never Graduate!
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mt-4">
              THE ALUMNI CHRONICLES
            </h1>

            <div className="w-40 h-1 bg-blue-700 rounded-full mx-auto mt-5"></div>

            <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
              Celebrating our accomplished alumni who continue to inspire,
              innovate, and lead across the world.
            </p>

          </div>

          {/* Alumni Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {alumniData.map((item, index) => (

              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  border
                  border-blue-200
                  shadow-lg
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:scale-105
                  hover:border-blue-600
                  hover:shadow-blue-300
                  hover:shadow-2xl
                "
              >

                {/* Image */}
                <div className="overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-64
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-110
                    "
                  />

                </div>

                {/* Content */}
                <div className="p-8 text-center">

                  <h2 className="text-2xl font-bold text-blue-900 mb-4">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 leading-7">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}