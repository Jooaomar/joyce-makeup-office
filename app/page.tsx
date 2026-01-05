"use client";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { GalleryCarousel } from "./components/GalleryCarousel";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <GalleryCarousel />
      <CallToAction />
      <Footer />
    </main>
  );
}
