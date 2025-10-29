import React, { useState, useEffect } from "react";
import HeroCarousel from "../components/HeroCarousel";
import ProductCard from "../components/ProductCard";
import CardGrid from "../components/CardGrid";
import Filters from "../components/Filters";
import data from "../../public/data/products.json";

function Home({ onAddToCart }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Load products on mount
  useEffect(() => {
    setFilteredProducts(data);
  }, []);

  return (
    <>
      <HeroCarousel />

      {/* 🔍 Filter Section */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <Filters products={data} onFilterChange={setFilteredProducts} />
      </div>

      {/* 🛍 Product Grid Section */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <CardGrid products={filteredProducts} onAddToCart={onAddToCart} />
      </div>
    </>
  );
}

export default Home;
