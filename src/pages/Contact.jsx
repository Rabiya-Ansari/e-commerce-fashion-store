import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-64 bg-[url('/media/contact.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10">
          Contact
        </h1>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        {/* Left Form */}
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
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-1">How Can We Help?</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none bg-transparent"
              ></textarea>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <MapPin className="text-pink-500" /> Address
            </h3>
            <p className="text-gray-600">
              Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Phone className="text-pink-500" /> Let’s Talk
            </h3>
            <a
              href="tel:+18001236879"
              className="text-pink-500 hover:underline"
            >
              +1 800 1236879
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Mail className="text-pink-500" /> Sale Support
            </h3>
            <a
              href="mailto:support@cozastore.com"
              className="text-pink-500 hover:underline"
            >
              support@cozastore.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
