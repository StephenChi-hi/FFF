"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function EmailSubscribeSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const submitToZoho = async () => {
    setLoading(true);
    setMessage("");

    const formData = new FormData();

    // REQUIRED ZOHO HIDDEN FIELDS
    formData.append(
      "xnQsjsdp",
      "b1d74f5194cfbe234588ea87c4d0e6c38c4da8289aadbd6816dc3c00070972c3"
    );
    formData.append(
      "xmIwtLD",
      "3e571ba2dbe0108f00ad2c550c49c8fb752c5d09150339ef46e28b5db4cfde61209c9102f973e88b17825077068f75a0"
    );
    formData.append("actionType", "TGVhZHM=");
    formData.append("returnURL", "null");
    formData.append("zc_gad", "");

    // Only email field
    formData.append("Email", email);

    try {
      const res = await fetch("https://crm.zoho.com/crm/WebToLeadForm", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setMessage("Subscribed successfully!");
        setEmail("");
      } else {
        setMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      setMessage("Network error. Try again.");
    }

    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter an email.");
      return;
    }

    submitToZoho();
  };

  return (
    <section className="mx-auto container px-4 py-[80px]">
      <div className="bg-[#A7D84C] p-[32px] md:p-[48px] rounded-[24px] w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* LEFT SIDE */}
        <div className="text-center md:text-left w-full md:max-w-[55%]">
          <h2 className="text-2xl md:text-[43px] font-semibold leading-tight">
            Stay Updated with the Latest FEC Insights and Opportunities
          </h2>
          <p className="mt-[16px] text-[17px] md:text-[19px] opacity-90">
            Get updates on new programs, events, opportunities, and stories from
            FEC — straight to your inbox.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:max-w-[45%]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 bg-white   rounded-[32px] sm:rounded-full p-2 shadow-sm w-full"
          >
            {/* INPUT */}
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-4 text-[16px] text-[#737373] focus:outline-none rounded-full"
            />

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="bg-[#A7D84C] whitespace-nowrap text-white text-sm font-medium px-8 py-4 rounded-full transition-all duration-200 hover:bg-gray-800 disabled:opacity-50"
            >
              {loading ? "Loading..." : "Get insights"}
            </motion.button>
          </form>

          {/* STATUS MESSAGE */}
          {message && (
            <p className="text-[15px] mt-3 text-center md:text-left text-black opacity-80">
              {message}
            </p>
          )}

          {/* PRIVACY */}
          <p className="text-[15px] text-[#3d3c3c] text-center md:text-left mt-3 opacity-70">
            By subscribing you agree to our privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
}
