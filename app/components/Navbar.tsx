"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Galeria", href: "#gallery" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative h-12 w-32 md:h-16 md:w-40">
           {/* Fallback to text if image fails or while loading, but Image is preferred */}
           {/* Adjusting object-fit to contain to make sure the logo is visible */}
           <div className="flex items-center gap-2">
              {/* <span className="font-serif text-2xl md:text-3xl tracking-wider text-primary font-bold">
                JS
              </span> */}
              {/* adicione o svg aqui */}
              <Image src="/logo-office.svg" alt="Logo" width={50} height={50} />
              <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-foreground">Joyce Silva</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary/80">Makeup</span>
              </div>
           </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest hover:text-primary transition-colors font-medium text-foreground/80"
            >
              {link.name}
            </Link>
          ))}
          <Link
             href="https://wa.me/5500000000000" // Placeholder
             className="px-6 py-2 bg-primary text-white text-xs uppercase tracking-widest rounded-full hover:opacity-90 transition-opacity"
          >
            Agendar
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-border p-6 shadow-lg flex flex-col gap-4 animate-in slide-in-from-top-2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-center py-2 uppercase tracking-widest text-sm hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
