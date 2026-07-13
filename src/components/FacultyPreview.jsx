import { Mail, GraduationCap } from "lucide-react";

const faculty = [
  {
    name: "Dr. A. Kumar",
    designation: "Professor & Head",
    qualification: "Ph.D.",
    email: "hod.it@iem.edu.in",
  },
  {
    name: "Dr. S. Roy",
    designation: "Associate Professor",
    qualification: "Ph.D.",
    email: "sroy@iem.edu.in",
  },
  {
    name: "Prof. P. Das",
    designation: "Assistant Professor",
    qualification: "M.Tech",
    email: "pdas@iem.edu.in",
  },
  {
    name: "Prof. R. Ghosh",
    designation: "Assistant Professor",
    qualification: "M.Tech",
    email: "rghosh@iem.edu.in",
  },
];

export default function FacultyPreview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full font-semibold">
            OUR FACULTY
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Meet Our Faculty Members
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Highly qualified and experienced faculty members dedicated to
            academic excellence, research and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
            >
              <div className="w-28 h-28 rounded-full bg-blue-100 mx-auto flex items-center justify-center">
                <GraduationCap size={45} className="text-blue-900" />
              </div>

              <h3 className="text-xl font-bold text-center mt-6">
                {item.name}
              </h3>

              <p className="text-blue-900 text-center mt-2">
                {item.designation}
              </p>

              <p className="text-gray-600 text-center mt-2">
                {item.qualification}
              </p>

              <div className="flex justify-center mt-5">
                <Mail className="text-blue-900 mr-2" size={18} />
                <span className="text-sm">{item.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}