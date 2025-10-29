import React, { useState } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Header({ cartCount = 0, onSearch, onCartOpen }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch?.(value);
  };

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "MEN", path: "/men" },
    { name: "WOMEN", path: "/women" },
    { name: "KIDS", path: "/kids" },
    { name: "SALE", path: "/sale" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-[var(--color1)] text-gray-800 shadow-md z-50"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-3">
        {/* Left: Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="text-2xl font-extrabold tracking-wide cursor-pointer"
        >
          Mini<span className="text-[var(--color2)]">Store</span>.
        </motion.h1>

        {/* Middle: Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-500 hover:text-[var(--color2)] transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right: Search + Icons */}
        <div className="flex items-center gap-4">
          {/* Search bar (desktop only) */}
          <div className="relative hidden sm:flex items-center">
            <Search className="absolute left-2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search..."
              className="border border-gray-300 rounded-full pl-8 pr-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color2)] transition-all"
            />
          </div>

          {/* Cart Icon */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={onCartOpen}
            className="relative flex items-center justify-center cursor-pointer"
          >
            <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-[var(--color2)] transition-colors duration-200" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--yellow)] text-white text-[10px] font-bold rounded-full px-[6px] py-[1px] shadow-md">
                {cartCount}
              </span>
            )}
          </motion.div>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 hover:text-[var(--color2)] transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[var(--color1)] border-t border-gray-300 shadow-lg"
          >
            <nav className="flex flex-col items-center gap-4 py-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-600 hover:text-[var(--color2)] font-semibold transition"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-2 mt-3">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="bg-white border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color2)]"
                />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
