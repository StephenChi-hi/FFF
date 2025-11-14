"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Section1A() {
  return (
    <section id="about-us" className=" bg-[#FFCC29] py-20 px-6 md:px-16">
      {/* Top Grid */}
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[65px] items-center">
        {/* LEFT TEXT SECTION — comes from left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className=" text-black text-[23px] font-medium"
        >
          <h2 className=" text-2xl md:text-[43px] font-semibold mb-[40px]">
            WHO <br /> <span className="font-semibold">WE ARE</span>
          </h2>
          <p className=" leading-relaxed mb-[40px]">
            Welcome to the Fabrication and Entrepreneurship Center (FEC) — where
            innovation meets real-world industry expertise. Backed by leading
            professionals and powered by a passion for growth, we’re on a
            mission to equip the next generation of makers and business leaders
            to build, but better.
          </p>

          <p className="leading-relaxed mb-[40px]">
            At FEC, we don’t just teach fabrication — we train people to turn
            their skills into profitable businesses. By combining hands-on
            technical training with real-world entrepreneurship, we help makers
            become founders — and ideas — become ventures.
          </p>

          <button className=" text-[19px] text-black font-semibold flex w-full sm:w-fit items-center gap-2 justify-between sm:justify-center rounded-full  pl-[24px] py-[12px] pr-[12px] bg-[#F5FFFF] hover:bg-yellow-400 transition">
            Join us Today{" "}
            <img
              src="/icons/arrow1.svg"
              alt=""
              className="w-[40px] h-[40px] "
            />{" "}
          </button>
        </motion.div>

        {/* RIGHT IMAGES — comes from the right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center"
        >
          <img src="/images/plash1.svg" alt="" />
        </motion.div>
      </div>

      {/* PARTNERS SECTION — comes from bottom */}
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col mt-32 text-center"
      >
        <h3 className="text-xl md:text-[43px] font-semibold text-black mb-[24px]">
          MEET OUR PARTNERS
        </h3>
        <p className="text-black  text-[24px] max-w-2xl mx-auto  mb-[40px]">
          We are powered by partners and innovators committed to progress and
          real-world results.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="relative h-[84px] md:h-[144px] w-[140px] md:w-[220px]"
            >
              <Image
                src={`/sponsors/partner${item}.svg`}
                alt={`Partner ${item}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
