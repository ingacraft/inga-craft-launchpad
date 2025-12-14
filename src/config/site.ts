// Configuração centralizada do site
export const siteConfig = {
  name: "IngáCraft",
  description: "Desenvolvimento Web, Desenvolvimento de Software e Setups Personalizados. Transforme suas ideias em soluções digitais inovadoras.",
  
  contact: {
    email: "ingacraftadm@gmail.com",
    phone: "+5544999830226",
    phoneFormatted: "(44) 99983-0226",
    whatsappMessage: "Olá! Gostaria de saber mais sobre os serviços da IngáCraft.",
    location: "Maringá - PR",
  },
  
  social: {
    instagram: "https://instagram.com/ingacraft",
    facebook: "https://facebook.com/ingacraft",
    linkedin: "https://linkedin.com/company/ingacraft",
    tiktok: "https://tiktok.com/@ingacraft",
    youtube: "https://youtube.com/@ingacraft",
  },
  
  routes: {
    home: "/",
    portfolio: "/portfolio",
    webDevelopment: "/desenvolvimento-web",
    setups: "/setups-personalizados",
    courses: "/cursos/venda",
  },
  
  services: [
    {
      title: "Desenvolvimento Web",
      description: "Sites modernos, rápidos e responsivos",
      route: "/desenvolvimento-web",
    },
    {
      title: "Desenvolvimento de Software",
      description: "Sistemas personalizados e soluções corporativas",
      route: "/desenvolvimento-software",
    },
    {
      title: "Setups Personalizados",
      description: "PCs sob medida para suas necessidades",
      route: "/setups-personalizados",
    },
  ],
  
  seo: {
    title: "IngáCraft - Desenvolvimento Web, Software e Setups Personalizados",
    description: "Transformamos ideias em soluções digitais inovadoras. Desenvolvimento web profissional, software sob medida e montagem de PCs personalizados em Maringá-PR.",
    keywords: "desenvolvimento web, criação de sites, desenvolvimento de software, setups personalizados, montagem de PC, programação, Maringá",
  },
};

// Função helper para WhatsApp
export const getWhatsAppLink = (customMessage?: string) => {
  const message = customMessage || siteConfig.contact.whatsappMessage;
  return `https://wa.me/${siteConfig.contact.phone}?text=${encodeURIComponent(message)}`;
};
