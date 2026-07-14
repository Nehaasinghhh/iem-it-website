import { useEffect, useState } from "react";
import { Clock, CalendarDays } from "lucide-react";

import event1 from "../assets/images/fdp (2).jpeg";
import event2 from "../assets/images/icdc_call_for_paper.jpeg";

export default function NewsHub() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );

      setDate(
        now.toLocaleDateString("en-IN", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  const news = [
    {
      image: event2,
      title: "IEM-ICDC",
      desc:
        "IEM-ICDC 2026: International Conference on Computational Intelligence, Data Science and Cloud Computing is an endeavour in enticing interest for Computational Intelligence and Data Science applications in diverse domains. As the world is moving towards Industry 4.0, Computational Intelligence, Data Science and Cloud Computing are becoming more and more relevant in our society.",
      link: "https://iemicdc.org/",
    },

    {
      image: event1,
      title: "Faculty Development Program",
      desc:
        "The Faculty Development Program (FDP) on IoT Security is designed to equip faculty members, researchers, and industry professionals with necessary knowledge and skills to understand, analyze, and address critical security challenges in the rapidly evolving Internet of Things ecosystem.",
      link: "#",
    },
  ];

  return (
    <section className="bg-[#061F52F] py-10">
      <div className="max-w-7xl  mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
  <h3 className="text-4xl md:text-5xl font-semibold text-[#0B3D91] leading-tight">
    THE WHAT'S-HAPPENING-HERE HUB
  </h3>
</div>
        {/* Time & Date */}
        <div className="bg-white rounded-3xl shadow-md p-6 mb-12 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 text-[#0B3D91] font-semibold">
            <Clock size={22} />
            <span className="text-xl">{time}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-600 mt-6 md:mt-0 md:ml-10">
  <CalendarDays size={22} />
  <span className="font-medium">{date}</span>
</div>
        </div>

        {/* News Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {news.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[280px]
                    object-cover
                    transition-all
                    duration-700
                    hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0B3D91] mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8 text-[15px]">
                  {item.desc}
                </p>

                {item.link !== "#" && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-block
                      mt-6
                      text-[#0B3D91]
                      font-semibold
                      hover:underline
                    "
                  >
                    Visit Website →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll To Top Button */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="
          fixed
          bottom-8
          right-8
          h-14
          w-14
          rounded-full
          bg-[#0B3D91]
          text-white
          text-2xl
          shadow-xl
          hover:scale-110
          transition-all
          duration-300
          z-50
        "
      >
        ↑
      </button>
    </section>
  );
}