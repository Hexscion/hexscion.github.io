"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { certificates } from "@/data/portfolio";

export default function CertificatesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  if (!certificates || certificates.length === 0) {
    return (
      <section className="py-28 px-6 max-w-300 mx-auto min-h-[80vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center text-dark">
          Certificates
        </h2>
        <p className="text-lg text-dark/75">No certificates found.</p>
      </section>
    );
  }

  return (
    <section className="py-28 px-6 max-w-300 mx-auto min-h-[80vh] flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center text-dark relative after:content-[''] after:block after:w-8 after:h-px after:bg-dark after:opacity-25 after:mx-auto after:mt-2">
        Certificates
      </h2>

      {/* Slider Viewport Container */}
      <div className="relative w-full max-w-200 overflow-hidden rounded-lg aspect-3/2 mt-8 group select-none">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="min-w-full h-full flex items-center justify-center px-4 sm:px-8"
            >
              <img
                src={cert.imgUrl}
                alt={cert.imgName}
                className="max-w-full max-h-full object-contain shadow-md rounded border border-dark/10 bg-white"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark/25 hover:bg-dark/50 text-light p-3 rounded-full cursor-pointer z-10 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-[color,opacity] duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark/25 hover:bg-dark/50 text-light p-3 rounded-full cursor-pointer z-10 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-[color,opacity] duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Certificate Caption */}
      <div className="text-center max-w-150 animate-fade-in mt-4 sm:mt-8">
        <p className="font-sans text-xl font-bold tracking-wide text-dark">
          {certificates[activeIndex].imgName}
        </p>
      </div>

      {/* Slide Indicators */}
      <div className="flex gap-3 mt-12">
        {certificates.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeIndex
                ? "bg-accent scale-110"
                : "bg-dark/20 hover:bg-dark/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
