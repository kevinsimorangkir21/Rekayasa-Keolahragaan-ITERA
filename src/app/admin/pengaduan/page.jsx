"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("pengaduanData");
    if (saved) setData(JSON.parse(saved));
  }, []);

  return (
    <div className="space-y-8">

      <h1 className="text-2xl font-semibold">Pengaduan</h1>

      <div className="border border-gray-200 rounded-2xl overflow-hidden">

        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left">Nama</th>
              <th className="p-4 text-left">Kategori</th>
              <th className="p-4 text-left">Tanggal</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">

                <td className="p-4">
                  <Link href={`/admin/pengaduan/${i}`}>
                    {item.nama}
                  </Link>
                </td>

                <td className="p-4">{item.kategori}</td>
                <td className="p-4">{item.tanggal}</td>
                <td className="p-4">
                  <Badge status={item.status} />
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

function Badge({ status }) {
  const map = {
    baru: "bg-blue-100 text-blue-600",
    proses: "bg-yellow-100 text-yellow-600",
    selesai: "bg-green-100 text-green-600",
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full ${map[status]}`}>
      {status}
    </span>
  );
}