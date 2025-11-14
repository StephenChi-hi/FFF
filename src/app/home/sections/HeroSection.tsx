"use client";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";
import { CgArrowLongLeft } from "react-icons/cg";
import { ArrowBigDown } from "lucide-react";
import { FaLeftRight } from "react-icons/fa6";
import Link from "next/link";

const HeroSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const { scrollY } = useScroll();

  // Smoothly reduce padding as user scrolls
  const padding = useTransform(scrollY, [0, 200], [10, 0]);
  // 32px = p-8 in Tailwind scale; adjust as you wish

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      style={{
        paddingLeft: padding,
        paddingRight: padding,
        paddingTop: padding,
        paddingBottom: padding,
      }}
    >
      {" "}
      <section
        id="home"
        ref={ref}
        className="relative flex rounded-t-[24px]  xl:rounded-t-[30px] h pt-[120px] sm:pt-[274px] w-full items-center justify-center overflow-hidden "
      >
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/herobg.png" // replace with your actual image path
            alt="Fabrication lab"
            fill
            className="object-cover "
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/90 z-10"></div>

        {/* Content */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 container px-6  md:text-left"
        >
          {" "}
          <div
            className=" flex flex-col sm:flex-row py-[12px] px-[20] sm:py-[8px] gap-2 sm
        :px-[16px] items-center rounded-3xl   sm:rounded-full w-fit border border-white/10 bg-black/20 backdrop-blur-xl "
          >
            <img
              src="/images/users1.svg"
              alt="users"
              className="h-[20px] sm:h-[40px]"
            />
            <p className="font-semibold ">
              200 newly admitted students for the pilot cohort 2025{" "}
            </p>
          </div>
          <h1 className="text-[42px] sm:text-[63px] my-[24px] max-w-[974px] font-bold leading-tight md:text-6xl">
            The Future of Fabrication Technology & Entrepreneurship Starts Here
          </h1>
          <p className="  max-w-[660px] font-medium">
            We blend hands-on fabrication skills with real-world
            entrepreneurship to shape creators into founders.
          </p>
          <div className="mt-[24px] pb-[100px] flex flex-col w-full sm:w-fit  items-center gap-4 md:flex-row">
            <Link
              href="https://forms.gle/DZ8v7GvKLV8oQ8mH6"
              className=" text-black font-semibold flex w-full sm:w-fit items-center gap-2 justify-between sm:justify-center rounded-full  pl-[24px] py-[12px] pr-[12px] bg-[#F5FFFF] hover:bg-yellow-400 transition"
            >
              Apply Now
              <img
                src="/icons/arrow1.svg"
                alt=""
                className="w-[40px] h-[40px] "
              />{" "}
            </Link>
            <button className="rounded-full flex gap-2  items-center px-6 py-3  ">
              <p className=" underline ">Learn More</p>{" "}
              <img
                src="/icons/arrow2.svg"
                alt=""
                className="w-[40px] h-[40px] "
              />{" "}
            </button>
          </div>
          {/* Stats */}
          <div className="pt-[50px] hidden sm:pt-[144px] container  pb-[52px] grid- grid-cols-2 gap-8  md:grid-cols-4">
            {[
              {
                end: 300,
                label: "Graduates Trained Across Africa",
                suffix: "+",
              },
              { end: 90, label: "Capstone Completion Rate", suffix: "%" },
              {
                end: 120,
                label: "Ventures Launched Post-Program",
                suffix: "+",
              },
              {
                end: 50,
                label: "Industry Partners & Innovation Hubs",
                suffix: "+",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ delay: 0.2 * i, duration: 0.6 }}
                className="flex flex-col items-"
              >
                <h3 className="text-[32px] sm:text-[46px] font-semibold ">
                  {inView && (
                    <CountUp
                      end={stat.end}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  )}
                </h3>
                <p className="mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default HeroSection;
