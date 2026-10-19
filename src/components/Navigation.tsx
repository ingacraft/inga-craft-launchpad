import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig, openWhatsApp } from "@/config/site";
import CampaignBar from "@/components/CampaignBar";
import Logo from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

const homeAnchor = (id: string) => ({ pathname: "/", hash: `#${id}` });

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu mobile ao navegar e com a tecla Esc
  useEffect(() => setIsOpen(false), [location.pathname, location.hash]);
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const [solutionsLink, ...anchorLinks] = siteConfig.sections;

  // Mesmo hash já ativo não dispara nova navegação: rola manualmente
  const scrollIfHome = (id: string) => {
    setIsOpen(false);
    if (location.pathname === "/") document.getElementById(id)?.scrollIntoView();
  };

  const linkClass =
    "relative text-[13px] font-semibold text-foreground/80 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100";

  return (
    <>
      <CampaignBar />
      <header
        className={cn(
          "sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b transition-colors",
          scrolled ? "border-border" : "border-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
          <Link to={siteConfig.routes.home} aria-label={`${siteConfig.name} — página inicial`} className="text-foreground">
            <Logo />
          </Link>

          {/* Desktop */}
          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-auto bg-transparent px-0 py-0 text-[13px] font-semibold text-foreground/80 hover:bg-transparent hover:text-foreground focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent">
                    {solutionsLink.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[380px] p-2 bg-card">
                      {siteConfig.services.map((service) => (
                        <li key={service.route}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.route}
                              className="group flex items-center justify-between gap-4 rounded-sm px-3 py-3 hover:bg-secondary transition-colors"
                            >
                              <span>
                                <span className="block text-sm font-bold text-foreground">{service.title}</span>
                                <span className="block text-xs text-muted-foreground">{service.description}</span>
                              </span>
                              <ArrowUpRight className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <li className="mt-1 border-t border-border pt-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to={homeAnchor(solutionsLink.id)}
                            onClick={() => scrollIfHome(solutionsLink.id)}
                            className="flex items-center justify-between px-3 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
                          >
                            Ver todas as soluções
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {anchorLinks.map((link) => (
              <Link key={link.id} to={homeAnchor(link.id)} onClick={() => scrollIfHome(link.id)} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="hero"
              size="sm"
              className="hidden md:inline-flex"
              onClick={() => openWhatsApp(siteConfig.whatsapp.header)}
            >
              <span className="hidden xl:inline">Quero conversar sobre meu projeto</span>
              <span className="xl:hidden">Fale conosco</span>
              <ArrowRight />
            </Button>

            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border hover:border-foreground transition-colors"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              aria-controls="menu-mobile"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile */}
        {isOpen && (
          <nav
            id="menu-mobile"
            aria-label="Navegação principal"
            className="lg:hidden border-t border-border bg-background max-h-[calc(100dvh-6rem)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
              <div className="eyebrow mb-2">Navegação</div>
              <ul>
                {siteConfig.sections.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={homeAnchor(link.id)}
                      onClick={() => scrollIfHome(link.id)}
                      className="flex items-center justify-between py-3.5 border-b border-border font-display text-2xl font-extrabold tracking-tight hover:text-primary-strong transition-colors"
                    >
                      {link.label}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="eyebrow mt-8 mb-2">Páginas de serviço</div>
              <ul>
                {siteConfig.services.map((service) => (
                  <li key={service.route}>
                    <Link
                      to={service.route}
                      className="flex items-center justify-between py-3 border-b border-border font-semibold hover:text-primary-strong transition-colors"
                    >
                      {service.title}
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </li>
                ))}
              </ul>

              <Button
                variant="hero"
                size="lg"
                className="mt-8 w-full whitespace-normal text-center h-auto py-3.5"
                onClick={() => openWhatsApp(siteConfig.whatsapp.header)}
              >
                Quero conversar sobre meu projeto
              </Button>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="mt-4 block text-center font-mono text-sm text-muted-foreground hover:text-foreground"
              >
                {siteConfig.contact.phoneFormatted}
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navigation;
