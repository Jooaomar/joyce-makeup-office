import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Professional Image */}
          <div className="relative h-[600px] w-full max-w-md mx-auto md:order-2">
            <div className="absolute inset-0 bg-primary/5 rounded-t-[10rem] rounded-b-[2rem] transform -rotate-3 scale-95" />
             <div className="absolute inset-0 bg-white shadow-xl rounded-t-[10rem] rounded-b-[2rem] overflow-hidden border-4 border-white">
                <Image
                  src="/images/joyce-foto.jpg"
                  alt="Joyce Silva Maquiadora"
                  fill
                  className="object-cover object-top"
                />
             </div>
          </div>

          {/* Text Content */}
          <div className="md:order-1 text-center md:text-left">
            <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium block mb-4">Sobre Mim</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-foreground mb-6">Joyce Silva</h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed font-light text-lg">
              <p>
                Apaixonada pela arte de realçar a beleza única de cada mulher, dedico minha carreira a transformar momentos especiais em memórias inesquecíveis através da maquiagem.
              </p>
              <p>
                Com especialização em maquiagem social e noivas, busco sempre a harmonia entre técnica e personalidade, garantindo que você se sinta confiante e radiante, sem perder sua essência.
              </p>
              <p>
                Utilizo apenas produtos de alta performance e técnicas atualizadas para entregar um resultado impecável e duradouro, seja para um evento social, um ensaio fotográfico ou o dia do seu casamento.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border flex items-center justify-center md:justify-start gap-8">
               <div className="text-center">
                  <span className="block text-3xl font-serif text-primary font-bold">+5</span>
                  <span className="text-xs uppercase tracking-wider text-foreground/60">Anos de Experiência</span>
               </div>
               <div className="text-center">
                  <span className="block text-3xl font-serif text-primary font-bold">+500</span>
                  <span className="text-xs uppercase tracking-wider text-foreground/60">Clientes Atendidas</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
