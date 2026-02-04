"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrackingBar } from "./ui/TrackingBar";
import { Package, Truck, CheckCircle } from "lucide-react";

const trackingData = [
  {
    title: "In Transit",
    icon: <Truck size={18} />,
    items: [
      { label: "Air", value: 0, percentage: "0.00%", color: "text-blue-500" },
      {
        label: "Surface",
        value: 330,
        percentage: "100.00%",
        color: "text-indigo-500",
      },
      {
        label: "SDD/NDD",
        value: 0,
        percentage: "0.00%",
        color: "text-orange-500",
      },
    ],
  },
  {
    title: "Delivered",
    icon: <CheckCircle size={18} />,
    items: [
      {
        label: "On Time",
        value: 450,
        percentage: "92.00%",
        color: "text-emerald-500",
      },
      {
        label: "Delayed",
        value: 40,
        percentage: "8.00%",
        color: "text-rose-500",
      },
    ],
  },
];

const TrackingSection: React.FC = () => {
  return (
    <section className="container border-x overflow-hidden max-w-7xl z-20 border-white/10 border-b mx-auto pt-24 pb-24 px-6 bg-[#020202]">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12 relative z-10">
        <div className="flex-1">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-indigo-500/30 bg-indigo-500/10 text-indigo-200 text-[10px] font-medium tracking-widest uppercase font-mono">
            Logistics Intelligence
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-oswald uppercase tracking-tight leading-[0.9] text-white">
            Tracking <span className="text-zinc-500">Real-time</span> Velocity
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-zinc-400 text-lg leading-relaxed">
            Automatic tracking of every shipment across all modes of transport.
            Real-time synchronization with your ops stack.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 border border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10 bg-white/1">
        {trackingData.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 md:p-12 hover:bg-white/2 transition-colors group flex flex-col gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-zinc-900 border border-white/10 text-indigo-500 group-hover:text-indigo-400 transition-colors">
                {section.icon}
              </div>
              <div>
                <h3 className="text-xl font-oswald text-white uppercase tracking-wide">
                  {section.title}
                </h3>
                <span className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
                  ACTIVE_MONITORING_V2
                </span>
              </div>
            </div>

            <TrackingBar items={section.items} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrackingSection;
