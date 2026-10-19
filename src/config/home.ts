import {
  Search,
  MousePointerClick,
  TrendingUp,
  LayoutTemplate,
  Code2,
  Boxes,
  ShoppingBag,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import institutionalSite from "@/assets/institutional-site-example.jpg";
import landingPage from "@/assets/landing-page-example.jpg";
import systemDashboard from "@/assets/system-dashboard.jpg";
import systemMobile from "@/assets/system-mobile.jpg";
import ecommerceModa from "@/assets/ecommerce-moda.jpg";
import automation from "@/assets/n8n-automation-bg.jpg";

// Textos e dados da página inicial

export const heroContent = {
  eyebrow: "Desenvolvimento digital sob medida",
  title: { lead: "Seu próximo avanço digital", highlight: "começa aqui." },
  description:
    "Criamos sites, sistemas e experiências digitais que ajudam empresas a vender melhor, operar com mais eficiência e crescer com clareza.",
  primaryCta: "Quero conversar sobre meu projeto",
  secondaryCta: "Conheça nossas soluções",
  tags: ["Estratégia", "Design", "Tecnologia"],
};

export const briefingProjectTypes = [
  "Site institucional",
  "Landing page",
  "Software sob medida",
  "E-commerce",
  "Integração ou automação",
  "Ainda não sei",
];

export interface Principle {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const positioning = {
  eyebrow: "Nosso ponto de vista",
  title: "Tecnologia só faz sentido quando resolve um problema real.",
  description:
    "Antes de escolher ferramentas ou desenhar telas, buscamos entender o negócio, as pessoas que vão usar a solução e o resultado que ela precisa gerar.",
  principles: [
    {
      icon: Search,
      title: "Entender antes de construir.",
      body: "Começamos pelo problema, pelo público e pelos objetivos do negócio. A tecnologia vem depois, a serviço disso.",
    },
    {
      icon: MousePointerClick,
      title: "Criar soluções simples de usar.",
      body: "Interfaces claras e fluxos diretos, para que clientes e equipes usem a solução sem fricção.",
    },
    {
      icon: TrendingUp,
      title: "Desenvolver pensando no crescimento.",
      body: "Estruturas organizadas para receber novas funcionalidades conforme a empresa evolui.",
    },
  ] satisfies Principle[],
};

export interface Solution {
  code: string;
  icon: LucideIcon;
  name: string;
  description: string;
  benefit: string;
  route: string;
  routeLabel: string;
  whatsappMessage: string;
}

export const solutions: Solution[] = [
  {
    code: "01",
    icon: LayoutTemplate,
    name: "Sites institucionais e landing pages",
    description:
      "Presença digital profissional para apresentar sua empresa, captar contatos e divulgar ofertas.",
    benefit: "Mais credibilidade e mais contatos qualificados.",
    route: siteConfig.routes.webDevelopment,
    routeLabel: "Ver desenvolvimento web",
    whatsappMessage: "Olá! Quero conversar sobre um site institucional ou landing page.",
  },
  {
    code: "02",
    icon: Code2,
    name: "Desenvolvimento de software sob medida",
    description:
      "Sistemas web, mobile e desktop construídos a partir da forma como sua empresa realmente trabalha.",
    benefit: "Processos mais eficientes, sem adaptar o negócio a uma ferramenta pronta.",
    route: siteConfig.routes.softwareDevelopment,
    routeLabel: "Ver desenvolvimento de software",
    whatsappMessage: "Olá! Quero conversar sobre um software sob medida.",
  },
  {
    code: "03",
    icon: Boxes,
    name: "Sistemas internos e plataformas digitais",
    description:
      "Painéis, dashboards e plataformas que centralizam informações e organizam a operação.",
    benefit: "Dados em tempo real para decisões mais seguras.",
    route: siteConfig.routes.softwareDevelopment,
    routeLabel: "Ver tipos de sistema",
    whatsappMessage: "Olá! Quero conversar sobre um sistema interno ou plataforma digital.",
  },
  {
    code: "04",
    icon: ShoppingBag,
    name: "E-commerce e lojas virtuais",
    description:
      "Lojas com catálogo, checkout seguro, múltiplas formas de pagamento e gestão de estoque.",
    benefit: "Venda online 24 horas por dia, 7 dias por semana.",
    route: siteConfig.routes.ecommerce,
    routeLabel: "Ver e-commerce",
    whatsappMessage: "Olá! Quero conversar sobre uma loja virtual.",
  },
  {
    code: "05",
    icon: Workflow,
    name: "Integrações e automações digitais",
    description:
      "Conectamos as ferramentas que sua empresa já usa e automatizamos tarefas repetitivas, inclusive com n8n.",
    benefit: "Menos trabalho manual e menos erros operacionais.",
    route: siteConfig.routes.softwareDevelopment,
    routeLabel: "Ver automação de processos",
    whatsappMessage: "Olá! Quero conversar sobre integrações e automações para minha empresa.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Entendimento",
    body: "Conversamos sobre o negócio, o público, os objetivos e as restrições do projeto. É aqui que o problema real aparece.",
  },
  {
    n: "02",
    title: "Estratégia",
    body: "Definimos escopo, prioridades, estrutura e tecnologia. Você sabe o que será entregue antes de qualquer linha de código.",
  },
  {
    n: "03",
    title: "Construção",
    body: "Design e desenvolvimento em ciclos, com validações ao longo do caminho para manter o projeto alinhado.",
  },
  {
    n: "04",
    title: "Evolução",
    body: "Depois da entrega, acompanhamos, ajustamos e evoluímos a solução conforme sua empresa cresce.",
  },
];

export const buildableSolutions = [
  {
    image: institutionalSite,
    alt: "Exemplo ilustrativo de site institucional",
    type: "Site institucional",
    description: "Páginas organizadas que apresentam a empresa, seus serviços e sua história.",
    route: siteConfig.routes.webDevelopment,
  },
  {
    image: landingPage,
    alt: "Exemplo ilustrativo de landing page",
    type: "Landing page",
    description: "Uma página focada em um único objetivo: captar contatos ou vender uma oferta.",
    route: siteConfig.routes.webDevelopment,
  },
  {
    image: systemDashboard,
    alt: "Exemplo ilustrativo de dashboard de sistema web",
    type: "Sistema web",
    description: "Painéis e dashboards para acompanhar a operação em tempo real.",
    route: siteConfig.routes.softwareDevelopment,
  },
  {
    image: ecommerceModa,
    alt: "Exemplo ilustrativo de loja virtual de moda",
    type: "Loja virtual",
    description: "Catálogo, carrinho e checkout para vender online com autonomia.",
    route: siteConfig.routes.ecommerce,
  },
  {
    image: systemMobile,
    alt: "Exemplo ilustrativo de aplicativo mobile",
    type: "Aplicativo mobile",
    description: "Apps para Android e iOS que levam o serviço para o bolso do cliente.",
    route: siteConfig.routes.softwareDevelopment,
  },
  {
    image: automation,
    alt: "Exemplo ilustrativo de fluxo de automação",
    type: "Automação",
    description: "Fluxos que conectam sistemas e eliminam tarefas repetitivas.",
    route: siteConfig.routes.softwareDevelopment,
  },
];

export const aboutContent = {
  eyebrow: "Sobre a IngaCraft",
  title: { lead: "A IngaCraft transforma ideias em", highlight: "soluções digitais bem construídas." },
  paragraphs: [
    "Somos uma empresa de desenvolvimento de software e soluções digitais. Trabalhamos lado a lado com quem conhece o próprio negócio para transformar necessidades reais em produtos digitais claros, funcionais e preparados para crescer.",
    `Nossa base fica em ${siteConfig.contact.location}, e cada projeto é conduzido com conversa direta, processo transparente e atenção aos detalhes.`,
  ],
  pillars: [
    { title: "Desenvolvimento sob medida", body: "Cada solução nasce do contexto do seu negócio, não de um modelo genérico." },
    { title: "Atendimento próximo", body: "Você fala com quem está construindo o projeto." },
    { title: "Clareza no processo", body: "Escopo, etapas e entregas definidos e combinados com antecedência." },
    { title: "Visão de longo prazo", body: "Soluções pensadas para evoluir junto com a empresa." },
  ],
  stack: [
    "React", "Next.js", "TypeScript", "Node.js", "Python",
    "PostgreSQL", "AWS", "Docker", "Tailwind", "Supabase", "WordPress", "NuvemShop", "n8n",
  ],
};

export interface FaqItem {
  q: string;
  a: string;
}

export const faqItems: FaqItem[] = [
  {
    q: "Que tipo de projeto a IngaCraft desenvolve?",
    a: "Desenvolvemos sites institucionais, landing pages, softwares sob medida (web, mobile e desktop), sistemas internos, plataformas digitais, lojas virtuais e integrações e automações entre ferramentas.",
  },
  {
    q: "Quanto tempo leva para criar um site ou sistema?",
    a: "Depende do escopo. Uma landing page tem implementação rápida; um e-commerce costuma levar entre 15 e 30 dias, conforme a complexidade; sistemas sob medida têm o prazo definido depois da etapa de entendimento, junto com o escopo.",
  },
  {
    q: "A IngaCraft trabalha com projetos personalizados?",
    a: "Sim. Todo projeto parte das necessidades do seu negócio. Não adaptamos sua empresa a um modelo pronto: construímos a solução a partir da forma como você trabalha.",
  },
  {
    q: "Vocês fazem manutenção e evolução depois da entrega?",
    a: "Sim. A evolução faz parte do nosso processo: depois da entrega, acompanhamos a solução, fazemos ajustes e adicionamos novas funcionalidades conforme a empresa cresce.",
  },
  {
    q: "Como funciona o primeiro contato?",
    a: "Você pode preencher o briefing no topo desta página ou chamar a gente no WhatsApp. Conversamos sobre o seu objetivo, entendemos o contexto e indicamos o melhor caminho para o projeto.",
  },
];

export const campaignFaq: FaqItem = {
  q: "A promoção Black Friday é válida para quais soluções?",
  a: "A campanha Black November contempla sites institucionais, landing pages e e-commerce ou soluções digitais sob medida. As condições são apresentadas durante a conversa no WhatsApp, de acordo com o escopo do projeto.",
};

export const finalCta = {
  eyebrow: "Próximo passo",
  title: "Vamos transformar sua próxima ideia em produto digital?",
  description: "Conte o que você precisa. A gente ajuda a encontrar o melhor caminho.",
  cta: "Quero conversar com a IngaCraft",
};
