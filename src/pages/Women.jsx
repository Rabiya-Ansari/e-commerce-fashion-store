import React, { useState, useEffect } from "react";
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


  useEffect(() => {
    fetch("/data/womenProduct.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      })
      .catch((err) => console.error(" Failed to load products:", err));
  }, []);


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
      <h2 className="text-3xl font-bold mb-8 mt-8 text-center text-black">
        Women's Collection
      </h2>

   
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => handleFilter(label)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition 
              ${
                category === label
                  ? "bg-[var(--yellow)] border-[var(--yellow)] text-black"
                  : "border-[var(--color2)] hover:bg-[var(--yellow)] text-black"
              }`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </div>

     
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-4 shadow-md hover:shadow-yellow-400/40 transition overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover rounded-xl mb-3"
            />
            <h3 className="text-lg font-semibold text-black">{item.name}</h3>
            <p className="text-gray-600">${item.price}</p>

            <button
              onClick={() => onAddToCart(item)}
              className="mt-3 w-full py-2 rounded-lg bg-[var(--yellow)] hover:bg-[var(--color2)] transition text-white"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Women;
