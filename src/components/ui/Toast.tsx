'use client';

import { useEffect } from 'react';
import { create } from 'zustand';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, AlertCircle, Info } from 'lucide-react';

// --- Types ---

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface ToastState {
  toasts: Toast[];
  addToast: (message: string, type?: Toast['type']) => void;
  removeToast: (id: string) => void;
}

// --- Store ---

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],

  addToast: (message, type = 'success') => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    set((state) => ({
      toasts: [...state.toasts, { id, message, type }],
    }));

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }));
    }, 3000);
  },

  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}));

// --- Icon component ---

function ToastIcon({ type }: { type: Toast['type'] }) {
  switch (type) {
    case 'success':
      return <Check className="w-4 h-4" />;
    case 'error':
      return <AlertCircle className="w-4 h-4" />;
    case 'info':
      return <Info className="w-4 h-4" />;
  }
}

// --- Toast Container ---

export function ToastContainer() {
  const toasts = useToastStore((state) => state.toasts);
  const removeToast = useToastStore((state) => state.removeToast);

  return (
    <div
      className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none"
      aria-live="polite"
      aria-label="Notifications"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onDismiss={() => removeToast(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

// --- Individual Toast ---

function ToastItem({
  toast,
  onDismiss,
}: {
  toast: Toast;
  onDismiss: () => void;
}) {
  // Allow keyboard dismiss
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onDismiss]);

  const borderColor =
    toast.type === 'error'
      ? 'border-l-red-400'
      : toast.type === 'info'
        ? 'border-l-brand-accent'
        : 'border-l-brand';

  const iconColor =
    toast.type === 'error'
      ? 'text-red-400'
      : toast.type === 'info'
        ? 'text-brand-accent'
        : 'text-brand';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 80, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 80, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className={`pointer-events-auto bg-white shadow-lg border border-brand-gray border-l-[3px] ${borderColor} px-4 py-3 flex items-center gap-3 min-w-[280px] max-w-[380px]`}
      role="alert"
    >
      <span className={`flex-shrink-0 ${iconColor}`}>
        <ToastIcon type={toast.type} />
      </span>
      <p className="text-sm font-light text-brand tracking-wide flex-1 leading-snug">
        {toast.message}
      </p>
      <button
        onClick={onDismiss}
        className="flex-shrink-0 text-gray-400 hover:text-brand transition-colors p-0.5"
        aria-label="Dismiss notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
}
