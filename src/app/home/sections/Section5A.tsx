"use client";

import { motion } from "framer-motion";

export default function Section5A() {
  return (
    <section className=" bg-[#3D6DF3] py-20 px-6 md:px-16">
      {/* Top Grid */}
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[25px] items-center">
        {/* LEFT TEXT SECTION — comes from left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className=" text-white text-[23px] font-medium"
        >
          <h2 className=" text-2xl  max-w-[500px] md:text-[43px] font-semibold mb-[40px]">
            Explore the Spaces That Power Innovation{" "}
          </h2>
          <p className=" leading-relaxed mb-[40px]">
            Step into the environments built to spark ideas, accelerate
            creativity, and support meaningful breakthroughs. These spaces bring
            together the tools, teams, and energy needed to turn vision into
            reality.
          </p>

          <p className="leading-relaxed mb-[40px]">
            From collaborative hubs to high-performance work studios, each
            setting is crafted to fuel experimentation, drive progress, and
            empower innovators to push boundaries with confidence.
          </p>

          <button className=" text-[19px] text-[#3D6DF3] font-semibold flex w-full sm:w-fit items-center gap-2 justify-between sm:justify-center rounded-full  pl-[24px] py-[12px] pr-[12px] bg-[#F5FFFF] hover:bg-yellow-400 transition">
            Apply Now{" "}
            <img
              src="/icons/arrow3.svg"
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
          <img src="/images/plash2.svg" alt="" />
        </motion.div>
      </div>
    </section>
  );
}
