import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import class1 from "../assets/images/class1.jpg";
import class3 from "../assets/images/class3.jpg";
import class4 from "../assets/images/class4.jpg";
import class5 from "../assets/images/class5.jpg";

import Lab1 from "../assets/images/Lab1.jpg";
import Lab2 from "../assets/images/Lab2.jpg";
import Lab3 from "../assets/images/Lab3.jpg";
import Lab5 from "../assets/images/Lab5.jpg";

export default function Infrastructure() {
  const classrooms = [
    class1,
    class3,
    class4,
    class5,
  ];

  const labs = [
    Lab1,
    Lab2,
    Lab3,
    Lab5,
  ];

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500 py-20">

        <div className="container mx-auto px-6">

          {/* Heading */}
          <h1 className="text-center text-5xl md:text-6xl font-extrabold text-yellow-400 mb-20">
            DEPARTMENT INFRASTRUCTURE
          </h1>

          {/* Modern Classrooms */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-yellow-300 mb-12">
            📚 MODERN CLASSROOMS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">

            {classrooms.map((image, index) => (
              <div
                key={index}
                className="
                overflow-hidden
                rounded-3xl
                border-2
                border-white/30
                shadow-2xl
                "
              >
                <img
                  src={image}
                  alt={`Classroom ${index + 1}`}
                  className="
                  w-full
                  h-72
                  object-cover
                  hover:scale-110
                  transition
                  duration-500
                  "
                />
              </div>
            ))}

          </div>

          {/* Advanced Labs */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-yellow-300 mb-12">
            💻 ADVANCED LABS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {labs.map((image, index) => (
              <div
                key={index}
                className="
                overflow-hidden
                rounded-3xl
                border-2
                border-white/30
                shadow-2xl
                "
              >
                <img
                  src={image}
                  alt={`Lab ${index + 1}`}
                  className="
                  w-full
                  h-72
                  object-cover
                  hover:scale-110
                  transition
                  duration-500
                  "
                />
              </div>
            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}