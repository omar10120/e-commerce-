import * as React from "react";
import Image from "next/image";
import { CartItem as CartItemType } from "@/types/CartItem";
import { Product, ProductVariant } from "@/types/Product";
import { useCartStore } from "@/hooks/useCartStore";
import { Button } from "@/components/ui/Button";

interface CartItemProps {
  item: CartItemType;
  product: Product;
  variant: ProductVariant;
}

export const CartItem: React.FC<CartItemProps> = ({ item, product, variant }) => {
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <div className="flex gap-4 items-center border-b py-4">
      <Image src={variant.images[0] || product.images[0]} alt={product.name} width={80} height={60} className="rounded object-cover" />
      <div className="flex-1">
        <div className="font-semibold">{product.name}</div>
        <div className="text-sm text-gray-500">{variant.name}</div>
        <div className="text-primary font-bold">Dhs. {variant.price.toFixed(2)}</div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" onClick={() => updateQuantity(item.productId, item.selectedVariantId, Math.max(1, item.quantity - 1))} aria-label="Decrease quantity">-</Button>
        <span className="px-2">{item.quantity}</span>
        <Button variant="outline" onClick={() => updateQuantity(item.productId, item.selectedVariantId, item.quantity + 1)} aria-label="Increase quantity">+</Button>
      </div>
      <Button variant="outline" onClick={() => removeItem(item.productId, item.selectedVariantId)} aria-label="Remove item">Remove</Button>
    </div>
  );
}; 