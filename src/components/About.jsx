import { CheckCircle2 } from "lucide-react";

export default function About() {
  const features = [
    "NBA Accredited Programme",
    "Experienced Faculty Members",
    "Modern Computing Laboratories",
    "Industry-Oriented Curriculum",
    "Excellent Placement Record",
    "Research & Innovation Culture",
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
              ABOUT THE DEPARTMENT
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-6 text-slate-900 leading-tight">
              Department of
              <span className="text-blue-900"> Information Technology</span>
            </h2>

            <p className="mt-8 text-gray-600 leading-8 text-lg">

              The Department of Information Technology at the Institute of
              Engineering & Management is committed to producing highly skilled
              professionals through quality teaching, practical learning,
              innovation, and research. The department continuously updates its
              curriculum to meet the latest technological advancements and
              industry requirements.

            </p>

            <p className="mt-6 text-gray-600 leading-8 text-lg">

              Students receive extensive exposure to programming, software
              engineering, artificial intelligence, machine learning, cloud
              computing, cybersecurity, Internet of Things, data analytics, and
              modern web technologies. The department encourages project-based
              learning, internships, research publications, hackathons, and
              entrepreneurship.

            </p>

          </div>

          {/* Right Side */}

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h3 className="text-3xl font-bold text-blue-900 mb-8">
              Why Choose IT @ IEM?
            </h3>

            <div className="space-y-5">

              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2
                    className="text-green-600 mt-1"
                    size={24}
                  />

                  <p className="text-gray-700 text-lg">
                    {item}
                  </p>

                </div>
              ))}

            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-blue-50 rounded-xl p-6 text-center">

                <h2 className="text-4xl font-bold text-blue-900">
                  20+
                </h2>

                <p className="mt-2 text-gray-600">
                  Years Experience
                </p>

              </div>

              <div className="bg-blue-50 rounded-xl p-6 text-center">

                <h2 className="text-4xl font-bold text-blue-900">
                  100+
                </h2>

                <p className="mt-2 text-gray-600">
                  Industry Partners
                </p>

              </div>

              <div className="bg-blue-50 rounded-xl p-6 text-center">

                <h2 className="text-4xl font-bold text-blue-900">
                  95%
                </h2>

                <p className="mt-2 text-gray-600">
                  Placement Rate
                </p>

              </div>

              <div className="bg-blue-50 rounded-xl p-6 text-center">

                <h2 className="text-4xl font-bold text-blue-900">
                  50+
                </h2>

                <p className="mt-2 text-gray-600">
                  Faculty Members
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}