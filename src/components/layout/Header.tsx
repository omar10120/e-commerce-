"use client";
import * as React from "react";
import Link from "next/link";

import { FaShoppingCart, FaSearch, FaUser, FaStore } from "react-icons/fa";
import { useCartStore } from "@/hooks/useCartStore";
import { CartSheet } from "@/components/cart/CartSheet";

export const Header: React.FC = () => {

  // const [menuOpen, setMenuOpen] = React.useState(false);
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
    <>
      {/* Top light gray bar */}
      <div className="w-full bg-gray-100 py-2 text-center text-lg font-light text-black">
        Free shipping for orders over{" "}
        <span style={{ color: "#6D388B" }} className="font-medium">120 AED</span>
      </div>
      {/* Purple promo bar */}
      <div className="w-full bg-primary-light">
        <div className="flex justify-center items-center py-3">
          <FaStore className="text-white text-2xl mr-2" />
          <span className="text-white text-lg font-medium">Get 10% on 1st order</span>
        </div>
      </div>
      {/* Main header */}
      <header className="sticky top-0 z-30 w-full bg-white dark:bg-gray-900 shadow-sm">
        <nav className="flex items-center justify-between h-20 max-w-7xl mx-auto px-8 text-black">
          {/* Left: Navigation */}
          <div className="flex items-center gap-8 flex-1">
            <Link href="/" className="relative group">
              <span className="bg-primary-secondary text-white font-bold py-2 px-4 rounded-lg">Home</span>
            </Link>
            <Link href="/products" className="relative group">
              <span className="py-2 px-4 rounded-lg">Shop</span>
            </Link>
            <Link href="/contact" className="relative group">
              <span className="py-2 px-4 rounded-lg">Contact</span>
            </Link>
          </div>
          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
            <span className="font-bold text-4xl text-primary" style={{ fontFamily: "cursive" }}>
              {/* coco<br />Bites */}
              <img src="/assets/logo.png" alt="logo" className="w-20 h-20 py-2" />
            </span>
          </div>
          {/* Right: Icons */}
          <div className="flex items-center gap-8 flex-1 justify-end">
            <button className="p-2 rounded focus:outline-none" aria-label="Search">
              <FaSearch className="text-2xl" />
            </button>
            <button className="p-2 rounded focus:outline-none" aria-label="User">
              <FaUser className="text-2xl" />
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 rounded focus:outline-none"
              aria-label="Cart"
            >
              <FaShoppingCart className="text-2xl" />
              {totalItems > 0 && (
                <span className={`absolute -top-1 -right-1 bg-primary text-black text-xs rounded-full px-1.5 py-0.5 ${badgeBounce ? 'animate-bounce' : ''}`}>
                  {totalItems}
                </span>
              )}
            </button>
            <CartSheet open={cartOpen} onClose={() => setCartOpen(false)} />
          </div>
        </nav>
        {/* {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-2 animate-fade-in-down ">
              <Link href="/" className="block py-2   ">Home</Link>
              <Link href="/products" className="block py-2 ">Shop</Link>
            <Link href="/contact" className="block py-2 ">Contact</Link>
          </div>
        )} */}
      </header>
    </>
  );
}; 