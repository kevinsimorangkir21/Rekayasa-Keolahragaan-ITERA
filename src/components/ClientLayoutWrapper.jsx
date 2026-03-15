"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className={`flex-1 ${!shouldHide ? "pt-20" : ""}`}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {!shouldHide && <Footer />}

    </div>
  );
}