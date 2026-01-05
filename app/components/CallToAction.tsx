import Link from "next/link";
import { Button } from "./Button";

export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
          Pronto para transformar seu visual?
        </h2>
        <p className="text-xl text-foreground/70 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Agende sua consulta hoje mesmo e vamos criar um visual deslumbrante que seja a sua cara.
        </p>
        <Link href="https://wa.me/5500000000000">
          <Button className="h-14 px-12 text-lg shadow-xl hover:scale-105">
            Agendar Agora
          </Button>
        </Link>
      </div>
    </section>
  );
}
