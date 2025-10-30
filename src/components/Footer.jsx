import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="bg-[var(--color2)] text-[var(--yellow)] py-12 px-6 md:px-20 relative overflow-hidden">
     
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-[var(--yellow)]/10 rounded-full blur-3xl pointer-events-none"
      />

     
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left z-10">
      
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center md:items-start"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[1.8rem] font-black tracking-widest text-[var(--yellow)]"
            >
              F<span className="text-white">S</span>
            </motion.span>
            <p className="text-gray-300 font-semibold tracking-[0.2em] uppercase">
              Fashion<span className="text-white">Store</span>
            </p>
          </motion.div>

          <p className="text-white/80 leading-relaxed mt-4">
            Where elegance meets comfort. Discover handpicked collections
            designed to inspire your everyday style.
          </p>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[var(--yellow)]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-white/80">
            {["Home", "Shop", "About Us", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-[var(--yellow)] transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

    
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4 text-[var(--yellow)]">
            Stay Updated
          </h3>
          <p className="text-white/80 mb-4 text-sm leading-relaxed">
            Subscribe to our newsletter and never miss new arrivals or
            exclusive offers.
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

  
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 z-10">
        <p className="text-white/70 text-sm text-center md:text-left">
          © 2025{" "}
          <span className="text-[var(--yellow)] font-semibold">
            FashionStore
          </span>
          . All rights reserved.
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
