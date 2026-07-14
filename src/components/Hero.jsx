import heroImage from "../assets/images/building2.png";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[480px]
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >

      <div className="absolute inset-0 bg-[#0B3D91]/70"></div>

      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex justify-between items-center">
    
        <div className="max-w-2xl text-white">
          <p className="uppercase font-semibold mb-4">
            Department of IT | IEM Kolkata
          </p>

          <h1 className="text-3xl font-bold leading-tight">
            Department of
            Information Technology
          </h1>

          <p className="mt-5 text-xl text-white/90">
            Shaping the engineers of tomorrow through
            research, innovation, and excellence.
          </p>

          <div className="flex gap-4 mt-8">
            <button
              className="
                bg-[#0B3D91]
                hover:bg-white
                hover:text-[#0B3D91]
                px-8
                py-3
                rounded-lg
                font-semibold
                transition
              "
            >
              Explore Programs
            </button>

            <button
              className="
                border-2
                border-white
                px-8
                py-3
                rounded-lg
                hover:bg-white
                hover:text-[#0B3D91]
                transition
              "
            >
              View Research
            </button>
          </div>
        </div>

        
        <div
          className="
            bg-white
            w-60
            h-48
            rounded-2xl
            shadow-xl
            p-5
            text-center
          "
        >
          <h2 className="text-5xl font-bold text-[#0B3D91]">
            915
          </h2>

          <p className="uppercase text-gray-500 mt-2 text-sm">
            Students Enrolled
          </p>

          <hr className="my-3" />

          <h2 className="text-4xl font-bold text-[#0B3D91]">
            180+
          </h2>

          <p className="uppercase text-gray-500 mt-2 text-sm">
            Research Publications
          </p>
        </div>
      </div>
    </section>
  );
} 