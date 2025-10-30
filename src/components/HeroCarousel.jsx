import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; 


const slides = [
  {
    id: 1,
    image: "./media/hero1.png",
    title: "New Season Arrivals",
    subtitle: "Discover the latest trends in fashion.",
    button: "Shop Now",
    link: "/women",
  },
  {
    id: 2,
    image: "./media/hero2.png",
    title: "Summer Collection 2025",
    subtitle: "Bright colors. Bold styles. Be you.",
    button: "Explore Collection",
    link: "/men",
  },
  {
    id: 3,
    image: "./media/hero3.png",
    title: "Exclusive Sale",
    subtitle: "Up to 50% off selected items.",
    button: "Shop the Sale",
    link: "/sale",
  },
];

function HeroCarousel() {
  const [index, setIndex] = useState(0);

 
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden">
    
      <AnimatePresence>
        {slides.map(
          (slide, i) =>
            i === index && (
              <motion.div
                key={slide.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1 }}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
              
                <div className="absolute inset-0 bg-black/50" />

               
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                  <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-4xl md:text-6xl font-extrabold mb-4"
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-lg md:text-2xl text-gray-200 mb-8 max-w-xl"
                  >
                    {slide.subtitle}
                  </motion.p>

                 
                  <Link to={slide.link}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="bg-[var(--color2)] hover:bg-[var(--yellow)] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all"
                    >
                      {slide.button}
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

     
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-[var(--yellow)] text-white p-3 rounded-full transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-[var(--yellow)] text-white p-3 rounded-full transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

    
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setIndex(i)}
            whileHover={{ scale: 1.2 }}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-[var(--color2)]" : "bg-gray-400/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;
