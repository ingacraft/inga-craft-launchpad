/**
 * Conteúdo da landing Black November exibida no topo da home.
 * Só aparece enquanto a campanha estiver ativa (ver `src/config/campaign.ts`).
 */

export interface BnPlan {
  id: string;
  name: string;
  deadline: string;
  tag: string;
  description: string;
  audience: string;
  includes: string[];
  originalPrice: string;
  price: string;
  savings: string;
  cta: string;
  featured?: boolean;
  whatsappMessage: string;
}

export const bnHero = {
  eyebrow: "Campanha de novembro 2026",
  title: { lead: "Seu negócio merece um site que", highlight: "faz acontecer", tail: "." },
  description:
    "Chegou a Black November da IngaCraft. Site institucional, landing page ou loja virtual com um preço para tirar seu projeto do papel.",
  primaryCta: "Conhecer as ofertas",
  secondaryCta: "Entenda melhor",
  checks: ["Preços fechados", "Válido até 30/11/2026", "Fale direto com a gente"],
};

/** Opções do campo "O que você precisa?" do formulário */
export const bnFormOptions = ["Site institucional", "Landing page", "E-commerce / loja virtual", "Ainda não sei, quero ajuda"];

export const bnWhy = {
  eyebrow: "O primeiro contato conta",
  title: { lead: "Seu cliente pesquisa você", highlight: "antes", tail: "de falar com você." },
  description:
    "O que ele encontra nesse momento pode aproximar ou afastar. Dê ao seu negócio um espaço claro para se apresentar.",
  items: [
    {
      title: "Ser encontrado",
      text: "Quando alguém busca sua empresa, uma presença própria ajuda a mostrar quem você é e como entrar em contato.",
    },
    {
      title: "Mostrar o que importa",
      text: "Uma página bem organizada apresenta sua oferta sem depender de uma sequência de mensagens para explicar o básico.",
    },
    {
      title: "Facilitar a próxima ação",
      text: "Pedir um orçamento, tirar uma dúvida ou conhecer seus produtos pode ficar a um clique de distância.",
    },
  ],
};

export const bnDiscount = {
  eyebrow: "Black November",
  badge: "50% OFF",
  badgeNote: "Em todos os projetos durante novembro",
  title: { lead: "Seu negócio na internet", highlight: "pela metade do preço." },
  description:
    "Em novembro, site institucional, landing page e loja virtual saem com 50% OFF. Projetos como este, feitos para passar confiança e trazer clientes.",
  checks: ["50% OFF em todos os projetos", "Válido até 30 de novembro de 2026", "Funciona no computador e no celular"],
  cta: "Quero meu projeto com 50% OFF",
};

export const bnPlansIntro = {
  eyebrow: "Black November",
  title: { lead: "O projeto certo.", highlight: "O preço certo." },
  description: "Três caminhos para colocar seu negócio online. Escolha o que combina com seu momento.",
  notice: {
    strong: "Condição especial de Black November por tempo limitado, válida até 30 de novembro de 2026.",
    rest: "Solicite seu orçamento antes do encerramento da campanha.",
  },
  footnote: [
    "Desconto de 50% sobre o valor original de cada projeto, válido para contratações feitas até 30 de novembro de 2026.",
    "Tudo o que está incluído aparece no card; necessidades extras são combinadas à parte.",
  ],
};

