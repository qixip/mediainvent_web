"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Portfolio images in the order you specified
const portfolioImages = [
  "/portfolio/1.jpg",
  "/portfolio/2.jpg",
  "/portfolio/3.jpg",
  "/portfolio/4.jpg",
  "/portfolio/5.jpg",
  "/portfolio/6.jpg",
  "/portfolio/7.jpg",
  "/portfolio/8.jpg",
  "/portfolio/9.jpg",
];

export default function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center",
    slidesToScroll: 1
  });
  
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="portfolio" className="py-0">
      <div className="mx-auto max-w-7xl">
        {/* Portfolio Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {portfolioImages.map((src, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <div className="relative w-full max-w-[1024px] mx-auto">
                    <img
                      src={src}
                      alt={`Portfolio showcase ${index + 1}`}
                      className="w-full h-auto object-contain"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 
                       bg-white/95 hover:bg-white text-black rounded-full p-3
                       shadow-xl border border-gray-200/50 transition-all duration-200 hover:scale-105
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                       focus-visible:ring-offset-2 backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={scrollNext}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 
                       bg-white/95 hover:bg-white text-black rounded-full p-3
                       shadow-xl border border-gray-200/50 transition-all duration-200 hover:scale-105
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                       focus-visible:ring-offset-2 backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}