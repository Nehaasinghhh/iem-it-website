import FacultyCard from "./FacultyCard";

import {
  hod,
  professors,
  associateProfessors,
  assistantProfessors,
} from "../data/facultyData";

export default function MentorSection() {
  return (
    <div className="mt-16 animate-fade-in">

      {/* PAGE TITLE */}

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-800">
          IT Mentors List
        </h2>

        <div className="w-72 h-1 bg-blue-700 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* ================= HOD ================= */}

      <section className="mb-24">

        <h3 className="text-3xl font-bold text-center uppercase text-slate-800">
          Head Of Department
        </h3>

        <div className="w-72 h-1 bg-blue-600 mx-auto mt-3 mb-12 rounded-full"></div>

        <div className="flex justify-center">
          <FacultyCard
            image={hod.image}
            name={hod.name}
            designation={hod.designation}
          />
        </div>

      </section>

      {/* ================= PROFESSORS ================= */}

      <section className="mb-24">

        <h3 className="text-3xl font-bold text-center uppercase text-slate-800">
          Professors
        </h3>

        <div className="w-48 h-1 bg-blue-600 mx-auto mt-3 mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">

          {professors.map((item, index) => (

            <div key={index} className="flex justify-center">

              <FacultyCard
                image={item.image}
                name={item.name}
                designation={item.designation}
              />

            </div>

          ))}

        </div>

      </section>

      {/* ================= ASSOCIATE PROFESSORS ================= */}

      <section className="mb-24">

        <h3 className="text-3xl font-bold text-center uppercase text-slate-800">
          Associate Professors
        </h3>

        <div className="w-72 h-1 bg-blue-600 mx-auto mt-3 mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-6xl mx-auto">

          {associateProfessors.map((item, index) => (

            <div key={index} className="flex justify-center">

              <FacultyCard
                image={item.image}
                name={item.name}
                designation={item.designation}
              />

            </div>

          ))}

        </div>

      </section>

      {/* ================= ASSISTANT PROFESSORS ================= */}

      <section className="mb-10">

        <h3 className="text-3xl font-bold text-center uppercase text-slate-800">
          Assistant Professors
        </h3>

        <div className="w-72 h-1 bg-blue-600 mx-auto mt-3 mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-6xl mx-auto">

          {assistantProfessors.map((item, index) => (

            <div key={index} className="flex justify-center">

              <FacultyCard
                image={item.image}
                name={item.name}
                designation={item.designation}
              />

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}