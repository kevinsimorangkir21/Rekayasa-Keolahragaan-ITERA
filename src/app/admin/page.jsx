"use client";

import {
  Users,
  Newspaper,
  CalendarDays,
  UserPlus,
  Activity,
  CheckCircle2,
  Clock,
  AlertCircle,
  Download,
  TrendingUp
} from "lucide-react";

export default function AdminDashboard() {

  const stats = [
    {
      title: "Total Dosen",
      value: 8,
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Total Berita",
      value: 12,
      icon: Newspaper,
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      title: "Total Event",
      value: 5,
      icon: CalendarDays,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      title: "Admin",
      value: 2,
      icon: UserPlus,
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ];

  const activities = [
    { user: "Budi", action: "menambah dosen", time: "2 menit lalu" },
    { user: "Sari", action: "publish berita", time: "15 menit lalu" },
    { user: "Admin", action: "update event", time: "1 jam lalu" },
  ];

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">
            Dashboard
          </h1>
          <p className="text-gray-500 text-sm">
            Overview sistem admin
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 text-sm">
          <Download size={16} />
          Export Data
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-5 bg-white flex flex-col gap-3"
            >

              <div className="flex justify-between items-center">
                <div className={`p-2 rounded-lg ${item.bg}`}>
                  <Icon size={18} className={item.color} />
                </div>

                <span className="flex items-center gap-1 text-xs text-green-600">
                  <TrendingUp size={14} /> +12%
                </span>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900">
                {item.value}
              </h2>

              <p className="text-sm text-gray-500">
                {item.title}
              </p>

            </div>
          );
        })}
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* CHART */}
        <div className="lg:col-span-2 border border-gray-200 rounded-2xl p-6 bg-white">

          <div className="flex justify-between mb-6">
            <h3 className="font-semibold text-gray-900">
              Analytics
            </h3>

            <div className="flex gap-2 text-xs">
              <button className="px-3 py-1 rounded-full bg-gray-900 text-white">
                7 Hari
              </button>
              <button className="px-3 py-1 rounded-full bg-gray-100">
                30 Hari
              </button>
            </div>
          </div>

          {/* FAKE CHART */}
          <div className="h-40 flex items-end gap-2">
            {[40, 60, 30, 80, 55, 70, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gray-200 rounded-md relative overflow-hidden"
              >
                <div
                  className="absolute bottom-0 left-0 w-full bg-gray-900 rounded-md"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>

        </div>

        {/* ACTIVITY */}
        <div className="border border-gray-200 rounded-2xl p-6 bg-white">

          <h3 className="font-semibold mb-5 flex items-center gap-2 text-gray-900">
            <Activity size={18} />
            Aktivitas
          </h3>

          <div className="space-y-4">
            {activities.map((a, i) => (
              <div key={i} className="flex gap-3 items-start">

                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold">
                  {a.user[0]}
                </div>

                <div className="flex-1">
                  <p className="text-sm text-gray-800">
                    <span className="font-medium">{a.user}</span> {a.action}
                  </p>
                  <p className="text-xs text-gray-400">
                    {a.time}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* STATUS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

        {[
          { icon: CheckCircle2, value: 45, label: "Published" },
          { icon: Clock, value: 12, label: "Pending" },
          { icon: AlertCircle, value: 3, label: "Issues" },
        ].map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-6 bg-white text-center"
            >
              <Icon className="mx-auto mb-2 text-gray-700" size={24} />
              <h3 className="text-xl font-semibold">{item.value}</h3>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          );
        })}
      </div>

    </div>
  );
}