"use client"
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-yellow-500">
            Arsalan Shaikh
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-yellow-500 transition-colors">About</Link>
            <Link href="/projects" className="hover:text-yellow-500 transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
          </nav>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <motion.svg
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden mt-4 space-y-4 text-center bg-black p-4 rounded-lg ${isOpen ? 'block' : 'hidden'}`}
        >
          <Link href="/" className="block hover:text-yellow-500 transition-colors" onClick={handleLinkClick}>Home</Link>
          <Link href="/about" className="block hover:text-yellow-500 transition-colors" onClick={handleLinkClick}>About</Link>
          <Link href="/projects" className="block hover:text-yellow-500 transition-colors" onClick={handleLinkClick}>Projects</Link>
          <Link href="/contact" className="block hover:text-yellow-500 transition-colors" onClick={handleLinkClick}>Contact</Link>
        </motion.nav>
      </div>
    </header>
  );
}
