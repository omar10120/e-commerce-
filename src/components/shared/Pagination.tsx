import * as React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;
  return (
    <nav className="flex items-center justify-center gap-2 mt-6" aria-label="Pagination">
      <button
        className="px-3 py-1 rounded border disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        &lt;
      </button>
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          className={`px-3 py-1 rounded border ${currentPage === i + 1 ? 'bg-primary text-white' : ''}`}
          onClick={() => onPageChange(i + 1)}
          aria-current={currentPage === i + 1 ? "page" : undefined}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="px-3 py-1 rounded border disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        &gt;
      </button>
    </nav>
  );
}; 