import * as React from "react";
import { cn } from "@/lib/utils";

export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div
    className={cn(
      "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      className
    )}
    {...props}
  />
); 