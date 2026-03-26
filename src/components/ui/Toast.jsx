"use client";

export default function Toast({ message, type = "success" }) {

  const base = "px-5 py-3 rounded-xl shadow-lg text-white text-sm font-medium";

  const styles = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div className={`${base} ${styles[type]} animate-toast`}>
      {message}
    </div>
  );
}