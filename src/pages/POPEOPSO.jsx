import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function POPEOPSO() {
  const peoData = [
    {
      title: "1. PEO1",
      text: "To provide students with good breadth of outcome based knowledge in mathematical, scientific, computing and basic engineering fundamentals necessary to formulate, analyze and solve hardware/software engineering problems and/or also to pursue advanced study or research.",
    },
    {
      title: "2. PEO2",
      text: "To educate students with proficiency in core areas of Information Technology and related engineering so as to comprehend engineering trade-offs, analyze, design, and synthesize data and technical concepts to create novel products and solutions for real life problems.",
    },
    {
      title: "3. PEO3",
      text: "To instill in students a sense of high professionalism, to work as part of teams on multidisciplinary projects and diverse professional environments, needed for a successful professional career and relate engineering issues to society, global economy and emerging technologies.",
    },
    {
      title: "4. PEO4",
      text: "To provide our students with a learning environment consciousness of the life-long learning process, to develop effective oral and written communication skills and to introduce them to written ethical codes and guidelines, show leadership and entrepreneurship and exhibit good citizenship.",
    },
  ];

  const poData = [
    {
      title: "1. Engineering Knowledge",
      text: "An ability to apply knowledge of computing, mathematics including discrete mathematics, probability, statistics, science and engineering fundamentals appropriate to the discipline.",
    },
    {
      title: "2. Problem Analysis",
      text: "An ability to design and conduct experiments, as well as to organize, analyze and interpret data to produce meaningful conclusions and recommendations.",
    },
    {
      title: "3. Design/Development of Solutions",
      text: "An ability to design, implement and evaluate a computer-based system, process, component or program to meet desired needs within realistic constraints.",
    },
    {
      title: "4. Conduct Investigations of Complex Problems",
      text: "An ability to analyze, identify, formulate and solve hardware and software based computing problems using current techniques and modern engineering tools.",
    },
    {
      title: "5. The Engineer and Society",
      text: "An ability to analyze the local and global impact of computing on individuals, organizations and society.",
    },
    {
      title: "6. Communication",
      text: "Knowledge of contemporary issues in the social sciences and the humanities using computational tools.",
    },
    {
      title: "7. Ethics",
      text: "An understanding of professional, ethical, legal, security and social issues and responsibilities.",
    },
    {
      title: "8. Individual and Team Work",
      text: "An ability to function effectively individually and on teams, including diverse and multidisciplinary areas, to accomplish a common goal.",
    },
    {
      title: "9. Modern Tool Usage",
      text: "An ability to propose original ideas and solutions, culminating into a modern, easy to use tool, by a larger section of the society with longevity through effective communication in speech and in writing, including documentation of hardware and software systems to customers/users or peers.",
    },
    {
      title: "10. Life-long Learning",
      text: "An ability to recognize the importance of professional development by pursuing postgraduate studies or face competitive examinations that offer challenging and rewarding careers in computing globally.",
    },
    {
      title: "11. Project Management and Finance",
      text: "An ability to apply engineering and management knowledge and techniques to estimate time and resources needed to complete a technical project.",
    },
    {
      title: "12. Environment and Sustainability",
      text: "An ability to have an entrepreneurial and innovative mindset to apply knowledge of engineering and management to one’s own surrounding environments.",
    },
  ];

  const psoData = [
    {
      title: "1. PSO1",
      text: "An ability to analyse problems, design algorithms, identify and define computing requirements appropriate to its solution and implement them in the field of Algorithms, Database, Networking, Artificial Intelligence, Machine Learning, Computer Security and Blockchain.",
    },
    {
      title: "2. PSO2",
      text: "Anticipate the changing direction of Information Technology and evaluate and communicate the likely utility of new technologies to an individual or organization for performing tasks related to Research, Training and Management.",
    },
    {
      title: "3. PSO3",
      text: "Ability to develop and effectively integrate IT-based solutions into the user environment.",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="bg-[#F8FAFC] py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">

          {/* Page Heading */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-[#0B3D91]">
              PEO, PO & PSO
            </h1>

            <div className="w-28 h-1 bg-[#0B3D91] mx-auto mt-5 rounded-full"></div>

            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-8">
              Programme Educational Objectives (PEO), Program Outcomes (PO)
              and Program Specific Outcomes (PSO) of the Department of
              Information Technology.
            </p>
          </div>

          {/* ================= PEO ================= */}

          <h2 className="text-4xl font-bold text-[#0B3D91] border-l-4 border-[#0B3D91] pl-4 mb-16">
            Programme Educational Objectives (PEO)
          </h2>

          <div className="flex flex-col gap-10">
            {peoData.map((item, index) => (
              <div
                key={index}
                className="
                group
                bg-white
                rounded-3xl
                border-l-[6px]
                border-[#0B3D91]
                p-8
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                hover:bg-blue-50
                transition-all
                duration-300
                "
              >
                <h3 className="text-2xl font-bold text-[#0B3D91] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-[16px] leading-8">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* ================= PO ================= */}

          <h2 className="text-4xl font-bold text-[#0B3D91] border-l-4 border-[#0B3D91] pl-4 mb-16 mt-24">
            Program Outcomes (PO)
          </h2>

          <div className="flex flex-col gap-10">
            {poData.map((item, index) => (
              <div
                key={index}
                className="
                group
                bg-white
                rounded-3xl
                border-l-[6px]
                border-[#0B3D91]
                p-8
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                hover:bg-blue-50
                transition-all
                duration-300
                "
              >
                <h3 className="text-2xl font-bold text-[#0B3D91] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-[16px] leading-8">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* ================= PSO ================= */}

          <h2 className="text-4xl font-bold text-[#0B3D91] border-l-4 border-[#0B3D91] pl-4 mb-16 mt-24">
            Program Specific Outcomes (PSO)
          </h2>

          <div className="flex flex-col gap-10">
            {psoData.map((item, index) => (
              <div
                key={index}
                className="
                group
                bg-white
                rounded-3xl
                border-l-[6px]
                border-[#0B3D91]
                p-8
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                hover:bg-blue-50
                transition-all
                duration-300
                "
              >
                <h3 className="text-2xl font-bold text-[#0B3D91] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-[16px] leading-8">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}