export const bnPlans: BnPlan[] = [
  {
    id: "site-institucional",
    name: "Site institucional",
    deadline: "Prazo: 3 dias",
    tag: "Mais procurado",
    description: "Um site completo para apresentar sua empresa com clareza e facilitar o primeiro contato.",
    audience: "Para quem quer ser encontrado e passar confiança.",
    includes: [
      "Mais de 3 páginas",
      "Automação de formulário de leads direto no WhatsApp",
      "Botões de contato",
      "Domínio profissional",
      "Design empresarial moderno",
    ],
    originalPrice: "R$ 1.997,80",
    price: "R$ 998,90",
    savings: "R$ 998,90",
    cta: "Quero meu site",
    featured: true,
    whatsappMessage: "Olá! Vi a Black November da IngaCraft e quero o Site institucional por R$ 998,90.",
  },
  {
    id: "landing-page",
    name: "Landing page",
    deadline: "Prazo: 1 dia",
    tag: "Foco em conversão",
    description: "Um site de conversão focado em apresentar sua oferta e levar o visitante à próxima ação.",
    audience: "Para campanhas, lançamentos e captação de contatos.",
    includes: ["Site de conversão", "Página única", "Identidade visual do seu negócio", "Botões de WhatsApp"],
    originalPrice: "R$ 1.197,80",
    price: "R$ 598,90",
    savings: "R$ 598,90",
    cta: "Quero minha landing page",
    whatsappMessage: "Olá! Vi a Black November da IngaCraft e quero a Landing page por R$ 598,90.",
  },
  {
    id: "ecommerce",
    name: "E-commerce, loja virtual",
    deadline: "Prazo: 7 dias",
    tag: "Sua loja online",
    description: "Uma loja virtual completa para expor seus produtos e vender online todos os dias.",
    audience: "Para quem quer vender produtos pela internet.",
    includes: [
      "Venda 24 horas por dia, 7 dias por semana",
      "Catálogo de produtos organizado por categorias",
      "Carrinho de compras e checkout simples",
      "Pagamento online integrado",
      "Alcance clientes além da sua região",
    ],
    originalPrice: "R$ 1.597,80",
    price: "R$ 798,90",
    savings: "R$ 798,90",
    cta: "Quero meu e-commerce",
    whatsappMessage: "Olá! Vi a Black November da IngaCraft e quero o E-commerce por R$ 798,90.",
  },
];

export const bnSteps = {
  eyebrow: "Simples assim",
  title: { lead: "Três passos para", highlight: "tirar do papel." },
  items: [
    { title: "Escolha o formato", text: "Site, landing page ou e-commerce: comece pela solução que você precisa agora." },
    {
      title: "Conte sua ideia",
      text: "Preencha o formulário e envie a mensagem pronta para o WhatsApp da IngaCraft.",
    },
    { title: "Alinhe os detalhes", text: "Conversamos sobre conteúdo, escopo e prazo para definir os próximos passos." },
  ],
};

export const bnFaq = {
  eyebrow: "Perguntas frequentes",
  title: { lead: "Ficou alguma", highlight: "dúvida?" },
  description: "Aqui estão as respostas para começar. Se precisar, a gente conversa sobre o seu caso.",
  items: [
    {
      q: "Os valores da Black November são fechados?",
      a: "Sim. O valor de cada card é fechado para contratações feitas até 30 de novembro de 2026 e cobre tudo o que aparece listado nele. Necessidades extras são combinadas à parte, antes de começar.",
    },
    {
      q: "Qual opção faz mais sentido para meu negócio?",
      a: "Se você quer apresentar a empresa e passar confiança, o site institucional. Se tem uma oferta, campanha ou lançamento específico, a landing page. Se quer vender produtos pela internet, o e-commerce. Na dúvida, conte sua ideia que a gente indica o melhor caminho.",
    },
    {
      q: "Domínio e hospedagem estão incluídos?",
      a: "O site institucional já inclui domínio profissional, como aparece no card. Para landing page e e-commerce, domínio e hospedagem são alinhados na conversa, de acordo com o que o seu projeto precisa.",
    },
    {
      q: "Quanto tempo leva para ficar pronto?",
      a: "A landing page fica pronta em 1 dia, o site institucional em 3 dias e o e-commerce em 7 dias, contados a partir do alinhamento do conteúdo.",
    },
    {
      q: "Posso conversar antes de decidir?",
      a: "Claro. Preencha o formulário ou chame no WhatsApp: a conversa é sem compromisso e serve para entender o seu caso antes de qualquer decisão.",
    },
  ],
};

export const bnCta = {
  eyebrow: "Black November · IngaCraft",
  title: { lead: "Seu próximo passo", highlight: "começa aqui." },
  description: "Condição especial válida até 30 de novembro de 2026. Solicite seu orçamento antes do encerramento da campanha.",
  cta: "Quero meu projeto",
  whatsappMessage: "Olá! Vi a Black November da IngaCraft e quero conversar sobre meu projeto.",
};
