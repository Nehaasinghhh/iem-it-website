import FacultyCard from "./FacultyCard";

import {
  hod,
  professors,
  associateProfessors,
  assistantProfessors,
} from "../data/facultyData";

export default function FacultySection() {
  return (
    <div className="mt-16">

      {/* ================= TITLE ================= */}

      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-blue-800">
          IT Faculty List
        </h2>

        <div className="w-80 h-1 bg-blue-700 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* ================= HOD ================= */}

      <section className="mb-24">

        <h3 className="text-3xl font-bold text-center uppercase text-blue-900">
          Head of Department
        </h3>

        <div className="w-72 h-1 bg-blue-600 rounded-full mx-auto mt-3 mb-12"></div>

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

        <h3 className="text-3xl font-bold text-center uppercase text-blue-900">
          Professors
        </h3>

        <div className="w-56 h-1 bg-blue-600 rounded-full mx-auto mt-3 mb-12"></div>

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

        <h3 className="text-3xl font-bold text-center uppercase text-blue-900">
          Associate Professors
        </h3>

        <div className="w-72 h-1 bg-blue-600 rounded-full mx-auto mt-3 mb-12"></div>

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">

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

        </div>

      </section>

      {/* ================= ASSISTANT PROFESSORS ================= */}

      <section className="mb-10">

        <h3 className="text-3xl font-bold text-center uppercase text-blue-900">
          Assistant Professors
        </h3>

        <div className="w-72 h-1 bg-blue-600 rounded-full mx-auto mt-3 mb-12"></div>

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">

           {assistantProfessors.slice(0, assistantProfessors.length - 3).map((item, index) => (

  <div key={index} className="flex justify-center">

    <FacultyCard
      image={item.image}
      name={item.name}
      designation={item.designation}
    />

  </div>

))}

          </div>

        </div>

      </section>

    </div>
  );
}