"use client";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

export default function EventCalendar() {

  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h3 className="text-lg font-bold text-orange-600 mb-4">
        Kalender Event
      </h3>

      <Calendar
        onChange={setDate}
        value={date}
        className="border-none"
      />

    </div>
  );
}