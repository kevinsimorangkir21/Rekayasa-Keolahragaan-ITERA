"use client";

import { motion } from "framer-motion";
import { Cpu, MapPin, Rocket } from "lucide-react";

export default function Impact({ data }) {
  const facts = data?.facts || [];

  const iconMap = {
    cpu: Cpu,
    map: MapPin,
    rocket: Rocket,
  };

  return (
    <section className="bg-white py-24">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          {data?.title || "Fakta"}
        </h2>

        {/* SUBTITLE */}
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          {data?.subtitle || "Deskripsi belum diisi"}
        </p>

        {/* GRID */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">

          {facts.map((fact, i) => {
            const Icon = iconMap[fact.icon] || Cpu;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  border border-gray-200
                  rounded-2xl
                  p-6
                  text-left md:text-center
                  hover:bg-gray-50
                  transition
                "
              >

                <div className="flex md:justify-center mb-4">
                  <Icon className="w-8 h-8 text-gray-700" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {fact.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {fact.desc}
                </p>

              </motion.div>
            );
          })}

          {/* EMPTY STATE */}
          {facts.length === 0 && (
            <p className="col-span-3 text-gray-400">
              Belum ada data impact
            </p>
          )}

        </div>

      </div>

    </section>
  );
}