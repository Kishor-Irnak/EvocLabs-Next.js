"use client";

import React from "react";
import { SiGoogleads, SiMeta, SiShopify, SiPhonepe } from "react-icons/si";
import { FaTruckFast } from "react-icons/fa6";
import { motion } from "framer-motion";

const partners = [
  { name: "F-SHIP", icon: FaTruckFast, color: "text-[#FF6B00]" },
  { name: "Google Ads", icon: SiGoogleads, color: "text-[#FBBC05]" },
  { name: "Meta Ads", icon: SiMeta, color: "text-[#1877F2]" },
  { name: "Shopify", icon: SiShopify, color: "text-[#96BF48]" },
  { name: "PhonePe", icon: SiPhonepe, color: "text-[#6739B7]" },
];

const LogoTicker: React.FC = () => {
  // Triple the list to ensure seamless looping without gaps
  const tickerItems = [...partners, ...partners, ...partners];

  return (
    <div className="py-20 bg-[#020202] border-b border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-white/5" />

      <div className="container max-w-7xl border-x border-white/10 mx-auto">
        <div className="mb-12 text-center">
          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">
            Official Infrastructure Partners
          </span>
        </div>

        <div className="relative flex w-full overflow-hidden">
          {/* Side Gradients for fading effect */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#020202] via-[#020202]/80 to-transparent z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#020202] via-[#020202]/80 to-transparent z-10" />

          {/* Framer Motion Ticker */}
          <motion.div
            className="flex items-center gap-16 md:gap-32 whitespace-nowrap"
            animate={{
              x: ["0%", "-33.33%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {tickerItems.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center transition-all duration-500 group"
              >
                <partner.icon
                  className={`text-4xl md:text-5xl ${partner.color} opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(255,255,255,0.05)]`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
