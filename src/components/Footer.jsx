import {
  MapPin,
  Send,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white">

      {/* Newsletter Section */}
      <div className="bg-blue-700 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

          <div>
            <h2 className="text-3xl font-semibold text-white">
              Newsletter - Stay tuned and get the latest updates
            </h2>

            <p className="text-white mt-2">
              Stay updated with the latest trends and innovations in technology.
            </p>
          </div>


          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-72 px-5 py-3 rounded-md outline-none text-gray-700"
            />

            <button className="bg-white p-3 rounded-md text-blue-700 hover:bg-blue-100 transition">
              <Send size={22} />
            </button>
          </div>

        </div>
      </div>



      {/* Main Footer */}
      <div className="bg-gray-100 py-12 px-6">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">


          {/* Department Info */}
          <div>

            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
              Department of,<br />
              Computer Science<br />
              Engineering
            </h3>


            <p className="text-blue-600 mt-2">
              Institute of Engineering & Management, Kolkata
            </p>


            <p className="text-gray-500 mt-8 leading-relaxed">
              Dive into a world of cutting-edge technology, where innovation
              meets knowledge!
            </p>


            {/* Social Icons */}
            <div className="flex gap-4 mt-8">

              <div className="bg-blue-700 text-white p-3 rounded-full hover:scale-110 transition cursor-pointer">
                <FaFacebook size={20}/>
              </div>

              <div className="bg-blue-700 text-white p-3 rounded-full hover:scale-110 transition cursor-pointer">
                <FaInstagram size={20}/>
              </div>

              <div className="bg-blue-700 text-white p-3 rounded-full hover:scale-110 transition cursor-pointer">
                <FaYoutube size={20}/>
              </div>

            </div>

          </div>





          {/* Explore */}
          <div>

            <h3 className="text-2xl text-gray-900 mb-6">
              Explore
            </h3>


            <ul className="space-y-5 text-blue-600">

              <li>→ About Us</li>
              <li>→ Academics</li>
              <li>→ Students</li>
              <li>→ Faculty</li>
              <li>→ Innovation & Initiatives</li>

            </ul>

          </div>





          {/* Quick Links */}
          <div>

            <h3 className="text-2xl text-gray-900 mb-6">
              Quick Links
            </h3>


            <ul className="space-y-5 text-blue-600">

              <li>→ IEM Website</li>
              <li>→ IEM Learning</li>
              <li>→ IEM-IETE Student's Forum</li>

            </ul>

          </div>






          {/* Contact */}
          <div>

            <h3 className="text-2xl text-gray-900 mb-6">
              Have Questions?
            </h3>


            <div className="flex gap-4 text-blue-600">

              <MapPin size={35}/>

              <p className="text-gray-600">
                Gurukul, Y-12, Block -EP, Sector-V,
                Salt Lake Electronics Complex Kolkata –
                700 091, West Bengal, India.
              </p>

            </div>




            <div className="flex gap-5 mt-10 text-blue-600">

              <Send size={25}/>

              <p className="text-gray-600">
                admissions@iem.edu.in
              </p>

            </div>


          </div>


        </div>

      </div>






      {/* Bottom Copyright */}
      <div className="bg-blue-900 py-5 text-center text-white">

        © 2025 IEM CSE Department | Innovating technology, transforming futures.

      </div>






      {/* Scroll Top Button */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >

        <ArrowUp size={28}/>

      </button>


    </footer>
  );
}