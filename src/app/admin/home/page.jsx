"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import Fact from "@/components/Fact";
import Impact from "@/components/Impact";
import { useEffect, useState } from "react";

export default function HomePreview() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("homeData");

    if (saved) {
      setData(JSON.parse(saved));
    } else {
      setData(null);
    }
  }, []);

  // ======================
  // EMPTY STATE
  // ======================
  if (!data) {
    return (
      <div className="p-10 text-center space-y-4">

        <h2 className="text-xl font-semibold text-gray-700">
          Belum ada data homepage
        </h2>

        <p className="text-gray-500">
          Silakan isi data terlebih dahulu melalui halaman edit.
        </p>

        <Link
          href="/admin/home/edit"
          className="inline-block bg-orange-600 text-white px-5 py-2 rounded-lg"
        >
          Mulai Edit
        </Link>

      </div>
    );
  }

  return (
    <div>

      {/* HEADER */}
      <div className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">
          Home Preview
        </h1>

        <Link
          href="/admin/home/edit"
          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
        >
          Edit
        </Link>
      </div>

      {/* ======================
      RENDER COMPONENT ASLI
      ====================== */}

      <Hero slides={data?.hero?.slides || []} />

      <Fact data={data?.stats || {}} />

      <Impact data={data?.impact || {}} />

    </div>
  );
}