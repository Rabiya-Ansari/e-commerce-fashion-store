import React from "react";
import ProductCard from "./ProductCard";

function CardGrid({ products, onAddToCart }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        No products found matching your filters 😢
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-12">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  );
}

export default CardGrid;
