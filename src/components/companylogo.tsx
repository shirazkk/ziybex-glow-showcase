import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
  { src: "/logos/al-aira.png", alt: "Al-Aira School System" },
  { src: "/logos/direction-schools.png", alt: "Direction Schools" },
  { src: "/logos/nbfi.png", alt: "NBFI & Modaraba" },
  { src: "/logos/ronin.png", alt: "Ronin Lifestyle Gadgets" },
  { src: "/logos/elmore.png", alt: "Elmore" },
  { src: "/logos/indus-hospital.png", alt: "Indus Hospital" },
  // Add more logos as needed
];

const CompanyLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-2xl font-bold text-foreground mb-8">
          Trusted by Leading Brands
        </h3>
        <div className="relative flex items-center">
          <button
            className="absolute left-0 z-10 bg-background/80 rounded-full p-2 border border-border shadow hover:bg-accent/10 transition-smooth"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft size={32} />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-12 overflow-x-auto scrollbar-hide px-12"
            style={{ scrollBehavior: "smooth" }}
          >
            {logos.map((logo) => (
              <div key={logo.alt} className="flex-shrink-0 flex items-center justify-center h-24">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 object-contain max-w-[160px] grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 z-10 bg-background/80 rounded-full p-2 border border-border shadow hover:bg-accent/10 transition-smooth"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;