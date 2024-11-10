import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-950">
      <div className="max-w-7xl mx-auto items-center flex flex-col py-8 px-4 md:px-8 min-h-screen">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-[#33CCCC] mb-4 text-center"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="text-gray-300 text-center max-w-xl mb-12"
        >
          Pertanyaan atau masukan? Jangan ragu untuk menghubungi kami.
        </motion.p>
        <div className="grid md:grid-flow-col gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="bg-[#c7e9ec]  shadow-xl shadow-[#33CCCC] rounded-lg p-8 md:p-12 max-w-xl md:w-[400px]"
          >
            <form
              action="https://formspree.io/f/xpwzrwzl"
              method="POST"
              className="flex flex-col space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-3 block w-full text-white border-2 border-[#33CCCC] bg-gray-900 rounded-md shadow-md sm:text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="mt-1 p-3 block w-full text-white border-2 border-[#33CCCC] bg-gray-900 rounded-md shadow-md sm:text-sm"
                  placeholder="example@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-1 p-3 block w-full text-white border-2 border-[#33CCCC] bg-gray-900 rounded-md shadow-md sm:text-sm"
                  placeholder="Hello World"
                ></textarea>
              </div>
              <button className="bg-[#33CCCC] text-white py-2 px-4 rounded-md hover:bg-black">
                Send
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="bg-[#c7e9ec]  shadow-xl shadow-[#33CCCC] rounded-lg p-8 md:p-12 max-w-3xl w-full flex flex-col items-center md:flex-row gap-7 space-y-6 md:space-y-0 md:space-x-8"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
              <div className="text-gray-950 flex gap-2 items-center">
                <MapPin fill="#33CCCC" className="text-gray-900" />
                <p>
                  No. 17, RT 01, RW 02, <br />
                  Dk. Krajan, Ds. Pituruh, Kec. Pituruh, <br />
                  Kab. Purworejo, Jawa Tengah, Indonesia
                </p>
              </div>
              <div className="text-gray-950 flex gap-2 items-center">
                <Phone fill="#33CCCC" className="text-gray-900" />
                <p className="text-gray-950 mt-4">Phone: (+62) 822008862336</p>
              </div>
              <div className="text-gray-950 flex gap-2 items-center">
                <Mail fill="#33CCCC" className="text-gray-900" />
                <p className="text-gray-950 mt-4">
                  Gmail: digitalmetagenerasi@gmail.com
                </p>
              </div>
            </div>
            <div>
              <div className="w-full h-64 bg-gray-300 rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d587.7633265706561!2d109.84629915009472!3d-7.68480112630949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sid!4v1731204494155!5m2!1sen!2sid"
                  className="w-full h-full rounded-lg"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  aria-hidden="false"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
