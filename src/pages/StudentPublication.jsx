import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import React from "react";

const conferencePublications = [
  {
    sl: 1,
    topic: "Early Prediction of Cataract using Convolutional Neural Network",
    authors: "Shuvam Chakraborty, Susovan Jana",
    conference: "DevIC 2023",
  },
  {
    sl: 2,
    topic: "An Integrated Framework for Smart Monitoring of Orange Orchard",
    authors: "Shuvam Chakraborty, Susovan Jana",
    conference: "IEMENTech2023",
  },
  {
    sl: 3,
    topic:
      "A Secure Text Steganography Using Randomized Mathematical Functions and LSB",
    authors: "Sakyojit Banerjee, Samanawaya Datta, Dipanjan Ghosh, Susovan Jana",
    conference: "IEMENTech2023",
  },
  {
    sl: 4,
    topic:
      "A Secure Softwarized Blockchain-based Federated Health Alliance for Next Generation IoT Networks",
    authors: "Puja Das, Moutushi Singh and Deepsubhra Guha Roy",
    conference: "IEEE Globecom Workshops (GC Wkshps)",
  },
  {
    sl: 5,
    topic: "A Food Supply Chain for Internet of Health Things using Blockchain",
    authors: "Puja Das, Amrita Haldar, Moutushi Singh, and Deepsubhra Guha Roy",
    conference: "ICNSBT 2023",
  },
  {
    sl: 6,
    topic:
      "A blockchain-based secure approach to access genomic data using smart contracts",
    authors: "Puja Das, Moutushi Singh, Kajari Sur",
    conference: "DoSIER 2023",
  },
  {
    sl: 7,
    topic:
      "An Innovative Deep-Learning approach for classifying Ayurvedic Medicinal",
    authors: "Puja Das, Rakhi Bharadwaj, Moutushi Singh",
    conference: "International Conference on Science of Rudraksh-2023",
  },
  {
    sl: 8,
    topic: "The Visual Assistant - Image-to-Speech Generator",
    authors: "Amrit Raj, Sanchita Ghosh, Bharat Gupta",
    conference:
      "2023 IEEE 3rd International Conference on Sustainable Energy and Future Electric Transportation (SEFET)",
  },
];

const journalPublications = [
  {
    sl: 1,
    topic:
      "Relevant Influence of Semantic Web Framework on Smart E-Learning Environment",
    authors: "Subhabrata Sengupta, Anish Banerjee, Satyajit Chakrabarti",
    journal: "International Journal of Emerging Technologies in Learning",
    volume: "Vol. 16 Issue 17",
    pages: "177-190",
  },
  {
    sl: 2,
    topic:
      "Data Mining Model for Question Retrieval and Question Analytics using Semantic Web Framework in Smart E-Learning Environment",
    authors: "Anish Banerjee, Subhabrata Sengupta",
    journal: "International Journal of Emerging Technologies in Learning",
    volume: "17",
    pages: "4 - 17",
  },
];

export default function StudentPublications() {
  return (
    <>
      <Navbar />

      <div>
        <section className="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Student Publications
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mt-4 rounded-full"></div>
          </div>
        </section>

        {/* Conference Publications */}
        <section className="py-16">
          <h2 className="text-center text-5xl font-semibold mb-10">
            Conference Publications
          </h2>

          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="bg-blue-600 text-white text-center py-4 text-2xl font-semibold">
                Students: Conference Publications
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-500 text-white">
                      <th className="border px-4 py-3">Sl. No.</th>
                      <th className="border px-4 py-3">Topic of Publication</th>
                      <th className="border px-4 py-3">Authors</th>
                      <th className="border px-4 py-3">Conference Name</th>
                    </tr>
                  </thead>

                  <tbody>
                    {conferencePublications.map((item, index) => (
                      <tr
                        key={item.sl}
                        className={index % 2 === 0 ? "bg-blue-100" : "bg-white"}
                      >
                        <td className="border px-4 py-4 text-center">{item.sl}</td>
                        <td className="border px-4 py-4 text-center">{item.topic}</td>
                        <td className="border px-4 py-4 text-center">{item.authors}</td>
                        <td className="border px-4 py-4 text-center">{item.conference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Journal Publications */}
        <section className="py-16">
          <h2 className="text-center text-5xl font-semibold mb-10">
            Journal Publications
          </h2>

          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="bg-blue-600 text-white text-center py-4 text-2xl font-semibold">
                Students: Journal Publications
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-500 text-white">
                      <th className="border px-4 py-3">Sl. No.</th>
                      <th className="border px-4 py-3">Topic of Publication</th>
                      <th className="border px-4 py-3">Authors</th>
                      <th className="border px-4 py-3">Journal Name</th>
                      <th className="border px-4 py-3">Volume</th>
                      <th className="border px-4 py-3">Pages</th>
                    </tr>
                  </thead>

                  <tbody>
                    {journalPublications.map((item, index) => (
                      <tr
                        key={item.sl}
                        className={index % 2 === 0 ? "bg-blue-100" : "bg-white"}
                      >
                        <td className="border px-4 py-4 text-center">{item.sl}</td>
                        <td className="border px-4 py-4 text-center">{item.topic}</td>
                        <td className="border px-4 py-4 text-center">{item.authors}</td>
                        <td className="border px-4 py-4 text-center">{item.journal}</td>
                        <td className="border px-4 py-4 text-center">{item.volume}</td>
                        <td className="border px-4 py-4 text-center">{item.pages}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}