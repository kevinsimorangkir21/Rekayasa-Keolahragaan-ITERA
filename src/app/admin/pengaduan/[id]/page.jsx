"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("pengaduanData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setData(parsed);
      setItem(parsed[id]);
    }
  }, [id]);

  const updateStatus = (status) => {
    const newData = [...data];
    newData[id].status = status;

    setData(newData);
    setItem(newData[id]);

    localStorage.setItem("pengaduanData", JSON.stringify(newData));
  };

  if (!item) return null;

  return (
    <div className="max-w-3xl space-y-8">

      <h1 className="text-xl font-semibold">
        Detail Pengaduan
      </h1>

      <div className="border border-gray-200 rounded-2xl p-6 space-y-4">

        <Info label="Nama" value={item.nama} />
        <Info label="Email" value={item.email} />
        <Info label="Kategori" value={item.kategori} />
        <Info label="Tanggal" value={item.tanggal} />

        <div>
          <p className="text-sm text-gray-400">Isi</p>
          <p className="text-gray-700">{item.isi}</p>
        </div>

      </div>

      <div className="border border-gray-200 rounded-2xl p-6">

        <p className="mb-3 text-sm">Update Status</p>

        <div className="flex gap-2">
          <button onClick={() => updateStatus("baru")} className="btn">
            Baru
          </button>
          <button onClick={() => updateStatus("proses")} className="btn">
            Proses
          </button>
          <button onClick={() => updateStatus("selesai")} className="btn">
            Selesai
          </button>
        </div>

      </div>

    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p>{value}</p>
    </div>
  );
}