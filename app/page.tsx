import React from "react";
import dynamic from "next/dynamic";

// Critical components - load with ssr true but wrap in dynamic for chunking
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });

// Below the fold components - load with ssr true for SEO, but dynamic for bundle splitting
const MarketingProfitPages = dynamic(
  () => import("@/components/MarketingProfitPage"),
  { ssr: true },
);
const LogoTicker = dynamic(() => import("@/components/LogoTicker"), {
  ssr: true,
});
const Process = dynamic(() => import("@/components/Process"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: true,
});
const Results = dynamic(() => import("@/components/Results"), { ssr: true });
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  ssr: true,
});
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const Founder = dynamic(() => import("@/components/Founder"), { ssr: true });
const Team = dynamic(() => import("@/components/Team"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-text-main font-sans selection:bg-primary/30 selection:text-primary-hover">
      <Navbar />
      <main>
        <Hero />
        <MarketingProfitPages />
        <LogoTicker />
        <Process />
        <Testimonials />
        <Results />
        <WhyChooseUs />
        <Services />
        <Founder />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
