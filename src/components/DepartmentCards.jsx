import {
  Building2,
  UsersRound,
  GraduationCap,
  LibraryBig,
} from "lucide-react";

export default function DepartmentCards() {
  const departments = [
    {
      title: "CAMPUS",
      icon: Building2,
      description:
        "All round excellence in management and engineering discipline is attained only by close interaction with the allied industries. To facilitate close interaction of modern industries, as well as to draw upon the academic & professional resources of a vibrant industrial sector.",
    },
    {
      title: "PLACEMENT",
      icon: UsersRound,
      description:
        "The educational group has strong placement cell. Four placement officers under the chairmanship of the Institute’s director work as placement cell. Very effective Campus Interview is a regular feature of the institute.",
    },
    {
      title: "FACULTY",
      icon: GraduationCap,
      description:
        "The educational group believes that combination of good teachers and good students is the basic and most important aspect for achieving academic excellence. Our faculty members bring the best learning experience for students.",
    },
    {
      title: "DIGITAL LIBRARY",
      icon: LibraryBig,
      description:
        "A beautiful & modern library well updated books, journals & multimedia learning aids provides students opportunities to keep themselves well versed with all engineering and management related information.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-4">
                Department Highlights
          </h2>


          <div className="w-32 h-1 bg-blue-700 mx-auto mt-6 rounded-full"></div>

        </div>

        {/* Cards */}
        <div
          className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
        "
        >
          {departments.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                bg-white
                rounded-2xl
                p-8
                text-center
                shadow-xl
                transition-all
                duration-500
                hover:-translate-y-4
                hover:shadow-2xl
                group
                flex
                flex-col
                items-center
              "
              >
                {/* Icon */}
                <div
                  className="
                  w-20
                  h-20
                  rounded-full
                  bg-blue-600
                  flex
                  items-center
                  justify-center
                  mb-6
                  transition-all
                  duration-500
                  group-hover:bg-blue-700
                  group-hover:scale-110
                "
                >
                  <Icon
                    size={38}
                    className="text-white"
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                  text-xl
                  font-bold
                  text-gray-800
                  mb-5
                "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                  text-gray-600
                  text-sm
                  leading-7
                  text-center
                "
                >
                  {item.description}
                </p>

                {/* Button */}
                <button
                  className="
                  mt-8
                  w-full
                  border-2
                  border-blue-600
                  text-blue-600
                  py-3
                  rounded-lg
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-blue-600
                  hover:text-white
                "
                >
                  EXPLORE !
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}