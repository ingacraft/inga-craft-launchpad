import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig, getWhatsAppLink } from "@/config/site";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Wordmark */}
          <Link
            to={siteConfig.routes.home}
            className="flex items-center gap-2.5 group"
            aria-label={`${siteConfig.name} - Página inicial`}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.8)]" />
            <span className="font-display text-[17px] font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-muted-foreground hover:text-foreground data-[state=open]:text-foreground transition-colors">
                    Serviços
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[360px] gap-1 p-2 bg-card border border-border rounded-md">
                      {serviceLinks.map((service) => (
                        <li key={service.label}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="flex items-center justify-between rounded-md px-3.5 py-3 text-sm text-foreground hover:bg-secondary transition-colors group"
                            >
                              <span className="font-medium">{service.label}</span>
                              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              {siteConfig.contact.phoneFormatted}
            </a>
            <Button variant="hero" size="sm" onClick={handleWhatsAppClick}>
              Falar com especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
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
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-1">
            <div className="eyebrow mb-3">Serviços</div>
            {serviceLinks.map((service) => (
              <Link
                key={service.label}
                to={service.href}
                className="flex items-center justify-between py-3 border-b border-border text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-medium">{service.label}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            ))}
            <div className="eyebrow mt-6 mb-3">Navegação</div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-3 border-b border-border text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" className="mt-6 w-full" onClick={handleWhatsAppClick}>
              Falar com especialista
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;