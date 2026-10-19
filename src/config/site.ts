// Configuração centralizada do site
export const siteConfig = {
  name: "IngaCraft",
  tagline: "Desenvolvimento digital sob medida",
  description:
    "Sites, sistemas e soluções digitais sob medida para empresas que querem vender melhor, operar com mais eficiência e crescer com clareza.",
  url: "https://ingacraft.com",

  contact: {
    email: "ingacraftadm@gmail.com",
    phone: "+5544999659801",
    phoneFormatted: "(44) 99965-9801",
    whatsappMessage: "Olá! Gostaria de saber mais sobre os serviços da IngaCraft.",
    location: "Maringá - PR",
  },

  social: {
    instagram: "https://www.instagram.com/ingacrafttec/",
    facebook: "https://www.facebook.com/profile.php?id=61572777965370",
    linkedin: "https://www.linkedin.com/in/ing%C3%A1craft-tecnologia-01a870388/",
    tiktok: "https://www.tiktok.com/@ingacrafttech",
    youtube: "https://www.youtube.com/@ingacraft",
  },

  routes: {
    home: "/",
    webDevelopment: "/desenvolvimento-web",
    softwareDevelopment: "/desenvolvimento-software",
    ecommerce: "/ecommerce",
  },

  // Âncoras da home usadas pelo header e pelo footer
  sections: [
    { id: "solucoes", label: "Soluções" },
    { id: "como-trabalhamos", label: "Como trabalhamos" },
    { id: "sobre", label: "Sobre a IngaCraft" },
    { id: "projetos", label: "Projetos" },
    { id: "faq", label: "FAQ" },
  ],

  services: [
    {
      title: "Desenvolvimento Web",
      description: "Sites institucionais e landing pages",
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

  // Mensagens contextuais de WhatsApp para cada CTA
  whatsapp: {
    header: "Olá! Quero conversar sobre um projeto digital com a IngaCraft.",
    hero: "Olá! Vim pelo site da IngaCraft e quero conversar sobre meu projeto.",
    solutions: "Olá! Quero entender qual solução da IngaCraft faz sentido para o meu negócio.",
    projects: "Olá! Vi as soluções que vocês podem construir e quero conversar sobre uma ideia.",
    process: "Olá! Quero começar pela etapa de entendimento do meu projeto com a IngaCraft.",
    about: "Olá! Quero conhecer melhor a IngaCraft e como vocês trabalham.",
    faq: "Olá! Tenho uma dúvida que não encontrei no FAQ do site da IngaCraft.",
    finalCta: "Olá! Quero conversar com a IngaCraft sobre minha próxima ideia digital.",
    footer: "Olá! Entrei em contato pelo rodapé do site da IngaCraft.",
    floating: "Olá! Gostaria de saber mais sobre os serviços da IngaCraft.",
  },

  seo: {
    title: "IngaCraft — Desenvolvimento de software e soluções digitais sob medida | Maringá-PR",
    description:
      "Criamos sites, sistemas e experiências digitais que ajudam empresas a vender melhor, operar com mais eficiência e crescer com clareza. Maringá-PR.",
    keywords:
      "desenvolvimento de software, criação de sites, landing page, sistemas sob medida, e-commerce, loja virtual, automação, Maringá",
  },
};

// Função helper para WhatsApp
export const getWhatsAppLink = (customMessage?: string) => {
  const message = customMessage || siteConfig.contact.whatsappMessage;
  return `https://wa.me/${siteConfig.contact.phone}?text=${encodeURIComponent(message)}`;
};

export const openWhatsApp = (customMessage?: string) => {
  window.open(getWhatsAppLink(customMessage), "_blank", "noopener,noreferrer");
};

export const getMailtoLink = (subject: string, body: string) =>
  `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
