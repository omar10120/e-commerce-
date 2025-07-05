"use client";

import { ProductCard } from '@/components/product/ProductCard';
import { mockProducts } from '@/data/mockProducts';
import { mockCategories } from '@/data/mockCategories';
import { Search } from '@/components/shared/Search';
import * as React from 'react';

export default function ProductsPage() {
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const filteredProducts = React.useMemo(() => {
    let products = mockProducts;
    if (category) {
      products = products.filter((p) => p.categoryId === category);
    }
    if (search) {
      products = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    return products;
  }, [search, category]);

  React.useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, [search, category]);

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
        <Search value={search} onChange={setSearch} placeholder="Search products..." />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="rounded border px-3 py-2 min-w-[180px]"
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {mockCategories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <ProductCard key={i} product={mockProducts[0]} loading />)
          : filteredProducts.length === 0
            ? <div className="col-span-full text-center text-gray-500 py-12">No products found.</div>
            : filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
      </div>
    </div>
  );
} 