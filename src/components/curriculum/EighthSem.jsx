import syllabusPdf from "../../assets/syllabus/4th_sem.pdf";

export default function EighthSem() {
  return (
    <>

      {/* TITLE */}

      <div className="text-center mb-12">

        <h2 className="text-4xl font-bold text-slate-800">
          8TH SEM Course Structure
        </h2>

        <div className="w-72 h-1 bg-gradient-to-r from-sky-500 to-blue-700 mx-auto mt-4 rounded-full"></div>

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-sky-100">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1200px]">

            <thead className="bg-gradient-to-r from-sky-600 to-blue-800 text-white">

              <tr>
                <th className="p-5">Sl. No.</th>
                <th>Type of Course</th>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Lecture</th>
                <th>Tutorial</th>
                <th>Practical</th>
                <th>Sessional</th>
                <th>Credits</th>
              </tr>

            </thead>

            <tbody>

              <tr className="bg-gradient-to-r from-sky-600 to-blue-800 text-white font-bold">
                <td colSpan="9" className="p-4 text-center">
                  THEORY PAPERS
                </td>
              </tr>

              {/* ADD YOUR CURRENT TABLE ROWS HERE */}

            </tbody>

          </table>

        </div>

      </div>

      {/* PDF */}

      <div className="mt-20">

        <h2 className="text-center text-4xl font-bold text-slate-800">
          4TH SEM Syllabus
        </h2>

        <div className="w-56 h-1 bg-gradient-to-r from-sky-500 to-blue-700 mx-auto mt-4 mb-10 rounded-full"></div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-sky-100">

          <iframe
            src={syllabusPdf}
            title="4th Sem Syllabus"
            className="w-full h-[1000px]"
          />

        </div>

      </div>
    </>
  );
}