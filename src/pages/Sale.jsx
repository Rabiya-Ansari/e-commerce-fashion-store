import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Percent, Tag, ShoppingBag, Sparkles } from "lucide-react";

function Sale({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("All");

  // ✅ Load All Sale Products (Combined)
  useEffect(() => {
    fetch("/data/saleProduct.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data); // show all items initially
      })
      .catch((err) => console.error("❌ Failed to load sale products:", err));
  }, []);

  // ✅ Filter Handler
  const handleFilter = (cat) => {
    setCategory(cat);
    if (cat === "All") setFiltered(products);
    else setFiltered(products.filter((p) => p.category === cat));
  };

  const categories = [
    { label: "All", icon: Sparkles },
    { label: "Men", icon: Tag },
    { label: "Women", icon: ShoppingBag },
    { label: "Kids", icon: Percent },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
        Sale & Offers 🎉
      </h2>

      {/* 💥 Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => handleFilter(label)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition 
              ${
                category === label
                  ? "bg-yellow-500 border-yellow-500 text-black font-semibold"
                  : "border-gray-600 hover:bg-yellow-500/20 text-white"
              }`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </div>

      {/* 🛍️ Sale Items Grid */}
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
            className="relative bg-gray-800 rounded-2xl p-4 shadow-md hover:shadow-yellow-400/40 transition overflow-hidden"
          >
            {/* 🏷️ SALE Tag */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg"
            >
              SALE
            </motion.div>

            {/* 🖼️ Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover rounded-xl mb-3"
            />

            {/* 📦 Product Info */}
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <div className="flex items-center gap-2">
              <p className="text-yellow-400 text-lg font-bold">
                ${item.salePrice}
              </p>
              <p className="line-through text-gray-400 text-sm">
                ${item.originalPrice}
              </p>
            </div>

            {/* 🛒 Add to Cart */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onAddToCart(item)}
              className="mt-3 w-full py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition"
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Sale;
