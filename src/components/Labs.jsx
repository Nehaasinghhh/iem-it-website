import {
  Monitor,
  Cpu,
  Database,
  Wifi,
  Code,
  Server,
} from "lucide-react";

const labs = [
  {
    icon: <Monitor size={40} />,
    title: "Programming Lab",
    description:
      "Equipped with modern computers for learning C, C++, Java, Python and software development.",
  },
  {
    icon: <Database size={40} />,
    title: "Database Lab",
    description:
      "Hands-on experience with MySQL, Oracle, SQL Server, MongoDB and database management systems.",
  },
  {
    icon: <Cpu size={40} />,
    title: "AI & Machine Learning Lab",
    description:
      "Advanced computing environment for Artificial Intelligence, Machine Learning and Deep Learning research.",
  },
  {
    icon: <Server size={40} />,
    title: "Cloud Computing Lab",
    description:
      "Cloud infrastructure for virtualization, AWS, Azure and distributed computing experiments.",
  },
  {
    icon: <Wifi size={40} />,
    title: "Networking Lab",
    description:
      "Networking devices, routers and switches for practical implementation of computer networks.",
  },
  {
    icon: <Code size={40} />,
    title: "Project Development Lab",
    description:
      "Dedicated laboratory for final-year projects, innovation, research and startup development.",
  },
];

export default function Labs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full font-semibold">
            LABORATORIES
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Department Laboratories
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            The Department of Information Technology provides
            state-of-the-art laboratories equipped with the latest
            software, hardware and networking facilities to enhance
            practical learning and research.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {labs.map((lab, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-900">

                {lab.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {lab.title}

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                {lab.description}

              </p>

              <button className="mt-8 bg-blue-900 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition">

                View Details

              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}