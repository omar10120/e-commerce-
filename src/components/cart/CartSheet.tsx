"use client";
import * as React from "react";
import { useCartStore } from "@/hooks/useCartStore";
import { mockProducts } from "@/data/mockProducts";
import { CartItem as CartItemComponent } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";

export const CartSheet: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const items = useCartStore((s) => s.items);
  const products = mockProducts;

  if (!open) return null;

  return (
    <aside className="fixed top-0 right-0 w-full max-w-md h-full bg-white dark:bg-gray-900 shadow-lg z-50 flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={onClose} aria-label="Close cart" className="text-2xl">×</button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {items.length === 0 ? (
          <div className="text-center text-gray-500 py-8">Your cart is empty.</div>
        ) : (
          items.map((item) => {
            const product = products.find((p) => p.id === item.productId);
            const variant = product?.variants.find((v) => v.id === item.selectedVariantId);
            if (!product || !variant) return null;
            return <CartItemComponent key={item.productId + item.selectedVariantId} item={item} product={product} variant={variant} />;
          })
        )}
      </div>
      <div className="p-4 border-t">
        <CartSummary items={items} products={products} />
      </div>
    </aside>
  );
}; 