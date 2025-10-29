import React, { useState } from "react";
import NewsletterForm from "./NewsletterForm";

function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="bg-black text-gray-400 py-10 text-center">
      <p className="mb-4">© 2025 FashionStore. All rights reserved.</p>
      <button
        onClick={() => setOpen(true)}
        className="bg-orange-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Join Newsletter
      </button>

      {open && (
        <NewsletterForm
          onClose={() => setOpen(false)}
          onSuccess={() => console.log("Subscribed!")}
        />
      )}
    </footer>
  );
}
export default Footer