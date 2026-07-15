import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import React from "react";

const publications = [
  {
    sl: 1,
    topic: "The Visual Assistant - Image-to-Speech Generator",
    authors: "Amrit Raj; Sanchita Ghosh; Bharat Gupta",
    conference:
      "7th International Conference for Convergence in Technology (I2CT), Pune, Maharashtra",
  },
  {
    sl: 2,
    topic: "A Novel Handoff Algorithm for 5G",
    authors: "Prithwijit Mukherjee, Sanchita Ghosh, Anisha Halder Roy",
    conference:
      "International Conference on Computers and Devices for Communication",
  },
  {
    sl: 3,
    topic: "Predictive Analysis for Financial Forecasting - Past and Present",
    authors: "Partha Sarathi Paul, Dr. Rajendrani Mukherjee",
    conference: "-",
  },
  {
    sl: 4,
    topic: "Secure Blockchain: Assessing Specific Security Threats",
    authors: "Ananya, G., Priyanjali, D., Baisakhi, D., Abhishek, D.",
    conference: "Lecture Notes on Data Engineering and Communications Technologies",
  },
  {
    sl: 5,
    topic: "A Unique Approach for Detection and Removal of Key Loggers",
    authors: "Kedia, M.K., Das, B.",
    conference: "Lecture Notes on Data Engineering and Communications Technologies",
  },
  {
    sl: 6,
    topic:
      "Deep Learning Approaches to Improve Effectiveness and Efficiency for Time Series Prediction",
    authors: "Ali, D., Tiwari, N., Das, B., Bhanja, S., Das, A.",
    conference: "Lecture Notes on Data Engineering and Communications Technologies",
  },
  {
    sl: 7,
    topic: "IoT-Blockchain Integration: The Way Ahead",
    authors: "Ray, P.P., Bhargavi, Das, B., Das, A.",
    conference: "Lecture Notes on Data Engineering and Communications Technologies",
  },
  {
    sl: 8,
    topic:
      "An Analysis of Energy Consumption of Blockchain Mining and Techniques to Overcome It",
    authors: "Eshani, G., Rajdeep, D., Shubhankar, R., Baisakhi, D.",
    conference: "Lecture Notes on Data Engineering and Communications Technologies",
  },
  {
    sl: 9,
    topic: "A Critical Review on Quantum Cryptography",
    authors: "P. Roy, S. Sahoo, A.K. Mandal, I. Basu",
    conference: "Journal of Quantum Computing",
  },
  {
    sl: 10,
    topic: "Offline Signature Verification System using Ensemble Learning",
    authors:
      "Avijit Bose, Aniket Paul, Debanjan Bhattacharya, Dipannita Ghosh Sneha, Satyajit Chakrabarti",
    conference: "AdComSys 2024",
  },
  {
    sl: 11,
    topic: "A Food Supply Chain for Internet of Health Things using Blockchain",
    authors: "Puja Das, Amrita Haldar, Moutushi Singh, and Deepsubhra Guha Roy",
    conference: "ICNSBT 2023",
  },
  {
    sl: 12,
    topic:
      "A Blockchain-Based Secure Approach to Access Genomic Data using Smart Contracts",
    authors: "Puja Das, Moutushi Singh, Kajari Sur",
    conference: "DoSIER 2023",
  },
  {
    sl: 13,
    topic:
      "An Innovative Deep-Learning Approach for Classifying Ayurvedic Medicinal Plants",
    authors: "Puja Das, Rakhi Bharadwaj, Moutushi Singh",
    conference: "International Conference on Science of Rudraksh-2023",
  },
  {
    sl: 14,
    topic: "Early Prediction of Cataract using Convolutional Neural Network",
    authors: "Shuvam Chakraborty, Susovan Jana",
    conference: "IEEE Devices for Integrated Circuit (DevIC), 2023",
  },
  {
    sl: 15,
    topic: "An Integrated Framework for Smart Monitoring of Orange Orchard",
    authors: "Shuvam Chakraborty, Susovan Jana",
    conference:
      "7th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech) - IEMENTech2023",
  },
  {
    sl: 16,
    topic:
      "A Secure Text Steganography Using Randomized Mathematical Functions and LSB",
    authors: "Sakyojit Banerjee, Samanawaya Datta, Dipanjan Ghosh, Susovan Jana",
    conference:
      "7th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech) - IEMENTech2024",
  },
  {
    sl: 17,
    topic: "The Future of IoT and IoT Authentication",
    authors: "Kajari Sur, Pallab Maity, Indrani Mukhopadhyay",
    conference: "IEM ECON 2023",
  },
  {
    sl: 18,
    topic:
      "Pose, Expression, Illumination Invariant 3D Face Recognition based on Transfer Learning",
    authors:
      "Koushik Dutta, Vishesh Mohanty, Animesh Dutta, Aritra Biswas, Rohan Sutradhar, Prathama Sarkar, Ondrej Krejcar, and Debotosh Bhattacharjee",
    conference: "2nd International Conference on Data, Electronics and Computing (ICDEC-2023)",
  },
  {
    sl: 19,
    topic:
      "Prediction of S-Palmitoylation Sites in the Male/Female Mouse using Protein Language Model",
    authors:
      "Tapas Chakroborty, Anirban Das, Soumyendu Sekhar Bandyopadhyay, Anup Kumar Halder, Jakub Wlodarczyk, and Subhadip Basu",
    conference: "4th International Conference on Frontiers in Computing and Systems (COMSYS-2023)",
  },
];

