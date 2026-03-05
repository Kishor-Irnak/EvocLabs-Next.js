"use client";

import React from "react";

const ClusterFeatures = () => {
  return (
    <section className="bg-[#0a0a0a] text-[#f4f4f5] py-20 lg:py-32 font-sans border-b border-white/[0.04]">
      <div className="max-w-[1150px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14 lg:mb-20">
          <p className="text-[9px] sm:text-[10px] font-mono tracking-[0.15em] text-[#a1a1aa] uppercase mb-5 font-semibold">
            Production-grade operational software
          </p>
          <h2 className="text-[32px] sm:text-5xl md:text-[56px] lg:text-[64px] tracking-[-0.03em] font-medium max-w-[800px] leading-[1.05] text-[#fafafa]">
            See exactly how Cluster <br className="hidden sm:block" /> improves
            your storefront
          </h2>
        </div>

        {/* Grid Container - Added flex layout with padding for mobile sticky scrolling */}

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 lg:gap-2 pb-12 lg:pb-0">
          {/* Card 1: AI Product image testing */}
          <div className="border border-white/[0.06] rounded-[14px] p-1 lg:p-10s">
            <div className="bg-[#141414] border border-white/[0.06] rounded-[14px] p-8 lg:p-10 flex flex-col overflow-hidden relative group min-h-[420px] lg:h-[480px] sticky top-24 lg:static z-10 shadow-2xl shadow-black/50 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="text-[17px] font-medium text-[#f4f4f5] mb-2.5 tracking-tight">
                  AI Product image testing
                </h3>
                <p className="text-[13px] text-[#8b8b8f] leading-[1.6] max-w-[340px] font-light">
                  Cluster tests different versions of key Shopify UI components
                  and deploys the ones that drive more conversions and revenue.
                </p>
              </div>

              {/* Graphics */}
              <div
                className="absolute inset-x-0 bottom-[-80px] sm:bottom-[-60px] top-[140px] lg:top-[160px] flex items-center justify-center pointer-events-none"
                style={{ perspective: "1200px" }}
              >
                <div
                  className="w-[320px] h-[400px] bg-[#1a1a1a] border border-white/[0.08] rounded-2xl shadow-2xl relative"
                  style={{
                    transformStyle: "preserve-3d",
                    transform:
                      "rotateX(55deg) rotateY(-2deg) rotateZ(-18deg) scale(1)",
                  }}
                >
                  {/* Product Mockup Image Area */}
                  <div className="w-full h-[55%] bg-gradient-to-br from-[#7eb8d7] to-[#3a72b3] rounded-t-2xl flex items-center justify-center p-6 grayscale-[0.2]">
                    <div className="w-full h-full bg-white/10 rounded-xl shadow-inner border border-white/20 relative overflow-hidden flex items-center justify-center">
                      <div className="w-3/4 h-3/4 bg-white/20 blur-[4px] rounded-full absolute" />
                      <svg
                        viewBox="0 0 100 100"
                        className="w-24 h-24 opacity-[0.85] drop-shadow-xl relative z-10 transition-transform hover:scale-105 duration-700"
                      >
                        <path
                          d="M 20 60 Q 30 40, 50 45 T 80 70 L 20 70 Z"
                          fill="#ffffff"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Mockup Text Area */}
                  <div className="p-6 space-y-4">
                    <div className="w-2/3 h-3 bg-white/10 rounded-sm" />
                    <div className="w-1/3 h-2 bg-white/[0.06] rounded-sm" />
                    <div className="w-full h-11 bg-white/[0.04] rounded-lg border border-white/[0.04] mt-5" />
                  </div>

                  {/* Floating Tooltips */}
                  <div
                    className="absolute top-[22%] right-[-25%] sm:right-[-15%] flex flex-col items-end gap-1.5 opacity-100"
                    style={{
                      transform:
                        "translateZ(80px) rotateX(-50deg) rotateZ(20deg)",
                    }}
                  >
                    <div className="bg-[#f2ede4] text-black text-[10px] font-bold px-3.5 py-1.5 rounded-full shadow-2xl whitespace-nowrap tracking-wide">
                      +4.3% RPV
                    </div>
                    <div className="bg-[#1f1f1f] border border-white/10 text-[#d4d4d8] text-[10px] px-3.5 py-1.5 rounded-full shadow-2xl whitespace-nowrap flex items-center gap-2 font-medium">
                      <span className="w-1.5 h-1.5 bg-[#f5d087] rounded-full" />
                      Best-performing image
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2: Uncover conversion opportunities */}
          <div className="border border-white/[0.06] rounded-[14px] p-1 lg:p-10s">
            <div className="bg-[#141414] border border-white/[0.06] rounded-[14px] p-8 lg:p-10 flex flex-col min-h-[420px] lg:h-[480px] sticky top-28 lg:static z-20 shadow-2xl shadow-black/50 transition-all duration-300">
              <div className="mb-10">
                <h3 className="text-[17px] font-medium text-[#f4f4f5] mb-2.5 tracking-tight">
                  Uncover conversion opportunities
                </h3>
                <p className="text-[13px] text-[#8b8b8f] leading-[1.6] max-w-[340px] font-light">
                  Cluster tests different versions of key Shopify UI components
                  and deploys the ones that drive more conversions and revenue.
                </p>
              </div>

              {/* List UI */}
              <div className="flex flex-col mt-auto w-full max-w-[90%] sm:max-w-full xl:max-w-[85%] relative z-10 py-4">
                {/* Active Item */}
                <div className="bg-[#1e1e1e] border border-white/[0.08] rounded-[14px] p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] relative z-30 transition-all hover:border-white/[0.12]">
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-[#f4f4f5] text-[13px] font-medium">
                      Free Shipping Bar
                    </span>
                    <span className="text-[#ef4444] text-[9px] font-semibold tracking-wider uppercase">
                      High Impact
                    </span>
                  </div>
                  <p className="text-[#71717a] text-[11px] leading-relaxed pr-6 hidden sm:block font-light">
                    Cluster tests different versions of key Shopify UI
                    components and deploys the ones that drive more conversions
                    and revenue.
                  </p>
                </div>

                {/* Secondary Item */}
                <div className="bg-[#141414]/90 border border-white/[0.04] rounded-[14px] p-5 flex justify-between items-center relative z-20 -mt-3.5 backdrop-blur-md px-6 shadow-md transition-all hover:bg-[#181818]">
                  <span className="text-[#a1a1aa] text-[13px] font-normal truncate pr-4">
                    Add Product-Specific Review in Cart
                  </span>
                  <span className="text-[#ef4444]/80 text-[9px] font-semibold tracking-wider uppercase whitespace-nowrap">
                    High Impact
                  </span>
                </div>

                {/* Tertiary Item */}
                <div className="bg-[#141414]/80 border border-white/[0.03] rounded-[14px] p-5 flex justify-between items-center relative z-10 -mt-3.5 backdrop-blur-md px-8 transition-all hover:bg-[#161616]">
                  <span className="text-[#71717a] text-[13px] font-light truncate pr-4">
                    Social Proof Above the Fold on Homepage
                  </span>
                  <span className="text-[#a8825c]/70 text-[9px] font-medium tracking-wider uppercase whitespace-nowrap">
                    Medium Impact
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3: A/B Testing */}
          <div className="border border-white/[0.06] rounded-[14px] p-1 lg:p-10s">
            <div className="bg-[#141414] border border-white/[0.06] rounded-[14px] p-8 lg:p-10 flex flex-col min-h-[420px] lg:h-[480px] relative overflow-hidden sticky top-32 lg:static z-30 shadow-2xl shadow-black/50 transition-all duration-300">
              <div className="relative z-20 w-full">
                <h3 className="text-[17px] font-medium text-[#f4f4f5] mb-2.5 tracking-tight">
                  A/B Testing
                </h3>
                <p className="text-[13px] text-[#8b8b8f] leading-[1.6] max-w-[340px] font-light">
                  Cluster tests different versions of key Shopify UI components
                  and deploys the ones that drive more conversions and revenue.
                </p>

                {/* Labels */}
                <div className="mt-8 flex flex-col gap-2.5">
                  <div className="bg-white/[0.03] border border-white/[0.05] text-[8px] font-mono text-[#8b8b8f] px-3 py-1.5 rounded-[4px] w-fit tracking-[0.15em] hover:bg-white/[0.05] transition-colors">
                    AUTOMATICALLY DEPLOYED IMPROVEMENT
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.05] text-[8px] font-mono text-[#8b8b8f] px-3 py-1.5 rounded-[4px] w-fit tracking-[0.15em] hover:bg-white/[0.05] transition-colors">
                    +7.54% AFTER 30 DAYS
                  </div>
                </div>
              </div>

              {/* Chart Graphics */}
              <div className="absolute inset-0 pointer-events-none sm:translate-x-[15%] translate-x-[5%] translate-y-[25%] opacity-90 lg:opacity-100 flex items-end justify-end pb-8 pr-8">
                <svg
                  viewBox="0 0 500 240"
                  className="w-[120%] h-[80%] sm:w-full sm:h-[80%] overflow-visible"
                >
                  {/* Grid lines */}
                  <line
                    x1="-50"
                    y1="140"
                    x2="550"
                    y2="140"
                    stroke="rgba(255,255,255,0.04)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <line
                    x1="-50"
                    y1="190"
                    x2="550"
                    y2="190"
                    stroke="rgba(255,255,255,0.04)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />

                  {/* Line B (White) */}
                  <path
                    d="M 50 220 Q 150 215, 200 210 T 300 200 T 400 185 T 460 170 L 480 170"
                    fill="none"
                    stroke="#eaeaea"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Line A (Orange) */}
                  <path
                    d="M 50 200 Q 150 190, 200 180 T 300 130 T 380 75 L 420 50 L 440 50"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Marker A */}
                  <g>
                    <circle cx="440" cy="50" r="14" fill="#f59e0b" />
                    <text
                      x="440"
                      y="54"
                      fill="black"
                      fontSize="12"
                      fontWeight="600"
                      textAnchor="middle"
                    >
                      A
                    </text>

                    <rect
                      x="465"
                      y="37"
                      width="80"
                      height="26"
                      rx="13"
                      fill="#f59e0b"
                      fillOpacity="0.15"
                      stroke="#f59e0b"
                      strokeOpacity="1"
                      strokeWidth="1.5"
                    />
                    <text
                      x="505"
                      y="54"
                      fill="#fcd34d"
                      fontSize="11"
                      fontWeight="600"
                      textAnchor="middle"
                    >
                      +7.5% RPV
                    </text>
                  </g>

                  {/* Marker B */}
                  <g>
                    <circle cx="480" cy="170" r="14" fill="#eaeaea" />
                    <text
                      x="480"
                      y="174"
                      fill="black"
                      fontSize="12"
                      fontWeight="600"
                      textAnchor="middle"
                    >
                      B
                    </text>

                    <rect
                      x="505"
                      y="157"
                      width="76"
                      height="26"
                      rx="13"
                      fill="#eaeaea"
                      fillOpacity="0.1"
                      stroke="#eaeaea"
                      strokeOpacity="0.4"
                      strokeWidth="1"
                    />
                    <text
                      x="543"
                      y="174"
                      fill="white"
                      fontSize="11"
                      fontWeight="500"
                      textAnchor="middle"
                    >
                      +1.7% RPV
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          {/* Card 4: AI Shopify developer */}
          <div className="border border-white/[0.06] rounded-[14px] p-1 lg:p-10s">
            <div className="bg-[#141414] border border-white/[0.06] rounded-[14px] p-8 lg:p-10 flex flex-col min-h-[420px] lg:h-[480px] relative overflow-hidden sticky top-36 lg:static z-40 shadow-2xl shadow-black/50 transition-all duration-300">
              {/* BG Elements - Abstract UI blocks simulating desktop view */}
              <div className="absolute inset-x-0 bottom-0 top-[30%] opacity-[0.15] pointer-events-none flex items-center justify-center -translate-y-4">
                <div
                  className="w-[140%] h-[140%] relative"
                  style={{
                    transform:
                      "perspective(800px) rotateX(45deg) rotateZ(-8deg) scale(0.85)",
                  }}
                >
                  <div className="absolute top-[10%] left-[10%] w-[35%] h-[18%] bg-[#2a2a2a] border border-white/10 rounded-[14px]" />
                  <div className="absolute top-[32%] left-[10%] w-[35%] h-[18%] bg-[#2a2a2a] border border-white/10 rounded-[14px] flex items-center px-4">
                    <div className="w-5 h-5 rounded-full bg-white/20 mr-3"></div>
                    <div className="w-1/2 h-1.5 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="absolute top-[10%] left-[50%] w-[42%] h-[50%] bg-[#2a2a2a] border border-white/10 rounded-[14px]" />
                  <div className="absolute top-[65%] left-[10%] w-[82%] h-[20%] bg-[#2a2a2a] border border-white/10 rounded-[14px]" />
                </div>
              </div>

              <div className="relative z-10 w-full mb-10">
                <h3 className="text-[17px] font-medium text-[#f4f4f5] mb-2.5 tracking-tight">
                  AI Shopify developer
                </h3>
                <p className="text-[13px] text-[#8b8b8f] leading-[1.6] max-w-[340px] font-light">
                  Cluster tests different versions of key Shopify UI components
                  and deploys the ones that drive more conversions and revenue.
                </p>
              </div>

              {/* Input Component */}
              <div className="absolute bottom-[20%] lg:bottom-[25%] left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] z-20">
                <div className="bg-[#18181a] border border-white/[0.08] rounded-[24px] p-2.5 pl-3 flex items-center gap-3 w-full shadow-2xl backdrop-blur-2xl opacity-100 transform-none">
                  <div className="w-[30px] h-[30px] rounded-full overflow-hidden flex-shrink-0 border border-white/[0.15] relative shadow-inner">
                    <img
                      src="https://i.pravatar.cc/100?img=33"
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 text-[13px] text-[#e4e4e7] pr-2 font-light tracking-wide truncate sm:whitespace-normal leading-[1.3]">
                    Create a reusable Shopify section with dynamic pricing and
                    A/B
                    <span className="inline-block w-[1.5px] h-[1.1em] bg-white align-middle ml-0.5 animate-pulse" />
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0 pr-1">
                    <button className="w-[28px] h-[28px] flex items-center justify-center text-[#71717a] hover:text-[#d4d4d8] transition-colors rounded-full hover:bg-white/[0.05]">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                    <button className="w-[26px] h-[26px] flex items-center justify-center bg-white text-black rounded-full hover:bg-[#e4e4e7] transition-all shadow-sm">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="19" x2="12" y2="5"></line>
                        <polyline points="5 12 12 5 19 12"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClusterFeatures;
