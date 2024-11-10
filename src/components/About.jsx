import React, { useState } from "react";
import CounterUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [counterOn, setCounterOn] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => setCounterOn(inView),
  });

  return (
    <div className="bg-gray-950 py-20 px-5 md:px-10 overflow-x-hidden overflow-y-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-7 items-center">
          <div className="md:w-1/2 space-y-5">
            <h1 className="font-bold text-4xl text-[#33CCCC]">About Us</h1>
            <p className="text-gray-300">
              Selamat datang di Official Website Digital Meta Generasi. Kami
              adalah perusahaan yang bergerak di bidang jasa pembuatan website.
              Kami sudah berdiri sejak tahun 2024 dan sudah banyak klien yang
              puas dengan hasil kerja kami. Kami akan selalu memberikan yang
              terbaik untuk klien kami.
            </p>
            <p className="text-gray-300">
              Jika Anda membutuhkan jasa pembuatan website, jangan ragu untuk
              menghubungi kami. Semoga kita bisa bekerja sama dengan baik dan
              menghasilkan website yang berkualitas. Terima kasih.
            </p>
            <button className="rounded-md px-4 py-2 bg-transparent text-white border-2 border-green-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="/favicon.png"
              alt="about"
              className="rounded-lg w-[400px]"
            />
          </div>
        </div>
        <div ref={ref} className="md:pl-10">
          <div className="flex gap-10">
            <div className="flex flex-col items-center text-center">
              <h1 className="font-bold text-3xl mg:text-4xt text-[#33CCCC]">
                {counterOn && <CounterUp start={0} end={10} duration={5} />}+
              </h1>
              <h3 className="text-sm text-gray-300">Happy Customer</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <h1 className="font-bold text-3xl mg:text-4xt text-[#33CCCC]">
                {counterOn && <CounterUp start={0} end={30} duration={5} />}+
              </h1>
              <h3 className="text-sm text-gray-300">Success Projects</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <h1 className="font-bold text-3xl mg:text-4xt text-[#33CCCC]">
                {counterOn && <CounterUp start={0} end={100} duration={5} />}%
              </h1>
              <h3 className="text-sm text-gray-300">Trusted Rate</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
