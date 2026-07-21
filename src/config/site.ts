// Configuração centralizada do site
export const siteConfig = {
  name: "IngaCraft",
  description: "Desenvolvimento Web, Desenvolvimento de Software e E-commerce. Transforme suas ideias em soluções digitais inovadoras.",
  
  contact: {
    email: "ingacraftadm@gmail.com",
    phone: "+5544999659801",
    phoneFormatted: "(44) 99965-9801",
    whatsappMessage: "Olá! Gostaria de saber mais sobre os serviços da IngaCraft.",
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
    ecommerce: "/ecommerce",
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
      title: "E-commerce / Loja Virtual",
      description: "Venda online 24/7 com loja profissional",
      route: "/ecommerce",
    },
  ],
  
  seo: {
    title: "IngaCraft - Desenvolvimento Web, Software e E-commerce",
    description: "Transformamos ideias em soluções digitais inovadoras. Desenvolvimento web profissional, software sob medida e lojas virtuais em Maringá-PR.",
    keywords: "desenvolvimento web, criação de sites, desenvolvimento de software, e-commerce, loja virtual, programação, Maringá",
  },
};

// Função helper para WhatsApp
export const getWhatsAppLink = (customMessage?: string) => {
  const message = customMessage || siteConfig.contact.whatsappMessage;
  return `https://wa.me/${siteConfig.contact.phone}?text=${encodeURIComponent(message)}`;
};
