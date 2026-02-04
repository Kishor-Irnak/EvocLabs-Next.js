"use client";

import React from "react";
import {
  Linkedin,
  Quote,
  Sparkles,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Founder: React.FC = () => {
  return (
    <>
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");
        `}
      </style>

      <section
        id="founder"
        className="container border-x overflow-hidden max-w-7xl z-20 border-white/10 border-b mx-auto py-24 px-6 bg-[#020202]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Column 1: Image Widget */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative p-1 bg-zinc-900/50 border border-white/10 shadow-2xl">
              <div className="relative aspect-4/5 w-full overflow-hidden bg-zinc-950">
                <Image
                  src="/EvocLabs-Next.js/founderPfp.jpg"
                  alt="Nishant Raj"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />

                {/* Status Indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400">
                  <div className="w-1.5 h-1.5 bg-emerald-500 animate-pulse" />
                  ONLINE_CONSULTING
                </div>
              </div>

              <div className="p-6 bg-black">
                <h4 className="text-xl font-oswald text-white uppercase tracking-tight">
                  Nishant Raj
                </h4>
                <p className="text-zinc-500 text-[10px] uppercase font-mono tracking-[0.2em] mt-1">
                  Founder & Lead Strategist
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2 text-[10px] text-zinc-600 font-mono uppercase">
                    <GraduationCap size={12} />
                    IIT Madras
                  </div>
                  <a
                    href="https://linkedin.com/in/nishant-raj-1ab9a9341"
                    target="_blank"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 order-1 lg:order-2"
          >
            <div>
              <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-zinc-500/30 bg-zinc-500/10 text-zinc-300 text-[10px] font-medium tracking-widest uppercase font-mono">
                The Vision
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-oswald uppercase tracking-tight leading-[0.9] text-white">
                Marketing isn't <span className="text-zinc-500">about</span>{" "}
                guessing.
              </h2>
            </div>

            <div className="relative pl-6 border-l border-white/10 my-10">
              <p className="text-xl md:text-2xl text-zinc-400 italic font-light leading-relaxed">
                "It's about aligning your product with a performance culture. At
                Evoc Labs, we treat your budget like our own capital."
              </p>
            </div>

            <div className="text-zinc-500 text-base leading-relaxed space-y-6 max-w-2xl font-light">
              <p>
                With over{" "}
                <strong className="text-white font-medium">
                  4 years of hands-on experience
                </strong>{" "}
                managing ₹2Cr+ in ad spend, we've identified the specific
                patterns that separate scaling brands from stagnant ones.
              </p>
              <p>
                There is no room for vanity metrics or "fluff" campaigns here.
                Our approach combines aggressive creative testing with
                conservative financial modeling.
              </p>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-8 items-center">
              <Button
                asChild
                className="bg-white hover:bg-zinc-200 text-black font-bold h-12 px-8 rounded-none uppercase text-xs tracking-widest"
              >
                <a
                  href="https://linkedin.com/in/nishant-raj-1ab9a9341"
                  target="_blank"
                >
                  Connect on LinkedIn
                  <ArrowRight size={14} className="ml-2" />
                </a>
              </Button>

              <div
                className="text-4xl md:text-5xl text-zinc-800 -rotate-2 select-none"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Nishant Raj
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Founder;
