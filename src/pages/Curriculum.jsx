import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Curriculum() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-blue-50 py-20">
        <div className="container mx-auto px-6">

          <div className="flex justify-center gap-8 flex-wrap">

            <button
              className="
              px-10 py-5
              rounded-xl
              bg-gradient-to-r
              from-blue-700
              to-cyan-500
              text-white
              font-bold
              tracking-wide
              shadow-lg
              hover:scale-105
              transition
              "
            >
              4TH SEM
            </button>

            <button
              className="
              px-10 py-5
              rounded-xl
              bg-gradient-to-r
              from-blue-700
              to-cyan-500
              text-white
              font-bold
              tracking-wide
              shadow-lg
              hover:scale-105
              transition
              "
            >
              6TH SEM
            </button>

            <button
              className="
              px-10 py-5
              rounded-xl
              bg-gradient-to-r
              from-blue-700
              to-cyan-500
              text-white
              font-bold
              tracking-wide
              shadow-lg
              hover:scale-105
              transition
              "
            >
              8TH SEM
            </button>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}