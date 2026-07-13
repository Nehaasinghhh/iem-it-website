import {
  GraduationCap,
  BookOpen,
  Cpu,
  Microscope,
} from "lucide-react";

export default function Programs() {
  const programs = [
    {
      icon: <GraduationCap size={40} />,
      title: "B.Tech in Information Technology",
      duration: "4 Years",
      color: "from-blue-700 to-blue-500",
      points: [
        "Programming using C, C++, Java & Python",
        "Web Development & Mobile App Development",
        "Artificial Intelligence & Machine Learning",
        "Database Management Systems",
        "Software Engineering",
        "Cloud Computing",
      ],
    },
    {
      icon: <BookOpen size={40} />,
      title: "M.Tech in Information Technology",
      duration: "2 Years",
      color: "from-indigo-700 to-indigo-500",
      points: [
        "Advanced Software Engineering",
        "Big Data Analytics",
        "Cyber Security",
        "Cloud Architecture",
        "Research Methodology",
        "Industry Projects",
      ],
    },
    {
      icon: <Cpu size={40} />,
      title: "Industry Training",
      duration: "Professional Development",
      color: "from-cyan-700 to-cyan-500",
      points: [
        "Internship Opportunities",
        "Hackathons",
        "Coding Competitions",
        "Industrial Visits",
        "Placement Preparation",
        "Certification Programs",
      ],
    },
    {
      icon: <Microscope size={40} />,
      title: "Research & Innovation",
      duration: "Innovation Cell",
      color: "from-purple-700 to-purple-500",
      points: [
        "Research Publications",
        "AI & ML Projects",
        "IoT Applications",
        "Patent Filing",
        "Start-up Incubation",
        "Innovation Labs",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="container mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
            PROGRAMS OFFERED
          </span>

          <h2 className="text-5xl font-bold mt-6 text-slate-900">
            Academic Programs
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            The Department of Information Technology offers
            industry-oriented programs designed to build
            technical expertise, innovation, leadership,
            and research capabilities.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {programs.map((program, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden border border-slate-200"
            >

              <div
                className={`bg-gradient-to-r ${program.color} text-white p-8`}
              >

                <div className="mb-4">

                  {program.icon}

                </div>

                <h3 className="text-2xl font-bold">

                  {program.title}

                </h3>

                <p className="mt-2 opacity-90">

                  {program.duration}

                </p>

              </div>

              <div className="p-8">

                <ul className="space-y-4">

                  {program.points.map((point) => (

                    <li
                      key={point}
                      className="flex items-start gap-3"
                    >

                      <div className="w-2 h-2 rounded-full bg-blue-700 mt-3"></div>

                      <span className="text-gray-700">

                        {point}

                      </span>

                    </li>

                  ))}

                </ul>

                <button className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">

                  Learn More

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}