import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import hero1 from "../assets/images/bg_1.jpg";
import hero2 from "../assets/images/bg_2.jpeg";
import hero3 from "../assets/images/bg_3.jpeg";
import hero4 from "../assets/images/bg_4.jpeg";

const slides = [
  {
    image: hero1,
    title: "Industrial Visit to Ericsson",
    desc: "Students visiting Ericsson Innovation Centre.",
  },
  {
    image: hero2,
    title: "Industrial Visit to Webel",
    desc: "Learning industry practices from experts.",
  },
  {
    image: hero3,
    title: "Technical Workshop",
    desc: "Hands-on learning with latest technologies.",
  },
  {
    image: hero4,
    title: "Innovation & Research",
    desc: "Building the future through innovation.",
  },
];

export default function Stats() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
   <section className="bg-[#EEF4FB] py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-8 bg-[#0B3D91]"></div>

              <span className="uppercase tracking-[4px] text-[#0B3D91] font-semibold text-sm">
                Department of Information Technology
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-[#0B3D91] leading-tight">
              Empowering
              Future IT
              Leaders
            </h1>

            <p className="mt-8 text-gray-600 text-lg leading-9 max-w-xl">
              Dive into a world of cutting-edge technology where
              innovation meets knowledge. The Department of
              Information Technology nurtures future professionals
              through industry-focused education, innovation,
              research and practical learning experiences.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
       <Link to="/student-achievement">
              <button
                className="
                bg-[#0B3D91]
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                flex
                items-center
                gap-2
                hover:scale-105
                transition-all
                duration-300
                shadow-lg
                "
              >
                Student Corner
                <ArrowRight size={18} />
              </button>
          </Link>
             

            </div>
          </div>

          {/* Right Slider */}
          <div className="relative">

            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">

                <p className="text-blue-200 text-sm font-medium mb-2">
                  Featured Event
                </p>

                <h3 className="text-3xl font-bold text-white">
                  {slides[current].title}
                </h3>

                <p className="text-gray-200 mt-2">
                  {slides[current].desc}
                </p>

              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all duration-300 rounded-full ${
                    current === index
                      ? "w-10 h-3 bg-[#0B3D91]"
                      : "w-3 h-3 bg-gray-300 hover:bg-[#0B3D91]"
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}