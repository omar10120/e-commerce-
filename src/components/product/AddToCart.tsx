"use client";
import * as React from "react";
import { Product } from "@/types/Product";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/hooks/useCartStore";

interface AddToCartProps {
  product: Product;
  selectedVariantId: string;
  quantity?: number;
}

export const AddToCart: React.FC<AddToCartProps> = ({ product, selectedVariantId, quantity = 1 }) => {
  const addItem = useCartStore((s) => s.addItem);
  const [loading, setLoading] = React.useState(false);

  const handleAdd = async () => {
    setLoading(true);
    addItem({ productId: product.id, selectedVariantId, quantity });
    // TODO: Show toast notification
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <Button onClick={handleAdd} loading={loading} aria-label="Add to cart" >
      Add to cart
    </Button>
  );
}; 