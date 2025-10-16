import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom"; // added

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  // Shadow/background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setBgColor("white");
      else setBgColor("transparent");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Blog & News", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      style={{ backgroundColor: bgColor }}
      className="fixed w-full top-0 z-40 border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* --- Top Banner --- */}
      <div className="text-center text-xs py-1 px-3 bg-emerald-50 text-emerald-800 flex items-center justify-center gap-2 rounded-full shadow-sm overflow-hidden">
        {/* Banner icons and text */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="red"
          className="w-5 h-5"
          initial={{ x: "1000%", rotate: -1440 }}
          animate={{ x: 0, rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
        </motion.svg>

        <span className="font-semibold">10% discount on your first order</span>
        <span> •</span>

        <motion.div
          className="flex items-center gap-1"
          initial={{ x: "700%" }}
          animate={{ x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            className="w-5 h-5"
          >
            <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
            <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
            <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
          </motion.svg>
        </motion.div>

        <span className="font-semibold">Free shipping over ₹999</span>
      </div>

      {/* --- Main Nav --- */}
      <div className="max-w-6xl mx-auto px-2 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="/Myura_logo.avif" alt="Myura" className="w-24 h-12 object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-5 text-gray-800 text-md justify-center w-full">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-700 ${
                  isActive ? "text-emerald-700 font-semibold" : "text-gray-800"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="text-md font-medium text-gray-700 px-4 py-2 rounded-full hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-300 focus:ring-2 focus:ring-emerald-300"
          >
            Login
          </Link>

          <Link
            to="/cart"
            className="relative p-2 rounded-full text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-300 focus:ring-2 focus:ring-emerald-300"
          >
            <span className="sr-only">Cart</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs font-semibold rounded-full px-1.5 py-0.5 shadow">
              0
            </span>
          </Link>

          {/* Hamburger (mobile only) */}
          <button className="md:hidden p-2 rounded-full hover:bg-emerald-50" onClick={() => setIsOpen(!isOpen)}>
            <div className={`w-6 h-0.5 bg-gray-700 my-1 transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-gray-700 my-1 ${isOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-gray-700 my-1 transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white border-t shadow-lg absolute top-full left-0 w-full flex flex-col p-4 z-50"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-emerald-50 hover:text-emerald-700 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
