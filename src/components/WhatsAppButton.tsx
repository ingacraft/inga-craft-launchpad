import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/config/site";

const WhatsAppButton = () => {
  return (
    <Button
      onClick={() => window.open(getWhatsAppLink(), "_blank")}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg shadow-accent/50 hover:shadow-accent/80 bg-accent hover:bg-accent/90 transition-all duration-300 hover:scale-110 group"
      size="icon"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
      </span>
    </Button>
  );
};

export default WhatsAppButton;
