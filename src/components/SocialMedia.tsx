import { Instagram, Facebook, Linkedin, Music, Youtube } from "lucide-react";

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      colorClass: "instagram-gradient",
      hoverClass: "hover:scale-110 hover:shadow-instagram"
    },
    {
      name: "Facebook", 
      icon: Facebook,
      url: "https://facebook.com",
      colorClass: "facebook-blue",
      hoverClass: "hover:scale-110 hover:shadow-facebook"
    },
    {
      name: "LinkedIn",
      icon: Linkedin, 
      url: "https://linkedin.com",
      colorClass: "linkedin-blue",
      hoverClass: "hover:scale-110 hover:shadow-linkedin"
    },
    {
      name: "TikTok",
      icon: Music,
      url: "https://tiktok.com", 
      colorClass: "tiktok-gradient",
      hoverClass: "hover:scale-110 hover:shadow-tiktok"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com",
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