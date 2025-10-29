import React from "react";
import { motion } from "framer-motion";

export const HexagonBackground = ({ className = "" }) => {
  const hexagons = Array.from({ length: 25 }); // number of hexagons

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {hexagons.map((_, i) => {
        const size = Math.random() * 40 + 20; // 20px–60px
        const x = Math.random() * 100; // random X%
        const y = Math.random() * 100; // random Y%
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        const opacity = Math.random() * 0.4 + 0.2;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity,
              y: [y + "%", y - 10 + "%", y + "%"],
              rotate: [0, 60, 120, 180],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="absolute"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${x}%`,
              top: `${y}%`,
              background:
                "linear-gradient(135deg, var(--color1), var(--color2))",
              clipPath:
                "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
              filter: "blur(1px)",
              opacity,
            }}
          />
        );
      })}
    </div>
  );
};
