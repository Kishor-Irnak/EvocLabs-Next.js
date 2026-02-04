"use client";

import React from "react";
import { Layers, Zap, Target, TrendingUp, Cpu, Globe } from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Performance Ads",
    desc: "Aggressive scaling across Meta, Google, and LinkedIn using proprietary math models for CAC optimization.",
    icon: <Zap size={20} />,
  },
  {
    title: "Conversion Engine",
    desc: "Custom high-conversion checkout flows and A/B testing frameworks that turn clicks into confirmed orders.",
    icon: <Target size={20} />,
  },
  {
    title: "LTV Optimization",
    desc: "Automated retention sequences and loyalty systems designed to increase customer lifetime value by up to 40%.",
    icon: <TrendingUp size={20} />,
  },
  {
    title: "Tech Infrastructure",
    desc: "A unified operating system for your brand, integrating inventory, logistics, and ads into a single source of truth.",
    icon: <Cpu size={20} />,
  },
  {
    title: "Creative Strategy",
    desc: "Data-driven content frameworks and viral loops designed for the modern attention economy.",
    icon: <Layers size={20} />,
  },
  {
    title: "Global Scaling",
    desc: "Logistics and payment infrastructure built to take your brand from local success to international dominance.",
    icon: <Globe size={20} />,
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="container border-x overflow-hidden max-w-7xl z-20 border-white/10 border-b mx-auto py-24 px-6 bg-[#020202]"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-12">
        <div className="flex-1">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-emerald-500/30 bg-emerald-500/10 text-emerald-200 text-[10px] font-medium tracking-widest uppercase font-mono">
            Growth Units
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-oswald uppercase tracking-tight leading-[0.9] text-white">
            Scale <span className="text-zinc-500">beyond</span> boundaries
          </h2>
        </div>
        <div className="max-w-md lg:text-right">
          <p className="text-zinc-400 text-lg leading-relaxed">
            A comprehensive suite of technical and strategic capabilities
            designed for explosive D2C growth.
          </p>
        </div>
      </div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10 bg-white/1">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group p-8 md:p-10 hover:bg-white/2 transition-colors duration-300 flex flex-col items-start ${i >= 3 ? "lg:border-t border-white/10" : ""}`}
          >
            <div className="w-10 h-10 border border-white/10 bg-zinc-950 flex items-center justify-center text-emerald-500 group-hover:text-emerald-400 transition-colors mb-8 shadow-inner">
              {cap.icon}
            </div>
            <h3 className="text-xl font-oswald text-white uppercase tracking-wide mb-3">
              {cap.title}
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed mb-8 flex-1">
              {cap.desc}
            </p>
            <div className="text-[10px] font-mono text-zinc-800 uppercase tracking-widest group-hover:text-zinc-400 transition-colors">
              Capability_{i + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
