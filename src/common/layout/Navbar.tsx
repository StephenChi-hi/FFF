"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const sections = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about-us" },
  { name: "Programs", id: "programs" },
  { name: "FAQs", id: "faqs" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Smooth scroll to section WITH OFFSET so navbar doesn't cover it
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // offset: desktop = 100px, mobile = 50px
    const offset = window.innerWidth < 768 ? 50 : 100;

    const top = rect.top + scrollTop - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  // Detect scroll position + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const currentPos = window.scrollY + 150; // offset for navbar height

      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (currentPos >= top && currentPos < top + height) {
            setActive(sec.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav className="fixed top-0 left-0 z-50 w-full flex font-medium flex-col items-center justify-center">
      <motion.div
        animate={{
          width: scrolled ? "100%" : "90%",
          marginTop: scrolled ? "0px" : "20px",
          borderRadius: scrolled ? "0px" : "16px",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`${
          scrolled
            ? "bg-black/70 border-white/10"
            : "bg-black/40 border-white/20 px-[20px] sm:px-[40px]"
        } backdrop-blur-xl border`}
      >
        <div
          className={`${
            scrolled ? "container px-4 sm:px-1" : ""
          } mx-auto flex text-[16px] items-center justify-between py-[10px] sm:py-[20px]`}
        >
          {/* Logo */}
          <Image
            src="/images/logo.svg"
            alt="FEC Logo"
            width={200}
            height={50}
            className="h-[24px] w-[100px] sm:h-[48px] sm:w-[236px]"
          />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition-colors duration-300 ${
                  active === item.id
                    ? "text-[#FFCC29]"
                    : "text-white/90 hover:text-[#FFCC29]"
                }`}
              >
                {item.name}
                {/* Active underline */}
                {active === item.id && (
                  <motion.div
                    layoutId="activeLine"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#FFCC29] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Button */}
          <button className="hidden md:block rounded-lg bg-[#FFCC29] px-[24px] py-[12px] text-white font-medium hover:bg-orange-600 transition">
            Learn more
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
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
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setOpen(false);
                  }}
                  className={`text-base transition ${
                    active === item.id
                      ? "text-[#FFCC29]"
                      : "text-white/90 hover:text-[#FF9629]"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button className="mt-2 rounded-lg bg-[#FFCC29] px-6 py-2 text-white font-medium hover:bg-orange-600 transition">
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
