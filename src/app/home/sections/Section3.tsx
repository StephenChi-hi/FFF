"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  title: string;
  image: string;
  companyLogo: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "I lead the Megaplux Group and founded FEC to empower future makers with the skills, innovation, and entrepreneurial mastery needed to build boldly and shape the future.",
    name: "Paul Inyang",
    title: "Founder, FEC & Chairman/Group CEO, Megaplux Group",
    image: "/sponsors/user1.svg",
    companyLogo: "/sponsors/sponsors10.svg",
  },
  {
    id: 2,
    text: "I bring 15+ years of cross-industry marketing experience, blending creativity, strategy, and relationship-building to turn complex challenges into clear wins—with excellence and originality at the core.",
    name: "Tosin Ilori",
    title: "MD Megaplux global",
    image: "/sponsors/user2.svg",
    companyLogo: "/sponsors/sponsors10.svg",
  },
  {
    id: 3,
    text: "I guide FEC’s operations and drive HR at Megaplux Global, fostering a culture where people grow, skills advance, and creativity fuels meaningful entrepreneurial impact.",
    name: "Charity Orjiene",
    title: "Admin, Fabrication & Entrepreneurship Center (FEC)",
    image: "/sponsors/user3.svg",
    companyLogo: "/sponsors/sponsors10.svg",
  },
];

export default function SectionThree() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  // Auto shuffle every 7s
  useEffect(() => {
    const interval = setInterval(() => handleNext(), 7000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative overflow-hidden h-[600px] flex items-center justify-center">
      {/* Infinite Falling Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full"
            style={{ top: `${i * 100}%` }}
            animate={{ y: ["-600% ", "0%"] }} // moves all six stacked images downward infinitely
            transition={{
              repeat: Infinity,
              duration: 500,
              ease: "linear",
            }}
          >
            <Image
              src="/images/bg-com.svg"
              alt="Colorful pattern"
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Testimonial Stack */}
      <div className="relative w-[90%] md:w-[700px] h-[320px] flex justify-center items-center">
        {testimonials.map((item, index) => {
          const position =
            (index - current + testimonials.length) % testimonials.length;

          let scale = 1;
          let x = 0;
          let zIndex = 0;
          let opacity = 1;

          // Front card is biggest, second is bigger, third is big
          if (position === 0) {
            scale = 1.05; // Front: biggest
            x = 0;
            zIndex = 30;
            opacity = 1;
          } else if (position === 1) {
            scale = 0.95; // Second: bigger
            x = 70;
            zIndex = 20;
            opacity = 0.8;
          } else if (position === 2) {
            scale = 0.85; // Third: big
            x = 140;
            zIndex = 10;
            opacity = 0.6;
          } else {
            scale = 0.8; // Rest: small / hidden
            x = 200;
            zIndex = 0;
            opacity = 0;
          }

          return (
            <motion.div
              key={item.id}
              className="absolute bg-white rounded-2xl shadow-2xl p-4 sm:p-[60px] md:p-8 w-full md:w-[800px] cursor-pointer origin-center"
              onClick={handleNext}
              animate={{ scale, x, opacity, zIndex }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img src="/icons/yuo.svg" alt="" />
              <p className="text-black text-[18px] sm:text-[27px] my-[24px] sm:mb-[60px] sm:mt-[24px] leading-relaxed">
                {item.text}”
              </p>

              <div className="flex  sm:flex-row flex-col items-center text-black gap-4">
                <div className="  flex gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover sm:h-[100px] h-[50px] w-[50px] sm:w-[100px]"
                  />
                  <div>
                    <p className="font-semibold  text-[16px] sm:text-[23px]">
                      {item.name}
                    </p>
                    <p className="text-[14px] sm:text-[19px] ">{item.title}</p>
                  </div>
                </div>

                <div className="ml-auto">
                  <Image
                    src={item.companyLogo}
                    alt={item.companyLogo}
                    width={90}
                    height={30}
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
