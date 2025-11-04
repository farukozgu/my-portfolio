"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.header className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-sm" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <nav className="max-w-4xl mx-auto px-4 py-5 flex justify-between items-center">
        
        <div className="flex space-x-6 mx-auto">
          <Link href="#home" className="text-black font-medium relative overflow-hidden h-6 group">
             <span className="block group-hover:-translate-y-full transition-transform duration-300">Home</span>
            <span
                className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">Home</span>
          </Link>
          <Link href="#projects" className="text-black font-medium relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Projects</span>
            <span
                className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">Projects</span>
          </Link>
          <Link href="#about" className="text-black font-medium relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">About</span>
            <span
                className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">About</span>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};