import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig, getWhatsAppLink } from "@/config/site";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isHome = location.pathname === '/';
  
  const serviceLinks = siteConfig.services.map(service => ({
    href: service.route,
    label: service.title,
  }));

  const navLinks = [
    { href: isHome ? "#sobre" : "/#sobre", label: "Sobre" },
    { href: isHome ? "#contato" : "/#contato", label: "Contato" },
  ];

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink(), "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to={siteConfig.routes.home} 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity group"
            aria-label={`${siteConfig.name} - Página inicial`}
          >
            <Code2 className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground hover:text-primary transition-colors">
                    Serviços
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[350px] gap-3 p-4">
                      {serviceLinks.map((service) => (
                        <li key={service.label}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-semibold leading-none">
                                {service.label}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="hero"
              onClick={handleWhatsAppClick}
              className="hover:scale-105 transition-transform"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-6 pb-4 border-t border-white/10 pt-6 animate-fade-in">
            <div className="flex flex-col space-y-6">
              <div className="space-y-4">
                <div className="text-foreground font-semibold text-sm opacity-60 uppercase tracking-wider">
                  Serviços
                </div>
                <div className="pl-4 space-y-3">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.label}
                      to={service.href}
                      className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                variant="hero" 
                className="mt-4 w-full"
                onClick={handleWhatsAppClick}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;