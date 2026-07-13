import visionImg from "../assets/images/vision.jpg";
import missionImg from "../assets/images/mission.jpg";

export default function About() {
  const contents = [
    "The Dept. of Information Technology, at the Institute of Engineering and Management (IEM), Salt Lake, Kolkata came into existence in 1999 with a Vision 'To produce Creators of Creative Technological Solutions' for the benefit of Engineering, Science and Technology and the Nation on a larger scale. It has always strived to fulfill its Mission to impart Value Based Education and promote Research and Development at the International level.",

    "The Dept. of Information Technology has received Accreditation twice by the NBA and has since been running its programs successfully.",

    "The Dept. of Information Technology began with its first batch of 40 students for the B.Tech Course. The student intake for the Under Graduate Course gradually increased from 40 to 60 seats in 2001 and presently admits 120.",

    "The Department achieved another feather in its cap with the initiation of the Post Graduate Course (M.Tech) in 2011. Since its inception, the Dept. of Information Technology has been strengthening its resources and providing state-of-the-art facilities to foster the spirit of learning and development of professional skills.",

    "The IT Dept. makes full utilisation of its 7 Laboratories in its attempt to put into practice theoretical concepts and getting the students industry ready. It also encourages students to take up challenging projects and internships at the National and International level in order to fine-tune their technical skills.",

    "The Dept provides opportunities for them to join various student chapters such as NEN, SPIE, and OSA etc. in addition to other extracurricular activities. It has opened avenues to promote Entrepreneurship among students and instill in them the concept of Corporate Social Responsibility. In its attempt to pursue excellence and explore greener pastures, the Dept. hosts a strong team of qualified and experienced Faculty Members who work in co-ordination with the budding engineers.",
  ];

  return (
    <>
      {/* ABOUT THE PROGRAM */}
      <section className="bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 py-24 px-6">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="w-full max-w-5xl">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold uppercase text-white">
                ABOUT THE PROGRAM
              </h2>

              <div className="w-64 h-1 bg-white mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Main Container */}
            <div className="bg-blue-600/30 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-blue-200">
              <div className="space-y-14">
                {contents.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-blue-600 hover:bg-blue-700 border border-blue-400 hover:border-blue-300 rounded-lg px-8 py-10 transition-all duration-300 hover:scale-[1.01] shadow-lg"
                  >
                    <div className="flex gap-6">
                      {/* Left Border */}
                      <div className="w-1 bg-white rounded-full"></div>

                      {/* Text */}
                      <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION SECTION */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Vision Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-800 uppercase">
                Vision of the Program
              </h2>

              <div className="w-24 h-1 bg-blue-700 mx-auto mt-4 mb-8 rounded-full"></div>

              <p className="text-gray-700 text-lg leading-9">
                The Department of Information Technology at IEM Kolkata strives
                to achieve excellence in academics, innovation, research, and
                student development. It is well-equipped to tackle novel
                challenges in this fast-evolving era of Information Technology
                through research and entrepreneurial initiatives, thereby
                creating true value for society.
              </p>

              <p className="text-gray-700 text-lg leading-9 mt-8">
                The department is internationally recognized in distinctive
                areas of education and research, driven by a professional and
                technology-oriented focus, based on a culture of innovation and
                excellence.
              </p>
            </div>

            {/* Vision Image */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={visionImg}
                alt="Vision"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Mission Image */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={missionImg}
                alt="Mission"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-800 uppercase">
                Mission of the Program
              </h2>

              <div className="w-24 h-1 bg-blue-700 mx-auto mt-4 mb-8 rounded-full"></div>

              <div className="space-y-6 text-gray-700 text-lg leading-9">
                <p>
                  To assist students in understanding and enjoying the seamless
                  nature of knowledge, encouraging them to apply acquired
                  knowledge to practical use, ensuring they become socially
                  responsible individuals sought after for their leadership
                  qualities.
                </p>

                <p>
                  To foster creativity, innovation, and excellence through an
                  example-based teaching-learning process imparted in the most
                  simple and understandable way.
                </p>

                <p>
                  To continuously upgrade knowledge bases, improve
                  infrastructure, adopt the latest technological tools, and
                  update curricula based on periodic stakeholder feedback,
                  enabling students to meet professional requirements and
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-100 py-24 px-6">
  <div className="max-w-6xl mx-auto">

    {/* ================= PEO ================= */}

    <h2 className="text-4xl font-bold text-blue-800 border-l-4 border-blue-600 pl-4 mb-16">
      Programme Educational Objectives (PEO)
    </h2>

    <div className="flex flex-col gap-10">

      {[
        {
          title: "1. PEO1",
          text: "To provide students with good breadth of outcome based knowledge in mathematical, scientific, computing and basic engineering fundamentals necessary to formulate, analyze and solve hardware/software engineering problems and/or also to pursue advanced study or research."
        },
        {
          title: "2. PEO2",
          text: "To educate students with proficiency in core areas of Information Technology and related engineering so as to comprehend engineering trade-offs, analyze, design, and synthesize data and technical concepts to create novel products and solutions for real life problems."
        },
        {
          title: "3. PEO3",
          text: "To instill in students a sense of high professionalism, to work as part of teams on multidisciplinary projects and diverse professional environments, needed for a successful professional career and relate engineering issues to society, global economy and emerging technologies."
        },
        {
          title: "4. PEO4",
          text: "To provide our students with a learning environment consciousness of the life-long learning process, to develop effective oral and written communication skills and to introduce them to written ethical codes and guidelines, show leadership and entrepreneurship and exhibit good citizenship."
        }
      ].map((item, index) => (
        <div
          key={index}
          className="group bg-white rounded-2xl border-l-4 border-blue-600 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:bg-blue-50 hover:border-blue-800 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            {item.title}
          </h3>

          <p className="text-gray-700 text-base leading-8">
            {item.text}
          </p>
        </div>
      ))}

    </div>

    {/* ================= PO ================= */}

    <h2 className="text-4xl font-bold text-blue-800 border-l-4 border-blue-600 pl-4 mb-16 mt-24">
      Program Outcomes (PO)
    </h2>

    <div className="flex flex-col gap-10">

      {[
        {
          title: "1. Engineering Knowledge",
          text: "An ability to apply knowledge of computing, mathematics including discrete mathematics, probability, statistics, science and engineering fundamentals appropriate to the discipline."
        },
        {
          title: "2. Problem Analysis",
          text: "An ability to design and conduct experiments, as well as to organize, analyze and interpret data to produce meaningful conclusions and recommendations."
        },
        {
          title: "3. Design/Development of Solutions",
          text: "An ability to design, implement and evaluate a computer-based system, process, component or program to meet desired needs within realistic constraints."
        },
        {
          title: "4. Conduct Investigations of Complex Problems",
          text: "An ability to analyze, identify, formulate and solve hardware and software based computing problems using current techniques and modern engineering tools."
        },
        {
          title: "5. The Engineer and Society",
          text: "An ability to analyze the local and global impact of computing on individuals, organizations and society."
        },
        {
          title: "6. Communication",
          text: "Knowledge of contemporary issues in the social sciences and the humanities using computational tools.."
        },
        {
          title: "7. Ethics",
          text: "An understanding of professional, ethical, legal, security and social issues and responsibilities.."
        },
        {
          title: "8. Individual and team work",
          text: "An ability to function effectively individually and on teams, including diverse and multidisciplinary areas, to accomplish a common goal."
        },
        {
          title: "9. Modern tool usage",
          text: "An ability to propose original ideas and solutions, culminating into a modern, easy to use tool, by a larger section of the society with longevity through effective communication in speech and in writing, including documentation of hardware and software systems to customers/users or peers."
        },
        {
          title: "10. Life-long learning",
          text: "An ability to recognize the importance of professional development by pursuing postgraduate studies or face competitive examinations that offer challenging and rewarding careers in computing globally."
        },
        {
          title: "11. Project management and finance",
          text: "An ability to apply engineering and management knowledge and techniques to estimate time and resources needed to compconste a technical project."
        },
        {
          title: "12.  Environment and sustainability",
          text: "An ability to have an entrepreneurial and innovative mindset to apply knowledge of engineering and management to one’s own surrounding environments."
        }
        
        
      ].map((item, index) => (
        <div
          key={index}
          className="group bg-white rounded-2xl border-l-4 border-blue-600 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:bg-blue-50 hover:border-blue-800 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            {item.title}
          </h3>

          <p className="text-gray-700 text-base leading-8">
            {item.text}
          </p>
        </div>
      ))}

    </div>

    {/* ================= PSO ================= */}

    <h2 className="text-4xl font-bold text-blue-800 border-l-4 border-blue-600 pl-4 mb-16 mt-24">
      Program Specific Outcomes (PSO)
    </h2>

    <div className="flex flex-col gap-10">

      {[
        {
          title: "1. PSO1",
          text: "An ability to analyse problems, design algorithms, identify and define computing requirements appropriate to its solution and implement them in the field of Algorithms, Database, Networking, Artificial Intelligence, Machine Learning, Computer Security and Blockchain."
        },
        {
          title: "2. PSO2",
          text: "Anticipate the changing direction of Information Technology and evaluate and communicate the likely utility of new technologies to an individual or organization for performing tasks related to Research, Training and Management."
        },
      
        {
          title: "3. PSO3",
          text: "Ability to develop and effectively integrate IT-based solutions into the user environment."
        }
      ].map((item, index) => (
        <div
          key={index}
          className="group bg-white rounded-2xl border-l-4 border-blue-600 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:bg-blue-50 hover:border-blue-800 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            {item.title}
          </h3>

          <p className="text-gray-700 text-base leading-8">
            {item.text}
          </p>
        </div>
      
      ))}

    </div>

  </div>
</section>
    </>
  );
}
