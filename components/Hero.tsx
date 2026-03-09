"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  onBookDemoClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemoClick }) => {
  return (
    <section className="relative">
      <div className="container flex flex-col text-center max-w-7xl mx-auto pt-46 px-6 pb-24 items-center">
        {/* Badge
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8 uppercase tracking-wider animate-pulse">
          India's No.1 E-Commerce Lab
        </div> */}

        {/* Main Title */}
        <h1 className="max-w-5xl sm:text-5xl md:text-7xl text-4xl tracking-tighter font-geist mx-auto text-white mb-6">
          Start at{" "}
          <span
            className="italic text-white tracking-tight font-instrument-serif"
            style={{ fontFamily: '\"Playfair Display\", serif' }}
          >
            Zero
          </span>{" "}
          Cost, Scale Fast.
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-white max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          We build brands that sell themselves. You focus on growing your
          business while we handle the strategy, design, and marketing. Pay only
          when you start making sales.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 items-center mb-4">
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 hover:bg-zinc-200 transition-colors text-sm font-semibold text-black bg-white rounded-full pt-3.5 px-6 pb-3.5"
          >
            Book a Free Demo
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
        <div className="text-xs font-medium text-white tracking-wide mb-20">
          4Cr+ Ad Spend • 250+ Brands Scaled
        </div>
      </div>
    </section>
  );
};

export default Hero;
