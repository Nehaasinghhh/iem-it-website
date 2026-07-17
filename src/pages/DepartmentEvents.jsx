import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import event1 from "../assets/images/21.jpeg";
import event2 from "../assets/images/22.jpeg";

const events = [
  {
    title: "Faculty Development Program",
    image: event1,
    description:
      "Faculty Development Program on Internet of Things, Cyber Security and Emerging Technologies.",
  },
  {
    title: "Internet of Things Workshop",
    image: event2,
    description:
      "Hands-on workshop focusing on IoT applications, security and industry practices.",
  },
];

export default function DepartmentalEvents() {
  return (

    <>
      <Navbar />
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Departmental Events
          </h1>

          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>

          <p className="max-w-3xl mx-auto text-lg text-blue-100">
            Highlighting major events, workshops, FDPs, seminars and
            initiatives organized by the Department of Information Technology.
          </p>

        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-10">

            <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">
              Faculty Development Program
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

              {events.map((event, index) => (
                <div
                  key={index}
                  className="
                    group
                    bg-white
                    rounded-2xl
                    overflow-hidden
                    border-2
                    border-blue-100
                    shadow-lg
                    transition-all
                    duration-500
                    hover:border-blue-600
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >
                  <div className="overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="
                        w-full
                        h-72
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <div className="p-6">

                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {event.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>

                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

    </div>
    <Footer />
        </>
  );
}