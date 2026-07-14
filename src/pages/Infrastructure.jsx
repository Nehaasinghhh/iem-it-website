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
  const classrooms = [class1, class3, class4, class5];

  const labs = [Lab1, Lab2, Lab3, Lab5];

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#eef4ff] py-20">
        <div className="container mx-auto px-6">

          {/* Page Heading */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-800">
              Department Infrastructure
            </h1>

            <div className="w-40 h-1 bg-blue-700 mx-auto mt-5 rounded-full"></div>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
              Modern classrooms and advanced laboratories equipped with
              state-of-the-art facilities to support academic excellence,
              innovation and research.
            </p>
          </div>

          {/* Classrooms Section */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-blue-700">
              Modern Classrooms
            </h2>

            <div className="w-28 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">

            {classrooms.map((image, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  border
                  border-blue-100
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-500
                "
              >
                <img
                  src={image}
                  alt={`Classroom ${index + 1}`}
                  className="
                    w-full
                    h-72
                    object-cover
                    hover:scale-105
                    transition-transform
                    duration-500
                  "
                />
              </div>
            ))}

          </div>

          {/* Labs Section */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-blue-700">
              Advanced Laboratories
            </h2>

            <div className="w-28 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {labs.map((image, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  border
                  border-blue-100
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-500
                "
              >
                <img
                  src={image}
                  alt={`Lab ${index + 1}`}
                  className="
                    w-full
                    h-72
                    object-cover
                    hover:scale-105
                    transition-transform
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