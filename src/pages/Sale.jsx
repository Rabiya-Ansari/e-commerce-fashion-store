import React, { useState, useEffect } from "react";
import { Percent, Tag, ShoppingBag, Sparkles } from "lucide-react";

function Sale({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("All");

 
  useEffect(() => {
    fetch("./data/saleProduct.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      })
      .catch((err) => console.error("❌ Failed to load sale products:", err));
  }, []);


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
      <h2 className="text-3xl font-bold mb-8 mt-8 text-center text-black">
        Sale & Offers 🎉
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
            className="relative bg-white rounded-2xl p-4 shadow-md hover:shadow-yellow-400/40 transition overflow-hidden"
          >

            <div className="absolute top-3 left-3 bg-[var(--yellow)] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              SALE
            </div>


            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover rounded-xl mb-3"
            />


            <h3 className="text-lg font-semibold">{item.name}</h3>
            <div className="flex items-center gap-2">
              <p className="text-yellow-400 text-lg font-bold">
                ${item.salePrice}
              </p>
              <p className="line-through text-gray-400 text-sm">
                ${item.originalPrice}
              </p>
            </div>


            <button
              onClick={() => onAddToCart(item)}
              className="mt-3 w-full py-2 rounded-lg bg-[var(--yellow)] hover:bg-[var(--color2)] text-black font-semibold transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sale;
