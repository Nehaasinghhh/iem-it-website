import TopBar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import HodMessage from "../components/HodMessage";
import DepartmentCards from "../components/DepartmentCards";
import NaacAccreditation from "../components/NaacAccreditation";
import Hero from "../components/Hero";
import NewsHub from "../components/NewsHub";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    <TopBar/>
      <Navbar />
     <Hero/>
     <Stats/>
       <NewsHub/>
      <HodMessage/>
      <DepartmentCards/>
      <NaacAccreditation/>
      <Footer />
    </>
  );
}