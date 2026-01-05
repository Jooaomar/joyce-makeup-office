import Link from "next/link";
import { Button } from "./Button";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left space-y-6 max-w-2xl">
          <div className="inline-block px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 text-primary text-xs uppercase tracking-widest mb-4 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            Maquiadora Profissional
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Beleza que <br />
            <span className="text-primary italic">inspira</span>
          </h1>
          <p className="text-foreground/80 text-xl md:text-2xl font-light leading-relaxed max-w-lg mx-auto md:mx-0 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Realce sua essência com uma maquiagem exclusiva e inesquecível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Link href="https://wa.me/5500000000000">
               <Button className="h-14 px-10 text-base shadow-lg hover:shadow-xl hover:-translate-y-1">Agendar Horário</Button>
            </Link>
            <Link href="#services">
               <Button variant="outline" className="h-14 px-10 text-base bg-white/50 backdrop-blur-sm hover:bg-white">Conhecer Serviços</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper for 'size' prop usage in Button if I missed adding it, 
// let me check Button.tsx content again internally or just assume I can pass className.
// I didn't add 'size' prop to Button interface explicitly but passed ...props so standard button props work, 
// but 'size' isn't a standard HTML attribute. I'll stick to className for sizing or update Button later if needed.
// For now I'll use className in the usage above.
