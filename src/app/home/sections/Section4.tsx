"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Card {
  title: string;
  description: string;
  color: string; // bg color for dot
  textColor: string; // color for title and dot
}

const cards: Card[] = [
  {
    title: "Hands-on Fabrication Skills",
    description:
      "Build real-world products from concept to creation through guided, practical fabrication experience using modern tools and techniques.",
    color: "bg-purple-100",
    textColor: "bg-purple-600",
  },
  {
    title: "Real Business Training",
    description:
      "Learn to transform creative ideas into sustainable ventures through practical entrepreneurship, strategy, and market-driven thinking.",
    color: "bg-teal-100",
    textColor: "bg-teal-600",
  },
  {
    title: "Creative Problem Solving",
    description:
      "Develop innovative solutions to complex challenges through design thinking, experimentation, and practical application.",
    color: "bg-yellow-100",
    textColor: "bg-yellow-600",
  },
  {
    title: "Leadership & Teamwork",
    description:
      "Enhance your ability to lead projects, collaborate effectively, and manage teams to achieve impactful results.",
    color: "bg-pink-100",
    textColor: "bg-pink-600",
  },
  {
    title: "Digital Skills & Tools",
    description:
      "Gain proficiency in essential digital tools and technologies to accelerate productivity and innovation.",
    color: "bg-blue-100",
    textColor: "bg-blue-600",
  },
  {
    title: "Mentorship from Industry Experts",
    description:
      "Receive direct guidance and insights from seasoned innovators, entrepreneurs, and professionals shaping the future of enterprise.",
    color: "bg-orange-100",
    textColor: "bg-orange-600",
  },
  {
    title: "Networking & Opportunities",
    description:
      "Connect with like-minded peers, mentors, and industry leaders to expand your professional network and opportunities.",
    color: "bg-lime-100",
    textColor: "bg-lime-600",
  },
];


export default function Section4() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalCards = cards.length;
  const maxIndex = Math.ceil(totalCards / visibleCards) - 1;

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalCards - visibleCards));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };


const progress = Math.min(
  (currentIndex / (totalCards - visibleCards)) * 100 + 10   ,
  100
);
  return (
    <section className="w-full flex flex-col justify-center items-center py-20 px-8">
      <div className=" container">
        {/* Header */}
        <div className=" flex justify-between items-center ">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-wider font-medium text-gray-500 mb-6">
              What You'll Gain
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-black max-w-xl leading-snug">
              Unlock Practical Skills to Build, Innovate, and Lead Your Future
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className=" flex gap-2">
            <button
              onClick={prev}
              className="p-4 text-black bg-white rounded-full shadow hover:scale-110 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-4 bg-black text-white rounded-full shadow hover:scale-110 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${(currentIndex * 100) / totalCards}%` }} // <-- divide by totalCards
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{
                width: `${(totalCards / visibleCards) * 100}%`,
              }}
            >
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  className={`rounded-2xl p-6  flex-shrink-0 max-w-[460px] bg-white`}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <div className=" flex gap-[24px] ">
                    {/* Colored Dot */}
                    <div className=" relative  h-[24px] w-[24px]">
                      <div
                        className={`h-[24px] w-[24px] rounded-[2px]  ${card.textColor}`}
                      ></div>
                      <div
                        className={`h-[24px] w-[24px] rounded-[2px] absolute -bottom-1 -right-1 opacity-20  ${card.textColor}`}
                      ></div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-semibold text-black text-[19px] mb-2 `}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Progress */}
        <div className="relative mt-[40px] h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-black rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
