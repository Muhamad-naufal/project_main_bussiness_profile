import { ChevronRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
const scrollToSection = (id) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // Close the mobile menu after click
    document.body.style.overflow = "unset"; // Allow scrolling after menu is closed
  }
};
const Hero = () => {
  return (
    <div
      style={{
        height: "600px",
        background: "linear-gradient(135deg, #33CCCC, #111111)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay */}
      <div className="relative max-w-7xl mx-auto">
        <div className="flex lg:h-[650px] justify-center items-center lg:pt-0 pt-20">
          <div className="flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0">
            <motion.h3
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-white text-lg lg:text-xl"
            >
              Digital Meta Generasi
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-4xl text-white lg:text-6xl font-bold "
            >
              Kembangkan Bisnismu <br />
              <span className="text-[#33CCCC]">Solusi Pembuatan Website</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-gray-200 text-sm"
            >
              Kami menyediakan layanan pembuatan website untuk kebutuhan bisnis
              Anda. Dengan harga yang terjangkau dan kualitas yang terbaik.
            </motion.p>
            <div className="flex gap-3 items-center">
              <motion.button
                onClick={() => scrollToSection("#contact")}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="bg-[#33CCCC] text-white px-4 py-2 rounded-md font-semibold flex items-center hover:bg-[#33CCCC] hover:border-[#33CCCC] transition-all"
              >
                Getting Started <ChevronRight />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("#about")}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="rounded-md px-4 py-2 bg-transparent text-white border-2 border-green-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] hover:bg-[#33CCCC] hover:border-[#33CCCC] transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
