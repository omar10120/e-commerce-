import * as React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Quick links</h3>
          <ul className="space-y-1">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/refund">Refund Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Subscribe to our emails</h3>
          <form className="flex flex-col gap-2">
            <input type="email" placeholder="Email" className="rounded border px-3 py-2" />
            <button type="submit" className="bg-primary-secondary text-white rounded px-3 py-2 hover:bg-primary-secondary/90">Sign up</button>
          </form>
        </div>
        <div className="flex flex-col items-start md:items-end gap-2 ">
          <span className="text-sm">&copy; {new Date().getFullYear()} FuFuBites</span>
          <div className="flex gap-2 mt-2">
            <span className="inline-block w-8 h-5 bg-gray-300 rounded" title="Visa"></span>
            <span className="inline-block w-8 h-5 bg-gray-300 rounded" title="Mastercard"></span>
            <span className="inline-block w-8 h-5 bg-gray-300 rounded" title="Apple Pay"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}; 