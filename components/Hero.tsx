"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import DashboardPreview from "./DashboardPreview";

interface HeroProps {
  onBookDemoClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemoClick }) => {
  return (
    <section className="relative">
      <div className="container border-x flex flex-col text-center max-w-7xl border-white/10 mx-auto pt-32 px-6 pb-24 items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8 uppercase tracking-wider animate-pulse">
          For High-Growth Founders
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl bg-clip-text leading-[1.1] font-semibold text-transparent tracking-tighter bg-gradient-to-b from-white via-white to-zinc-500 max-w-5xl mx-auto mb-6">
          Turn Strategy into
          <br />
          <span className="italic font-playfair">Profit Engine</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Stop guessing. Start engineering your business growth with a proven
          operating system.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 items-center mb-4">
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 hover:bg-zinc-200 transition-colors text-sm font-semibold text-black bg-white rounded-full pt-3.5 px-6 pb-3.5"
          >
            Take the 5-Minute Diagnostic
            <ArrowRight size={16} />
          </Link>
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3.5 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors"
          >
            See How It Works
          </Link>
        </div>

        {/* Trust Anchor */}
        <div className="text-xs font-medium text-zinc-500 tracking-wide mb-20">
          29 years R&D • 7M+ decisions analyzed
        </div>

        {/* Dashboard Preview */}
        <div className="relative w-full max-w-6xl rounded-t-2xl border-t border-x border-white/10 bg-[#0a0a0a] shadow-[0_-20px_50px_-12px_rgba(255,255,255,0.05)] overflow-hidden mb-[-1px]">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
