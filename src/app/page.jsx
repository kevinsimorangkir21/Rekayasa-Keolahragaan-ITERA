"use client";

import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Fact from "@/components/Fact"; // ⬅️ Steps sudah diganti Fact
import News from "@/components/News";
import Events from "@/components/Events";

export default function Home() {
  return (
    <main className="pt-[8px] md:pt-[9px]">
      <Hero />
      <Impact /> 
      <Fact />    {/* ⬅️ Steps → Fact */}
      <News />
      <Events />
    </main>
  );
}
