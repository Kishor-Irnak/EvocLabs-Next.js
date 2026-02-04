"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  TrendingUp,
  Zap,
  BarChart3,
  PieChart,
} from "lucide-react";

const benefits = [
  {
    title: "NO SUBSCRIPTION FEES",
    desc: "Pay strictly for performance. Our model aligns perfectly with your growth—no hidden monthly retainers.",
  },
  {
    title: "ZERO RTO FEE",
    desc: "Stop losing money on returns. We waive RTO fees so you keep more of your hard-earned revenue.",
  },
  {
    title: "UNIFIED SURFACE DASHBOARD",
    desc: "All your metrics in one view. From ad spend to inventory, manage your entire growth operation seamlessly.",
  },
  {
    title: "NET PROFIT OPTIMIZATION",
    desc: "Real ROI over likes. We optimize for net profit, ensuring every rupee spent contributes to your bottom line.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="why-us"
      className="container border-x overflow-hidden max-w-7xl z-20 border-white/10 border-b mx-auto min-h-screen flex items-center bg-[#020202]"
    >
      <div className="w-full px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center justify-center px-3 py-1 mb-10 border border-blue-500/30 bg-blue-500/10 text-blue-200 text-[10px] font-medium tracking-widest uppercase font-mono">
              Strategic Edge
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl lg:text-8xl font-oswald uppercase tracking-tight leading-[0.85] text-white mb-16"
            >
              WHY BRANDS <br />
              <span className="text-zinc-600">CHOOSE</span> EVOC LABS
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {benefits.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 border border-white/5 bg-zinc-900/10 backdrop-blur-sm rounded-none hover:bg-zinc-900/30 transition-all duration-500 group"
                >
                  <div className="flex items-center gap-3 mb-6 text-blue-500">
                    <CheckCircle2
                      size={16}
                      className="group-hover:scale-110 transition-transform"
                    />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold font-mono text-zinc-500">
                      Advantage 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-lg text-white font-medium mb-3 font-oswald uppercase tracking-wide group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - Technical UI Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative aspect-square w-full"
          >
            {/* Background glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            {/* The "Operating System" UI Frame */}
            <div className="relative w-full h-full border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl flex flex-col">
              {/* UI Header */}
              <div className="h-10 border-b border-white/5 bg-black/40 flex items-center justify-between px-4">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-zinc-800" />
                  <div className="w-2 h-2 rounded-full bg-zinc-800" />
                  <div className="w-2 h-2 rounded-full bg-zinc-800" />
                </div>
                <div className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
                  System_Protocol_v4.0
                </div>
              </div>

              <div className="flex-1 p-6 space-y-6">
                {/* Top Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-white/5 bg-white/[0.02] flex flex-col gap-2">
                    <span className="text-[9px] font-mono text-zinc-600 uppercase">
                      Efficiency
                    </span>
                    <div className="text-2xl font-oswald text-blue-500">
                      92.4%
                    </div>
                    <div className="w-full bg-zinc-900 h-1 mt-1">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-blue-500"
                      />
                    </div>
                  </div>
                  <div className="p-4 border border-white/5 bg-white/[0.02] flex flex-col gap-2">
                    <span className="text-[9px] font-mono text-zinc-600 uppercase">
                      Velocity
                    </span>
                    <div className="text-2xl font-oswald text-emerald-500">
                      4.2X
                    </div>
                    <div className="w-full bg-zinc-900 h-1 mt-1">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "84%" }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                        className="h-full bg-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Middle Content - Abstract Graph area */}
                <div className="flex-1 min-h-[180px] border border-white/5 bg-white/[0.01] relative p-4 flex items-center justify-center overflow-hidden">
                  {/* Decorative Grid Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

                  {/* Abstract Moving Lines/SVG */}
                  <svg
                    viewBox="0 0 400 200"
                    className="w-full h-full overflow-visible relative z-10"
                  >
                    <motion.path
                      d="M0 150 Q 50 140, 100 80 T 200 60 T 300 120 T 400 40"
                      fill="none"
                      stroke="url(#blueGradient)"
                      strokeWidth="3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M0 160 Q 50 150, 100 90 T 200 70 T 300 130 T 400 50"
                      fill="none"
                      stroke="rgba(59, 130, 246, 0.2)"
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.5 }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        delay: 0.2,
                      }}
                    />

                    {/* Beating Point */}
                    <motion.circle
                      cx="400"
                      cy="40"
                      r="4"
                      fill="#3b82f6"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />

                    <defs>
                      <linearGradient
                        id="blueGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                        <stop
                          offset="100%"
                          stopColor="#3b82f6"
                          stopOpacity="1"
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Floating Data Labels */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="absolute top-4 right-4 bg-blue-600/10 border border-blue-500/20 px-2 py-1 flex items-center gap-2"
                  >
                    <Zap size={10} className="text-blue-500" />
                    <span className="text-[8px] font-mono text-blue-400">
                      PEAK_FLOW
                    </span>
                  </motion.div>
                </div>

                {/* Footer Row */}
                <div className="grid grid-cols-3 gap-2">
                  {[Zap, BarChart3, PieChart].map((Icon, i) => (
                    <div
                      key={i}
                      className="h-12 border border-white/5 bg-white/[0.01] flex items-center justify-center text-zinc-700 hover:text-white transition-colors"
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Status Bar */}
              <div className="h-6 bg-blue-500/10 border-t border-white/5 flex items-center px-4 justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 animate-pulse" />
                  <span className="text-[7px] font-mono text-blue-500 uppercase tracking-widest">
                    System Operational
                  </span>
                </div>
                <span className="text-[7px] font-mono text-zinc-700 tracking-[0.3em]">
                  SECURE_X86_NODE
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
