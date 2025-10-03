import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

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

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/ingacraft/",
      colorClass: "instagram-gradient",
      hoverClass: "hover:scale-110 hover:shadow-instagram"
    },
    {
      name: "Facebook", 
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61572777965370",
      colorClass: "facebook-blue",
      hoverClass: "hover:scale-110 hover:shadow-facebook"
    },
    {
      name: "LinkedIn",
      icon: Linkedin, 
      url: "https://www.linkedin.com/company/ingacraft/",
      colorClass: "linkedin-blue",
      hoverClass: "hover:scale-110 hover:shadow-linkedin"
    },
    {
      name: "TikTok",
      icon: TikTokIcon,
      url: "https://www.tiktok.com/@ingacraft", 
      colorClass: "tiktok-gradient",
      hoverClass: "hover:scale-110 hover:shadow-tiktok"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@ingacraft",
      colorClass: "youtube-red", 
      hoverClass: "hover:scale-110 hover:shadow-youtube"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siga-nos nas Redes Sociais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conecte-se conosco para ficar por dentro das novidades, projetos e conteúdos exclusivos
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center justify-center w-16 h-16 md:w-20 md:h-20 
                  rounded-full transition-smooth cursor-pointer
                  ${social.colorClass} ${social.hoverClass}
                  backdrop-blur-sm border border-white/10
                `}
                aria-label={`Seguir no ${social.name}`}
              >
                <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;