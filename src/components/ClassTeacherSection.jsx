import FacultyCard from "./FacultyCard";
import { classTeachers } from "../data/facultyData";

export default function ClassTeacherSection() {
  return (
    <div className="mt-16 animate-fade-in">

      {/* Heading */}

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-800">
          Class Teachers
        </h2>

        <div className="w-72 h-1 bg-blue-700 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-600 mt-4">
          Batch-wise Class Teachers of the Department
        </p>
      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {classTeachers.map((teacher, index) => (

          <FacultyCard
            key={index}
            image={teacher.image}
            name={teacher.name}
            subtitle={teacher.subtitle}
            designation={teacher.designation}
            cardColor="bg-white"
            borderColor="border-blue-500"
          />

        ))}

      </div>

    </div>
  );
}