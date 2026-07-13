import { Briefcase, TrendingUp, Building2 } from "lucide-react";

export default function Placements() {
  const companies = [
    "TCS",
    "Infosys",
    "Wipro",
    "Cognizant",
    "Capgemini",
    "Accenture",
    "IBM",
    "Amazon",
    "Microsoft",
    "Oracle",
    "Deloitte",
    "PwC",
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full font-semibold">
            PLACEMENTS
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Career Opportunities
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            The Information Technology Department has an excellent placement
            record with students getting recruited by top multinational
            companies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <TrendingUp className="mx-auto text-blue-700" size={60}/>

            <h3 className="text-4xl font-bold mt-5">95%</h3>

            <p className="text-gray-600 mt-3">
              Placement Assistance
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <Briefcase className="mx-auto text-blue-700" size={60}/>

            <h3 className="text-4xl font-bold mt-5">
              250+
            </h3>

            <p className="text-gray-600 mt-3">
              Recruiters
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <Building2 className="mx-auto text-blue-700" size={60}/>

            <h3 className="text-4xl font-bold mt-5">
              20 LPA+
            </h3>

            <p className="text-gray-600 mt-3">
              Highest Package
            </p>

          </div>

        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-xl p-10">

          <h3 className="text-3xl font-bold mb-8 text-center">
            Major Recruiters
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">

            {companies.map(company=>(
              <div
              key={company}
              className="border rounded-xl p-5 text-center hover:bg-blue-900 hover:text-white transition">
                {company}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}