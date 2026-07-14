import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    

      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-[#0B3D91]">
              ABOUT THE PROGRAM
            </h1>

            <div className="w-28 h-1 bg-[#0B3D91] mx-auto mt-5 rounded-full"></div>

            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
              Department of Information Technology, Institute of Engineering &
              Management (IEM), Kolkata
            </p>
          </div>

          {/* Content Cards */}
          <div className="flex flex-col gap-8">
            {contents.map((item, index) => (
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
                <div className="flex gap-6">
                  
                  {/* Left Accent Line */}
                  <div className="w-1 bg-[#0B3D91] rounded-full"></div>

                  {/* Content */}
                  <p className="text-gray-700 text-lg leading-9">
                    {item}
                  </p>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    
    </>
  );
}