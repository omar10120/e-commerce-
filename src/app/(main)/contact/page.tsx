'use client';
import * as React from "react";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 ">
      <h1 className="text-3xl font-bold mb-6 text-white">Contact Us</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-300 text-black">Have a question or want to get in touch? Fill out the form below and we’ll get back to you as soon as possible.</p>
      <form className="space-y-6" autoComplete="off" onSubmit={e => e.preventDefault()}>
        <div>
          <label htmlFor="name" className="block font-medium mb-1">Name</label>
          <input id="name" name="name" type="text" required className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input id="email" name="email" type="email" required className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium mb-1">Message</label>
          <textarea id="message" name="message" rows={5} required className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <button type="submit" className="bg-primary-secondary
         text-white px-6 py-2 rounded font-semibold hover:bg-primary/90 focus:outline-none focus:ring-2 ">Send Message</button>
      </form>
      <div className="mt-12 border-t pt-8">
        <h2 className="text-xl font-bold mb-2">Business Info</h2>
        <p className="mb-1">FuFuBites LLC</p>
        <p className="mb-1">Dubai, UAE</p>
        <p className="mb-1">Email: info@FuFuBites.ae</p>
        <p className="mb-6">Phone: +971 50 123 4567</p>
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-gray-400">Map Placeholder</div>
      </div>
    </div>
  );
} 