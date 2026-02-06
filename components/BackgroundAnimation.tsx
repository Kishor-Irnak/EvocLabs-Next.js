"use client";

import React from "react";
import Script from "next/script";

// Extend Window interface for TypeScript
declare global {
  interface Window {
    UnicornStudio: any;
  }
}

const BackgroundAnimation: React.FC = () => {
  return (
    <>
      {/* Load UnicornStudio Script */}
      <Script
        src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (
            typeof window !== "undefined" &&
            window.UnicornStudio &&
            !window.UnicornStudio.isInitialized
          ) {
            window.UnicornStudio.init();
            window.UnicornStudio.isInitialized = true;
          }
        }}
      />

      {/* Background Animation Component - Fixed positioning */}
      <div
        className="fixed top-0 left-0 w-full h-[800px] pointer-events-none"
        style={{
          zIndex: 0,
          maskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            data-us-project="bKN5upvoulAmWvInmHza"
            className="absolute w-full h-full left-0 top-0"
          ></div>
        </div>
      </div>

      {/* Diagonal Background Pattern */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(255, 255, 255, 0.015) 40px,
            rgba(255, 255, 255, 0.015) 41px
          )`,
        }}
      />
    </>
  );
};

export default BackgroundAnimation;
