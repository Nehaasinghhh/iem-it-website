import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            About Department
          </h1>
        </div>
      </section>

      <About />

      <Footer />
    </>
  );
}