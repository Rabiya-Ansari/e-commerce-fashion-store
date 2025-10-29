import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shirt,
  Watch,
  Footprints,
  Glasses,
  Sparkles,
  Briefcase,
} from "lucide-react";

function Men({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("All");

  // ✅ Load JSON Data Once
  useEffect(() => {
    fetch("/data/menProduct.json") // make sure file is inside /public/data/
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data); // show all at start
      })
      .catch((err) => console.error("❌ Failed to load men products:", err));
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

  // ✅ Categories
  const categories = [
    { label: "All", icon: Sparkles },
    { label: "Shirts", icon: Shirt },
    { label: "Watches", icon: Watch },
    { label: "Shoes", icon: Footprints }, // ✅ fixed Shoe icon issue
    { label: "Sunglasses", icon: Glasses },
    { label: "Bags", icon: Briefcase },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Men's Collection
      </h2>

      {/* 🧢 Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => handleFilter(label)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition 
              ${
                category === label
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-gray-600 hover:bg-blue-500/20 text-gray-300"
              }`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </div>

      {/* 🧥 Product Grid */}
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
            className="bg-gray-800 rounded-2xl p-4 shadow-md hover:shadow-blue-600/40 transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover rounded-xl mb-3"
            />
            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            <p className="text-blue-400">${item.price}</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onAddToCart(item)}
              className="mt-3 w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white"
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Men;
