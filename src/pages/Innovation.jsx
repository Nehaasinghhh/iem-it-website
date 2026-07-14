import Navbar from "../components/Navbar";
import InnovationCards from "../components/InnovationCards";
import Footer from "../components/Footer";

export default function Innovation() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-24 text-white">
        <div className="container mx-auto text-center">

          <h1 className="text-5xl font-bold">
            Innovation & Initiatives
          </h1>

          <p className="mt-6 text-lg">
            Unleashing creativity and transforming ideas into reality through
            research, innovation and academic excellence.
          </p>

        </div>
      </section>

      <InnovationCards />

      <Footer />
    </>
  );
}