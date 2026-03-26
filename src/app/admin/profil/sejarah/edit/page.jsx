"use client";

import { useState, useEffect } from "react";
import { useToast } from "@/context/ToastContext";

export default function Page() {
  const { showToast } = useToast();

  const [preview, setPreview] = useState(false);

  const [data, setData] = useState({
    title: "Sejarah Program Studi",
    hero: "",
    description: [""],
    timeline: [],
  });

  // LOAD
  useEffect(() => {
    const saved = localStorage.getItem("sejarahData");
    if (saved) setData(JSON.parse(saved));
  }, []);

  // SAVE
  const handleSave = () => {
    localStorage.setItem("sejarahData", JSON.stringify(data));
    showToast("Berhasil disimpan ✅", "success");
  };

  // MOVE TIMELINE
  const moveItem = (index, dir) => {
    const newData = [...data.timeline];
    const target = index + dir;
    if (target < 0 || target >= newData.length) return;

    [newData[index], newData[target]] = [
      newData[target],
      newData[index],
    ];

    setData({ ...data, timeline: newData });
  };

  return (
    <div className="max-w-4xl space-y-10">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            CMS Sejarah
          </h1>
          <p className="text-sm text-gray-500">
            Kelola konten halaman sejarah
          </p>
        </div>

        <div className="flex gap-2">

          <button
            onClick={() => setPreview(!preview)}
            className="
              px-4 py-2
              rounded-full
              border border-gray-300
              text-sm
              hover:bg-gray-100
            "
          >
            {preview ? "Edit Mode" : "Preview"}
          </button>

          <button
            onClick={handleSave}
            className="
              px-5 py-2.5
              rounded-full
              bg-gray-900 text-white
              text-sm
              hover:bg-gray-800
              transition
            "
          >
            Simpan
          </button>

        </div>
      </div>

      {/* PREVIEW MODE */}
      {preview ? (
        <div className="border border-gray-200 rounded-3xl overflow-hidden bg-white">

          <div className="text-xs text-gray-400 px-6 pt-4">
            Preview Mode
          </div>

          {/* HERO */}
          <div
            className="h-[260px] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${data.hero})` }}
          >
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h1 className="text-white text-3xl font-semibold text-center px-6">
                {data.title}
              </h1>
            </div>
          </div>

          <div className="p-6 space-y-6">

            {/* DESKRIPSI */}
            {data.description.map((d, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">
                {d}
              </p>
            ))}

            {/* TIMELINE */}
            <div className="space-y-4">
              {data.timeline.map((t, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl p-4"
                >
                  <p className="text-orange-600 text-sm font-medium">
                    {t.year}
                  </p>
                  <h3 className="font-semibold text-gray-900">
                    {t.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      ) : (
        <>
          {/* HERO */}
          <div className="border border-gray-200 rounded-2xl p-6 space-y-4 bg-white">
            <h2 className="text-sm font-medium text-gray-700">Hero</h2>

            <Input
              value={data.title}
              onChange={(val) => setData({ ...data, title: val })}
              placeholder="Judul"
            />

            <Input
              value={data.hero}
              onChange={(val) => setData({ ...data, hero: val })}
              placeholder="URL Gambar"
            />
          </div>

          {/* DESKRIPSI */}
          <div className="border border-gray-200 rounded-2xl p-6 space-y-4 bg-white">
            <h2 className="text-sm font-medium text-gray-700">
              Deskripsi
            </h2>

            {data.description.map((text, i) => (
              <div key={i} className="flex gap-2">
                <textarea
                  value={text}
                  onChange={(e) => {
                    const newDesc = [...data.description];
                    newDesc[i] = e.target.value;
                    setData({ ...data, description: newDesc });
                  }}
                  className="
                    flex-1
                    px-4 py-3
                    rounded-xl
                    border border-gray-200
                    text-sm
                    focus:outline-none
                    focus:border-orange-400
                  "
                />

                <button
                  onClick={() => {
                    setData({
                      ...data,
                      description: data.description.filter(
                        (_, idx) => idx !== i
                      ),
                    });
                  }}
                  className="text-gray-400 hover:text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              onClick={() =>
                setData({
                  ...data,
                  description: [...data.description, ""],
                })
              }
              className="text-sm text-orange-600 hover:underline"
            >
              + Tambah
            </button>
          </div>

          {/* TIMELINE */}
          <div className="border border-gray-200 rounded-2xl p-6 space-y-4 bg-white">
            <h2 className="text-sm font-medium text-gray-700">
              Timeline
            </h2>

            {data.timeline.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-4 space-y-3 hover:bg-gray-50 transition"
              >

                <Input
                  value={item.year}
                  onChange={(val) => {
                    const newData = [...data.timeline];
                    newData[i].year = val;
                    setData({ ...data, timeline: newData });
                  }}
                  placeholder="Tahun"
                />

                <Input
                  value={item.title}
                  onChange={(val) => {
                    const newData = [...data.timeline];
                    newData[i].title = val;
                    setData({ ...data, timeline: newData });
                  }}
                  placeholder="Judul"
                />

                <textarea
                  value={item.desc}
                  onChange={(e) => {
                    const newData = [...data.timeline];
                    newData[i].desc = e.target.value;
                    setData({ ...data, timeline: newData });
                  }}
                  placeholder="Deskripsi"
                  className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    border border-gray-200
                    text-sm
                    focus:outline-none
                    focus:border-orange-400
                  "
                />

                {/* ACTION */}
                <div className="flex justify-between text-xs text-gray-500">
                  <div className="flex gap-2">
                    <button onClick={() => moveItem(i, -1)}>↑</button>
                    <button onClick={() => moveItem(i, 1)}>↓</button>
                  </div>

                  <button
                    onClick={() => {
                      setData({
                        ...data,
                        timeline: data.timeline.filter(
                          (_, idx) => idx !== i
                        ),
                      });
                    }}
                    className="hover:text-red-500"
                  >
                    Hapus
                  </button>
                </div>

              </div>
            ))}

            <button
              onClick={() =>
                setData({
                  ...data,
                  timeline: [
                    ...data.timeline,
                    { year: "", title: "", desc: "" },
                  ],
                })
              }
              className="text-sm text-orange-600 hover:underline"
            >
              + Tambah Timeline
            </button>
          </div>
        </>
      )}
    </div>
  );
}

/* INPUT COMPONENT */
function Input({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="
        w-full
        px-4 py-2.5
        rounded-xl
        border border-gray-200
        text-sm
        focus:outline-none
        focus:border-orange-400
      "
    />
  );
}