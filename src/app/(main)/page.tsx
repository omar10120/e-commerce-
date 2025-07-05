import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 min-h-screen py-12 bg-gradient-to-b from-indigo-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center gap-6 px-4 py-16 bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white rounded-3xl shadow-xl mx-2 md:mx-auto max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">FuFuBites</h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-4 font-medium drop-shadow">
          Discover delicious chocolate dragees, freeze-dried snacks, and healthy treats. Mix & match your favorites and enjoy up to <span className="font-bold text-yellow-200">20% off</span>!
        </p>
        <Link href="/products" className="mt-2 inline-block bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-indigo-100 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
          Shop Now
        </Link>
        <div className="absolute right-8 bottom-8 hidden md:block opacity-30 pointer-events-none select-none">
          <svg width="120" height="120" fill="none" viewBox="0 0 120 120"><circle cx="60" cy="60" r="60" fill="url(#a)" /><defs><linearGradient id="a" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#818cf8" /><stop offset="1" stopColor="#f472b6" /></linearGradient></defs></svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-primary">Our Story</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-2">
          At <span className="font-semibold">FuFuBites</span>, we believe in making every bite a moment of joy. Our products are crafted with love, using the finest ingredients, to bring you a unique snacking experience. Whether you crave something sweet, healthy, or a little bit of both, we have something for everyone.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-base">
          Enjoy fast delivery, exclusive offers, and a taste adventure with every order. Join our community of snack lovers today!
        </p>
      </section>

      {/* Featured Categories */}
      <section className="max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          <Link href="/products?category=chocolate-dragees" className="group flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary">
            <span className="block w-16 h-16 bg-gradient-to-tr from-indigo-200 to-indigo-400 rounded-full mb-2 flex items-center justify-center">
              <span className="text-2xl">🍫</span>
            </span>
            <span className="font-medium">Chocolate Dragees</span>
          </Link>
          <Link href="/products?category=freeze-dried" className="group flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary">
            <span className="block w-16 h-16 bg-gradient-to-tr from-pink-200 to-pink-400 rounded-full mb-2 flex items-center justify-center">
              <span className="text-2xl">🍓</span>
            </span>
            <span className="font-medium">Freeze Dried</span>
          </Link>
          <Link href="/products?category=healthy-corner" className="group flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary">
            <span className="block w-16 h-16 bg-gradient-to-tr from-green-200 to-green-400 rounded-full mb-2 flex items-center justify-center">
              <span className="text-2xl">🥝</span>
            </span>
            <span className="font-medium">Healthy Corner</span>
          </Link>
          <Link href="/products?category=crunchy-salty-snacks" className="group flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary">
            <span className="block w-16 h-16 bg-gradient-to-tr from-yellow-200 to-yellow-400 rounded-full mb-2 flex items-center justify-center">
              <span className="text-2xl">🥨</span>
            </span>
            <span className="font-medium">Crunchy & Salty</span>
          </Link>
          <Link href="/products?category=sweets-bars" className="group flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary">
            <span className="block w-16 h-16 bg-gradient-to-tr from-orange-200 to-orange-400 rounded-full mb-2 flex items-center justify-center">
              <span className="text-2xl">🍬</span>
            </span>
            <span className="font-medium">Sweets & Bars</span>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex flex-col items-center gap-4 mt-8">
        <span className="text-lg text-gray-700 dark:text-gray-200">Free shipping for orders over <span className="font-bold text-primary">120 AED</span></span>
        <span className="text-sm text-gray-400">Delivery within 24-48 hours | 10% off your 1st order</span>
      </section>
    </div>
  );
} 




