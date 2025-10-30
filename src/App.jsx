import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Sale from "./pages/Sale";
import AOS from "aos";
import "aos/dist/aos.css";



function App() {
 useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
      easing: "ease-in-out", 
    });
  }, []);


  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [productsData, setProductsData] = useState([]);


  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProductsData(data))
      .catch((err) => console.error(" Failed to load products:", err));
  }, []);


  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
    setIsCartOpen(true); 
  };

 
  const handleQtyChange = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0) 
    );
  };


  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };


  const handleCheckoutComplete = () => {
    setCartItems([]);
    alert("🎉 Checkout complete! Thank you for shopping.");
  };

  return (
    <BrowserRouter>
      <div>
        <Header
          onCartOpen={() => setIsCartOpen(true)}
          cartCount={cartItems.reduce((a, b) => a + b.qty, 0)}
        />

        <Routes>
          <Route
            path="/"
            element={<Home products={productsData} onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail onAddToCart={handleAddToCart} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/women"
            element={<Women onAddToCart={handleAddToCart} />} // ✅ FIXED
          />
          <Route path="/men" element={<Men onAddToCart={handleAddToCart} />} />
          <Route path="/kids" element={<Kids  onAddToCart={handleAddToCart} />} />
          <Route path="/sale" element={<Sale onAddToCart={handleAddToCart} />}/>
        </Routes>


        <Footer />

      
        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onQtyChange={handleQtyChange}
          onRemove={handleRemoveItem}
          onCheckoutComplete={handleCheckoutComplete}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
