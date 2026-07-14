import hodImg from "../assets/images/hod_img.jpg"; // change image names later
import piImg from "../assets/images/hod_img2.png";

export default function FacultyPreview() {
  return (
    <section className="bg-[#0B3D91]py-20 min-h-screen">

      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2
            className="
            inline-block
            text-4xl
            md:text-5xl
            font-bold
            text-blue-600
            border-b-4
            border-blue-600
            pb-3
            "
          >
            Department of Information Technology
          </h2>

        </div>

        {/* HOD Card */}
        <div className="flex justify-center mb-24">

          <div
            className="
            bg-blue-50
            rounded-3xl
            shadow-lg
            p-8
            w-[340px]
            text-center
            transition-all
            duration-500
            hover:-translate-y-3
            hover:shadow-2xl
            cursor-pointer
            "
          >

            <img
              src={hodImg}
              alt="HOD"
              className="
              w-28
              h-28
              rounded-full
              mx-auto
              object-cover
              border-4
              border-blue-600
              transition-all
              duration-500
              hover:scale-110
              "
            />

            <h3 className="mt-6 text-2xl font-bold text-slate-800">
              Prof. Dr. Moutushi Singh
            </h3>

            <p className="mt-4 text-gray-700 leading-8 text-lg">
              Professor Head Of Department
              <br />
              Department of IT, CSE(IoT),
              <br />
              CSE(IoTCSBT)
            </p>

          </div>

        </div>

        {/* Program Incharge Card */}
        <div className="flex justify-center mb-24">

          <div
            className="
            bg-blue-100
            border
            border-blue-200
            rounded-3xl
            shadow-lg
            p-8
            w-[340px]
            text-center
            transition-all
            duration-500
            hover:-translate-y-3
            hover:shadow-2xl
            hover:bg-blue-50
            cursor-pointer
            "
          >

            <img
              src={piImg}
              alt="Program Incharge"
              className="
              w-28
              h-28
              rounded-full
              mx-auto
              object-cover
              border-4
              border-blue-600
              transition-all
              duration-500
              hover:scale-110
              "
            />

            <h3 className="mt-6 text-2xl font-bold text-slate-800">
              Prof. Dr. Baisakhi Das
            </h3>

            <p className="mt-4 text-gray-700 text-lg">
              Program Incharge
            </p>

          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-8">

          <button
            className="
            px-10
            py-4
            bg-blue-600
            text-white
            font-bold
            text-lg
            rounded-lg
            shadow-md
            hover:bg-blue-700
            hover:shadow-xl
            transition-all
            duration-300
            "
          >
            IT MENTORS LIST
          </button>

          <button
            className="
            px-10
            py-4
            bg-white
            border-2
            border-blue-600
            text-blue-600
            font-bold
            text-lg
            rounded-lg
            hover:bg-blue-600
            hover:text-white
            hover:shadow-xl
            transition-all
            duration-300
            "
          >
            IT FACULTY LIST
          </button>

          <button
            className="
            px-10
            py-4
            bg-white
            border-2
            border-blue-600
            text-blue-600
            font-bold
            text-lg
            rounded-lg
            hover:bg-blue-600
            hover:text-white
            hover:shadow-xl
            transition-all
            duration-300
            "
          >
            CLASS TEACHERS LIST
          </button>

        </div>

      </div>

    </section>
  );
}