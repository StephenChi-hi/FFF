"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 z-50 w-full flex  font-medium flex-col items-center justify-center"
      animate={{
        y: scrolled ? 0 : 0,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
    >
      <motion.div
        animate={{
          width: scrolled ? "100%" : "90%",
          marginTop: scrolled ? "0px" : "20px",
          borderRadius: scrolled ? "0px" : "16px",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`${
          scrolled
            ? "bg-black/70 border-white/10 "
            : "bg-black/40 border-white/20 px-[20px]  sm:px-[40px]"
        } backdrop-blur-xl border`}
      >
        <div
          className={`${
            scrolled
              ? "container px-4 sm:px-1 transition duration-75"
              : "transition duration-75"
          } mx-auto  flex text-[16px] items-center justify-between  py-[10px] sm:py-[20px]`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt="FEC Logo"
              width={400}
              height={400}
              className="rounded-md h-[24px] w-[100px] sm:h-[48px] sm:w-[236px]"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "About Us", "Programs", "FAQs"].map((item) => (
              <Link
                key={item}
                href={`/${
                  item === "Home" ? "" : item.toLowerCase().replace(" ", "-")
                }`}
                className="relative text-white/90 hover:text-[#FF9629] transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Button */}
          <div className="hidden md:block">
            <button className="rounded-lg bg-[#FF9629] px-[24px] py-[12px] text-white font-medium hover:bg-orange-600 transition">
              Learn more
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-white focus:outline-none"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-2xl w-full bg-black/30 border-t border-white/10"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {["Home", "About Us", "Programs", "FAQs"].map((item) => (
                <Link
                  key={item}
                  href={`/${
                    item === "Home" ? "" : item.toLowerCase().replace(" ", "-")
                  }`}
                  className="text-white/90 hover:text-[#FF9629] text-base transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <button className="mt-2 rounded-lg bg-orange-500 px-6 py-2 text-white font-medium hover:bg-orange-600 transition">
                Learn more
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
