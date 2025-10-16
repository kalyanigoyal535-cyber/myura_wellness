import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Hero Image as background */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/assets/hero.jpg')",
        }}
      ></div>

      {/* Overlay for gradient and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 via-emerald-50/30 to-white/90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-0">
        <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-700 leading-tight drop-shadow-lg">
          Ayurvedic wellness made simple
        </h1>
        <p className="mt-6 text-slate-700 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Natural supplements for daily balance, energy, and gut health. Honest
          ingredients, transparent labels, and wellness made easy for everyone.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/shop"
            className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-emerald-800 transition-all duration-300"
          >
            Shop Now
          </a>
          <a
            href="#learn-more"
            className="inline-block text-emerald-700 border border-emerald-700 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
