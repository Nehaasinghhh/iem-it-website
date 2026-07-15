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
    description:
      "Empowering the next generation with wisdom and experience.",
  },
  {
    image: slide2,
    title: "INNOVATION & IMPACT",
    description:
      "Alumni shaping the future with cutting-edge ideas.",
  },
  {
    image: slide3,
    title: "SUCCESS STORIES",
    description:
      "Celebrating milestones and achievements.",
  },
  {
    image: slide4,
    title: "NETWORKING",
    description:
      "Connecting minds, building opportunities.",
  },
  {
    image: slide5,
    title: "INSPIRING JOURNEYS",
    description:
      "Turning dreams into reality.",
  },
  {
    image: slide6,
    title: "FUTURE LEADERS",
    description:
      "Shaping tomorrow's world today.",
  },
];
export default function AlumniReport() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-purple-700 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-white-400 font-bold text-3xl uppercase tracking-wide">
              Legends Never Graduate!
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
              THE ALUMNI CHRONICLES
            </h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {alumniData.map((item, index) => (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-3xl
                  bg-white/10
                  backdrop-blur-sm
                  border-2
                  border-transparent
                  shadow-xl
                  transition-all
                  duration-500
                  hover:scale-105
                  hover:border-blue-400
                  hover:shadow-blue-500/40
                  hover:shadow-2xl
                "
              >
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

                <div className="p-8 text-center">

                  <h2 className="text-4xl font-bold text-white mb-4">
                    {item.title}
                  </h2>

                  <p className="text-yellow-300 text-xl leading-relaxed">
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