import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail({ onAddToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("../data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="text-center text-white py-20">
        <h2>Loading product...</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-8 px-6 py-10 text-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-2xl w-full h-96 object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-300 mb-4">{product.description}</p>
          <p className="text-2xl text-black font-semibold mb-6">
            ${product.price}
          </p>

          <button
            onClick={() => onAddToCart(product)}
            className="bg-[var(--yellow)] hover:bg-[var(--color2)] text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Add to Cart
          </button>

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
    </div>
  );
}
