import Image from "next/image";
import Link from "next/link";

// Dummy data sementara — nanti bisa ambil dari CMS / API
const newsData = {
  "kompetisi-robotika-nasional": {
    title: "Mahasiswa Sports Engineering Ikuti Kompetisi Robotika Nasional",
    date: "10 Nov 2024",
    tag: "Prestasi",
    author: "Admin Prodi",
    image: "https://images.unsplash.com/photo-1581093588401-22f6363f6a69",
    content: `
      Mahasiswa Program Studi Rekayasa Keolahragaan berhasil mengikuti Kompetisi Robotika Nasional
      dengan membawa inovasi yang menggabungkan teknologi robotika dan olahraga.
      Inovasi ini bertujuan untuk membantu analisis performa atlet secara lebih akurat dan real-time.

      Prestasi ini sekaligus menjadi bukti nyata bahwa rekayasa dalam dunia olahraga memiliki peluang besar
      dalam pemanfaatan teknologi modern untuk meningkatkan performa atlet di masa depan.
    `,
  },

  "wearable-sensor-analisis-gerak-atlet": {
    title: "Penelitian Wearable Sensor untuk Analisis Gerak Atlet",
    date: "03 Nov 2024",
    tag: "Penelitian",
    author: "Tim Riset REKO",
    image: "https://images.unsplash.com/photo-1599058918144-7573e96b37f1",
    content: `
      Penelitian terbaru mahasiswa Sports Engineering menciptakan wearable sensor yang dapat mengukur
      biomekanika gerakan atlet dengan lebih efisien. Teknologi ini diharapkan mampu membantu pelatih dalam
      pemetaan resiko cedera dan peningkatan performa.
    `,
  },

  "kolaborasi-industri-olahraga-nasional": {
    title: "Kolaborasi Sports Engineering dengan Industri Olahraga Nasional",
    date: "28 Okt 2024",
    tag: "Kerjasama",
    author: "Humas REKO",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    content: `
      Program Studi Rekayasa Keolahragaan melakukan kerja sama dengan beberapa industri olahraga besar di Indonesia.
      Kolaborasi ini mencakup pengembangan alat olahraga, biomekanika, hingga sport-performance analysis yang modern.
    `,
  },
};

export default function NewsDetail({ params }) {
  const data = newsData[params.slug];

  if (!data) {
    return <p className="p-10 text-center">Berita tidak ditemukan.</p>;
  }

  return (
    <article className="bg-gray-50 dark:bg-[#0b0f1a] text-gray-900 dark:text-white transition-colors duration-500">
      <div className="w-full h-[300px] md:h-[450px] relative">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover brightness-75"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14">
        <Link
          href="/news"
          className="inline-block text-orange-600 hover:text-orange-700 dark:text-orange-400 mb-6"
        >
          ← Kembali ke Berita
        </Link>

        <span className="bg-orange-600 dark:bg-orange-500 text-white text-sm px-3 py-1 rounded-full">
          {data.tag}
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-3 text-orange-600 dark:text-orange-400">
          {data.title}
        </h1>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          {data.date} • {data.author}
        </p>

        <div className="space-y-5 text-gray-800 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-line">
          {data.content}
        </div>
      </div>
    </article>
  );
}
