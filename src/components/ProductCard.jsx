import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  if (!product) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative bg-white rounded-2xl overflow-hidden shadow-lg group"
    >
     
      <Link to={`/product/${product.id}`} className="block cursor-pointer">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-black">{product.name}</h3>
          <p className="text-gray-600 capitalize">{product.category}</p>
          <p className="text-black font-medium">${product.price}</p>
        </div>
      </Link>


      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onAddToCart(product)}
        className="m-4 w-[calc(100%-2rem)] bg-[var(--yellow)] hover:bg-[var(--color2)] text-white py-2 rounded-lg font-medium transition"
      >
        Add to Cart
      </motion.button>
    </motion.div>
  );
}

export default ProductCard;
