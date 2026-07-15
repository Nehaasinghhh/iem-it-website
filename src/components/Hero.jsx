import heroImage from "../assets/images/iem_.jpg";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B3D91]/75"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full flex flex-col lg:flex-row items-center justify-between min-h-screen">

        {/* Left Content */}
        <div className="max-w-3xl text-white text-center lg:text-left">

          <span
            className="
              inline-block
              px-5
              py-2
              rounded-full
              border
              border-white/30
              text-sm
              font-semibold
              tracking-widest
              mb-6
            "
          >
            DEPARTMENT OF IT | IEM KOLKATA
          </span>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-extrabold
              leading-tight
              mb-6
            "
          >
            Department of
            <br />
            Information Technology
          </h1>

          <p
            className="
              text-lg
              md:text-2xl
              text-white/90
              max-w-2xl
              mb-10
            "
          >
            Shaping the engineers of tomorrow through
            research, innovation and excellence.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button
              className="
                bg-[#0B3D91]
                hover:bg-white
                hover:text-[#0B3D91]
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                transition-all
                duration-300
              "
            >
              Explore Programs
            </button>

            <button
              className="
                border-2
                border-white
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                hover:bg-white
                hover:text-[#0B3D91]
                transition-all
                duration-300
              "
            >
              View Research
            </button>
          </div>
        </div>

        {/* Right Stats Card */}
        <div
          className="
            bg-white
            rounded-3xl
            shadow-2xl
            p-8
            w-80
            mt-12
            lg:mt-0
            text-center
          "
        >
          <h2 className="text-6xl font-bold text-[#0B3D91]">
            915
          </h2>

          <p className="uppercase text-gray-500 mt-3 text-sm">
            Students Enrolled
          </p>

          <hr className="my-6 border-gray-300" />

          <h2 className="text-5xl font-bold text-[#0B3D91]">
            180+
          </h2>

          <p className="uppercase text-gray-500 mt-3 text-sm">
            Research Publications
          </p>
        </div>
      </div>
    </section>
  );
}