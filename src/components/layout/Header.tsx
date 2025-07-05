"use client";
import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaShoppingCart, FaMoon, FaSun, FaBars } from "react-icons/fa";
import { useCartStore } from "@/hooks/useCartStore";
import { CartSheet } from "@/components/cart/CartSheet";

export const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);
  const totalItems = useCartStore((s) => s.totalItems);
  const [badgeBounce, setBadgeBounce] = React.useState(false);

  React.useEffect(() => {
    if (totalItems > 0) {
      setBadgeBounce(true);
      const t = setTimeout(() => setBadgeBounce(false), 500);
      return () => clearTimeout(t);
    }
  }, [totalItems]);

  return (
    <header className="sticky top-0 z-30 w-full bg-white dark:bg-gray-900 shadow-sm">
      <nav className="flex items-center justify-between h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold text-xl text-primary transition-transform duration-300 hover:scale-110 focus:scale-110">
            FuFuBites
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="relative group focus:outline-none">
            <span className=" focus:underline">Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full group-focus:w-full"></span>
          </Link>
          <Link href="/products" className="relative group focus:outline-none">
            <span className=" focus:underline">Shop</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full group-focus:w-full"></span>
          </Link>
          <Link href="/contact" className="relative group focus:outline-none">
            <span className=" focus:underline">Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full group-focus:w-full"></span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <FaSun className="animate-spin-slow" /> : <FaMoon />}
          </button>
          {/* Desktop: open CartSheet, Mobile: link to /cart */}
          <div className="hidden md:block">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Cart"
            >
              <FaShoppingCart className="text-xl" />
              {totalItems > 0 && (
                <span className={`absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full px-1.5 py-0.5 ${badgeBounce ? 'animate-bounce' : ''}`}>
                  {totalItems}
                </span>
              )}
            </button>
            <CartSheet open={cartOpen} onClose={() => setCartOpen(false)} />
          </div>
          <Link href="/cart" className="relative p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary md:hidden" aria-label="Cart">
            <FaShoppingCart className="text-xl" />
            {totalItems > 0 && (
              <span className={`absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full px-1.5 py-0.5 ${badgeBounce ? 'animate-bounce' : ''}`}>
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-2 animate-fade-in-down">
          <Link href="/" className="block py-2 hover:underline focus:underline">Home</Link>
          <Link href="/products" className="block py-2 hover:underline focus:underline">Shop</Link>
          <Link href="/contact" className="block py-2 hover:underline focus:underline">Contact</Link>
        </div>
      )}
    </header>
  );
}; 