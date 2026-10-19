import { MessageCircle } from "lucide-react";
import { getWhatsAppLink, siteConfig } from "@/config/site";

const WhatsAppButton = () => (
  <a
    href={getWhatsAppLink(siteConfig.whatsapp.floating)}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Conversar com a IngaCraft pelo WhatsApp (abre em nova aba)"
    className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-sm border-2 border-ink bg-lime text-ink shadow-[4px_4px_0_0_hsl(var(--ink))] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_hsl(var(--ink))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
  >
    <MessageCircle aria-hidden className="h-6 w-6 transition-transform group-hover:scale-110" />
  </a>
);

export default WhatsAppButton;
