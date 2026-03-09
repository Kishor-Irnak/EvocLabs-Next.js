"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/EvocLab_Logo.png";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "#", hasDropdown: true },
    { name: "Solutions", href: "#", hasDropdown: true },
    { name: "Resources", href: "#", hasDropdown: true },
    { name: "About", href: "#", hasDropdown: true },
    { name: "Pricing", href: "#", hasDropdown: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}
    >
      <div className="w-full max-w-7xl flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-[80px] h-[28px] relative">
            <Image
              src={logoImg}
              alt="Evoc Labs"
              fill
              className="object-contain filter brightness-125"
              priority
            />
          </div>
          <span className="text-white font-bold tracking-tight text-lg hidden sm:inline-block font-geist uppercase">
            Evoc
          </span>

          {""}
          <span
            className="italic text-white tracking-tight text-xl font-instrument-serif"
            style={{ fontFamily: '\"Playfair Display\", serif' }}
          >
            Labs
          </span>
          {""}
        </Link>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-1 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown size={14} className="opacity-70" />
              )}
            </Link>
          ))}
        </div>

        {/* Right: Auth Actions */}
        <div className="flex items-center gap-6">
          <Link
            href="/#login"
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors hidden sm:block"
          >
            Log In
          </Link>
          <Link
            href="/book-demo"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium px-5 py-2 rounded-full hidden sm:block transition-opacity duration-300 hover:opacity-90 shadow-sm"
          >
            Book a Demo
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-zinc-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:hidden z-40"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between text-lg font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={18} />}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <Link
                href="/#login"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-zinc-300 hover:text-white transition-colors text-center"
              >
                Log In
              </Link>
              <Link
                href="/book-demo"
                onClick={() => setIsMenuOpen(false)}
                className="bg-blue-600 text-white text-center py-4 rounded-full font-semibold mt-2 transition-transform"
              >
                Open Account
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
