import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Diamond,
  Shirt,
  Hand,
  Sparkles,
  Footprints,
} from "lucide-react";

function Women({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("All");

  // ✅ Load JSON Data Once
  useEffect(() => {
    fetch("/data/womenProduct.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data); // show all at start
      })
      .catch((err) => console.error("❌ Failed to load products:", err));
  }, []);

  // ✅ Handle Category Filter
  const handleFilter = (cat) => {
    setCategory(cat);
    if (cat === "All") {
      setFiltered(products);
    } else {
      setFiltered(products.filter((p) => p.category === cat));
    }
  };

  const categories = [
    { label: "All", icon: Sparkles },
    { label: "Hand Bag", icon: Hand },
    { label: "Women Suit", icon: Shirt },
    { label: "Jewellery", icon: Diamond },
    { label: "Shoes", icon: Footprints },
    { label: "Sandals", icon: ShoppingBag },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Women's Collection
      </h2>

      {/* 🩷 Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => handleFilter(label)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition 
              ${
                category === label
                  ? "bg-pink-600 border-pink-600"
                  : "border-gray-600 hover:bg-pink-500/20"
              }`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </div>

      {/* 🛍️ Product Grid */}
      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {filtered.map((item, index) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-gray-800 rounded-2xl p-4 shadow-md hover:shadow-pink-600/40 transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover rounded-xl mb-3"
            />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-pink-400">${item.price}</p>

            {/* ✅ Corrected Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onAddToCart(item)} // ✅ fixed (was product)
              className="mt-3 w-full py-2 rounded-lg bg-pink-600 hover:bg-pink-700 transition"
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Women;
