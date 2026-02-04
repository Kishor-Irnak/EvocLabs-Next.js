"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import DashboardPreview from "./DashboardPreview";
import Link from "next/link";
import Script from "next/script";

interface HeroProps {
  onBookDemoClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemoClick }) => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [0.95, 1]);
  const opacity = useTransform(scrollY, [0, 400], [0.8, 1]);

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[#020202] min-h-screen flex flex-col items-center">
      {/* Background (component) from Unicorn Studio */}
      <div
        className="aura-background-component absolute top-0 w-full -z-10 h-[800px] pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
        }}
      >
        <div
          data-us-project="bKN5upvoulAmWvInmHza"
          className="absolute w-full h-full left-0 top-0 -z-10"
        />
        <Script
          id="unicorn-studio-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !(function () {
                if (!window.UnicornStudio) {
                  window.UnicornStudio = { isInitialized: !1 };
                  var i = document.createElement("script");
                  ((i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"),
                    (i.onload = function () {
                      window.UnicornStudio.isInitialized ||
                        (setTimeout(function() { 
                          if(window.UnicornStudio && typeof window.UnicornStudio.init === 'function') {
                            window.UnicornStudio.init();
                            window.UnicornStudio.isInitialized = !0;
                          }
                        }, 100));
                    }),
                    (document.head || document.body).appendChild(i));
                }
              })();
            `,
          }}
        />
      </div>

      {/* Background Pattern - Diagonal Stripes */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(255, 255, 255, 0.015) 40px,
            rgba(255, 255, 255, 0.015) 41px
          )`,
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[600px] bg-white opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="container relative z-10 flex flex-col items-center text-center max-w-7xl border-x border-white/10 mx-auto px-6 pt-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-medium text-zinc-300 mb-8 uppercase tracking-[0.2em] animate-pulse"
        >
          For High-Growth Founders
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-6 max-w-5xl mx-auto bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500 pb-2"
        >
          Turn Strategy into
          <br />
          <span className="italic font-playfair font-normal">
            Profit Engine
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Stop guessing. Start engineering your business growth with a proven
          operating system.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mb-4"
        >
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 hover:bg-zinc-200 transition-all text-sm font-semibold text-black bg-white rounded-full px-8 py-4 shadow-xl shadow-white/5 active:scale-95"
          >
            Take the 5-Minute Diagnostic
            <ArrowRight size={16} />
          </Link>
          <Link
            href="#"
            className="inline-flex items-center px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-all active:scale-95"
          >
            See How It Works
          </Link>
        </motion.div>

        {/* Trust Anchor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[10px] md:text-xs font-medium text-zinc-500 tracking-[0.15em] uppercase mb-20"
        >
          29 years R&D • 7M+ decisions analyzed
        </motion.div>

        {/* Dashboard Preview Image */}
        <motion.div
          style={{ scale, opacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-6xl rounded-t-2xl border-t border-x border-white/10 bg-[#0a0a0a] shadow-[0_-20px_50px_-12px_rgba(255,255,255,0.05)] overflow-hidden mb-[-1px]"
        >
          {/* Header Bar */}
          <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/20 border border-[#FF5F56]/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/20 border border-[#FFBD2E]/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/20 border border-[#27C93F]/50" />
            </div>
          </div>

          <div className="p-1">
            <div className="bg-[#050505] rounded-t-lg overflow-hidden border border-white/5">
              <DashboardPreview />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
