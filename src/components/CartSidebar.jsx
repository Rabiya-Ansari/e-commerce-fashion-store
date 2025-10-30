import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag } from "lucide-react";

function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  onQtyChange,
  onRemove,
  onCheckoutComplete, 
}) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

         
          <motion.div
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-zinc-900 text-white z-50 shadow-2xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
           
            <div className="flex justify-between items-center p-5 border-b border-zinc-700">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[var(--yellow)]" />
                Your Cart
              </h2>
              <button onClick={onClose}>
                <X className="w-6 h-6 text-gray-300 hover:text-white transition" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-4 bg-zinc-800/70 p-3 rounded-lg backdrop-blur-sm shadow-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold">{item.name}</h3>
                      <p className="text-gray-400 text-sm">${item.price.toFixed(2)}</p>

                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => onQtyChange(item.id, -1)}
                          className="px-2 py-1 bg-zinc-700 rounded hover:bg-zinc-600 text-lg"
                        >
                          −
                        </button>
                        <span className="text-sm font-medium">{item.qty}</span>
                        <button
                          onClick={() => onQtyChange(item.id, +1)}
                          className="px-2 py-1 bg-zinc-700 rounded hover:bg-zinc-600 text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-[var(--yellow)] hover:text-[var(--color2)] transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </motion.div>
                ))
              ) : (
                <p className="text-center text-gray-400 mt-8">
                  Your cart is empty 🛒
                </p>
              )}
            </div>

           
            {cartItems.length > 0 && (
              <div className="border-t border-zinc-700 p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-lg font-semibold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full bg-[var(--yellow)] hover:bg-[var(--color2)] py-3 rounded-xl font-semibold transition"
                >
                  Proceed to Checkout
                </motion.button>
              </div>
            )}
          </motion.div>

          
          <AnimatePresence>
            {isCheckoutOpen && (
              <>
                <motion.div
                  className="fixed inset-0 bg-black/60 z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsCheckoutOpen(false)}
                />
                <motion.div
                  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  bg-zinc-900 text-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-md z-50"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                >
                  <h2 className="text-2xl font-bold mb-3">Checkout Summary</h2>
                  <p className="text-gray-400 mb-4">
                    Total items:{" "}
                    <span className="text-white font-semibold">
                      {cartItems.reduce((sum, i) => sum + i.qty, 0)}
                    </span>
                  </p>
                  <p className="text-gray-400 mb-6">
                    Subtotal:{" "}
                    <span className="text-white font-semibold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </p>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsCheckoutOpen(false);
                      onClose();
                      onCheckoutComplete(); 
                    }}
                    className="w-full bg-[var(--yellow)] hover:bg-[var(--color2)] py-3 rounded-lg font-semibold"
                  >
                    Confirm Purchase
                  </motion.button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartSidebar;
