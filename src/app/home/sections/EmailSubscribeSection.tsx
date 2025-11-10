"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function EmailSubscribeSection() {
  const [email, setEmail] = useState("");

  return (
    <section className=" mx-auto container pb-[80px] ">
      <div className="bg-[#A7D84C] p-[48px]  rounded-[24px]  w-full flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Text Section */}
        <div className="text-center md:text-left text-b ">
          <h2 className="text-2xl md:text-[43px] max-w-[641px] font-semibold ">
            Stay Updated with the Latest FEC Insights and Opportunities
          </h2>
          <p className=" mt-[16px] text-[19px] max-w-[568px] md:text-base">
            Get updates on new programs, events, opportunities, and stories from
            FEC — straight to your inbox.
          </p>
        </div>
        <div className="  ">
          {" "}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-white pr-[8px] rounded-full overflow-hidden shadow-sm w-full md:w-fit [360px]"
          >
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 text-[#737373] p-[28px] text-[16px] focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#A7D84C] whitespace-nowrap text-white text-sm font-medium px-[40px] py-[18px] rounded-full mr-1 transition-all duration-200 hover:bg-gray-800"
            >
              Get insights
            </motion.button>
          </form>
          <p className="text-[16px] text-[#3d3c3c] text-center md:text-right mt-3 opacity-70">
            By subscribing you agree to our privacy policy
          </p>
        </div>{" "}
      </div>
    </section>
  );
}
