import Image from "next/image";
import HeroSection from "./home/sections/HeroSection";
import Section1 from "./home/sections/Section1";
import Section2 from "./home/sections/Section2";
import Section3 from "./home/sections/Section3";
import Section4 from "./home/sections/Section4";
import Section5 from "./home/sections/Section5";
import EmailSubscribeSection from "./home/sections/EmailSubscribeSection";
import Section6 from "./home/sections/Section6";
import FAQSection from "./home/sections/FAQSection";

export default function Home() {
  return (
    <div className="bg-[#F5F5F5]">
      {" "}
        <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <EmailSubscribeSection />
      <Section6 />
      <FAQSection />
    </div>
  );
}
