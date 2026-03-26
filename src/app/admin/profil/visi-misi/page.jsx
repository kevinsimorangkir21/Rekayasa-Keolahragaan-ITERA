"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  GraduationCap,
  Microscope,
  Cog,
  Handshake,
} from "lucide-react";

const iconMap = {
  graduation: GraduationCap,
  microscope: Microscope,
  cog: Cog,
  handshake: Handshake,
};

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("visiMisiData");
    if (saved) setData(JSON.parse(saved));
  }, []);

  if (!data) {
    return (
      <div className="p-6">
        <p className="text-gray-500">Belum ada data.</p>

        <Link
          href="/admin/profil/visi-misi/edit"
          className="mt-4 inline-block px-4 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-100"
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
        <h1 className="text-2xl font-semibold text-gray-900">
          Visi & Misi
        </h1>

        <Link
          href="/admin/profil/visi-misi/edit"
          className="px-4 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-100"
        >
          Edit
        </Link>
      </div>

      {/* HERO */}
      <div
        className="h-[300px] rounded-2xl bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${data.hero})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl font-semibold text-center px-6">
            {data.title}
          </h1>
        </div>
      </div>

      {/* VISI */}
      <div className="border border-gray-200 rounded-2xl p-10 text-center">

        {/* accent line */}
        <div className="w-10 h-[2px] bg-orange-500 mx-auto mb-4" />

        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Visi
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {data.visi}
        </p>

      </div>

      {/* MISI */}
      <div className="grid md:grid-cols-2 gap-6">

        {data.misi.map((item, i) => {
          const Icon = iconMap[item.icon] || GraduationCap;

          return (
            <div
              key={i}
              className="
                border border-gray-200
                rounded-2xl
                p-6
                hover:bg-gray-50
                transition
              "
            >
              <div className="flex gap-4 items-start">

                {/* NUMBER */}
                <div className="text-sm text-orange-600 font-semibold">
                  {i + 1}.
                </div>

                {/* ICON */}
                <div className="text-gray-700">
                  <Icon size={20} />
                </div>

                {/* TEXT */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.text}
                </p>

              </div>
            </div>
          );
        })}

      </div>

      {/* FLOATING EDIT */}
      <div className="fixed bottom-6 right-6">
        <Link
          href="/admin/profil/visi-misi/edit"
          className="
            px-5 py-2.5
            rounded-full
            bg-gray-900 text-white
            text-sm
            hover:bg-gray-800
            transition
          "
        >
          Edit
        </Link>
      </div>

    </div>
  );
}