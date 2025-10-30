import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-white text-gray-800">
     
      <div className="relative h-64 bg-[url('/media/contact.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10">
          Contact
        </h1>
      </div>

     
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 p-8 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send Us A Message
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Your Email Address</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <Mail className="w-5 h-5 text-gray-500 ml-3" />
                <input
                  type="email"
                  placeholder="xyz@gmail.com"
                  className="w-full px-3 py-2 outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-1">How Can We Help?</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none bg-transparent resize-none"
              ></textarea>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[var(--yellow)] hover:bg-[var(--color2)] text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <MapPin className="text-[var(--yellow)]" /> Address
            </h3>
            <p className="text-[var(--yellow)]">
              fashion Store Center 8th floor, 379 Karachi St, Pakistan, NY 10018 PK
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Phone className="text-[var(--yellow)]" /> Let’s Talk
            </h3>
            <a
              href="tel:+18001236879"
              className="text-[var(--yellow)] hover:underline"
            >
              +1 800 1236879
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Mail className="text-[var(--yellow)]" /> Sale Support
            </h3>
            <a
              href="mailto:support@cozastore.com"
              className="text-[var(--yellow)] hover:underline"
            >
              fashionstore@.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
