import * as React from "react";
import { CartItem as CartItemType } from "@/types/CartItem";
import { Product } from "@/types/Product";
// import { Product, ProductVariant } from "@/types/Product";
import { Button } from "@/components/ui/Button";

interface CartSummaryProps {
  items: CartItemType[];
  products: Product[];
}

export const CartSummary: React.FC<CartSummaryProps> = ({ items, products }) => {
  const subtotal = items.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    const variant = product?.variants.find((v) => v.id === item.selectedVariantId);
    return sum + (variant ? variant.price * item.quantity : 0);
  }, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
      <div className="flex justify-between mb-2">
        <span>Items:</span>
        <span>{totalItems}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Subtotal:</span>
        <span className="font-bold">Dhs. {subtotal.toFixed(2)}</span>
      </div>
      <Button className="w-full" aria-label="Checkout" disabled>
        Checkout
      </Button>
    </div>
  );
}; 