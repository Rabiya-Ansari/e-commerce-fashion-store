import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  if (!product) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-lg group"
    >
      {/* 🖼 Clickable Image + Info → navigates to detail page */}
      <Link to={`/product/${product.id}`} className="block cursor-pointer">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover"
        />
        <div className="p-4 text-white">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-blue-400">${product.price}</p>
        </div>
      </Link>

      {/* 🛒 Add to Cart Button (still works separately) */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onAddToCart(product)}
        className="m-4 w-[calc(100%-2rem)] bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
      >
        Add to Cart
      </motion.button>
    </motion.div>
  );
}

export default ProductCard;
