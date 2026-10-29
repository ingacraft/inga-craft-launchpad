/**
 * Campanha Black November — módulo temporário.
 *
 * Para desativar a campanha inteira (barra superior, seção especial,
 * faixas e pergunta do FAQ), basta definir `enabled: false`.
 * Se `validUntil` for definido, a campanha também some sozinha após a data.
 *
 * Preencha `discount` e `deadline` das ofertas SOMENTE com condições confirmadas.
 */

import { siteConfig } from "@/config/site";

export interface CampaignOffer {
  id: string;
  name: string;
  audience: string;
  includes: string[];
  /** Prazo estimado — apenas quando houver informação confiável */
  deadline?: string;
  /** Página da solução */
  route: string;
  whatsappMessage: string;
}

export interface CampaignConfig {
  enabled: boolean;
  campaignName: string;
  badge: string;
  /** Ex.: "até 50% OFF". Deixe null enquanto o desconto não estiver confirmado. */
  discount: string | null;
  /** Data ISO (AAAA-MM-DD) do último dia da campanha. null = sem data definida. */
  validUntil: string | null;
  topBar: string[];
  strip: string[];
  title: { lead: string; highlight: string; tail: string };
  description: string;
  whatsappMessage: string;
  /** Página externa de captação de contatos da campanha */
  contactUrl: string;
  offers: CampaignOffer[];
}

export const campaignConfig: CampaignConfig = {
  enabled: true,
  campaignName: "Black November IngaCraft",
  badge: "BLACK NOVEMBER",
  discount: null,
  validUntil: null,
  topBar: [
    "Black November IngaCraft",
    "Ofertas especiais",
    "Projetos digitais com condições exclusivas",
  ],
  strip: ["Black November", "Condições especiais", "Fale com a IngaCraft"],
  title: {
    lead: "Seu próximo projeto pode sair do papel",
    highlight: "por menos",
    tail: ".",
  },
  description:
    "Durante a Black Friday da IngaCraft, empresas podem contratar soluções digitais com condições especiais e começar o próximo ciclo com uma presença digital mais forte.",
  whatsappMessage:
    "Olá! Vi a campanha Black November da IngaCraft e quero saber das condições especiais.",
  contactUrl: "https://captador-de-leads-ingacraft.vercel.app/",
  offers: [
    {
      id: "sites-landing-pages",
      name: "Sites institucionais e landing pages",
      audience: "Empresas que querem apresentar a marca com credibilidade, captar contatos ou divulgar uma oferta.",
      includes: [
        "Site com múltiplas páginas organizadas",
        "Ou landing page focada em um único objetivo",
        "Estrutura pensada para conversão",
        "Layout responsivo com SSL",
      ],
      route: siteConfig.routes.webDevelopment,
      whatsappMessage:
        "Olá! Quero saber das condições Black November para um site institucional ou landing page.",
    },
    {
      id: "software-sob-medida",
      name: "Desenvolvimento de software sob medida",
      audience: "Empresas que precisam de um sistema construído a partir da forma como realmente trabalham.",
      includes: [
        "Sistemas web, mobile ou desktop",
        "Login e controle de acesso",
        "Suporte a múltiplos usuários",
        "Levantamento de requisitos e prototipagem",
      ],
      route: siteConfig.routes.softwareDevelopment,
      whatsappMessage:
        "Olá! Quero saber das condições Black November para um software sob medida.",
    },
    {
      id: "sistemas-internos",
      name: "Sistemas internos e plataformas digitais",
      audience: "Equipes que querem centralizar informações e organizar a operação em um só lugar.",
      includes: [
        "Dashboard interativo",
        "Relatórios personalizáveis",
        "Notificações e alertas",
        "Backup automático",
      ],
      route: siteConfig.routes.internalSystems,
      whatsappMessage:
        "Olá! Quero saber das condições Black November para um sistema interno ou plataforma digital.",
    },
    {
      id: "ecommerce",
      name: "E-commerce e lojas virtuais",
      audience: "Negócios que querem vender online 24 horas por dia, 7 dias por semana.",
      includes: [
        "Catálogo, carrinho e checkout seguro",
        "Múltiplas formas de pagamento",
        "Cálculo de frete e gestão de estoque",
        "Cupons e promoções",
      ],
      deadline: "entre 15 e 30 dias, conforme a complexidade",
      route: siteConfig.routes.ecommerce,
      whatsappMessage:
        "Olá! Quero saber das condições Black November para uma loja virtual.",
    },
    {
      id: "integracoes-automacoes",
      name: "Integrações e automações digitais",
      audience: "Empresas que querem conectar suas ferramentas e acabar com tarefas repetitivas.",
      includes: [
        "APIs e integrações entre sistemas",
        "Fluxos automatizados com n8n",
        "Integração com WhatsApp e e-mail",
        "Relatórios automáticos",
      ],
      route: siteConfig.routes.automations,
      whatsappMessage:
        "Olá! Quero saber das condições Black November para integrações e automações.",
    },
  ],
};

/** A campanha está ativa? Respeita `enabled` e `validUntil`. */
export const isCampaignActive = (now: Date = new Date()) => {
  if (!campaignConfig.enabled) return false;
  if (!campaignConfig.validUntil) return true;
  const end = new Date(`${campaignConfig.validUntil}T23:59:59`);
  return now <= end;
};
