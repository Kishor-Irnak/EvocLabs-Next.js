"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  TrendingUp,
  Layers,
  Users,
  Zap,
  Briefcase,
  Wind,
  Compass,
  AlertOctagon,
} from "lucide-react";

const CountUp = ({
  to,
  prefix = "",
  suffix = "",
  delay = 0,
  decimals = 0,
  duration = 2.5,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
  decimals?: number;
  duration?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;

      const controls = animate(0, to, {
        duration,
        delay,
        ease: "easeOut",
        onUpdate: (value) => {
          const formatted = value
            .toFixed(decimals)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          node.textContent = `${prefix}${formatted}${suffix}`;
        },
      });

      return () => controls.stop();
    }
  }, [isInView, to, delay, duration, decimals, prefix, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0
    </span>
  );
};

export default function MarketingProfitPages() {
  return (
    <section className="container border-x overflow-hidden max-w-7xl z-20 border-white/10 border-b mx-auto pt-24 pb-0 relative bg-[#020202]">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Section Header */}
      <div className="px-6 flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12 relative z-10">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-orange-500/30 bg-orange-500/10 text-orange-200 text-[10px] font-medium tracking-widest uppercase"
          >
            Growth Diagnostics
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-oswald uppercase tracking-tight leading-[0.9] text-white"
          >
            The <span className="text-zinc-500">Performance</span> metrics
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-6"
        >
          <p className="leading-relaxed lg:text-left text-lg text-zinc-400">
            Identify the core indicators of your business velocity and scaling
            potential.
          </p>
        </motion.div>
      </div>

      {/* The Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 border border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10 bg-white/1 relative z-10">
        {/* Card 1: Ad Spend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group p-8 md:p-12 hover:bg-white/2 transition-colors duration-300 relative flex flex-col"
        >
          <div className="flex group-hover:text-orange-400 transition-colors text-orange-500 bg-zinc-900 w-12 h-12 border-white/10 border mb-8 items-center justify-center shadow-inner">
            <Layers size={20} />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 uppercase tracking-wide">
            Ad Spend Managed
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-auto">
            Optimized across Meta, Google, and LinkedIn with maximum efficiency.
          </p>

          <div className="mt-12 mb-6">
            <div className="text-4xl md:text-5xl font-mono font-semibold tracking-tighter text-white">
              <CountUp to={2.4} prefix="₹" suffix=" Cr+" decimals={1} />
            </div>
            <div className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mt-2">
              Capital Efficiency
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mb-1">
                Status
              </span>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                +24% ROI
              </span>
            </div>
            <span className="text-xs text-zinc-700 font-mono">01</span>
          </div>
        </motion.div>

        {/* Card 2: Brands Scaled */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group p-8 md:p-12 hover:bg-white/2 transition-colors duration-300 relative flex flex-col"
        >
          <div className="flex group-hover:text-orange-400 transition-colors text-orange-500 bg-zinc-900 w-12 h-12 border-white/10 border mb-8 items-center justify-center shadow-inner">
            <Users size={20} />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 uppercase tracking-wide">
            Partner Success
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-auto">
            Scaling diverse direct-to-consumer brands across 12+ industry
            verticals.
          </p>

          <div className="mt-12 mb-6">
            <div className="text-4xl md:text-5xl font-mono font-semibold tracking-tighter text-white">
              <CountUp to={150} suffix="+" />
            </div>
            <div className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mt-2">
              Global Brands Scaled
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mb-1">
                Network
              </span>
              <span className="text-xs font-mono text-orange-400 uppercase tracking-wider">
                Multi-Vertical
              </span>
            </div>
            <span className="text-xs text-zinc-700 font-mono">02</span>
          </div>
        </motion.div>

        {/* Card 3: Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group p-8 md:p-12 hover:bg-white/2 transition-colors duration-300 relative flex flex-col"
        >
          <div className="flex group-hover:text-orange-400 transition-colors text-orange-500 bg-zinc-900 w-12 h-12 border-white/10 border mb-8 items-center justify-center shadow-inner">
            <Zap size={20} />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 uppercase tracking-wide">
            Domain Expertise
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-auto">
            Deep technical proficiency in PPC, Creative strategy, and CRO.
          </p>

          <div className="mt-12 mb-6">
            <div className="text-4xl md:text-5xl font-mono font-semibold tracking-tighter text-white">
              <CountUp to={4} suffix="+" />
            </div>
            <div className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mt-2">
              Years of R&D
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mb-1">
                Capability
              </span>
              <span className="text-xs font-mono text-orange-400 uppercase tracking-wider">
                Deep Tech
              </span>
            </div>
            <span className="text-xs text-zinc-700 font-mono">03</span>
          </div>
        </motion.div>
      </div>

      {/* Result Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="z-10 border-x md:px-12 py-8 flex flex-col md:flex-row gap-6 bg-emerald-500/5 w-full border-white/10 border-y mt-0 items-center justify-between"
      >
        <div className="flex items-center gap-6">
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
            <TrendingUp size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-emerald-500/60 font-mono uppercase tracking-widest mb-1">
              Growth Detected
            </span>
            <span className="text-xl md:text-2xl font-oswald text-emerald-500 uppercase tracking-tight">
              Total Efficiency
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-emerald-500/50 uppercase tracking-widest">
            System Optimization Mode
          </span>
        </div>
      </motion.div>
    </section>
  );
}
