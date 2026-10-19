import {
  BarChart3,
  ShieldCheck,
  TrendingUp,
  Bot,
  Workflow,
  Plug,
  Package,
  Users,
  ClipboardList,
  DollarSign,
  CalendarDays,
  UserCog,
  Settings,
  CreditCard,
  MessageCircle,
  Mail,
  LineChart,
  Share2,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import systemDashboard from "@/assets/system-dashboard.jpg";
import automation from "@/assets/n8n-automation-bg.jpg";

// Conteúdo das páginas de serviço baseadas no template ServiceDetail

export interface ServiceDetailContent {
  route: string;
  seo: { title: string; description: string };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleHighlight: string;
    description: string;
    image: string;
    imageAlt: string;
    primaryLabel: string;
    whatsappMessage: string;
  };
  benefits: { icon: LucideIcon; title: string; items: string[] }[];
  build: {
    eyebrow: string;
    title: string;
    description: string;
    items: { icon: LucideIcon; title: string; description: string }[];
  };
  features: { title: string; items: string[] };
  cta: { title: string; description: string; label: string; whatsappMessage: string };
}

export const internalSystemsPage: ServiceDetailContent = {
  route: siteConfig.routes.internalSystems,
  seo: {
    title: "Sistemas internos e plataformas digitais | IngaCraft",
    description:
      "Painéis, dashboards e plataformas sob medida que centralizam informações e organizam a operação da sua empresa.",
  },
  hero: {
    eyebrow: "Sistemas internos",
    titleLead: "Sua operação organizada em",
    titleHighlight: "uma só plataforma.",
    description:
      "Painéis, dashboards e plataformas que centralizam informações e organizam a operação, com dados em tempo real para decisões mais seguras.",
    image: systemDashboard,
    imageAlt: "Dashboard de sistema web com gráficos e indicadores",
    primaryLabel: "Quero um sistema interno",
    whatsappMessage: "Olá! Quero conversar sobre um sistema interno ou plataforma digital para minha empresa.",
  },
  benefits: [
    {
      icon: BarChart3,
      title: "Dados em tempo real",
      items: ["Relatórios automáticos", "Dashboard intuitivo", "Decisões baseadas em dados"],
    },
    {
      icon: ShieldCheck,
      title: "Segurança e conformidade",
      items: ["Dados protegidos", "Backup automático", "Conformidade com a LGPD"],
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade",
      items: ["Cresça sem preocupações", "Adicione funcionalidades", "Integrações com outras ferramentas"],
    },
  ],
  build: {
    eyebrow: "O que podemos construir",
    title: "Plataformas para cada área da empresa.",
    description: "Alguns dos usos mais comuns de sistemas internos. Cada um é desenhado a partir do seu processo.",
    items: [
      { icon: Package, title: "Controle de estoque", description: "Entradas, saídas e saldo atualizados em um só lugar." },
      { icon: Users, title: "Gestão de clientes (CRM)", description: "Histórico, contatos e oportunidades organizados." },
      { icon: ClipboardList, title: "Ordens de serviço", description: "Abertura, acompanhamento e conclusão de atendimentos." },
      { icon: DollarSign, title: "Financeiro", description: "Contas, lançamentos e relatórios para acompanhar o caixa." },
      { icon: CalendarDays, title: "Agendamentos", description: "Agenda de serviços e equipe sem conflitos de horário." },
      { icon: UserCog, title: "RH e ponto eletrônico", description: "Registros da equipe centralizados e consultáveis." },
    ],
  },
  features: {
    title: "Recursos que podem fazer parte do seu sistema",
    items: [
      "Login e controle de acesso",
      "Relatórios personalizáveis",
      "Dashboard interativo",
      "Notificações e alertas",
      "Backup automático",
      "Suporte a múltiplos usuários",
      "Integração com WhatsApp e e-mail",
      "App mobile (opcional)",
    ],
  },
  cta: {
    title: "Vamos organizar a operação da sua empresa?",
    description: "Conte como sua equipe trabalha hoje e a gente mostra como um sistema sob medida pode ajudar.",
    label: "Conversar sobre meu sistema",
    whatsappMessage: "Olá! Quero conversar sobre um sistema interno ou plataforma digital para minha empresa.",
  },
};

export const automationsPage: ServiceDetailContent = {
  route: siteConfig.routes.automations,
  seo: {
    title: "Integrações e automações digitais | IngaCraft",
    description:
      "Conectamos as ferramentas que sua empresa já usa e automatizamos tarefas repetitivas, inclusive com n8n.",
  },
  hero: {
    eyebrow: "Integrações e automações",
    titleLead: "Menos trabalho manual,",
    titleHighlight: "mais tempo para o que importa.",
    description:
      "Conectamos as ferramentas que sua empresa já usa e automatizamos tarefas repetitivas, inclusive com n8n.",
    image: automation,
    imageAlt: "Fluxo de automação conectando diferentes ferramentas",
    primaryLabel: "Quero automatizar processos",
    whatsappMessage: "Olá! Quero conversar sobre integrações e automações para minha empresa.",
  },
  benefits: [
    {
      icon: Bot,
      title: "Automação de processos",
      items: ["Elimine tarefas repetitivas", "Reduza erros humanos", "Aumente a eficiência da equipe"],
    },
    {
      icon: Plug,
      title: "Sistemas conectados",
      items: ["Dados que circulam entre ferramentas", "Menos retrabalho e digitação", "Informação consistente em todos os lugares"],
    },
    {
      icon: Workflow,
      title: "Fluxos sob medida",
      items: ["Automações desenhadas para o seu processo", "Fluxos com n8n", "Evolução conforme a operação cresce"],
    },
  ],
  build: {
    eyebrow: "O que podemos conectar",
    title: "As ferramentas que sua empresa já usa, trabalhando juntas.",
    description: "Exemplos de integrações comuns. Avaliamos as ferramentas do seu negócio na etapa de entendimento.",
    items: [
      { icon: Settings, title: "ERP e gestão", description: "Sistemas de gestão integrados ao restante da operação." },
      { icon: CreditCard, title: "Gateways de pagamento", description: "Pagamentos conectados a pedidos, cadastros e financeiro." },
      { icon: MessageCircle, title: "WhatsApp", description: "Mensagens e avisos disparados a partir de eventos do negócio." },
      { icon: Mail, title: "E-mail marketing", description: "Campanhas e comunicações automatizadas." },
      { icon: LineChart, title: "Analytics", description: "Google Analytics e Tag Manager alimentados corretamente." },
      { icon: Share2, title: "Redes sociais", description: "Instagram, Facebook e TikTok integrados aos seus fluxos." },
    ],
  },
  features: {
    title: "O que pode fazer parte da sua automação",
    items: [
      "APIs e integrações entre sistemas",
      "Fluxos automatizados com n8n",
      "Notificações e alertas",
      "Integração com WhatsApp e e-mail",
      "Relatórios automáticos",
      "Conexão com serviços externos",
    ],
  },
  cta: {
    title: "Quais tarefas a sua equipe poderia parar de fazer à mão?",
    description: "Conte quais ferramentas você usa e onde está o retrabalho. A gente encontra o que dá para automatizar.",
    label: "Conversar sobre automação",
    whatsappMessage: "Olá! Quero conversar sobre integrações e automações para minha empresa.",
  },
};
