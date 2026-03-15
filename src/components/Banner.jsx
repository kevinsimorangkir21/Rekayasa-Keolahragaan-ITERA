"use client";
import { motion } from "framer-motion";

export default function Banner({ title, subtitle, image }) {
  return (
    <section
      className="relative overflow-hidden text-white min-h-[320px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10 text-center w-full">
        
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200"
          >
            {subtitle}
          </motion.p>
        )}

      </div>
    </section>
  );
}