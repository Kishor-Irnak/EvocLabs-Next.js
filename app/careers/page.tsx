"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Careers from "@/components/Careers";
import { useRouter } from "next/navigation";

export default function CareersPage() {
  const router = useRouter();

  return (
    <div className="bg-background min-h-screen text-text-main font-sans selection:bg-primary/30 selection:text-primary-hover">
      <Navbar />
      <main>
        <Careers onBack={() => router.push("/")} />
      </main>
      <Footer />
    </div>
  );
}
