import { Github, Linkedin, Twitter, Code2 } from "lucide-react";

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
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
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