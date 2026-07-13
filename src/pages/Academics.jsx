import Navbar from "../components/Navbar";
import Programs from "../components/Programs";
import Footer from "../components/Footer";

export default function Academics() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-24 text-white">

        <div className="container mx-auto text-center">

          <h1 className="text-5xl font-bold">

            Academics

          </h1>

          <p className="mt-5 text-lg">
            Explore the academic programmes offered by the Department.
          </p>

        </div>

      </section>

      <Programs />

      <Footer />

    </>
  );
}