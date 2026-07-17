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
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-800">
          IT Faculty List
        </h2>

        <div className="w-72 h-1 bg-blue-700 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* =========================
          HEAD OF DEPARTMENT
      ========================== */}

      <section className="mb-24">

        <h3 className="text-center text-3xl font-bold uppercase text-slate-800">
          Head Of Department
        </h3>

        <div className="w-72 h-1 bg-blue-600 mx-auto mt-3 mb-12 rounded-full"></div>

        <div className="flex justify-center">
          <FacultyCard
            image={hod.image}
            name={hod.name}
            designation={hod.designation}
            cardColor="bg-white"
            borderColor="border-blue-600"
          />
        </div>

      </section>

      {/* =========================
            PROFESSORS
      ========================== */}

      <section className="mb-24">

        <h3 className="text-center text-3xl font-bold uppercase text-slate-800">
          Professors
        </h3>

        <div className="w-48 h-1 bg-blue-600 mx-auto mt-3 mb-12 rounded-full"></div>

        <div className="grid
          grid-cols-1
          md:grid-cols-2
          gap-12
          justify-items-center
          max-w-4xl
          mx-auto">

          {professors.map((item, index) => (
            <FacultyCard
              key={index}
              image={item.image}
              name={item.name}
              designation={item.designation}
              cardColor="bg-white"
              borderColor="border-blue-600"
            />
          ))}

        </div>

      </section>

      {/* =========================
         ASSOCIATE PROFESSORS
      ========================== */}

      <section className="mb-24">

        <h3 className="text-center text-3xl font-bold uppercase text-slate-800">
          Associate Professors
        </h3>

        <div className="w-72 h-1 bg-blue-600 mx-auto mt-3 mb-12 rounded-full"></div>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            2xl:grid-cols-5
            gap-x-12
            gap-y-14
            justify-items-center
            max-w-7xl
            mx-auto
          "
        >
          {associateProfessors.map((item, index) => (
            <FacultyCard
              key={index}
              image={item.image}
              name={item.name}
              designation={item.designation}
              cardColor="bg-white"
              borderColor="border-blue-600"
            />
          ))}
        </div>

      </section>

      {/* =========================
        ASSISTANT PROFESSORS
      ========================== */}

      <section className="mb-10">

        <h3 className="text-center text-3xl font-bold uppercase text-slate-800">
          Assistant Professors
        </h3>

        <div className="w-72 h-1 bg-blue-600 mx-auto mt-3 mb-12 rounded-full"></div>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            2xl:grid-cols-5
            gap-x-12
            gap-y-14
            justify-items-center
            max-w-7xl
            mx-auto
          "
        >
          {assistantProfessors.map((item, index) => (
            <FacultyCard
              key={index}
              image={item.image}
              name={item.name}
              designation={item.designation}
              cardColor="bg-white"
              borderColor="border-blue-600"
            />
          ))}
        </div>

      </section>

    </div>
  );
}