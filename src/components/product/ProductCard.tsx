import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/Product";
import { Button } from "@/components/ui/Button";
import { Rating } from "@/components/ui/Rating";
import { Skeleton } from "@/components/ui/Skeleton";

interface ProductCardProps {
  product: Product;
  loading?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, loading }) => {
  if (loading) {
    return (
      <div className="rounded-lg border p-4 w-full max-w-xs">
        <Skeleton height={200} className="mb-4 w-full" />
        <Skeleton height={24} className="mb-2 w-3/4" />
        <Skeleton height={20} className="mb-2 w-1/2" />
        <Skeleton height={20} className="w-1/3" />
      </div>
    );
  }
  return (
    <div className="rounded-lg border p-4 w-full max-w-xs flex flex-col">
      <Link href={`/products/${product.slug}`} className="block mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={400}
          height={300}
          className="rounded object-cover w-full h-48"
        />
      </Link>
      <Link href={`/products/${product.slug}`} className="font-semibold text-lg mb-1 hover:underline">
        {product.name}
      </Link>
      <span className="text-primary font-bold mb-1">Dhs. {product.price.toFixed(2)}</span>
      <Rating value={product.rating} className="mb-2" />
      <Button className="mt-auto" aria-label="Add to cart" disabled>
        Add to cart
      </Button>
    </div>
  );
}; 