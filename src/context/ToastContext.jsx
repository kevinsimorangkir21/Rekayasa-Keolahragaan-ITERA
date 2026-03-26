"use client";

import { createContext, useContext, useState } from "react";
import Toast from "@/components/ui/Toast";

const ToastContext = createContext();

export function ToastProvider({ children }) {

  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });

    setTimeout(() => {
      setToast(null);
    }, 2000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* TOAST UI GLOBAL */}
      {toast && (
        <div className="fixed top-6 right-6 z-50">
          <Toast message={toast.message} type={toast.type} />
        </div>
      )}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);