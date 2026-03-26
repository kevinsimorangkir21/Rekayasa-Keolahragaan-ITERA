"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("prestasiData");
    if (saved) setData(JSON.parse(saved));
  }, []);

  return (
    <main className="space-y-10">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          Prestasi Mahasiswa
        </h1>

        <Link
          href="/admin/profil/prestasi/edit"
          className="px-4 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-100"
        >
          Edit
        </Link>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {data.map((item, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-2xl overflow-hidden"
          >
            <div
              className="h-52 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.foto})` }}
            />

            <div className="p-4 space-y-1">
              <h3 className="font-semibold text-gray-900 text-sm">
                {item.nama}
              </h3>

              <p className="text-xs text-gray-400">
                {item.nim} • {item.prodi}
              </p>

              <p className="text-sm text-gray-600">
                {item.prestasi}
              </p>
            </div>
          </div>
        ))}

        {data.length === 0 && (
          <p className="text-gray-400 col-span-3">
            Belum ada data prestasi
          </p>
        )}

      </div>

    </main>
  );
}