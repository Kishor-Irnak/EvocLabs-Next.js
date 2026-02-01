"use client";

import React, { useRef } from "react";
import { Briefcase, Hexagon, Triangle, Circle, Square } from "lucide-react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

// Importing Brand Logos
const BASE_PATH = "/EvocLabs-Next.js";

const clients = [
  `${BASE_PATH}/Brands_Logo/Artboard 1.png`,
  `${BASE_PATH}/Brands_Logo/Artboard 2.png`,
  `${BASE_PATH}/Brands_Logo/Artboard 3.png`,
  `${BASE_PATH}/Brands_Logo/Artboard 4.png`,
  `${BASE_PATH}/Brands_Logo/Artboard 5.png`,
  `${BASE_PATH}/Brands_Logo/Artboard 6.png`,
  `${BASE_PATH}/Brands_Logo/Artboard 7.png`,
  `${BASE_PATH}/Brands_Logo/Artboard 8.png`,
  `${BASE_PATH}/Brands_Logo/Artboard 9.png`,
  `${BASE_PATH}/Brands_Logo/Artboard 11.png`,
  `${BASE_PATH}/Brands_Logo/Artboard 12.png`,
  `${BASE_PATH}/Brands_Logo/Artboard 13.png`,
  `${BASE_PATH}/Brands_Logo/Artboard 14.png`,
  `${BASE_PATH}/Brands_Logo/Artboard 15.png`,
];

const LogoStrip = ({
  reverse = false,
  className = "",
}: {
  reverse?: boolean;
  className?: string;
}) => {
  const MarqueeRow = ({ isFocused = false }: { isFocused?: boolean }) => (
    <div
      className={`${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      } whitespace-nowrap flex items-center`}
    >
      {Array(8)
        .fill(clients)
        .flat()
        .map((client, i) => (
          <div
            key={i}
            className={`shrink-0 px-12 transition-opacity duration-500 ${
              isFocused ? "opacity-100" : "opacity-20"
            }`}
          >
            <img
              src={client}
              alt="Brand Logo"
              className="h-12 md:h-16 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
    </div>
  );

  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      {/* Layer 1: Dimmed Background */}
      <div className="relative z-0 select-none pointer-events-none">
        <MarqueeRow isFocused={false} />
      </div>

      {/* Layer 2: Focused Foreground (Masked) */}
      <div
        className="absolute inset-0 z-10 select-none pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%)",
        }}
      >
        <MarqueeRow isFocused={true} />
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden flex flex-col items-center justify-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-transparent z-10 pointer-events-none bg-linear-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-transparent z-10 pointer-events-none bg-linear-to-r from-background via-transparent to-background" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-20 mb-16">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-[0.2em]">
          Brands we work with
        </p>
      </div>

      {/* 3D Container - Scaled and Rotated */}
      <div className="relative w-full max-w-[140vw] -rotate-3 skew-y-1 scale-110">
        {/* Strip 1 - Left */}
        <LogoStrip reverse={false} className="mb-8 opacity-60" />

        {/* Strip 2 (Main) - Right */}
        <LogoStrip reverse={true} className="mb-8 scale-110 z-10" />

        {/* Strip 3 - Left */}
        <LogoStrip reverse={false} className="opacity-60" />
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          width: fit-content;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 60s linear infinite;
          width: fit-content;
        }
        
        /* Speed up on Mobile */
        @media (max-width: 768px) {
          .animate-marquee, .animate-marquee-reverse {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
