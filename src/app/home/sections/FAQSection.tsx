"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do I need any prior experience to join FEC?",
    answer:
      "No. Our program is beginner-friendly. We'll teach you everything from fabrication basics to building a business.",
  },
  {
    question: "What tools and machines will I learn to use?",
    answer:
      "You'll get hands-on experience with fabrication tools, CNC machines, 3D printers, and other prototyping equipment.",
  },
  {
    question: "Is this program full-time and on-site?",
    answer:
      "Yes, it's an immersive full-time program conducted on-site to maximize your learning experience.",
  },
  {
    question: "Why partner with FEC?",
    answer:
      "We provide a network of mentors, funding opportunities, and access to cutting-edge facilities to bring your ideas to life.",
  },
  {
    question: "How does FEC create impact?",
    answer:
      "FEC empowers creators and innovators to solve real-world problems through practical education and collaboration.",
  },
  {
    question: "What types of collaboration are possible?",
    answer:
      "We encourage collaborations among students, startups, and organizations that foster creativity and innovation.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className=" container mx-auto text-center mb-10">
        <p className="text-[19px] uppercase text-gray-500 tracking-wide">FAQs</p>
        <h2 className="text-[43px] md:text-4xl text-b font-semibold mt-2">
          Have Inquiries? Find Answers Here
        </h2>
      </div>

      <div className="space-y-4 container mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="rounded-xl overflow-hidden border border-gray-200 bg-[#EEDEFF] shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
            >
              <span className="font-medium text-gray-800 text-base md:text-lg">
                {faq.question}
              </span>
              {activeIndex === index ? (
                <Minus className="w-5 h-5 text-gray-600" />
              ) : (
                <Plus className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-4 text-gray-600 text-sm md:text-base bg-[#EEDEFF]">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
