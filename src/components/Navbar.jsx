import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const navHandler = () => {
    setOpen(!open);
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close the mobile menu after click
      document.body.style.overflow = "unset"; // Allow scrolling after menu is closed
    }
  };

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scroll ? "bg-gray-950 bg-opacity-90" : "bg-transparent"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex justify-between items-center px-5 py-3">
          <img src="/logo.png" alt="Logo" className="w-36" />
          <ul className="md:flex gap-6 items-center font-semibold text-xl text-white hidden">
            <li
              onClick={() => scrollToSection("#service")}
              className="hover:text-[#33CCCC] cursor-pointer transition-all"
            >
              Service
            </li>
            <li
              onClick={() => scrollToSection("#about")}
              className="hover:text-[#33CCCC] cursor-pointer transition-all"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection("#contact")}
              className="hover:text-[#33CCCC] cursor-pointer transition-all"
            >
              Contact Us
            </li>
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-[#33CCCC] cursor-pointer text-white px-4 py-2 rounded-md"
            >
              Mulai Sekarang
            </button>
          </ul>
          <Menu onClick={navHandler} className="sm:flex md:hidden text-white" />
        </div>
      </motion.div>
      {open && (
        <nav className="sm:flex md:hidden">
          <ul className="flex flex-col border-1 border-[#33CCCC] space-y-10 bg-gray-950 text-gray-300 w-[300px] h-[950px] items-center pt-36 absolute text-2xl font-semibold top-0 z-30 right-0">
            <li
              onClick={() => scrollToSection("#service")}
              className="hover:text-[#33CCCC] cursor-pointer transition-all"
            >
              Service
            </li>
            <li
              onClick={() => scrollToSection("#about")}
              className="hover:text-[#33CCCC] cursor-pointer transition-all"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection("#contact")}
              className="hover:text-[#33CCCC] cursor-pointer transition-all"
            >
              Contact Us
            </li>
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-[#33CCCC] cursor-pointer text-white px-4 py-2 rounded-md"
            >
              Mulai Sekarang
            </button>
            <X
              onClick={navHandler}
              className="z-50 absolute top-0 right-10 border-[#33CCCC] p-1 rounded-md"
            />
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
