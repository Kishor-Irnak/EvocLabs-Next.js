"use client";

import React from "react";
import Image from "next/image";

const ClusterFeatures = () => {
  return (
    <section className="bg-[#0a0a0a] text-[#f4f4f5] py-20 lg:py-32 font-sans border-b border-white/[0.04]">
      <div className="max-w-[1150px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14 lg:mb-20">
          <p className="text-[9px] sm:text-[10px] font-mono tracking-[0.15em] text-[#a1a1aa] uppercase mb-5 font-semibold">
            Just 4% when orders come in.
          </p>
          <h2 className="text-[32px] sm:text-5xl md:text-[56px] lg:text-[64px] tracking-[-0.03em] font-medium max-w-[800px] leading-[1.05] text-[#fafafa]">
            Grow First. Pay Later.
          </h2>
        </div>

        {/* Grid Container - Added flex layout with padding for mobile sticky scrolling */}

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 lg:gap-2 pb-12 lg:pb-0">
          {/* Card 1: Ads Management */}
          <div className="sticky top-[96px] z-10 bg-[#0a0a0a] border border-white/[0.06] rounded-[14px] p-1 lg:static lg:p-0 lg:bg-transparent lg:border-none">
            <div className="bg-[#141414] border border-white/[0.06] rounded-[12px] p-8 lg:p-10 flex flex-col min-h-[420px] lg:h-[480px] overflow-hidden relative shadow-[0_-10px_30px_-5px_rgba(0,0,0,0.5)] transition-all duration-300">
              <Image
                src="/assets/gfx1.jpeg"
                alt="Ads Management"
                fill
                className="object-cover opacity-60 pointer-events-none"
              />
              {/* Gradient fade from top for text readability */}
              <div className="absolute inset-0 bg-linear-to-b from-[#141414] via-[#141414]/70 to-transparent pointer-events-none z-0" />
              <div className="relative z-10">
                <h3 className="text-[17px] font-medium text-[#f4f4f5] mb-2.5 tracking-tight">
                  Ads Management
                </h3>
                <p className="text-[13px] text-[#8b8b8f] leading-[1.6] max-w-[340px] font-light">
                  Tell us your product. We set up, run, and optimize your ads on
                  Meta & Google — no budget wasted, no guesswork. You focus on
                  your product, we handle the clicks.
                </p>
              </div>
            </div>
          </div>
          {/* Card 2: Website / Store */}
          <div className="sticky top-[112px] z-20 bg-[#0a0a0a] border border-white/[0.06] rounded-[14px] p-1 lg:static lg:p-0 lg:bg-transparent lg:border-none">
            <div className="bg-[#141414] border border-white/[0.06] rounded-[12px] p-8 lg:p-10 flex flex-col min-h-[420px] lg:h-[480px] relative overflow-hidden shadow-[0_-10px_30px_-5px_rgba(0,0,0,0.5)] transition-all duration-300">
              <div className="mb-10">
                <h3 className="text-[17px] font-medium text-[#f4f4f5] mb-2.5 tracking-tight">
                  Website / Store
                </h3>
                <p className="text-[13px] text-[#8b8b8f] leading-[1.6] max-w-[340px] font-light">
                  No website? No problem. We build you a fast, conversion-ready
                  online store — designed to turn visitors into buyers. Fully
                  managed, always updated.
                </p>
              </div>
            </div>
          </div>
          {/* Card 3: Logistics */}
          <div className="sticky top-[128px] z-30 bg-[#0a0a0a] border border-white/[0.06] rounded-[14px] p-1 lg:static lg:p-0 lg:bg-transparent lg:border-none">
            <div className="bg-[#141414] border border-white/[0.06] rounded-[12px] p-8 lg:p-10 flex flex-col min-h-[420px] lg:h-[480px] relative overflow-hidden shadow-[0_-10px_30px_-5px_rgba(0,0,0,0.5)] transition-all duration-300">
              <div className="relative z-20 w-full">
                <h3 className="text-[17px] font-medium text-[#f4f4f5] mb-2.5 tracking-tight">
                  Logistics
                </h3>
                <p className="text-[13px] text-[#8b8b8f] leading-[1.6] max-w-[340px] font-light">
                  From warehouse to doorstep — we handle storage, packing, and
                  delivery. Your customers get their orders on time, every time.
                  Zero stress on your end.
                </p>
              </div>
            </div>
          </div>
          {/* Card 4: The Model */}
          <div className="sticky top-[144px] z-40 bg-[#0a0a0a] border border-white/[0.06] rounded-[14px] p-1 lg:static lg:p-0 lg:bg-transparent lg:border-none">
            <div className="bg-[#141414] border border-white/[0.06] rounded-[12px] p-8 lg:p-10 flex flex-col min-h-[420px] lg:h-[480px] relative overflow-hidden shadow-[0_-10px_30px_-5px_rgba(0,0,0,0.5)] transition-all duration-300">
              <div className="relative z-10 w-full mb-10">
                <h3 className="text-[17px] font-medium text-[#f4f4f5] mb-2.5 tracking-tight">
                  The Model (How You Pay)
                </h3>
                <p className="text-[13px] text-[#8b8b8f] leading-[1.6] max-w-[340px] font-light">
                  We only earn when you earn. No monthly fees, no setup charges.
                  Just 4% per order delivered — that's it. If you don't sell, we
                  don't charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClusterFeatures;
