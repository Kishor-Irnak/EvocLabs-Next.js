"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "The singular focus on ROI is what sets Evoc apart. They don't just run ads; they built a custom profit engine for our brand that scale we never thought possible.",
    author: "Arjun Mehta",
    title: "Founder, D2C Apparel",
    avatar: "https://i.pravatar.cc/150?u=arjun",
  },
  {
    quote:
      "We were burning cash on Meta before Evoc stepped in. Within 45 days, our CAC dropped by 40% while volume doubled. It's pure technical execution.",
    author: "Sarah Chen",
    title: "CMO, HealthTech Co",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    quote:
      "Finally, a partner that understands the P&L. Their dashboard provides more clarity than anything we've built internally. It is the data source of truth.",
    author: "Rahul Kapoor",
    title: "CEO, E-comm Group",
    avatar: "https://i.pravatar.cc/150?u=rahul",
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container border-x overflow-hidden max-w-7xl z-20 border-white/10 border-b mx-auto pt-24 pb-24 px-6 bg-[#020202]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12 relative z-10">
        <div className="flex-1">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-oswald uppercase leading-[0.9] text-white tracking-tight">
            What <span className="text-zinc-500">They</span> said
          </h2>
        </div>

        <div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-6">
          <p className="text-zinc-400 text-lg leading-relaxed text-left">
            Voices of our satisfied partners from around the globe. Pure impact,
            no fluff.
          </p>
          <div className="w-full flex justify-end">
            <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
              {activeIndex + 1} / {testimonials.length} — Experience Stream
            </span>
          </div>
        </div>
      </div>

      {/* Testimonials Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative min-h-[400px]">
        {/* Left: Big Quote */}
        <div className="lg:col-span-9 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 20, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative md:pl-12"
            >
              {/* Big Quote Icon */}
              <div className="absolute -left-2 -top-10 md:-left-12 md:-top-12 opacity-10 select-none pointer-events-none">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white transform rotate-180"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>

              <p className="text-2xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-12 italic font-playfair">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border border-white/10 overflow-hidden bg-zinc-900">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">
                    {testimonials[activeIndex].author}
                  </h4>
                  <p className="text-zinc-500 text-sm font-mono tracking-wide mt-1 uppercase">
                    {testimonials[activeIndex].title}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Indicators */}
        <div className="lg:col-span-3 flex lg:flex-col items-center justify-center gap-6 pt-12 md:pt-0">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative h-2 rounded-full transition-all duration-500 ${i === activeIndex ? "w-12 bg-white" : "w-2 bg-white/10"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
