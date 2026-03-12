import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import bgImage from "@/public/bg-black-blue.png";
import bgDashboardBase from "@/public/bg-black-blue2.png";

// Critical components - load with ssr true but wrap in dynamic for chunking
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const ClusterFeatures = dynamic(() => import("@/components/ClusterFeatures"), {
  ssr: true,
});
const StatLabel = dynamic(() => import("@/components/StatLabel"), {
  ssr: true,
});
const ConnectedKnowledge = dynamic(
  () => import("@/components/ConnectedKnowledge"),
  {
    ssr: true,
  },
);
const ProblemStatement = dynamic(
  () => import("@/components/problem-statement"),
  {
    ssr: true,
  },
);

// Below the fold components - load with ssr true for SEO, but dynamic for bundle splitting
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <div className="min-h-screen text-text-main font-sans selection:bg-primary/30 selection:text-primary-hover relative overflow-x-hidden">
      {/* Stacked Background Layer */}
      <div className="absolute inset-x-0 top-0 z-0 bg-black">
        <div className="relative w-full h-screen">
          <Image
            src={bgImage}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative w-full h-[1200px] -mt-[2px]">
          <Image
            src={bgDashboardBase}
            alt="Dashboard Background"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <Navbar />
      <main className="relative" style={{ zIndex: 10 }}>
        <Hero />
        <ClusterFeatures />
        <StatLabel />
        <ConnectedKnowledge />
        <ProblemStatement />
      </main>
      <div className="relative" style={{ zIndex: 10 }}>
        <Footer />
      </div>
    </div>
  );
}
