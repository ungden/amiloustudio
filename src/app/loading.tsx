export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-light tracking-[0.4em] uppercase animate-pulse text-brand">
        Amilou
      </h1>
      <div className="mt-8 w-48 h-[1px] bg-brand-gray overflow-hidden">
        <div className="h-full w-1/3 bg-brand animate-[shimmer_1.4s_ease-in-out_infinite] origin-left" />
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
