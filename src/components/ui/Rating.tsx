import * as React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
}

export const Rating: React.FC<RatingProps> = ({ value, max = 5, className, ...props }) => {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`Rating: ${value} out of ${max}`} {...props}>
      {Array.from({ length: max }).map((_, i) =>
        value >= i + 1 ? (
          <FaStar key={i} className="text-yellow-400" aria-hidden />
        ) : value > i && value < i + 1 ? (
          <FaStar key={i} className="text-yellow-400 opacity-50" aria-hidden />
        ) : (
          <FaRegStar key={i} className="text-gray-300" aria-hidden />
        )
      )}
    </div>
  );
}; 