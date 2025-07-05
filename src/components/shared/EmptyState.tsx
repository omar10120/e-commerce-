import * as React from "react";

interface EmptyStateProps {
  title: string;
  description?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500">
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="mb-4 text-gray-300"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 15h8M9 9h.01M15 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {description && <p className="text-sm text-gray-400">{description}</p>}
    </div>
  );
}; 