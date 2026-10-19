/**
 * Campanha Black November — módulo temporário.
 *
 * Para desativar a campanha inteira (barra superior, seção especial,
 * faixas e pergunta do FAQ), basta definir `enabled: false`.
 * Se `validUntil` for definido, a campanha também some sozinha após a data.
 *
 * Preencha `discount` e `deadline` das ofertas SOMENTE com condições confirmadas.
 */

export interface CampaignOffer {
  id: string;
  name: string;
  audience: string;
  includes: string[];
  /** Prazo estimado — apenas quando houver informação confiável */
  deadline?: string;
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
  offers: [
    {
      id: "site-institucional",
      name: "Site institucional",
      audience: "Empresas que precisam apresentar a marca com credibilidade e organizar sua presença digital.",
      includes: [
        "Múltiplas páginas organizadas",
        "Portfólio de trabalhos e projetos",
        "Apresentação da equipe e da história",
        "Layout responsivo com SSL",
      ],
      whatsappMessage:
        "Olá! Quero saber das condições Black November para um site institucional.",
    },
    {
      id: "landing-page",
      name: "Landing page",
      audience: "Negócios que querem captar contatos, divulgar uma oferta ou lançar um produto.",
      includes: [
        "Página única focada em um objetivo",
        "Estrutura pensada para conversão",
        "Ideal para lançamentos e promoções",
        "Implementação rápida",
      ],
      whatsappMessage:
        "Olá! Quero saber das condições Black November para uma landing page.",
    },
    {
      id: "ecommerce-sob-medida",
      name: "E-commerce ou solução sob medida",
      audience: "Empresas que querem vender online ou digitalizar um processo interno.",
      includes: [
        "Loja virtual com catálogo, carrinho e checkout",
        "Pagamentos, frete e gestão de estoque",
        "Ou sistema web sob medida para sua operação",
        "Integrações com as ferramentas que você já usa",
      ],
      deadline: "E-commerce: entre 15 e 30 dias, conforme a complexidade",
      whatsappMessage:
        "Olá! Quero saber das condições Black November para e-commerce ou uma solução sob medida.",
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
