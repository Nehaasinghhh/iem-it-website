import Navbar from "../components/Navbar";
import FacultyPreview from "../components/FacultyPreview";
import Footer from "../components/Footer";

export default function Faculty() {

return(

<>

<Navbar/>

<section className="bg-gradient-to-r from-blue-900 to-blue-700 py-24 text-white">

<div className="container mx-auto text-center">

<h1 className="text-5xl font-bold">

Faculty Members

</h1>

<p className="mt-6">

Meet our experienced teaching professionals.

</p>

</div>

</section>

<FacultyPreview/>

<Footer/>

</>

)

}