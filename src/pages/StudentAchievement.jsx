import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Trophy,
  Medal,
  Award,
  Star,
  ArrowRight,
} from "lucide-react";

import img1 from "../assets/images/12.jpeg";
import img2 from "../assets/images/13.jpeg";
import img3 from "../assets/images/14.jpeg";
import img4 from "../assets/images/15.jpeg";
import img5 from "../assets/images/16.jpg";
import img6 from "../assets/images/17.jpg";

const achievements = [
  {
    title: "IEM Pickleball Tournament",
    image: img1,
    icon: Trophy,
    description:
      "A grand success with outstanding performances and sportsmanship from students.",
  },
  {
    title: "IEM Kabaddi Tournament",
    image: img2,
    icon: Medal,
    description:
      "Students secured Runner-Up position with excellent teamwork and dedication.",
  },
  {
    title: "Sangram Sports Fest at UEM Jaipur",
    image: img3,
    icon: Award,
    description:
      "Remarkable performance by students representing the institute at the national level.",
  },
  {
    title: "Sangram Sports Fest 2024",
    image: img4,
    icon: Trophy,
    description:
      "Students received recognition for their achievements in multiple sporting events.",
  },
  {
    title: "Crypto Coders at SIT ICOE Hackathon",
    image: img5,
    icon: Star,
    description:
      "Winner position achieved in a competitive hackathon involving hundreds of teams.",
  },
  {
    title: "Google HashCode Achievement",
    image: img6,
    icon: Award,
    description:
      "Students secured an impressive rank in Google's prestigious coding competition.",
  },
];

export default function StudentAchievements() {
  return (
    <>
      <Navbar />
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Student Achievements
          </h1>

          <div className="w-28 h-1 bg-white mx-auto rounded-full mb-6"></div>

          <p className="max-w-3xl mx-auto text-lg text-blue-100">
            Celebrating the remarkable accomplishments of our students in
            academics, sports, innovation, coding competitions, hackathons,
            and extracurricular activities.
          </p>
        </div>
      </section>

      {/* Achievement Cards */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    border-2
                    border-blue-100
                    shadow-lg
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:border-blue-600
                    hover:shadow-2xl
                  "
                >
                  {/* Image */}
                  <div className="overflow-hidden h-60">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Content */}
                  <div className="p-7">

                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="
                          w-12 h-12
                          rounded-full
                          bg-blue-100
                          flex items-center justify-center
                          group-hover:bg-blue-600
                          transition-all
                          duration-300
                        "
                      >
                        <Icon
                          size={22}
                          className="
                            text-blue-700
                            group-hover:text-white
                          "
                        />
                      </div>

                      <h3 className="text-xl font-bold text-blue-900">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-5">
                      {item.description}
                    </p>

                    <button
                      className="
                        flex items-center
                        gap-2
                        font-semibold
                        text-blue-700
                        group-hover:text-blue-900
                        transition-all
                      "
                    >
                
                    
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
       
    </div>
    <Footer />
      
          </>
  );
}