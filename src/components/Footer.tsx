import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig, getWhatsAppLink } from "@/config/site";
import Logo from "@/components/brand/Logo";
import Marquee from "@/components/brand/Marquee";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
  </svg>
);

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: siteConfig.social.instagram },
  { name: "Facebook", icon: Facebook, url: siteConfig.social.facebook },
  { name: "LinkedIn", icon: Linkedin, url: siteConfig.social.linkedin },
  { name: "TikTok", icon: TikTokIcon, url: siteConfig.social.tiktok },
  { name: "YouTube", icon: Youtube, url: siteConfig.social.youtube },
];

const linkClass = "text-sm text-muted-foreground hover:text-foreground transition-colors";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="theme-ink border-t border-border">
      <div className="border-b border-border text-muted-foreground">
        <Marquee
          items={["Estratégia", "Design", "Tecnologia", "Software sob medida", "Sites", "E-commerce", "Automações"]}
          separator="◆"
          duration={60}
          className="py-4"
          itemClassName="font-mono text-xs uppercase tracking-[0.2em]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          {/* Marca */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to={siteConfig.routes.home} aria-label={`${siteConfig.name} — página inicial`}>
              <Logo size="lg" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">{siteConfig.description}</p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Redes sociais">
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} da ${siteConfig.name} (abre em nova aba)`}
                    className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-lime hover:bg-lime hover:text-ink"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluções */}
          <nav aria-label="Soluções" className="lg:col-span-2">
            <h2 className="eyebrow mb-5">Soluções</h2>
            <ul className="space-y-3">
              {siteConfig.services.map((service) => (
                <li key={service.route}>
                  <Link to={service.route} className={linkClass}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Institucional */}
          <nav aria-label="Institucional" className="lg:col-span-2">
            <h2 className="eyebrow mb-5">Institucional</h2>
            <ul className="space-y-3">
              {siteConfig.sections.map((section) => (
                <li key={section.id}>
                  <Link to={{ pathname: "/", hash: `#${section.id}` }} className={linkClass}>
                    {section.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h2 className="eyebrow mb-5">Contato</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href={getWhatsAppLink(siteConfig.whatsapp.footer)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-sm bg-lime px-4 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle aria-hidden className="h-4 w-4" />
                  Conversar no WhatsApp
                  <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                <a href={`mailto:${siteConfig.contact.email}`} className={`${linkClass} break-all`}>
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                <a href={`tel:${siteConfig.contact.phone}`} className={`${linkClass} font-mono`}>
                  {siteConfig.contact.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                <span className="text-sm text-muted-foreground">{siteConfig.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border py-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            © {currentYear} {siteConfig.name} · Todos os direitos reservados
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {siteConfig.tagline} · {siteConfig.contact.location}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
