"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { useEffect } from "react";

export function GalleryCarousel() {
  // Using AutoScroll plugin for smooth continuous scrolling if desired, or just default.
  // Actually, standard carousel is safer.
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  useEffect(() => {
    if (emblaApi) {
      // Auto-play logic handled by AutoScroll plugin or custom interval if needed.
      // For simplicity, let's stick to manual or simple auto-play.
      const autoplay = setInterval(() => {
        if (emblaApi.canScrollNext()) emblaApi.scrollNext();
        else emblaApi.scrollTo(0);
      }, 4000);
      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  const images = [
    // { src: "/images/joyce-foto.jpg", alt: "Joyce Silva" },
    { src: "/images/marca.jpg", alt: "Logotipo Joyce Silva" },
    // Placeholder for more work
    { src: "/images/glamorous-evening-makeup.jpg", alt: "Glamorous Evening Makeup" },
    { src: "/images/natural-daytime-makeup.jpg", alt: "Natural Evening Makeup" },
    { src: "/images/photoshoot-professional-makeup.jpg", alt: "Photoshoot Professional Makeup" },
    { src: "/images/bridal-makeup-before-after.jpg", alt: "Bridal Makeup Before After" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
         <h2 className="text-3xl font-serif text-foreground">Galeria</h2>
         <p className="text-foreground/60 mt-2">Um pouco do meu trabalho</p>
      </div>
      
      <div className="embla relative max-w-5xl mx-auto" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((img, index) => (
            <div className="embla__slide flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 px-4" key={index}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-border">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
