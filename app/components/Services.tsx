import { Brush, Heart, Star, Sparkles, Camera } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Maquiagem Social",
    description: "Perfeita para convidadas, formandas e madrinhas. Realce sua beleza com durabilidade e elegância.",
    price: "A partir de R$ 150",
  },
  {
    icon: Heart,
    title: "Noivas",
    description: "Atendimento exclusivo e personalizado para o seu grande dia. Teste, acompanhamento e produção completa.",
    price: "Consulte",
  },
  {
    icon: Camera,
    title: "Ensaios Fotográficos",
    description: "Maquiagem específica para fotografia, com acabamento HD e contornos estratégicos.",
    price: "A partir de R$ 200",
  },
  {
    icon: Brush,
    title: "Curso de Automake",
    description: "Aprenda a se maquiar com técnicas profissionais adaptadas ao seu gosto e formato de rosto.",
    price: "A partir de R$ 250",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium">O que eu faço</span>
          <h2 className="text-4xl font-serif text-foreground mt-3 mb-6">Serviços Exclusivos</h2>
          <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon size={24} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-3">{service.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-primary font-medium text-sm">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
