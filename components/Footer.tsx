"use client";

import React from "react";
import { Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] border-t border-white/10 mt-0">
      <div className="container max-w-7xl border-x border-white/10 mx-auto">
        {/* Social Media Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
          <a
            href="https://www.instagram.com/evoc.labz?igsh=N282c25vNGc5NG1k"
            target="_blank"
            className="group flex items-center justify-between p-6 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/3 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Instagram size={18} className="text-white" />
              <span className="text-sm font-medium text-white font-mono uppercase tracking-widest">
                Instagram
              </span>
            </div>
            <ArrowRight
              size={16}
              className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
            />
          </a>

          <a
            href="https://x.com/evoclabz?s=21"
            target="_blank"
            className="group flex items-center justify-between p-6 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/3 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Twitter size={18} className="text-white" />
              <span className="text-sm font-medium text-white font-mono uppercase tracking-widest">
                Twitter
              </span>
            </div>
            <ArrowRight
              size={16}
              className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
            />
          </a>

          <a
            href="https://www.linkedin.com/company/evoc-labs/"
            target="_blank"
            className="group flex items-center justify-between p-6 hover:bg-white/3 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Linkedin size={18} className="text-white" />
              <span className="text-sm font-medium text-white font-mono uppercase tracking-widest">
                LinkedIn
              </span>
            </div>
            <ArrowRight
              size={16}
              className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
            />
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 min-h-[300px]">
          <div className="p-8 md:p-12 border-r border-white/10 border-b md:border-b-0">
            <h4 className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-8 font-mono">
              Product
            </h4>
            <ul className="space-y-4">
              {["Technology", "Integrations", "Releases", "Software"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-zinc-400 hover:text-white transition-colors block uppercase tracking-wide"
                    >
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="p-8 md:p-12 border-r border-white/10 border-b md:border-b-0">
            <h4 className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-8 font-mono">
              Resources
            </h4>
            <ul className="space-y-4">
              {["Docs", "API Reference", "Tutorials", "Guides"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 hover:text-white transition-colors block uppercase tracking-wide"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-12 border-r border-white/10 border-b md:border-b-0">
            <h4 className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-8 font-mono">
              Company
            </h4>
            <ul className="space-y-4">
              {["Team", "Culture", "Jobs", "About"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 hover:text-white transition-colors block uppercase tracking-wide"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-12">
            <h4 className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-8 font-mono">
              Legal
            </h4>
            <ul className="space-y-4">
              {["Imprint", "Data Policy", "Cookies", "Terms"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 hover:text-white transition-colors block uppercase tracking-wide"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="px-8 md:px-12 pb-24 pt-20 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-[100px] h-[40px] bg-[url(https://cdn.midjourney.com/a3840b63-36c4-4a6b-80dd-5c41d0f4a259/0_0.png?w=800&q=80)] bg-cover bg-center rounded grayscale brightness-200"
                aria-label="Evoc Labs Logo"
              />
              <span className="text-2xl md:text-3xl font-oswald font-semibold tracking-tighter text-white uppercase italic">
                Profit Engine.
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-xs font-mono uppercase tracking-widest">
              Engineering business growth for the next generation of founders.
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col md:flex-row border border-white/10">
            <input
              type="email"
              placeholder="FOUNDER@EMAIL.COM"
              className="bg-zinc-900/50 text-white text-[10px] font-mono p-4 md:w-80 outline-none uppercase placeholder:text-zinc-700"
            />
            <button className="bg-white text-black text-[10px] font-bold px-8 py-4 uppercase tracking-widest hover:bg-zinc-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="px-8 md:px-12 py-6 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-zinc-800 uppercase tracking-[0.3em]">
          <span>© 2025 EVOC LABS</span>
          <span>SYSTEM_STABLE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
