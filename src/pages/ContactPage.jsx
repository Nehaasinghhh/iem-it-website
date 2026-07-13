import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactPage(){

return(

<>

<Navbar/>

<section className="bg-gradient-to-r from-blue-900 to-blue-700 py-24 text-white">

<div className="container mx-auto text-center">

<h1 className="text-5xl font-bold">

Contact Us

</h1>

<p className="mt-6">

Reach the Department of Information Technology.

</p>

</div>

</section>

<Contact/>

<Footer/>

</>

)

}