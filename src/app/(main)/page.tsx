'use client'


import Link from "next/link";
import Image from "next/image";
import { mockCategories } from "@/data/mockCategories";
import { mockProducts } from "@/data/mockProducts";
import { ProductCard } from "@/components/product/ProductCard";
import Marquee from "react-marquee-slider";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


const reviews = [
  {
    img: "/assets/food1.png",
    name: "Customer 1",
    text: "Absolutely love these snacks! So tasty and fresh.",
  },
  {
    img: "/assets/food6.png",
    name: "Customer 2",
    text: "The chocolate dragees are my favorite treat!",
  },
  {
    img: "/assets/food7.png",
    name: "Customer 3",
    text: "Fast delivery and amazing quality. Highly recommend!",
  },
];

const faqs = [
  {
    q: "What are the delivery charges and timeframe?",
    a: "Free delivery for orders above 120 AED. Delivery within 24-48 hours.",
  },
  {
    q: "Which areas do you deliver to?",
    a: "We deliver across the UAE.",
  },
  {
    q: "Can I modify or cancel my order after placing it?",
    a: "Please contact customer service as soon as possible to modify or cancel your order.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Visa, Mastercard, and Apple Pay.",
  },
  {
    q: "Do you offer gift customization options?",
    a: "Yes, we offer gift wrapping and custom notes.",
  },
];

const sliderImages = [
  {
    src: "/assets/food2.png",
    alt: "Coco Spresso",
  },
  {
    src: "/assets/food3.png",
    alt: "Chocolate Dragees",
  },
  {
    src: "/assets/food4.png",
    alt: "Healthy Snacks",
  },
  // Add more images as needed
];

export default function HomePage() {
  // Best sellers: top 4 by rating
  const bestSellers = [...mockProducts]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  // Slider state
  // const [current, setCurrent] = useState(0);
  // const sliderLength = sliderImages.length;

  // Simple next/prev handlers
      // const nextSlide = () => setCurrent((prev) => (prev + 1) % sliderLength);
      // const prevSlide = () => setCurrent((prev) => (prev - 1 + sliderLength) % sliderLength);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    mode: "snap",
    drag: true,
  });

  return (
    <div className="bg-white  min-h-screen flex flex-col text-black">
      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider h-[400px] md:h-[500px] w-full overflow-hidden">
        {sliderImages.map((img, idx) => (
          <div key={idx} className="keen-slider__slide flex items-center justify-center bg-black/80">
            <img
              src={img.src}
              alt={img.alt}
              className="object-cover w-full h-full"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Info Bar */}
      <div className="w-full bg-primary-light text-white text-base font-medium py-4">

          <Marquee 
            // className="w-full bg-primary-light text-white text-base font-medium py-4"
            
            velocity={50}
            direction="ltr"
            scatterRandomly={false}
            resetAfterTries={100}
            onInit={() => console.log("Marquee initialized")}
            onFinish={() => console.log("Marquee finished")}
            // scrollamount="6"
          >
    
              <span className="mx-8">CASH ON DELIVERY Available</span>
              <span className="mx-8">FREE DELIVERY for orders above 120AED</span>
              <span className="mx-8">10% OFF your 1st order</span>
              <span className="mx-8">Delivery within 24-48 hours</span>
          
          </Marquee >
      </div>
      

      {/* Categories */}
      <section className="max-w-6xl mx-auto w-full py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-[${MAIN_COLOR}]">Shop our Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {mockCategories.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.slug}`}
              className="group flex flex-col items-center p-4 bg-white  rounded-xl shadow hover:shadow-lg transition border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-[${MAIN_COLOR}]"
            >
              <span className="block w-16 h-16 bg-gradient-to-tr from-indigo-200 to-indigo-400 rounded-full mb-2 flex items-center justify-center">
                <Image src={`/assets/food${(i+2)%9+1}.png`} alt={cat.name} width={48} height={48} className="rounded-full object-cover" />
              </span>
              <span className="font-medium text-center">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="max-w-6xl mx-auto w-full py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-[${MAIN_COLOR}]">Best Selling Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* About / Who we are */}
      <section className="max-w-5xl mx-auto w-full py-12 px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex justify-center">
          <Image src="/assets/chook2.png" alt="About us" width={260} height={260} className="rounded-2xl shadow-lg" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-3 text-[${MAIN_COLOR}]">Who we are ?</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-2">
            We bring you the best in chocolate, nuts, dragees, and healthy snacks. Our mission is to make every bite a moment of joy for you and your loved ones.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-base">
            Enjoy fast delivery, exclusive offers, and a taste adventure with every order. Join our community of snack lovers today!
          </p>
          <Link href="/about" className="mt-4 inline-block bg-[${MAIN_COLOR}] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-purple-800 transition">Click To Know More</Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-6xl mx-auto w-full py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-[${MAIN_COLOR}]">Real Reviews From Our Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white  rounded-xl shadow p-6 flex flex-col items-center text-center">
              <Image src={r.img} alt={r.name} width={80} height={80} className="rounded-full mb-4 object-cover" />
              <p className="text-lg font-medium mb-2">{r.text}</p>
              <span className="text-sm text-gray-500">- {r.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto w-full py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-[${MAIN_COLOR}]">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border rounded-lg p-4 bg-white ">
              <summary className="font-semibold cursor-pointer text-[${MAIN_COLOR}] group-open:underline">{faq.q}</summary>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>


    </div>
  );
} 




