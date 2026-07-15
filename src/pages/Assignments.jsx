import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useState } from "react";
import {
  Folder,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  BookOpen,
  FileText,
} from "lucide-react";

export default function Assignments() {
  const [openStudy, setOpenStudy] = useState(null);
  const [openLab, setOpenLab] = useState(null);

  const studyMaterials = [
    {
      subject: "AIML",
      files: [
        {
          title: "AI Notes",
          link: "https://your-link-here.com",
        },
        {
          title: "Russell & Norvig AI",
          link: "https://aima.cs.berkeley.edu/",
        },
        {
          title: "Knowledge Representation",
          link: "https://your-link-here.com",
        },
        {
          title: "Machine Learning - Tom Mitchell",
          link: "https://www.cs.cmu.edu/~tom/mlbook.html",
        },
        {
          title: "ML3A",
          link: "https://your-link-here.com",
          
        },
        {
          title: "PCA",
          link: "https://your-link-here.com",
        },
        {
          title: "SVD",
          link: "https://your-link-here.com",
        },
      ],
    },

    {
      subject: "AP(OOPS)",
      files: [
         {
      title: "Java Fundamentals ",
      link: "YOUR_PDF_LINK",
    },
    {
      title: "Polymorphism in JAVA",
      link: "YOUR_LINK",
    },
    {
      title: "Exception Handling in JAVA",
      link: "YOUR_LINK",
    },
    {
      title: "User Interface Design (Applet & Swing)",
      link: "YOUR_LINK",
    },
    {
      title: "Java Class Notes",
      link: "YOUR_LINK",
    },
    {
      title: "OOP Module 1",
      link: "YOUR_LINK",
    },
    {
      title: "OOP Module 2",
      link: "YOUR_LINK",
    },
    {
      title: "OOP Module 3",
      link: "YOUR_LINK",
    },
    {
      title: "OOP Module 4",
      link: "YOUR_LINK",
    },
    {
      title: "OOP Module 5",
      link: "YOUR_LINK",
    },
      ],
    },

    {
      subject: "COA",
      files: [
        {
          title: "COA Division Algorithm",
          link: "https://your-link-here.com",
        },
         {
          title: "COA Adder",
          link: "https://your-link-here.com",
        },
         {
          title: "COA Module2",
          link: "https://your-link-here.com",
        },
         {
          title: "COA Multiplication",
          link: "https://your-link-here.com",
        },
      ],
    },

    {
      subject: "DISCRETE MATHEMATICS",
      files: [
        {
      title: "Assignment on Propositional Logic",
      link: "YOUR_LINK",
    },
    {
      title: "Assignment on Propositional Logic 2",
      link: "YOUR_LINK",
    },
    {
      title: "Boolean Algebra - Assignment",
      link: "YOUR_LINK",
    },
    {
      title: "CNF & DNF - Propositional Logic",
      link: "YOUR_LINK",
    },
    {
      title: "Detailed Proof Techniques in Discrete Mathematics",
      link: "YOUR_LINK",
    },
    {
      title: "Notes on Boolean Algebra",
      link: "YOUR_LINK",
    },
    {
      title: "Problems on Pigeonhole Principle",
      link: "YOUR_LINK",
    },
    {
      title: "Solution Problems on Pigeonhole Principle",
      link: "YOUR_LINK",
    },
    {
      title: "Syntax and Semantics",
      link: "YOUR_LINK",
    },
    {
      title: "Types of Proofs - Predicate Logic",
      link: "YOUR_LINK",
    },
      ],
    },

    {
      subject: "ESS",
      files: [
        {
          title: "ESS Module 1",
          link: "https://your-link-here.com",
        },
        {
          title: "ESS Module 2",
          link: "https://your-link-here.com",
        },

      ],
    },
  ];

  const labAssignments = [
    {
      subject: "AIML LAB",
      files: [
        
        {
      title: "Decision Tree Algorithm",
      link: "YOUR_LINK",
    },
    {
      title: "K-Nearest Neighbors (KNN)",
      link: "YOUR_LINK",
    },
    {
      title: "Search - Water Jug Problem",
      link: "YOUR_LINK",
    },
    {
      title: "The A* Algorithm",
      link: "YOUR_LINK",
    },
      ],
    },

    {
      subject: "AP(OOPS) LAB",
      files: [
        {
      title: "Assignment 1",
      link: "YOUR_LINK",
    },
    {
      title: "Assignment 2",
      link: "YOUR_LINK",
    },
    {
      title: "Assignment 3",
      link: "YOUR_LINK",
    },
    {
      title: "Assignment 4",
      link: "YOUR_LINK",
    },
    {
      title: "Assignment 5",
      link: "YOUR_LINK",
    },
    {
      title: "Assignment 6",
      link: "YOUR_LINK",
    },
    {
      title: "Assignment 7",
      link: "YOUR_LINK",
    },
    {
      title: "Git Guide",
      link: "YOUR_LINK",
    },
      ],
    },

    {
      subject: "DAA LAB",
      files: [
        {
      title: "Assignment 1 - Graph Traversal",
      link: "YOUR_LINK",
    },
    {
      title: "Assignment 2 - Spanning Tree on Weighted Graph",
      link: "YOUR_LINK",
    },
    {
      title: "Assignment 3 - Binary Search Variations",
      link: "YOUR_LINK",
    },
    {
      title: "Assignment 4 - Sorting Variations",
      link: "YOUR_LINK",
    },
    {
      title: "Assignment 5 - Chain Matrix Multiplication",
      link: "YOUR_LINK",
    },
    {
      title: "Assignment 6 - 0/1 Knapsack",
      link: "YOUR_LINK",
    },
      ],
    },
  ];

  return (
    <>
        
         <Navbar />
    <section className="min-h-screen bg-slate-100">

              <div className="bg-blue-900 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">

          <p className="uppercase tracking-[8px] text-blue-200 mb-4">
            Department of Information Technology
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Study Materials & Assignments
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Access study materials, notes,
            assignments and laboratory resources.
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex justify-center mb-16">

          <button
            className="
              px-12
              py-4
              rounded-xl
              bg-blue-600
              text-white
              font-semibold
              shadow-lg
            "
          >
            4TH SEM
          </button>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

                      {/* STUDY MATERIALS */}

          <div>

            <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">
              STUDY MATERIALS
            </h2>

            {studyMaterials.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  shadow-lg
                  border
                  border-blue-100
                  mb-5
                  overflow-hidden
                  hover:shadow-2xl
                  hover:-translate-y-1
                  transition-all
                "
              >
                <button
                  onClick={() =>
                    setOpenStudy(
                      openStudy === index ? null : index
                    )
                  }
                  className="
                    w-full
                    p-5
                    flex
                    items-center
                    justify-between
                    bg-blue-50
                  "
                >
                  <div className="flex items-center gap-3">
                    <Folder className="text-blue-700" />
                    <span className="font-bold">
                      {item.subject}
                    </span>
                  </div>

                  {openStudy === index
                    ? <ChevronDown />
                    : <ChevronRight />}
                </button>

                {openStudy === index && (
                  <div className="p-5 space-y-3">

                    {item.files.map((file, i) => (
                      <a
                        key={i}
                        href={file.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          justify-between
                          items-center
                          bg-slate-50
                          rounded-lg
                          p-4
                          border
                          border-transparent
                          hover:border-blue-300
                          hover:bg-blue-50
                          hover:translate-x-2
                          transition-all
                        "
                      >
                        <div className="flex items-center gap-3">
                          <FileText
                            size={18}
                            className="text-blue-700"
                          />

                          <span>
                            {file.title}
                          </span>
                        </div>

                        <ExternalLink
                          size={18}
                          className="text-blue-700"
                        />
                      </a>
                    ))}

                  </div>
                )}
              </div>
            ))}

          </div>

          {/* LAB ASSIGNMENTS */}

          <div>

            <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">
              LAB ASSIGNMENTS
            </h2>

            {labAssignments.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  shadow-lg
                  border
                  border-blue-100
                  mb-5
                  overflow-hidden
                  hover:shadow-2xl
                  hover:-translate-y-1
                  transition-all
                "
              >
                <button
                  onClick={() =>
                    setOpenLab(
                      openLab === index ? null : index
                    )
                  }
                  className="
                    w-full
                    p-5
                    flex
                    items-center
                    justify-between
                    bg-blue-50
                  "
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="text-blue-700" />
                    <span className="font-bold">
                      {item.subject}
                    </span>
                  </div>

                  {openLab === index
                    ? <ChevronDown />
                    : <ChevronRight />}
                </button>

                {openLab === index && (
                  <div className="p-5 space-y-3">

                    {item.files.map((file, i) => (
                      <a
                        key={i}
                        href={file.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          justify-between
                          items-center
                          bg-slate-50
                          rounded-lg
                          p-4
                          border
                          border-transparent
                          hover:border-blue-300
                          hover:bg-blue-50
                          hover:translate-x-2
                          transition-all
                        "
                      >
                        <div className="flex items-center gap-3">
                          <FileText
                            size={18}
                            className="text-blue-700"
                          />

                          <span>
                            {file.title}
                          </span>
                        </div>

                        <ExternalLink
                          size={18}
                          className="text-blue-700"
                        />
                      </a>
                    ))}

                  </div>
                )}
              </div>
            ))}

          </div>

        </div>
      </div>

    </section>
    <Footer />
        </>
  );
}