import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, CheckCircle } from "lucide-react";

function NewsletterForm({ onSuccess, onClose }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (e) => /\S+@\S+\.\S+/.test(e);

  const submit = (e) => {
    e.preventDefault();
    if (!validate(email)) return setError("Please enter a valid email address");
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onSuccess?.();
        onClose?.();
      }, 1500);
    }, 1000);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Main Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className="relative bg-zinc-900 text-white p-6 rounded-2xl w-[90%] max-w-md shadow-2xl border border-white/10 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <Mail className="w-6 h-6 text-orange-400" />
            <h3 className="text-xl font-bold">Join Our Newsletter</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Get exclusive fashion updates, new arrivals, and special offers!
          </p>

          {/* Form */}
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 px-3 py-2 rounded-lg bg-white/10 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg px-4 py-2 transition flex items-center justify-center"
            >
              {loading ? (
                <motion.div
                  className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"
                />
              ) : (
                "Subscribe"
              )}
            </motion.button>
          </form>

          {/* Error Message */}
          {error && <div className="text-red-400 mt-2 text-sm">{error}</div>}

          {/* No Thanks */}
          <div className="text-right mt-4">
            <button
              onClick={onClose}
              className="text-sm text-gray-400 hover:text-white transition"
            >
              No Thanks
            </button>
          </div>

          {/* ✅ Success Animation */}
          <AnimatePresence>
            {success && (
              <motion.div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="text-green-400"
                >
                  <CheckCircle className="w-16 h-16 mx-auto mb-2" />
                </motion.div>
                <p className="text-white font-semibold text-lg">
                  Subscription Successful!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
export default NewsletterForm