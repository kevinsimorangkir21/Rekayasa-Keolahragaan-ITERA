"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // halaman yang tidak pakai navbar & footer
  const hideLayoutPrefixes = [
    "/login",
    "/register",
    "/lupa-kata-sandi",
    "/dashboard",
    "/admin",
    "/perusahaan",
  ];

  const shouldHide = hideLayoutPrefixes.some((path) =>
    pathname.startsWith(path)
  );

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen">
      
      {!shouldHide && <Navbar />}

      <main className={`flex-1 ${!shouldHide ? "pt-20" : ""}`}>
        {children}
      </main>

      {!shouldHide && <Footer />}

    </div>
  );
}