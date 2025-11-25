// Configuração centralizada do site
export const siteConfig = {
  name: "IngaCraft",
  description: "Desenvolvimento Web, Setups Personalizados e Cursos de Tecnologia. Transforme suas ideias em soluções digitais inovadoras.",
  
  contact: {
    email: "ingacraftadm@gmail.com",
    phone: "+5544999830226",
    phoneFormatted: "(44) 99983-0226",
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
    title: "IngaCraft - Desenvolvimento Web, Setups e Cursos de Tecnologia",
    description: "Transformamos ideias em soluções digitais inovadoras. Desenvolvimento web profissional, montagem de PCs personalizados e cursos práticos de tecnologia em Maringá-PR.",
    keywords: "desenvolvimento web, criação de sites, setups personalizados, montagem de PC, cursos de tecnologia, programação, Maringá",
  },
};

// Função helper para WhatsApp
export const getWhatsAppLink = (customMessage?: string) => {
  const message = customMessage || siteConfig.contact.whatsappMessage;
  return `https://wa.me/${siteConfig.contact.phone}?text=${encodeURIComponent(message)}`;
};
