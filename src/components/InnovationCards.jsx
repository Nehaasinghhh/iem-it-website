import { useNavigate } from "react-router-dom";

import {
  BookOpen,
  FileText,
  CalendarDays,
  Users,
} from "lucide-react";

export default function InnovationCards() {
  const sections = [
    {
      title: "Publications",
      icon: <FileText size={55} />,
      description:
        "High-impact research contributions recognized in reputed journals and conferences.",
    },
    {
      title: "Book Chapters",
      icon: <BookOpen size={55} />,
      description:
        "Authored insightful chapters in academic books, sharing knowledge with the world.",
    },
    {
      title: "Annual Report",
      icon: <CalendarDays size={55} />,
      description:
        "Comprehensive insights into departmental achievements and initiatives.",
    },
    {
      title: "Alumni Report",
      icon: <Users size={55} />,
      description:
        "A glimpse into alumni success stories, contributions and engagement.",
    },
  ];

  return (
    <section className="bg-slate-100 py-24">

      <div className="container mx-auto px-6">

        {/* Innovation Hub */}
        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-blue-700">
            Innovation Hub
          </h2>

          <p className="mt-5 text-gray-600 text-lg max-w-3xl mx-auto">
            Unleashing creativity and transforming ideas into reality through
            research, development and technology.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {sections.slice(0, 2).map((item) => (
            <div
              key={item.title}
              className="
              bg-blue-50
              rounded-3xl
              p-10
              shadow-lg
              text-center
              hover:-translate-y-3
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >
              <div className="flex justify-center mb-6 text-blue-700">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        {/* Scholarly Spectrum */}

        <div className="text-center mt-28 mb-20">

          <h2 className="text-5xl font-bold text-blue-700">
            Scholarly Spectrum
          </h2>

          <p className="mt-5 text-gray-600 text-lg max-w-3xl mx-auto">
            Showcasing innovation, knowledge and excellence through research,
            insights and creative expression.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {sections.slice(2, 4).map((item) => (
            <div
              key={item.title}
              className="
              bg-blue-50
              rounded-3xl
              p-10
              shadow-lg
              text-center
              hover:-translate-y-3
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >
              <div className="flex justify-center mb-6 text-blue-700">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}