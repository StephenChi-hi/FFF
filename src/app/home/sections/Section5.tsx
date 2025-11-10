"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Section5() {
  const facilities = [
    {
      title: "Advanced 3D Printing Studios",
      img: "/images/tool2.jpg",
    },
    {
      title: "Precision CNC Routers",
      img: "/images/tool3.png",
    },
    {
      title: "Professional Welding Bays",
      img: "/images/tool4.png",
    },
    {
      title: "State-Of-The-Art Robotics Labs",
      img: "/images/tool1.png",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-20 px-6 md:px-16">
      <div className="container flex flex-col items-center text-center mb-[40px]">
        <p className="uppercase text-[16px] tracking-wide text-[#737373] mb-[24px]">
          Facilities Snapshot
        </p>
        <h2 className="text-3xl text-b md:text-[32px] max-w-[600px] font-semibold">
          Explore the Spaces That Power Innovation
        </h2>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-[8px] container h-[720px]">
        {/* LEFT LARGE IMAGE */}
        <div className="relative col-span-1 md:col-span-3 md:row-span-2 rounded-[16px] overflow-hidden cursor-pointer h-[720px] group">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={facilities[0].img}
              alt={facilities[0].title}
              fill
              className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/40 flex items-end p-[32px]">
            <p className="text-white font-medium text-[26px] max-w-[250px]">
              {facilities[0].title}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE GRID */}
        <div className="col-span-1 md:col-span-4 grid grid-rows-2 gap-[8px] h-[720px]">
          {/* TOP ROW */}
          <div className="grid grid-cols-2 gap-[8px] h-[360px] pb-[6px]">
            {facilities.slice(1, 3).map((facility, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden cursor-pointer h-full w-full group"
              >
                <Image
                  src={facility.img}
                  alt={facility.title}
                  fill
                  className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <p className="text-white font-medium text-[26px] max-w-[250px]">
                    {facility.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM FULL-WIDTH */}
          <div className="relative rounded-2xl overflow-hidden cursor-pointer h-[360px] w-full group">
            <Image
              src={facilities[3].img}
              alt={facilities[3].title}
              fill
              className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <p className="text-white font-medium text-[26px] max-w-[250px]">
                {facilities[3].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
