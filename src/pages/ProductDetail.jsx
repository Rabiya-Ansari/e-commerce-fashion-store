import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductDetail({ onAddToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/data/products.json") // ✅ Corrected Path
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="text-center text-gray-700 py-20">
        <h2>Loading product...</h2>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-5xl mx-auto mt-8 px-6 py-10 text-black"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src={product.image}
          alt={product.name}
          className="rounded-2xl w-full h-96 object-cover shadow-lg"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl text-[var(--color2)] font-semibold mb-6">
            ${product.price}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddToCart(product)}
            className="bg-[var(--yellow)] hover:bg-[var(--color2)] text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Add to Cart
          </motion.button>

          <div className="mt-6">
            <Link
              to="/"
              className="text-[var(--yellow)] hover:text-[var(--color2)] underline"
            >
              ← Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
