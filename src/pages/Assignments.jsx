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
          link: "https://it.iem.edu.in/pdfs/study_mats/aiml/AI_notes.pdf",
        },
        {
          title: "Russell & Norvig AI",
          link: "https://it.iem.edu.in/pdfs/study_mats/aiml/AI_Russell_Norvig.pdf",
        },
        {
          title: "Knowledge Representation",
          link: "https://it.iem.edu.in/pdfs/study_mats/aiml/Knowledge_representation.pdf",
        },
        {
          title: "Machine Learning - Tom Mitchell",
          link: "https://it.iem.edu.in/pdfs/study_mats/aiml/M1-Machine-Learning-Tom-Mitchell_.pdf",
        },
        {
          title: "ML3A",
          link: "https://it.iem.edu.in/pdfs/study_mats/aiml/ML3A.pdf",
          
        },
        {
          title: "LDA",
          link: "https://it.iem.edu.in/pdfs/study_mats/aiml/LDA.pdf",
          
        },
        
        
        {
          title: "PCA",
          link: "https://it.iem.edu.in/pdfs/study_mats/aiml/PCA.pdf",
        },
        {
          title: "SVD",
          link: "https://it.iem.edu.in/pdfs/study_mats/aiml/SVD.pdf",
        },
      ],
    },

    {
      subject: "AP(OOPS)",
      files: [
         {
      title: "Java Fundamentals ",
      link: "https://it.iem.edu.in/pdfs/study_mats/ap(oops)/1_Java%20Fundamentals.pdf",
    },
    {
      title: "Polymorphism in JAVA",
      link: "https://it.iem.edu.in/pdfs/study_mats/ap(oops)/2_Polymorphism%20in%20JAVA.pdf",
    },
    {
      title: "Exception Handling in JAVA",
      link: "https://it.iem.edu.in/pdfs/study_mats/ap(oops)/3_Exception%20Handling%20in%20JAVA.pdf",
    },
    {
      title: "User Interface Design (Applet & Swing)",
      link: "https://it.iem.edu.in/pdfs/study_mats/ap(oops)/4_User%20Interface%20Design%20(Applet%20&%20Swing).pdf",
    },
    
    {
      title: "OOP Module 1",
      link: "https://it.iem.edu.in/pdfs/study_mats/ap(oops)/OOP_M1.pdf",
    },
    {
      title: "OOP Module 2",
      link: "https://it.iem.edu.in/pdfs/study_mats/ap(oops)/OOP_M2.pdf",
    },
    {
      title: "OOP Module 3",
      link: "https://it.iem.edu.in/pdfs/study_mats/ap(oops)/OOP_M3.pdf",
    },
    {
      title: "OOP Module 4",
      link: "https://it.iem.edu.in/pdfs/study_mats/ap(oops)/OOP_M4.pdf",
    },
    {
      title: "OOP Module 5",
      link: "https://it.iem.edu.in/pdfs/study_mats/ap(oops)/OOP_M5.pdf",
    },
      ],
    },

    {
      subject: "COA",
      files: [
        {
          title: "COA Division Algorithm",
          link: "https://it.iem.edu.in/pdfs/study_mats/coa/Coa_division_algorithm.pdf",
        },
         {
          title: "COA Adder",
          link: "https://it.iem.edu.in/pdfs/study_mats/coa/coa_adder.pdf",
        },
         {
          title: "COA Module2",
          link: "https://it.iem.edu.in/pdfs/study_mats/coa/Coa_mod2.pdf",
        },
         {
          title: "COA Multiplication",
          link: "https://it.iem.edu.in/pdfs/study_mats/coa/coa_multiplication.pdf",
        },
      ],
    },

    {
      subject: "DISCRETE MATHEMATICS",
      files: [
        {
      title: "Assignment on Propositional Logic",
      link: "https://it.iem.edu.in/pdfs/study_mats/discrete_mathematics/Assignment%20on%20Propositional%20Logic.pdf",
    },
    {
      title: "Assignment on Propositional Logic 2",
      link: "https://it.iem.edu.in/pdfs/study_mats/discrete_mathematics/Assignment%20on%20Propositional%20Logic2.pdf",
    },
    {
      title: "Boolean Algebra - Assignment",
      link: "https://it.iem.edu.in/pdfs/study_mats/discrete_mathematics/Boolean%20Algebra%20-%20Assignment.pdf",
    },
    {
      title: "CNF & DNF - Propositional Logic",
      link: "https://it.iem.edu.in/pdfs/study_mats/discrete_mathematics/CNF%20&%20DNF%20-Propositional%20Logic.pdf",
    },
    {
      title: "Detailed Proof Techniques in Discrete Mathematics",
      link: "https://it.iem.edu.in/pdfs/study_mats/discrete_mathematics/Detailed%20Proof%20Techniques%20Discrete%20Mathematics..pdf",
    },
    {
      title: "Notes on Boolean Algebra",
      link: "https://it.iem.edu.in/pdfs/study_mats/discrete_mathematics/Notes%20on%20Boolean%20Algebra.pdf",
    },
    {
      title: "Problems on Pigeonhole Principle",
      link: "https://it.iem.edu.in/pdfs/study_mats/discrete_mathematics/Problems%20on%20Pigeonhole%20Principle.pdf",
    },
    {
      title: "Solution Problems on Pigeonhole Principle",
      link: "https://it.iem.edu.in/pdfs/study_mats/discrete_mathematics/Solution%20Problems%20on%20Pigeonhole%20Principle.pdf",
    },
    {
      title: "Syntax and Semantics",
      link: "https://it.iem.edu.in/pdfs/study_mats/discrete_mathematics/Syntax%20and%20Semantics.pdf",
    },
    {
      title: "Types of Proofs - Predicate Logic",
      link: "https://it.iem.edu.in/pdfs/study_mats/discrete_mathematics/Types%20of%20Proofs-Predicate%20Logic-Discrete%20Mathematics.pdf",
    },
      ],
    },

    {
      subject: "ESS",
      files: [
        {
          title: "ESS Module 1",
          link: "https://it.iem.edu.in/pdfs/study_mats/ess/ess_mod1.pdf",
        },
        {
          title: "ESS Module 2",
          link: "https://it.iem.edu.in/pdfs/study_mats/ess/ess_mod2.pdf",
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
      link: "https://it.iem.edu.in/pdfs/Assignments/AIML_LAB/decision_tree_algo.pdf",
    },
    {
      title: "K-Nearest Neighbors (KNN)",
      link: "https://it.iem.edu.in/pdfs/Assignments/AIML_LAB/knn.pdf",
    },
    {
      title: "Search - Water Jug Problem",
      link: "https://it.iem.edu.in/pdfs/Assignments/AIML_LAB/search-water-jug-handout.pdf",
    },
    {
      title: "The A* Algorithm",
      link: "https://it.iem.edu.in/pdfs/Assignments/AIML_LAB/The%20Astar_Algorithm.pdf",
    },
      ],
    },

    {
      subject: "AP(OOPS) LAB",
      files: [
        {
      title: "Assignment 1",
      link: "https://it.iem.edu.in/pdfs/Assignments/AP(OOPS)%20LAB/A1.pdf",
    },
    {
      title: "Assignment 2",
      link: "https://it.iem.edu.in/pdfs/Assignments/AP(OOPS)%20LAB/A2.pdf",
    },
    {
      title: "Assignment 3",
      link: "https://it.iem.edu.in/pdfs/Assignments/AP(OOPS)%20LAB/A3.pdf",
    },
    {
      title: "Assignment 4",
      link: "https://it.iem.edu.in/pdfs/Assignments/AP(OOPS)%20LAB/A4.pdf",
    },
    {
      title: "Assignment 5",
      link: "https://it.iem.edu.in/pdfs/Assignments/AP(OOPS)%20LAB/A5.pdf",
    },
    {
      title: "Assignment 6",
      link: "https://it.iem.edu.in/pdfs/Assignments/AP(OOPS)%20LAB/A6.pdf",
    },
    {
      title: "Assignment 7",
      link: "https://it.iem.edu.in/pdfs/Assignments/AP(OOPS)%20LAB/A7.pdf",
    },
    {
      title: "Git Guide",
      link: "https://it.iem.edu.in/pdfs/Assignments/AP(OOPS)%20LAB/git.pdf",
    },
      ],
    },

    {
      subject: "DAA LAB",
      files: [
        {
      title: "Assignment 1 - Graph Traversal",
      link: "https://it.iem.edu.in/pdfs/Assignments/DAA%20LAB/ASSIGNMENT%201_%20GRAPH%20TRAVERSAL.pdf",
    },
    {
      title: "Assignment 2 - Spanning Tree on Weighted Graph",
      link: "https://it.iem.edu.in/pdfs/Assignments/DAA%20LAB/ASSIGNMENT%202_%20Spanning%20tree%20finding%20on%20a%20weighted%20graph.pdf",
    },
    {
      title: "Assignment 3 - Binary Search Variations",
      link: "https://it.iem.edu.in/pdfs/Assignments/DAA%20LAB/ASSIGNMENT3_Binary%20Search%20Variations.pdf",
    },
    {
      title: "Assignment 4 - Sorting Variations",
      link: "https://it.iem.edu.in/pdfs/Assignments/DAA%20LAB/ASSIGNMENT_4_SORTING%20VARIATIONS.pdf",
    },
    {
      title: "Assignment 5 - Chain Matrix Multiplication",
      link: "https://it.iem.edu.in/pdfs/Assignments/DAA%20LAB/ASSIGNMENT5_Chain_Matrix_Multi.pdf",
    },
    {
      title: "Assignment 6 - 0/1 Knapsack",
      link: "https://it.iem.edu.in/pdfs/Assignments/DAA%20LAB/ASSIGNMENT%206_01_Knapsack.pdf",
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