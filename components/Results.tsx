"use client";

import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Jan", prev: 2000, current: 2400 },
  { name: "Feb", prev: 2500, current: 3600 },
  { name: "Mar", prev: 3000, current: 5200 },
  { name: "Apr", prev: 3200, current: 6800 },
  { name: "May", prev: 4000, current: 8900 },
  { name: "Jun", prev: 4800, current: 11200 },
];

const Results: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="results"
      className="container border-x overflow-hidden max-w-7xl z-20 border-white/10 border-b mx-auto pt-24 pb-24 px-6 bg-[#020202]"
    >
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12 relative z-10">
        <div className="flex-1">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-purple-500/30 bg-purple-500/10 text-purple-200 text-[10px] font-medium tracking-widest uppercase">
            Funnel Analytics
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-oswald uppercase tracking-tight leading-[0.9] text-white">
            Data <span className="text-zinc-500">without</span> doubt
          </h2>
        </div>

        <div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-6">
          <p className="leading-relaxed lg:text-left text-lg text-zinc-400">
            Your P&L, supercharged by clear metrics. Live dashboard tracking
            every touchpoint from click to close.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Chart Section */}
        <div className="lg:col-span-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[16/10] md:aspect-[21/9] bg-[#0A0A0A] border border-white/10 p-8 md:p-12 overflow-hidden shadow-2xl shadow-purple-900/10">
              {/* Background ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-800/10 blur-[120px] rounded-full pointer-events-none" />

              <div className="relative h-full flex flex-col">
                <div className="flex justify-between items-center mb-10 px-2 border-b border-white/5 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-purple-500 shadow-[0_0_10px_radial-gradient(rgba(168,85,247,0.8))]"></div>
                    <span className="text-sm font-mono text-zinc-300 tracking-wider uppercase">
                      ROAS_PERFORMANCE_REALTIME
                    </span>
                  </div>
                  <div className="flex gap-6 text-[10px] font-mono uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
                      <span className="text-zinc-500">Baseline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <span className="text-purple-400">Profit Engine™</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full min-h-[250px]">
                  {isMounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data}>
                        <defs>
                          <linearGradient
                            id="colorResults"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#A855F7"
                              stopOpacity={0.2}
                            />
                            <stop
                              offset="95%"
                              stopColor="#A855F7"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="rgba(255,255,255,0.03)"
                          vertical={false}
                        />
                        <XAxis
                          dataKey="name"
                          stroke="rgba(255,255,255,0.2)"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 10, fontFamily: "monospace" }}
                          dy={10}
                        />
                        <YAxis
                          stroke="rgba(255,255,255,0.2)"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 10, fontFamily: "monospace" }}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "rgba(10,10,10,0.8)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "0px",
                            backdropFilter: "blur(10px)",
                            fontSize: "10px",
                            fontFamily: "monospace",
                            color: "#fff",
                          }}
                          itemStyle={{ color: "#fff" }}
                          cursor={{ stroke: "#A855F7", strokeWidth: 1 }}
                        />
                        <Area
                          type="monotone"
                          dataKey="prev"
                          stroke="rgba(255,255,255,0.1)"
                          fill="transparent"
                          strokeDasharray="4 4"
                          strokeWidth={1}
                        />
                        <Area
                          type="monotone"
                          dataKey="current"
                          stroke="#A855F7"
                          fillOpacity={1}
                          fill="url(#colorResults)"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Navigation Grid (matched from index.md.html) */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-4 border-t border-white/10 mt-8">
          {[
            {
              title: "Lead Tracking",
              desc: "Track every touchpoint from click to close.",
            },
            {
              title: "Conversion Opt.",
              desc: "Systematic A/B testing to maximize revenue per user.",
            },
            {
              title: "Churn Reduction",
              desc: "Automated retention sequences to save at-risk customers.",
            },
            {
              title: "Scale Ready",
              desc: "Infrastructure built to handle 10x growth without breaking.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group pt-8 pr-4 px-0 md:px-6 cursor-default border-white/5 md:border-r last:border-r-0"
            >
              <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors uppercase tracking-wider font-oswald">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
