"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Track {
  title: string;
  image: string;
  description: string;
}

const tracks: Track[] = [
  {
    title: "Introduction to Fabrication & Safety",
    image: "/images/skill1.png",
    description:
      "Learn essential fabrication tools, materials, and safety standards for creating reliable physical products.",
  },
  {
    title: "Design Thinking & Prototyping",
    image: "/images/skill2.png",
    description:
      "Explore the design thinking process to ideate, prototype, and refine innovative solutions to real-world problems.",
  },
  {
    title: "Business for Makers",
    image: "/images/skill5.png",
    description:
      "Understand business fundamentals tailored for creators — from pricing to scaling your maker projects.",
  },
  {
    title: "Entrepreneurship Fundamentals",
    image: "/images/skill3.jpg",
    description:
      "Master the basics of modern entrepreneurship and discover how to turn your ideas into thriving ventures.",
  },
  {
    title: "Innovation & Product Development",
    image: "/images/skill5.png",
    description:
      "Gain practical skills for developing new products, managing iterations, and bringing innovations to market.",
  },
];

export default function Section2() {
  return (
    <section id="programs" className="py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <h4 className="text-sm font-semibold text-[#737373] text-center uppercase">
          Core Training Tracks
        </h4>
        <h2 className="text-[24px] md:text-[32px] text-b font-bold text-center mt-[24px] mb-[40px]">
          Shaping the Foundations of <br /> Modern Entrepreneurship
        </h2>

        {/* ===== FIRST ROW ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-[8px] mb-[8px]">
          {tracks.slice(0, 2).map((track, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden rounded-2xl shadow-md group h-[360px] ${
                i === 0 ? "lg:col-span-3" : "lg:col-span-2"
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Image
                src={track.image}
                alt={track.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient hover shadow */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-gradient-to-b from-black/10 via-black/50 to-black/90 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-[32px] text-white transition-all duration-500">
                <h3 className="text-[25px] font-medium max-w-[246px] mb-[8px]">
                  {track.title}
                </h3>
                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                  <p className="text-[16px] max-w-[500px] font-medium mb-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {track.description}
                  </p>
                  <Link
                    href="/"
                    className="rounded-full text-[16px] flex gap-2  items-center   "
                  >
                    <p className=" underline ">Get Started</p>{" "}
                    <img
                      src="/icons/arrow2.svg"
                      alt=""
                      className="w-[40px] h-[40px] "
                    />{" "}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== SECOND ROW ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-[8px]">
          {tracks.slice(2).map((track, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-md group h-[360px] lg:col-span-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Image
                src={track.image}
                alt={track.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient hover shadow */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-gradient-to-b from-black/10 via-black/50 to-black/90 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-[32px] text-white transition-all duration-500">
                <h3 className="text-[25px] font-medium max-w-[246px] mb-[8px]">
                  {track.title}
                </h3>{" "}
                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                  <p className="text-[16px] max-w-[500px] font-medium mb-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {track.description}
                  </p>
                  <Link
                    href="/"
                    className="rounded-full flex gap-2 text-[16px] items-center   "
                  >
                    <p className=" underline ">Get Started</p>{" "}
                    <img
                      src="/icons/arrow2.svg"
                      alt=""
                      className="w-[40px] h-[40px] "
                    />{" "}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
