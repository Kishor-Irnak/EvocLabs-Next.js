"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
    { name: "Solution", href: "/#solution" },
    { name: "Results", href: "/#results" },
    { name: "Process", href: "/#process" },
    { name: "Utilities", href: "/#utilities" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-0 flex justify-center">
      <div className="w-full max-w-4xl bg-black/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-between py-2 px-2 md:pl-6 shadow-2xl">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-[120px] h-[40px] relative">
            <Image
              src="/EvocLab_Logo.png"
              alt="Evoc Labs"
              fill
              className="object-contain filter brightness-125"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-2">
          <Link
            href="/book-demo"
            className="bg-white text-black text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-zinc-200 transition-colors hidden sm:block shadow-lg shadow-white/5 active:scale-95 transition-all"
          >
            Get Started
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
                  className="text-lg font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/book-demo"
                onClick={() => setIsMenuOpen(false)}
                className="bg-white text-black text-center py-4 rounded-full font-semibold mt-4 active:scale-95 transition-transform"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
