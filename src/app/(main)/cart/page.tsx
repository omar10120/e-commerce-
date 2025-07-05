"use client";
import * as React from "react";
import { useCartStore } from "@/hooks/useCartStore";
import { mockProducts } from "@/data/mockProducts";
import { CartItem as CartItemComponent } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { EmptyState } from "@/components/shared/EmptyState";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const products = mockProducts;

  return (
    <div className="py-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {items.length === 0 ? (
        <EmptyState title="Your cart is empty" description="Browse products and add them to your cart." />
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {items.map((item) => {
              const product = products.find((p) => p.id === item.productId);
              const variant = product?.variants.find((v) => v.id === item.selectedVariantId);
              if (!product || !variant) return null;
              return <CartItemComponent key={item.productId + item.selectedVariantId} item={item} product={product} variant={variant} />;
            })}
          </div>
          <CartSummary items={items} products={products} />
        </>
      )}
    </div>
  );
} 