"use client";
import * as React from "react";
import { notFound } from "next/navigation";
import { Gallery } from "@/components/product/Gallery";
import { AddToCart } from "@/components/product/AddToCart";
import { Rating } from "@/components/ui/Rating";
import { mockProducts } from "@/data/mockProducts";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [product, setProduct] = React.useState(mockProducts.find((p) => p.slug === ""));
  const [selectedVariantId, setSelectedVariantId] = React.useState("");
  const [selectedVariant, setSelectedVariant] = React.useState(product?.variants[0]);

  React.useEffect(() => {
    const loadProduct = async () => {
      const resolvedParams = await params;
      const foundProduct = mockProducts.find((p) => p.slug === resolvedParams.slug);
      setProduct(foundProduct);
      setSelectedVariantId(foundProduct?.variants[0]?.id || "");
      setSelectedVariant(foundProduct?.variants[0]);
    };
    loadProduct();
  }, [params]);

  if (!product || !selectedVariant) return notFound();

  return (
    <div className="py-8 max-w-4xl mx-auto">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Shop", href: "/products" },
        { label: product.name, href: `/products/${product.slug}` },
      ]} className="mb-4" />
      <div className="grid md:grid-cols-2 gap-8">
        <Gallery images={selectedVariant.images.length ? selectedVariant.images : product.images} alt={product.name} />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <Rating value={product.rating} className="mb-2" />
          <div className="text-primary text-xl font-bold mb-4">Dhs. {selectedVariant.price.toFixed(2)}</div>
          <p className="mb-4 text-gray-700 dark:text-gray-300">{product.description}</p>
          {product.variants.length > 1 && (
            <div className="mb-4">
              <label className="block mb-1 font-medium">Choose a variant:</label>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    className={`px-3 py-1 rounded border ${selectedVariantId === variant.id ? 'bg-primary text-white' : ''}`}
                    onClick={() => setSelectedVariantId(variant.id)}
                    aria-pressed={selectedVariantId === variant.id}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>
          )}
          <AddToCart product={product} selectedVariantId={selectedVariantId} />
        </div>
      </div>
    </div>
  );
} 