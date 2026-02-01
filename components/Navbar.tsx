"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onCareersClick?: () => void;
  onHomeClick?: () => void;
  onLoginClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onCareersClick,
  onHomeClick,
  onLoginClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = React.useRef(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine direction and toggle visibility
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setIsScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Process", href: "/#process" },
    { name: "Results", href: "/#results" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Reviews", href: "/#services" },
    { name: "Founder", href: "/#founder" },
    { name: "Careers", href: "/careers" },
  ];

  const handleNavAction = (
    e: React.MouseEvent,
    link: { name: string; href: string; action?: string },
  ) => {
    if (link.href.startsWith("/#")) {
      // If we are already on home, let normal anchor work
      // If not, navigate to home first
      if (window.location.pathname !== "/") {
        // e.preventDefault();
        // router.push(link.href);
      }
    }
    handleLinkClick();
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-8 h-8 rounded flex items-center justify-center">
            <Image
              src="/EvocLab_Logo.png"
              alt="Evoc Labs Logo"
              width={32}
              height={32}
              className="opacity-90"
            />
          </div>
          <span className="font-semibold text-xl tracking-tight text-text-main">
            Evoc Labs
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <div className="bg-surface/50 border border-border rounded-full px-2 py-1 flex items-center backdrop-blur-sm shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavAction(e, link)}
                className="text-sm font-medium text-text-secondary hover:text-text-main px-4 py-2 rounded-full hover:bg-surface-highlight transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            variant="ghost"
            className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-text-main text-background text-sm font-semibold tracking-wide shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all duration-300 hover:bg-text-main/90"
          >
            <Link href="/login">
              Log in
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-text-secondary hover:text-text-main transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4 shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavAction(e, link)}
                className="text-text-secondary py-2 text-lg font-medium border-b border-border last:border-0 hover:text-text-main"
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="w-full flex items-center justify-center gap-2 py-6 rounded-xl bg-text-main text-background font-semibold hover:opacity-90 transition-all"
            >
              <Link href="/login">
                Log in
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
