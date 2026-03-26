"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SejarahPreview() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("sejarahData");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  // EMPTY STATE (UPGRADED)
  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-lg font-semibold text-gray-900">
          Belum ada data sejarah
        </h2>

        <p className="text-gray-500 mt-2">
          Silakan tambahkan konten sejarah terlebih dahulu
        </p>

        <Link
          href="/admin/profil/sejarah/edit"
          className="mt-6 px-5 py-2.5 rounded-full border border-gray-300 hover:bg-gray-100 transition"
        >
          Edit Sekarang
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-12">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Preview Sejarah
          </h1>
          <p className="text-sm text-gray-500">
            Tampilan halaman sejarah di website
          </p>
        </div>

        <Link
          href="/admin/profil/sejarah/edit"
          className="px-5 py-2.5 rounded-full border border-gray-300 hover:bg-gray-100 transition text-sm"
        >
          Edit Konten
        </Link>
      </div>

      {/* HERO */}
      <div className="rounded-3xl overflow-hidden border border-gray-200">
        <div
          className="h-[320px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${data.hero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-4xl font-semibold text-center px-6">
              {data.title}
            </h1>
          </div>
        </div>
      </div>

      {/* DESKRIPSI */}
      <div className="border border-gray-200 rounded-2xl p-6">
        <h2 className="font-semibold text-gray-900 mb-4">
          Deskripsi
        </h2>

        <div className="space-y-4 text-gray-600 leading-relaxed">
          {data.description.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div className="border border-gray-200 rounded-2xl p-6">
        <h2 className="font-semibold text-gray-900 mb-6">
          Timeline
        </h2>

        <div className="relative">

          {/* LINE */}
          <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-8">

            {data.timeline.map((item, i) => (
              <div key={i} className="relative pl-8">

                {/* DOT */}
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-white border border-gray-300" />

                <div className="border border-gray-200 rounded-xl p-4">

                  <p className="text-sm text-orange-600 font-medium">
                    {item.year}
                  </p>

                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.desc}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

    </div>
  );
}