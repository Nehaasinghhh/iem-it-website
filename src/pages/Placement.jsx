import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Company Logos
import oracle from "../assets/placement/oracle.png";
import ibm from "../assets/placement/IBM.png";
import tcs from "../assets/placement/tcs.png";
import eq from "../assets/placement/download.png";
import tismo from "../assets/placement/tismo.png";
import jman from "../assets/placement/Jman.png";
import nev from "../assets/placement/nev.jpg";
import sms from "../assets/placement/sms.png";
import worley from "../assets/placement/worley.jpeg";
import itc from "../assets/placement/itc.jpeg";
import key from "../assets/placement/key.png";
import grey from "../assets/placement/grey.png";
import accenture from "../assets/placement/acc.png";
import deloitte from "../assets/placement/del.png";
import dxc from "../assets/placement/dxcorr.png";
import exide from "../assets/placement/exide.jpg";
import fujitsu from "../assets/placement/fut.jpg";
import iem from "../assets/placement/iem.jpeg";
import inc from "../assets/placement/inc.png";
import pharm from "../assets/placement/pharm.jpg";
import pwc from "../assets/placement/pwc.jpg";
import ramco from "../assets/placement/ram.png";
import reliance from "../assets/placement/rel.png";
import saksoft from "../assets/placement/sak.png";
import tel from "../assets/placement/tel.jpg";
import vikjp from "../assets/placement/vik.jpg";
import vodafone from "../assets/placement/voda.png";
import zinfi from "../assets/placement/zinfi.png";

const companies = [
  { name: "Oracle", logo: oracle, recruited: 1 },
  { name: "IBM", logo: ibm, recruited: 11 },
  { name: "TCS", logo: tcs, recruited: 115 },
  { name: "EQ Technology", logo: eq, recruited: 1 },
  { name: "Tismo Technology", logo: tismo, recruited: 1 },
  { name: "JMAN", logo: jman, recruited: 4 },
  { name: "Nevaeh Technology", logo: nev, recruited: 2 },
  { name: "SMS Group", logo: sms, recruited: 6 },
  { name: "Worley", logo: worley, recruited: 3 },
  { name: "ITC Infotech", logo: itc, recruited: 19 },
  { name: "Keyence", logo: key, recruited: 1 },
  { name: "Grey-B", logo: grey, recruited: 14 },
  { name: "Accenture", logo: accenture, recruited: 18 },
  { name: "Deloitte", logo: deloitte, recruited: 7 },
  { name: "Dxcorr Technology", logo: dxc, recruited: 8 },
  { name: "Exide", logo: exide, recruited: 5 },
  { name: "Futures First ", logo: fujitsu, recruited: 1 },
  { name: "IEM Labs", logo: iem, recruited: 6 },
  { name: "Incture", logo: inc, recruited: 3 },
  { name: "PharmEasy", logo: pharm, recruited: 2 },
  { name: "PwC", logo: pwc, recruited: 12 },
  { name: "RSM US LLP", logo: ramco, recruited: 4 },
  { name: "Reliance", logo: reliance, recruited: 10 },
  { name: "Sasken", logo: saksoft, recruited: 5 },
  { name: "Telaverge Communication", logo: tel, recruited: 2 },
  { name: "Vikrant Engineering", logo: vikjp, recruited: 3 },
  { name: "Vodafone", logo: vodafone, recruited: 9 },
  { name: "Zinfi", logo: zinfi, recruited: 3 },
];

export default function Placement() {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-blue-200 font-semibold">
            Department of Information Technology
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            PLACEMENTS
          </h1>

          <div className="w-36 h-1 bg-white mx-auto rounded-full mt-5"></div>

          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Our students are recruited by leading multinational companies,
            startups, and renowned organizations across various industries.
          </p>

        </div>
      </section>

      {/* Placement Cards */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-blue-900">
              Our Top Recruiters
            </h2>

            <div className="w-40 h-1 bg-blue-700 rounded-full mx-auto mt-4"></div>

            <p className="mt-5 text-gray-600 text-lg">
              Companies that have recruited students from the Department of Information Technology.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {companies.map((company, index) => (

              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  border-2
                  border-blue-200
                  shadow-lg
                  overflow-hidden
                  transition-all
                  duration-300
                  hover:-translate-y-3
                  hover:shadow-2xl
                  hover:border-blue-700
                "
              >

                {/* Company Name */}

                <div className="bg-blue-700 py-4">

                  <h3 className="text-xl font-bold text-white text-center">
                    {company.name}
                  </h3>

                </div>

                {/* Logo */}

                <div className="flex justify-center items-center h-40 p-6">

                  <img
                    src={company.logo}
                    alt={company.name}
                    className="
                      max-h-24
                      object-contain
                      transition-transform
                      duration-300
                      hover:scale-110
                    "
                  />

                </div>

                {/* Recruit Count */}

                <div className="pb-8 text-center">

                  <span
                    className="
                      inline-block
                      bg-blue-700
                      text-white
                      px-6
                      py-3
                      rounded-full
                      font-semibold
                      shadow-md
                    "
                  >
                    {company.recruited} Student
                    {company.recruited > 1 ? "s" : ""} Recruited
                  </span>

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

