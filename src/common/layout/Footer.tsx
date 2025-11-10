import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0E0E0E] py-12 px-6 md:px-16 relative overflow-hidden">
      {/* Curved Background Pattern */}
      <div className="absolute inset-0  pointer-events-none">
        <img src="/images/bgfoot.svg" alt="" />
      </div>

      <div className="relative container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10 md:gap-14 z-10">
        {/* Logo & Description */}
        <div className=" col-span-2">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/logo.svg"
              alt="FEC Logo"
              className=" h-[48px] object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed  mb-4">
            The Federation Entrepreneurship Centre (FEC) empowers makers &
            innovators with hands-on fabrication training, business skills, &
            access to advanced tools for real-world impact.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 my-[20px]">
            <a href="#" className="hover:text-white transition-colors">
              <img src="/icons/twitter.svg" alt="twitter" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <img src="/icons/facebook.svg" alt="facebook" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <img src="/icons/instagram.svg" alt="instagram" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <img src="/icons/linkedin.svg" alt="linkedin" />
            </a>
          </div>

          <p> © 2025 FEC. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm ">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Programs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm ">
            <li>
              <a href="#" className="hover:text-white">
                The Yellow Book
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Safety Guidelines
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Specialization Tracks
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Partnership
              </a>
            </li>
          </ul>
        </div>

        {/* Legal & Compliance */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal & Compliance</h3>
          <ul className="space-y-2 text-sm ">
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Intellectual Property
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-white font-semibold mb-4">Technology by </h3>

          <img
            src="/ForestanceLogo.svg"
            alt="Forestance Logo"
            className="w-28 mt-1"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
