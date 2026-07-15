import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import annualReportPdf from "../assets/syllabus/annual-report.pdf";

export default function AnnualReport() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-900 py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-black-500 text-lg md:text-xl font-bold uppercase tracking-wider">
              Optimizing Success, One Metric At A Time
            </p>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
              PERFORMANCE METRICS: THE ANNUAL REPORT
            </h1>

          </div>

          {/* PDF Section */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

            {/* Open PDF Button */}
            <div className="text-center py-6 bg-gray-100">
              <a
                href={annualReportPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  px-8
                  py-3
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  font-semibold
                  rounded-xl
                  transition-all
                  duration-300
                "
              >
                Open Annual Report
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