"use client";

import { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";

import HeroSection from "./home/sections/HeroSection";
import Section1A from "./home/sections/Section1A";
import Section2 from "./home/sections/Section2";
import Section3 from "./home/sections/Section3";
import Section4 from "./home/sections/Section4";
import Section5A from "./home/sections/Section5A";
import EmailSubscribeSection from "./home/sections/EmailSubscribeSection";
import Section6 from "./home/sections/Section6";
import FAQSection from "./home/sections/FAQSection";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <div className="bg-[#F5F5F5]">
      <HeroSection />
      <Section1A />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5A />
      <EmailSubscribeSection />
      <Section6 />
      <FAQSection />
    </div>
  );
}
