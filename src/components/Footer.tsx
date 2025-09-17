import { Instagram, Facebook, Linkedin, Youtube, Code2 } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="gradient-hero py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                IngaCraft
              </span>
            </div>
            <p className="text-muted-foreground">
              Transformando ideias em soluções digitais inovadoras através de tecnologia de ponta e expertise comprovada.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#servicos" className="hover:text-primary transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Setups Personalizados</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Cursos de Tecnologia</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Consultoria Tech</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>ingacraftadm@gmail.com</li>
              <li>(11) 9999-9999</li>
              <li>Maringá - PR</li>
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com" className="text-muted-foreground hover:text-primary transition-colors">
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 IngaCraft. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;