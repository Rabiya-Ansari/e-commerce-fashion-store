import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="bg-[var(--color2)] text-[var(--yellow)] py-12 px-6 md:px-20">
 
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        <div>
          <h2 className="text-2xl font-bold mb-3 text-[var(--yellow)]">
            Fashion<span className="text-white">Store</span>
          </h2>
          <p className="text-white/80 leading-relaxed">
            Where elegance meets comfort. Discover handpicked collections
            designed to inspire your everyday style.
          </p>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-4 text-[var(--yellow)]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-white/80">
            <li className="hover:text-[var(--yellow)] transition cursor-pointer">
              Home
            </li>
            <li className="hover:text-[var(--yellow)] transition cursor-pointer">
              Shop
            </li>
            <li className="hover:text-[var(--yellow)] transition cursor-pointer">
              About Us
            </li>
            <li className="hover:text-[var(--yellow)] transition cursor-pointer">
              Contact
            </li>
          </ul>
        </div>


        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4 text-[var(--yellow)]">
            Stay Updated
          </h3>
          <p className="text-white/80 mb-4">
            Subscribe to our newsletter and never miss new arrivals or exclusive offers.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="bg-[var(--yellow)] text-black font-semibold px-5 py-2 rounded-lg hover:bg-white transition"
          >
            Join Newsletter
          </motion.button>
        </div>
      </div>

  
      <div className="w-full h-px bg-white/20 my-8" />

   
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/70 text-sm">
          © 2025 <span className="text-[var(--yellow)] font-semibold">FashionStore</span>. All rights reserved.
        </p>


        <div className="flex gap-4">
          {[Facebook, Instagram, Twitter, Mail].map((Icon, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.2, y: -2 }}
              className="p-2 rounded-full bg-white/10 hover:bg-[var(--yellow)] hover:text-black transition cursor-pointer"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>


      <AnimatePresence>
        {open && (
          <NewsletterForm
            onClose={() => setOpen(false)}
            onSuccess={() => console.log("Subscribed!")}
          />
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;
