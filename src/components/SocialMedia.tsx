import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

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

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/ingacrafttec/" },
  { name: "Facebook",  icon: Facebook,  url: "https://www.facebook.com/profile.php?id=61572777965370" },
  { name: "LinkedIn",  icon: Linkedin,  url: "https://www.linkedin.com/in/ing%C3%A1craft-tecnologia-01a870388/" },
  { name: "TikTok",    icon: TikTokIcon, url: "https://www.tiktok.com/@ingacrafttech" },
  { name: "YouTube",   icon: Youtube,   url: "https://www.youtube.com/@ingacraft" },
];

const SocialMedia = () => {
  return (
    <section className="border-t border-border bg-[hsl(var(--surface-c))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <FadeInUpWrapper className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <div className="eyebrow mb-4">Presença digital</div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              Acompanhe nossos projetos e bastidores.
            </h2>
          </div>
          <div className="md:col-span-6 flex md:justify-end flex-wrap gap-3">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Seguir no ${s.name}`}
                  className="w-11 h-11 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:bg-secondary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </FadeInUpWrapper>
      </div>
    </section>
  );
};

export default SocialMedia;