const journalPublications = [
  {
    sl: 1,
    topic: "Robotics in Medical Domain: The Future of Surgery, Healthcare and Imaging",
    authors: "Anisha Halder Roy, Sanchita Ghosh, Bharat Gupta",
    journal: "Wireless Personal Communications",
    volume: "132(4)",
    pages: "2885-2903",
    indexing: "SCI, SCOPUS",
  },
  {
    sl: 2,
    topic:
      "Exploring Appropriate ERP Framework towards Indian Small and Medium Enterprises using Decision Tree",
    authors: "Dr. Sanchita Ghosh, Avik Basu",
    journal: "International Journal of Business Intelligence and Data Mining",
    volume: "21",
    pages: "4",
    indexing: "Scopus",
  },
  {
    sl: 3,
    topic:
      "An Integrated Framework for Quality Evaluation of Fruits and Vegetable Store Located in the Supermarket Under Utopian Environment",
    authors: "Susovan Jana, Bijan Sarkar, Ranjan Parekh, Surajit Nath",
    journal:
      "International Journal of Industrial Engineering: Theory, Applications, and Practice",
    volume: "30",
    pages: "51-66",
    indexing: "SCIE, SCOPUS",
  },
  {
    sl: 4,
    topic:
      "Efficient Data Mining Model for Question Retrieval and Question Analytics using Semantic Web Framework in Smart E-Learning Environment",
    authors: "Subhabrata Sengupta, Anish Banerjee, Satyajit Chakrabarti",
    journal: "International Journal of Emerging Technologies in Learning",
    volume: "17",
    pages: "4-17",
    indexing: "Scopus",
  },
  {
    sl: 5,
    topic: "Relevant Influence of Semantic Web Framework on Smart E-Learning Environment",
    authors: "Subhabrata Sengupta, Anish Banerjee, Satyajit Chakrabarti",
    journal: "International Journal of Emerging Technologies in Learning",
    volume: "Vol. 16 Issue 17",
    pages: "p177-190",
    indexing: "-",
  },
  {
    sl: 6,
    topic:
      "Accuracy Enhancement of Epileptic Seizure Detection: A Deep Learning Approach with Hardware Realization of STFT",
    authors: "Sai Manohar Beeraka, Abhash Kumar, Mustafa Sameer, Sanchita Ghosh & Bharat Gupta",
    journal: "Circuits, Systems, and Signal Processing",
    volume: "41",
    pages: "461–484",
    indexing: "SCI",
  },
  {
    sl: 7,
    topic: "An Innovative Approach of Selecting Cloud Provider through Service Level Agreements",
    authors: "Aveek Basu, Dr. Sanchita Ghosh, Dr. Sraboni Dutta",
    journal: "International Journal of Business Information Systems",
    volume: "-",
    pages: "-",
    indexing: "Scopus",
  },
  {
    sl: 8,
    topic:
      "Exploring Appropriate ERP Framework towards Indian Small and Medium Enterprises using Decision Tree",
    authors: "Aveek Basu, Dr. Sanchita Ghosh, Dr. Sraboni Dutta",
    journal: "International Journal of Business Intelligence and Data Mining",
    volume: "-",
    pages: "-",
    indexing: "Scopus",
  },
  {
    sl: 9,
    topic: "Analysing the Cloud Efficacy by Fuzzy Logic",
    authors: "Aveek Basu, Dr. Sanchita Ghosh, Dr. Sraboni Dutta",
    journal: "International Journal of Business Information Systems",
    volume: "-",
    pages: "-",
    indexing: "Scopus",
  },
  {
    sl: 10,
    topic:
      "MLWR-2PAKA: A Hybrid Module LearningWithRounding-Based Authenticated Key Agreement Protocol for Two-Party Communication",
    authors: "Swagatam Basu, Kübra Seyhan, SK Hafizul Islam, Sedat Akleylek",
    journal: "IEEE Systems Journal (Early Access)",
    volume: "-",
    pages: "6093-6103",
    indexing: "IEEE, SCOPUS",
  },
  {
    sl: 11,
    topic:
      "Collaborative Data Gathering and Recharging using Multiple Mobile Vehicles in Wireless Rechargeable Sensor Network",
    authors: "Rupayan Das, Dinesh Dash",
    journal: "International Journal of Communication Systems",
    volume: "-",
    pages: "1-26",
    indexing: "SCIE, SCOPUS",
  },
  {
    sl: 12,
    topic:
      "Integral Cryptanalysis: A New Key Determination Technique for 3-phase Kuznyechik Encryption",
    authors: "Rupayan Das et al.",
    journal: "Engineering Research Express, IOP Science",
    volume: "5",
    pages: "1-11",
    indexing: "ESCI, SCOPUS",
  },
  {
    sl: 13,
    topic:
      "Joint On-demand Data Gathering and Recharging by Multiple Mobile Vehicles in Delay Sensitive WRSN using Variable Length GA",
    authors: "Rupayan Das, Dinesh Dash",
    journal: "Computer Communication, Elsevier",
    volume: "204",
    pages: "130-146",
    indexing: "SCIE, SCOPUS",
  },
  {
    sl: 14,
    topic:
      "Chromatographic Method Development for Simultaneous Determination of Serotonin, Melatonin, and L-tryptophan: Mass Transfer Modeling, Chromatographic Separation Factors, and Method Prediction by Artificial Neural Network",
    authors: "Dipshikha Tamili, Susovan Jana, Paramita Bhattacharjee",
    journal: "Journal of Chemometrics",
    volume: "-",
    pages: "-",
    indexing: "SCI",
  },
  {
    sl: 15,
    topic: "Exploring PBCA Rules for One and Two Fixed Points",
    authors:
      "Baisakhi Das, Mamata Dalui, Mousumi Saha, Kasturi Ghosh, Nilanjana Das and Biplab K Sikdar",
    journal: "Journal of Complex Systems",
    volume: "-",
    pages: "-",
    indexing: "ESCI, SCOPUS",
  },
  {
    sl: 16,
    topic:
      "SSKA: Secure Symmetric Encryption Exploiting Kuznyechik Algorithm for Trustworthy Communication",
    authors:
      "Rupayan Das, Angshuman Khan, Rajeev Arya, Boykuziev Ilkhom, Abdurakhimov Bakhtiyor, Nuriddin Safoyev and Zarif Khudoykulov",
    journal: "International Journal of System Assurance Engineering and Management, Springer",
    volume: "-",
    pages: "-",
    indexing: "ESCI, SCOPUS",
  },
  {
    sl: 17,
    topic: "A Proximal Policy Optimization with Curiosity Algorithm for Virtual Drone Navigation",
    authors: "Rupayan Das, Angshuman Khan, Gunjan Paul",
    journal: "Engineering Research Express, IOP Science",
    volume: "-",
    pages: "-",
    indexing: "Scopus",
  },
  {
    sl: 18,
    topic:
      "Block-A-City: An Agricultural Application Framework using Blockchain for Next Generation Smart Cities",
    authors: "Puja Das, Moutushi Singh, Dimitrios A. Karras and Deepsubhra Guha Roy",
    journal: "IETE Journal of Research",
    volume: "-",
    pages: "-",
    indexing: "Scopus",
  },
  {
    sl: 19,
    topic: "Blockchain for Healthcare using Deep Learning",
    authors: "Puja Das, Moutushi Singh",
    journal: "Journal of Multimedia Information System",
    volume: "17(2)",
    pages: "121-130",
    indexing: "SCI",
  },
  {
    sl: 20,
    topic:
      "Modelling of InAs Nanowire and MOSFET under Phonon Emission and Absorption by using NEGF Formalism",
    authors: "Kaushik Mazumdar, Subindu Saha, Sk Rejuan Ali",
    journal: "Superlattices and Microstructures",
    volume: "150",
    pages: "106758",
    indexing: "-",
  },
  {
    sl: 21,
    topic: "FuzzyPPI: Large-Scale Interaction of Human Proteome at Fuzzy Semantic Space",
    authors: "Anup Kumar Halder, Soumyendu Sekhar Bandyopadhyay, Witold Jedrzejewski, Subhadip Basu, Jacek Sroka",
    journal: "IEEE Transactions on Big Data (IF: 7.2)",
    volume: "-",
    pages: "1-12",
    indexing: "-",
  },
];

