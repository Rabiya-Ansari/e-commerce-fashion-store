import React, { useState } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";

function Header({ cartCount = 0, onSearch, onCartOpen }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch?.(value);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
    { name: "Kids", path: "/kids" },
    { name: "Sale", path: "/sale" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-[var(--color1)]/80 backdrop-blur-md text-white shadow-lg z-50"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-3">
       
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer flex items-center gap-2"
          onClick={() => navigate("/")}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[1.8rem] font-black tracking-widest text-[var(--yellow)]"
          >
            F<span className="text-[var(--color2)]">S</span>
          </motion.span>
          <p className="hidden sm:block text-gray-500 font-semibold tracking-[0.2em] uppercase">
            Fashion<span className="text-[var(--color2)]">Store</span>
          </p>
        </motion.div>

      
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold uppercase tracking-wide">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative transition-all duration-300 group ${
                  isActive
                    ? "text-[var(--color2)]"
                    : "text-gray-500 hover:text-[var(--yellow)]"
                }`
              }
            >
              {item.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[var(--color2)] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

      
        <div className="flex items-center gap-5">
         
          <div className="relative hidden sm:flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-gray-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search"
              className="bg-white/10 border border-gray-500 text-gray-500 rounded-full pl-9 pr-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color2)] placeholder-gray-400"
            />
          </div>

      
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={onCartOpen}
            className="relative cursor-pointer"
          >
            <ShoppingCart className="w-5 h-5 text-gray-500 hover:text-[var(--color2)] transition" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--yellow)] text-white text-[10px] font-bold rounded-full px-[6px] py-[1px] shadow-md">
                {cartCount}
              </span>
            )}
          </motion.div>

        
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-200 hover:text-[var(--color2)] transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[var(--color1)]/95 backdrop-blur-md border-t border-gray-700 shadow-lg"
          >
            <nav className="flex flex-col items-center gap-4 py-5">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-semibold uppercase tracking-wide transition-all duration-200 ${
                      isActive
                        ? "text-[var(--color2)]"
                        : "text-gray-300 hover:text-[var(--yellow)]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="flex items-center gap-2 mt-4 w-10/12">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="bg-white/10 border border-gray-500 text-white rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color2)] w-full placeholder-gray-400"
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
