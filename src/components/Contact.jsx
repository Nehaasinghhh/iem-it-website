import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-white">

      <div className="container mx-auto px-6">

        <div className="text-center">

          <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full font-semibold">
            CONTACT
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Get In Touch
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          <div className="bg-slate-50 rounded-3xl p-10">

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5">

                <Phone className="text-blue-900" />

                <div>

                  <h4 className="font-semibold">
                    Phone
                  </h4>

                  <p>+91 XXXXX XXXXX</p>

                </div>

              </div>

              <div className="flex gap-5">

                <Mail className="text-blue-900" />

                <div>

                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <p>info@iem.edu.in</p>

                </div>

              </div>

              <div className="flex gap-5">

                <MapPin className="text-blue-900" />

                <div>

                  <h4 className="font-semibold">
                    Address
                  </h4>

                  <p>
                    Institute of Engineering & Management,
                    Salt Lake, Kolkata
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div className="bg-slate-50 rounded-3xl p-10">

            <h3 className="text-3xl font-bold mb-8">
              Send Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg p-4"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg p-4"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg p-4"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full border rounded-lg p-4"
              />

              <button className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-700">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}