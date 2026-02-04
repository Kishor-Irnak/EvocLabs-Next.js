"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "SAHIL",
    role: "CMO",
    image: "/EvocLabs-Next.js/sahil.jpeg",
  },
  {
    name: "PIYUSH",
    role: "CTO",
    image: "/EvocLabs-Next.js/piyush.JPG",
  },
  {
    name: "ANNIE BADEJO",
    role: "COO",
    image: "/EvocLabs-Next.js/apple-touch-icon.png", // Using a placeholder for consistency if no COO image provided
  },
];

const Team: React.FC = () => {
  return (
    <section className="container border-x overflow-hidden max-w-7xl z-20 border-white/10 border-b mx-auto py-24 px-6 bg-[#020202]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12">
        <div className="flex-1">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-zinc-500/30 bg-zinc-500/10 text-zinc-300 text-[10px] font-medium tracking-widest uppercase font-mono">
            Leadership Base
          </div>
          <h2 className="text-5xl md:text-6xl font-oswald uppercase tracking-tight leading-[0.9] text-white">
            The <span className="text-zinc-500">Mind</span> collective
          </h2>
        </div>
        <div className="max-w-md lg:text-right">
          <p className="text-zinc-400 text-lg leading-relaxed">
            The specialist units ensuring we never settle for linear growth
            patterns.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-4/5 overflow-hidden bg-black"
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />

            {/* Hover Info */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em] mb-2 block">
                {member.role}
              </span>
              <h3 className="text-2xl font-oswald text-white uppercase tracking-tight">
                {member.name}
              </h3>

              <div className="h-px w-0 group-hover:w-full bg-white/20 mt-4 transition-all duration-700" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-zinc-800 rounded-full animate-pulse" />
          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
            Global Specialization Units Active
          </span>
        </div>
      </div>
    </section>
  );
};

export default Team;
