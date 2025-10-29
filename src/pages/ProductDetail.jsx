import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../public/data/products.json";

export default function ProductDetail({ onAddToCart }) {
  const { id } = useParams();
  const product = data.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center text-white py-20">
        <h2>Product not found 😢</h2>
        <Link to="/" className="text-blue-400 underline">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-2xl w-full h-96 object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-300 mb-4">{product.description}</p>
          <p className="text-2xl text-blue-400 font-semibold mb-6">
            ${product.price}
          </p>

          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Add to Cart
          </button>

          <div className="mt-6">
            <Link to="/" className="text-gray-400 hover:text-blue-400 underline">
              ← Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
