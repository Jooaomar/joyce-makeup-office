import Link from "next/link";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            {/* <h3 className="font-serif text-2xl text-primary font-bold mb-4">JS</h3> */}
            <Image src="/logo-office.svg" alt="Logo" width={40} height={40} className="mb-4" />
            <p className="text-foreground/70 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Realçando a beleza que existe em você com técnicas profissionais e atendimento personalizado.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="font-serif text-lg text-foreground mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-foreground/70">
              <li className="flex items-center justify-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>(86) 99910-2710</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>contato@joycesilva.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="font-serif text-lg text-foreground mb-6">Redes Sociais</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <Link href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Facebook size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-xs text-foreground/40">
          <p>© {new Date().getFullYear()} Joyce Silva Makeup. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
