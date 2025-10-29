import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";

export default function Filters({ products, onFilterChange }) {
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [size, setSize] = useState("All");

  const categories = ["All", "Men", "Women", "Kids", "Sale"];
  const sizes = ["All", "S", "M", "L", "XL"];

  useEffect(() => {
    const filtered = products.filter((p) => {
      // Normalize fields to lowercase
      const prodCategory = (p.category || p.gender || "").toLowerCase();
      const selectedCategory = category.toLowerCase();
      const categoryMatch =
        category === "All" || prodCategory === selectedCategory;

      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];

      // Support both array or string for sizes
      const prodSizes = Array.isArray(p.sizes)
        ? p.sizes
        : p.size
        ? [p.size]
        : [];

      const sizeMatch =
        size === "All" ||
        prodSizes.map((s) => s.toUpperCase()).includes(size.toUpperCase());

      return categoryMatch && priceMatch && sizeMatch;
    });

    onFilterChange(filtered);
  }, [category, priceRange, size, products, onFilterChange]);

  const handleClearFilters = () => {
    setCategory("All");
    setPriceRange([0, 500]);
    setSize("All");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className=" text-gray-800  p-5  mb-6 "
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="text-[var--yellow] w-5 h-5" />
          <h2 className="text-lg font-semibold">Filter Products</h2>
        </div>
        <button
          onClick={handleClearFilters}
          className="flex items-center gap-1 text-sm text-gray-800 hover:text-[var(--color2)]"
        >
          <X className="w-4 h-4" /> Clear Filters
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm text-gray-800 mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className=" rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-[var(--color2)]"
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Price Range (${priceRange[0]} - ${priceRange[1]})
          </label>
          <input
            type="range"
            min="0"
            max="500"
            step="10"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full accent-[var(--yellow)]"
          />
        </div>

        {/* Size Filter */}
        <div>
          <label className="block text-sm text-gray-800 mb-1">Size</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className=" rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-[var(--color2)]"
          >
            {sizes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  );
}
