import Footer from "../components/Footer";
import { useState } from "react";
import Navbar from "../components/Navbar";

import placementImg from "../assets/images/1.jpg.jpeg";
import icdcImg from "../assets/images/2.jpeg";
import hackathonImg from "../assets/images/3.jpeg";
import studyImg from "../assets/images/4.webp";
import achievementImg from "../assets/images/5.jpg";
import eventImg from "../assets/images/6.jpeg";

export default function Students() {
  const cards = [
    {
      title: "Placements",
      image: placementImg,
      description:
        "IEM ensures top-tier placement opportunities with industry-leading recruiters, empowering students for a successful career.",
    },
    {
      title: "IEM-ICDC",
      image: icdcImg,
      description:
        "International Conference on Computational Intelligence, Data Science and Cloud Computing.",
    },
    {
      title: "IEM HackOasis",
      image: hackathonImg,
      description:
        "Annual flagship hackathon organized by the Department of Information Technology.",
    },
    {
      title: "Study Materials & Assignments",
      image: studyImg,
      description:
        "Access notes, assignments, laboratory manuals and academic resources.",
    },
    {
      title: "Students Achievement",
      image: achievementImg,
      description:
        "Celebrating academic excellence, innovation, research and competition achievements.",
    },
    {
      title: "Department Events",
      image: eventImg,
      description:
        "Explore workshops, seminars, conferences, hackathons and departmental activities.",
    },
  ];

  return (
    <>
     <Navbar />
       {/* Banner - KEEP SAME */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-32 text-white">
        <div className="container mx-auto text-center">
          <p className="uppercase tracking-widest text-blue-200 text-lg">
            Home / Students
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Student's Corner
          </h1>
        </div>
      </section>
      {/* Student Section */}
      <section className="bg-slate-50 py-24">

        <div className="container mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-gray-600 text-lg">
              Explore, Engage, Excel
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-light text-slate-900">
              Personalized mentorship by experienced faculty to guide students in academics, research, and career growth
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

            {cards.map((card, index) => (
              <div
                key={index}
                className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-500
                "
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-72 object-cover"
                />

                <div className="p-8">

                  <h3 className="text-3xl font-bold text-slate-900 mb-5">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 leading-8">
                    {card.description}
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