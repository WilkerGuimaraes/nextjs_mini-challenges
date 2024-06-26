"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export function Pagination() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const totalPages = 17;

  const handlePrevious = () => {
    if (page > 1) {
      router.push(`/?page=${page - 1}`);
    }
  };

  const handleNext = () => {
    if (page > totalPages) return;

    router.push(`/?page=${page + 1}`);
  };

  return (
    <div className="space-x-2">
      <button
        type="button"
        className="h-10 px-2 bg-zinc-800 text-zinc-50 rounded-lg hover:bg-zinc-700"
        onClick={handlePrevious}
        disabled={page === 1}
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        className="h-10 px-2 bg-zinc-800 text-zinc-50 rounded-lg hover:bg-zinc-700"
        onClick={handleNext}
        disabled={page === totalPages}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
