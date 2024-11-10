import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navHandler = () => {
    setOpen(!open);
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <div className="bg-gray-950 py-3">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex justify-between items-center px-5">
          <img src="/logo.png" alt="" className="w-36" />
          <ul className="md:flex gap-6 items-center font-semibold text-xl text-white hidden">
            <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
              Service
            </li>
            <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
              About
            </li>
            <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
              Contact Us
            </li>
            <button className="bg-[#33CCCC] cursor-pointer text-white px-4 py-2 rounded-md">
              Mulai Sekarang
            </button>
          </ul>
          {/* Menampilkan ikon hamburger hanya di ponsel */}
          <Menu onClick={navHandler} className="sm:flex md:hidden text-white" />
        </div>
      </motion.div>
      {open ? (
        <nav className="sm:flex md:hidden">
          <ul className="flex flex-col border-1 border-[#33CCCC] space-y-10 bg-gray-950 text-gray-300 w-[300px] h-[950px] items-center pt-36 absolute text-2xl font-semibold top-0 z-30 right-0">
            <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
              Service
            </li>
            <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
              About
            </li>
            <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
              Contact Us
            </li>
            <button className="bg-[#33CCCC] cursor-pointer text-white px-4 py-2 rounded-md">
              Mulai Sekarang
            </button>
            <X
              onClick={navHandler}
              className="z-50 absolute top-0 right-10 border-[#33CCCC] p-1 rounded-md"
            />
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

export default Navbar;
