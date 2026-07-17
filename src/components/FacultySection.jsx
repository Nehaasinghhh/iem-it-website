import FacultyCard from "./FacultyCard";

import {
  hod,
  professors,
  associateProfessors,
  assistantProfessors,
} from "../data/facultyData";

export default function FacultySection() {
  return (
    <div className="mt-16 animate-fade-in">

      {/* PAGE TITLE */}

      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-violet-700">
          IT Faculty List
        </h2>

        <div className="w-72 h-1 bg-gradient-to-r from-violet-600 to-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* =========================
          HEAD OF DEPARTMENT
      ========================== */}

      <div className="mb-20">

        <h3 className="text-center text-3xl font-bold uppercase text-slate-800">
          Head Of Department
        </h3>

        <div className="w-72 h-1 bg-blue-500 mx-auto mt-3 mb-10"></div>

        <div className="flex justify-center">

          <FacultyCard
            image={hod.image}
            name={hod.name}
            designation={hod.designation}
            cardColor="bg-white"
            borderColor="border-violet-500"
          />

        </div>

      </div>

      {/* =========================
            PROFESSORS
      ========================== */}

      <div className="mb-20">

        <h3 className="text-center text-3xl font-bold uppercase text-slate-800">
          Professors
        </h3>

        <div className="w-48 h-1 bg-blue-500 mx-auto mt-3 mb-10"></div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">

          {professors.map((item, index) => (
            <FacultyCard
              key={index}
              image={item.image}
              name={item.name}
              designation={item.designation}
              cardColor="bg-blue-50"
              borderColor="border-blue-500"
            />
          ))}

        </div>

      </div>

      {/* =========================
         ASSOCIATE PROFESSORS
      ========================== */}

      <div className="mb-20">

        <h3 className="text-center text-3xl font-bold uppercase text-slate-800">
          Associate Professors
        </h3>

        <div className="w-72 h-1 bg-blue-500 mx-auto mt-3 mb-10"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

          {associateProfessors.map((item, index) => (

            <FacultyCard
              key={index}
              image={item.image}
              name={item.name}
              designation={item.designation}
              cardColor="bg-green-50"
              borderColor="border-green-500"
            />

          ))}

        </div>

      </div>

      {/* =========================
        ASSISTANT PROFESSORS
      ========================== */}

      <div className="mb-10">

        <h3 className="text-center text-3xl font-bold uppercase text-slate-800">
          Assistant Professors
        </h3>

        <div className="w-72 h-1 bg-blue-500 mx-auto mt-3 mb-10"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

          {assistantProfessors.map((item, index) => (

            <FacultyCard
              key={index}
              image={item.image}
              name={item.name}
              designation={item.designation}
              cardColor="bg-orange-50"
              borderColor="border-orange-500"
            />

          ))}

        </div>

      </div>

    </div>
  );
}