// NOTE: no book-chapter data was provided in the original file (it referenced
// an undefined `bookChapters` array). Add real entries here in the same shape:
// { sl, chapter, authors, book, publisher }
const bookChapters = [];

export default function FacultyPublication() {
  return (
    <>
      <Navbar />
      <div>
        <section className="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Faculty Publications
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mt-4 rounded-full"></div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            {/* Conference Publications */}
            <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-5">
                <h2 className="text-center text-2xl md:text-3xl font-bold text-white">
                  Conference Publications
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-700 text-white">
                      <th className="px-4 py-4 border">Sl. No.</th>
                      <th className="px-4 py-4 border">Topic of Publication</th>
                      <th className="px-4 py-4 border">Authors</th>
                      <th className="px-4 py-4 border">Conference Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {publications.map((item, index) => (
                      <tr
                        key={item.sl}
                        className={`transition-all duration-300 hover:bg-blue-100 ${
                          index % 2 === 0 ? "bg-white" : "bg-blue-50"
                        }`}
                      >
                        <td className="px-4 py-4 border text-center">{item.sl}</td>
                        <td className="px-4 py-4 border">{item.topic}</td>
                        <td className="px-4 py-4 border">{item.authors}</td>
                        <td className="px-4 py-4 border">{item.conference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Journal Publications */}
            <div className="mt-20 bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-5">
                <h2 className="text-center text-2xl md:text-3xl font-bold text-white">
                  Journal Publications
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-700 text-white">
                      <th className="px-4 py-4 border">Sl. No.</th>
                      <th className="px-4 py-4 border">Topic of Publication</th>
                      <th className="px-4 py-4 border">Authors</th>
                      <th className="px-4 py-4 border">Journal</th>
                      <th className="px-4 py-4 border">Volume</th>
                      <th className="px-4 py-4 border">Pages</th>
                      <th className="px-4 py-4 border">Indexing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {journalPublications.map((item, index) => (
                      <tr
                        key={item.sl}
                        className={`transition-all duration-300 hover:bg-blue-100 ${
                          index % 2 === 0 ? "bg-white" : "bg-blue-50"
                        }`}
                      >
                        <td className="px-4 py-4 border text-center">{item.sl}</td>
                        <td className="px-4 py-4 border">{item.topic}</td>
                        <td className="px-4 py-4 border">{item.authors}</td>
                        <td className="px-4 py-4 border">{item.journal}</td>
                        <td className="px-4 py-4 border text-center">{item.volume}</td>
                        <td className="px-4 py-4 border text-center">{item.pages}</td>
                        <td className="px-4 py-4 border text-center">{item.indexing}</td>
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