import * as React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, width, height, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",
          className
        )}
        style={{ width, height, ...style }}
        aria-busy="true"
        aria-label="Loading..."
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton"; 