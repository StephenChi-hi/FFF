"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const sponsorSets = [
  ["/sponsors/sponsors1.svg", "/sponsors/sponsors2.svg"],
  ["/sponsors/sponsors3.svg", "/sponsors/sponsors4.svg"],
  ["/sponsors/sponsors5.svg", "/sponsors/sponsors6.svg"],
  ["/sponsors/sponsors7.svg", "/sponsors/sponsors3.svg"],
  ["/sponsors/sponsors2.svg", "/sponsors/sponsors1.svg"],
  ["/sponsors/sponsors1.svg", "/sponsors/sponsors2.svg"],
  ["/sponsors/sponsors3.svg", "/sponsors/sponsors4.svg"],
  ["/sponsors/sponsors5.svg", "/sponsors/sponsors6.svg"],
];

export default function Section1() {
  const [activeIndexes, setActiveIndexes] = useState(Array(8).fill(0));

  // fade change effect (wave)
  useEffect(() => {
    const intervals = sponsorSets.map(
      (_, i) =>
        setInterval(() => {
          setActiveIndexes((prev) => {
            const newIndexes = [...prev];
            newIndexes[i] = (newIndexes[i] + 1) % sponsorSets[i].length;
            return newIndexes;
          });
        }, 4000 + i * 500) // stagger for wave-like change
    );

    return () => intervals.forEach((id) => clearInterval(id));
  }, []);

  return (
    <section className="w-ful py-20">
      <div className="mx-auto container px-6">
        {/* Text Section */}
        <div className="mb-[80px] flex flex-col gap-4 sm:flex-row sm:gap-[220px] ">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[16px] whitespace-nowrap font-medium text-[#737373] uppercase tracking-widest"
          >
            Who We Are
          </motion.h2>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className=" max-w-3xl text-[23px] italic text-[#141416] leading-relaxed"
          >
            At FEC, we don’t just teach fabrication — we train people to turn
            their skills into profitable businesses. By combining hands-on
            technical training with real-world entrepreneurship, we help makers
            become founders — and ideas — become ventures.
          </motion.p>
        </div>

        {/* Sponsors Grid */}
        <div className="text-center mb-[40px] text-[#737373] text-[16px]  uppercase tracking-wide">
          Funded by 50+ Industry Partners and Innovation Hubs
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center">
          {sponsorSets.map((logos, i) => (
            <motion.div
              key={i}
              className="relative h-20 w-32 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {logos.map((logo, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    opacity: activeIndexes[i] === idx ? 1 : 0,
                  }}
                  transition={{ duration: 1.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={logo}
                    alt={`Sponsor ${i + 1}`}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
