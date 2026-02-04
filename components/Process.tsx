"use client";

import React, { useRef } from "react";
import { Stethoscope, Target, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedBeam } from "./AnimatedBeam";

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 1,
      title: "Breakpoint Diagnosis",
      description:
        "We identify what's blocking your sales flow and spot every bottleneck hurting performance.",
      icon: <Stethoscope size={20} />,
      ref: step1Ref,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      id: 2,
      title: "Strategy & Execution",
      description:
        "We build funnels, run ads, deploy calling teams, and optimize delivery for smooth scaling.",
      icon: <Target size={20} />,
      ref: step2Ref,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
    {
      id: 3,
      title: "Performance Scaling",
      description:
        "We grow your brand on a commission model improving conversions and scaling profitably.",
      icon: <TrendingUp size={20} />,
      ref: step3Ref,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
  ];

  return (
    <section
      id="process"
      className="bg-[#020202] relative border-b border-white/10"
    >
      <div className="container mx-auto max-w-7xl border-x border-white/10 pt-24 pb-24 px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-blue-500/30 bg-blue-500/10 text-blue-200 text-[10px] font-medium tracking-widest uppercase">
              The Protocol
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-oswald uppercase tracking-tight leading-[0.9] text-white">
              How we <span className="text-zinc-500">engineer</span> growth
            </h2>
          </div>
          <div className="max-w-md lg:text-right">
            <p className="text-zinc-400 text-lg leading-relaxed">
              A systematic, three-stage approach to identifying, building, and
              scaling your profit infrastructure.
            </p>
          </div>
        </div>

        {/* Process Container */}
        <div className="relative w-full max-w-6xl mx-auto" ref={containerRef}>
          {/* Beam Layer */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={step1Ref}
              toRef={step2Ref}
              curvature={0}
              duration={3}
              delay={0}
              pathColor="rgba(255, 255, 255, 0.05)"
              gradientStartColor="#3b82f6"
              gradientStopColor="#a855f7"
              pathWidth={2}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={step2Ref}
              toRef={step3Ref}
              curvature={0}
              duration={3}
              delay={1.5}
              pathColor="rgba(255, 255, 255, 0.05)"
              gradientStartColor="#a855f7"
              gradientStopColor="#10b981"
              pathWidth={2}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Visual Connector Line for Mobile */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden absolute left-7 top-14 bottom-[-32px] w-px bg-linear-to-b from-white/10 via-white/10 to-transparent" />
                )}

                <div className="p-8 bg-zinc-900/30 hover:bg-zinc-900/60 border border-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl backdrop-blur-sm h-full flex flex-col">
                  {/* Icon Node */}
                  <div
                    ref={step.ref}
                    className={`w-14 h-14 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center mb-8 relative z-20 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <div className={step.color}>{step.icon}</div>

                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-lg bg-[#020202] border border-white/10 flex items-center justify-center text-[10px] font-mono text-zinc-500">
                      0{step.id}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4 uppercase tracking-wide font-oswald">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">
                    {step.description}
                  </p>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between group/link cursor-pointer">
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest group-hover/link:text-zinc-300 transition-colors">
                      Learn Procedure
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-zinc-700 group-hover/link:text-white group-hover/link:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
