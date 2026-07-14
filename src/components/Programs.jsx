import { useNavigate } from "react-router-dom";
import {
  Clock3,
  ScrollText,
  Building2,
} from "lucide-react";

export default function Programs() {
  const navigate = useNavigate();

  const cards = [
    {
      icon: <Clock3 size={60} strokeWidth={1.5} />,
      title: "Routine",
      description:
        "Comprehensive academic schedules for 2nd, 3rd, and 4th-year students, balancing coursework, labs, and hands-on learning.",
      path: "/routine",
    },
    {
      icon: <ScrollText size={60} strokeWidth={1.5} />,
      title: "Curriculum",
      description:
        "A comprehensive and industry-aligned syllabus designed to equip 2nd, 3rd, and 4th-year students with essential technical and analytical skills.",
      path: "/curriculum",
    },
    {
      icon: <Building2 size={60} strokeWidth={1.5} />,
      title: "Infrastructure",
      description:
        "A state-of-the-art campus featuring advanced labs, modern classrooms, and collaborative learning spaces to foster innovation and growth.",
      path: "/infrastructure",
    },
  ];

  return (
    <section className="bg-slate-100 py-24">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[4px] text-lg text-gray-700">
            Learn Anything
          </p>

          <h2 className="mt-6 text-4xl md:text-6xl font-light text-slate-900">
            Empowering Minds, Shaping Futures
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.path)}
              className="
                bg-white
                rounded-3xl
                p-10
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-500
                cursor-pointer
              "
            >
              <div className="mb-8 text-blue-700">
                {card.icon}
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-5">
                {card.title}
              </h3>

              <p className="text-gray-500 text-lg leading-9">
                {card.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}