import { motion } from "framer-motion";
import React from "react";

const Service = () => {
  const services = [
    {
      icon: "/web.gif",
      name: "Web Development",
      description:
        "Bantu bikin website dengan teknologi terbaru, biar bisnis kamu makin maksimal online dan cepet dikenal!",
    },
    {
      icon: "/mobile.gif",
      name: "Mobile Development",
      description:
        "Buat aplikasi mobile untuk Android dan iOS yang mudah dipakai kustomer dan responsif.",
    },
    {
      icon: "/ui.gif",
      name: "UI/UX Design",
      description:
        "Desain UI/UX yang menarik dan gampang digunakan untuk aplikasi atau website kamu.",
    },
    {
      icon: "/graphic.gif",
      name: "Graphic Design",
      description:
        "Desain grafis yang membuat brand kamu lebih keren, lebih mantap dan mudah dikenali.",
    },
    {
      icon: "/animasi.gif",
      name: "Animation Design",
      description:
        "Bikin animasi kreatif yang bikin brand kamu lebih hidup,menarik perhatian, dan memorable.",
    },
  ];

  return (
    <div id="service" className="bg-gray-900 pt-10 pb-20 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center font-bold text-4xl pb-12 text-[#33CCCC]">
          Service Kami
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-0 blur bg-[#33CCCC]"></div>
              <div className="border rounded-md relative flex flex-col space-y-3 bg-[#8eecec] hover:bg-[#33CCCC] hover:transition-all p-7">
                <img src={item.icon} alt="" className="w-20 rounded-full" />
                <h3 className="font-semibold text-xl">{item.name}</h3>
                <p className="text-gray-800">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
