import * as React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className, ...props }) => {
  return (
    <nav className={cn("flex items-center text-sm", className)} aria-label="Breadcrumb" {...props}>
      {items.map((item, i) => (
        <React.Fragment key={item.href}>
          <Link href={item.href} className="hover:underline focus:outline-none focus:underline">
            {item.label}
          </Link>
          {i < items.length - 1 && (
            <FaChevronRight className="mx-2 text-gray-400" aria-hidden />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}; 