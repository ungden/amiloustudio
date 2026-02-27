'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-brand-accent mb-6">
        Error
      </p>
      <h1 className="text-4xl md:text-5xl font-light tracking-widest uppercase mb-4">
        Something Went Wrong
      </h1>
      <p className="text-gray-500 max-w-md mb-10 font-light leading-relaxed">
        We apologise for the inconvenience. An unexpected error has occurred.
        Please try again, and if the issue persists, do not hesitate to contact
        our support team.
      </p>
      <button
        onClick={reset}
        className="px-8 py-3 bg-brand text-white text-sm uppercase tracking-widest hover:bg-brand-dark transition-colors cursor-pointer"
      >
        Try Again
      </button>
    </div>
  );
}
