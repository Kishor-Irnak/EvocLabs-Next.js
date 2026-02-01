"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import BookDemo from "@/components/BookDemo";
import { useRouter } from "next/navigation";

export default function BookDemoPage() {
  const router = useRouter();

  return (
    <div className="bg-background min-h-screen text-text-main font-sans selection:bg-primary/30 selection:text-primary-hover">
      <Navbar />
      <main>
        <BookDemo onBack={() => router.push("/")} />
      </main>
    </div>
  );
}
