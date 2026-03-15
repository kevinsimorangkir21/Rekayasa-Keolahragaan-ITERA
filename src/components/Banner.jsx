"use client";
import { motion } from "framer-motion";

export default function Banner({ image }) {
  return (
    <section
      className="relative overflow-hidden min-h-[320px] md:min-h-[420px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Optional subtle animation */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      />
    </section>
  );
}