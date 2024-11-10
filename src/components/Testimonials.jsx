import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    text: "Digital Meta Generasi berhasil mengubah visi kami menjadi kenyataan dengan website yang luar biasa. Tim mereka sangat profesional dan responsif. Kami sangat puas dengan hasilnya!",
    img: "/picture1.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Layanan pembuatan aplikasi mobile yang ditawarkan oleh Digital Meta Generasi sangat memuaskan. Mereka memahami kebutuhan kami dan memberikan solusi yang tepat dengan desain yang modern.",
    img: "/picture2.png",
  },
  {
    id: 3,
    name: "Michael Johnson",
    text: "Tim desain UI/UX Digital Meta Generasi berhasil menciptakan pengalaman pengguna yang luar biasa untuk platform kami. Mudah digunakan dan sangat intuitif.",
    img: "/picture3.png",
  },
  {
    id: 4,
    name: "Sara Lee",
    text: "Kami sangat terkesan dengan kualitas desain grafis yang mereka buat. Digital Meta Generasi berhasil memperkuat brand kami dengan visual yang modern dan profesional.",
    img: "/picture4.png",
  },
  {
    id: 5,
    name: "David Brown",
    text: "Animasi yang mereka buat untuk kampanye kami benar-benar menarik perhatian. Digital Meta Generasi mampu menghidupkan brand kami dengan cara yang unik dan kreatif.",
    img: "/picture5.png",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrow: true,
    infinite: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      style={{
        height: "600px",
        zIndex: -1,
        backgrooundColor: "#000000",
      }}
      className="relative py-20 overflow-x-hidden overflow-y-hidden px-7 md:px-0 bg-white"
    >
      <div className="absolute inset-0 bg-black opacity-85"></div>
      <div className="relative max-w-7xl mx-auto items-auto text-center">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-[#33CCCC] text-center"
          >
            Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-300 max-w-xl mx-auto mb-8"
          >
            Apa kata mereka tentang kami? Berikut adalah beberapa testimonial
            dari klien kami yang puas dengan layanan kami. Kami senang bisa
            membantu mereka mencapai tujuan mereka.
          </motion.p>
          {/* Testimonials Cards */}
        </div>
        <Slider
          {...{
            ...settings,
            slidesToShow: 4, // Menampilkan 4 testimonial sekaligus
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3, // 3 kolom di layar tablet
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2, // 2 kolom di layar mobile besar
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1, // 1 kolom di layar mobile kecil
                },
              },
            ],
          }}
        >
          {TestimonialData.map((data) => (
            <div key={data.id} className="my-6 px-4">
              <div className="flex flex-col gap-4 shadow-lg shadow-[#33CCCC] py-8 px-6 rounded-xl bg-gray-950 relative">
                <div className="mb-4 flex justify-center">
                  <img
                    src={data.img}
                    alt=""
                    className="rounded-full w-20 h-20 border-2 border-[#33CCCC]"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="space-y-3">
                    <p className="text-xs text-gray-500 text-center">
                      {data.text}
                    </p>
                    <h1 className="text-xl font-bold text-[#33CCCC] text-center">
                      {data.name}
                    </h1>
                  </div>
                </div>
                <p className="text-[#33CCCC]/20 text-9xl font-serif absolute top-0 right-0"></p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
