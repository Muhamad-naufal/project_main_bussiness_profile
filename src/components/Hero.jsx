import { ChevronRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      style={{
        height: "600px",
        backgroundColor: "#000000",
        overlay: "#111111",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: "-1",
      }}
      className="relative z-10 "
    >
      <div className="absolute bg-black opacity-85"></div>
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
              anda. Dengan harga yang terjangkau dan kualitas yang terbaik.
            </motion.p>
            <div className="flex gap-3 items-center">
              <motion.button
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="bg-[#33CCCC] text-white px-4 py-2 rounded-md font-semibold flex items-center"
              >
                Getting Started <ChevronRight />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="rounded-md px-4 py-2 bg-transparent text-white border-2 border-green-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]"
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
