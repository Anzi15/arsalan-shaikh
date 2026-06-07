"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Mail, Menu, X, Image } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { name: "About", href: "/about", icon: <User className="w-4 h-4" /> },
    { name: "Projects", href: "/projects", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Gallery", href: "/gallery", icon: <Image className="w-4 h-4" /> },
    { name: "Contact", href: "/contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 mx-auto w-[92%] max-w-7xl pointer-events-none">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`pointer-events-auto w-full transition-all duration-300 rounded-2xl md:rounded-full border border-white/10 shadow-2xl ${scrolled || isOpen
          ? "bg-black/60 backdrop-blur-xl border-yellow-500/20 py-3 px-6"
          : "bg-black/40 backdrop-blur-md py-4 px-8"
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo with animation */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <Link href="/" className="relative group flex items-center">
              <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent tracking-wide">
                Arsalan Shaikh
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium flex items-center gap-2 rounded-full hover:bg-white/5"
              >
                <span className="text-yellow-500/80">{link.icon}</span>
                {link.name}
              </Link>
            ))}

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-5 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all duration-300"
            >
              Get Involved
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close-icon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-yellow-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu-icon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 text-yellow-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-white/10 pt-4"
            >
              <div className="flex flex-col gap-1.5 pb-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 group"
                  >
                    <span className="text-yellow-500">{link.icon}</span>
                    <span className="font-medium text-sm">{link.name}</span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-yellow-500 text-xs">
                      →
                    </span>
                  </Link>
                ))}

                <div className="mt-3 pt-3 border-t border-white/5">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-xl shadow-lg shadow-yellow-500/10 text-sm uppercase tracking-wider"
                    onClick={handleLinkClick}
                  >
                    Get Involved →
                  </motion.button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}