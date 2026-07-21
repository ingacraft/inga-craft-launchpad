import { Instagram, Facebook, Linkedin, Youtube, Code2, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="TikTok"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--surface-b))] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="inline-block w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.7)]" />
              <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-2">
              <a 
                href={siteConfig.social.instagram} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="eyebrow">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/desenvolvimento-web"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm block"
                >
                  Desenvolvimento Web
                </Link>
              </li>
              <li>
                <Link
                  to="/desenvolvimento-software"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm block"
                >
                  Desenvolvimento de Software
                </Link>
              </li>
              <li>
                <Link
                  to="/setups-personalizados"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm block"
                >
                  Setups Personalizados
                </Link>
              </li>
              <li>
                <Link
                  to="/ecommerce"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm block"
                >
                  E-commerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="eyebrow">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/#sobre" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm block"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="/#servicos" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm block"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a 
                  href="/#contato" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm block"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="eyebrow">Fale com a gente</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-mono"
                >
                  {siteConfig.contact.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  {siteConfig.contact.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest text-center md:text-left">
              © {currentYear} {siteConfig.name} · Todos os direitos reservados
            </p>
            <div className="flex gap-6 text-xs font-mono uppercase tracking-widest">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;