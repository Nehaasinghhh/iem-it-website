import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import annualReportPdf from "../assets/syllabus/annual-report.pdf";

export default function AnnualReport() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Annual Report
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mt-4 rounded-full"></div>
          </div>
        </section>

      <section className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">

            <p className="text-blue-600 text-lg font-semibold uppercase tracking-[4px]">
              Optimizing Success, One Metric At A Time
            </p>

            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-blue-900">
              PERFORMANCE METRICS:
              
              THE ANNUAL REPORT
            </h1>

            <div className="w-52 h-1 bg-blue-700 rounded-full mx-auto mt-5"></div>

            <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our Annual Report highlighting achievements,
              milestones, academic excellence, research contributions,
              and institutional growth.
            </p>

          </div>

          {/* PDF Card */}
          <div className="bg-white border border-blue-200 rounded-3xl shadow-xl overflow-hidden">

            {/* Button */}
            <div className="flex justify-center py-8 bg-blue-50 border-b border-blue-100">

              <a
                href={annualReportPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-8
                  py-4
                  bg-blue-700
                  text-white
                  rounded-xl
                  font-semibold
                  shadow-lg
                  transition-all
                  duration-300
                  hover:bg-blue-800
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >
                📄 Open Annual Report
              </a>

            </div>

            {/* PDF Viewer */}
            <iframe
              src={annualReportPdf}
              title="Annual Report"
              className="w-full h-[1000px]"
            />

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}