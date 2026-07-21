import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import { siteConfig } from "@/config/site";

const Contact = () => {
  return (
    <section id="contato" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <FadeInUpWrapper className="lg:col-span-5">
            <div className="eyebrow mb-6">Contato</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.03em] text-foreground leading-[1.05] mb-6">
              Entre em contato com nosso time técnico.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Responderemos em até 24 horas úteis com uma análise inicial e próximos passos.
            </p>

            <div className="divide-y divide-border rule-t">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-4 py-5 group hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">E-mail</div>
                  <div className="text-foreground text-sm truncate group-hover:text-primary transition-colors">
                    {siteConfig.contact.email}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-4 py-5 group"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Telefone</div>
                  <div className="text-foreground text-sm font-mono group-hover:text-primary transition-colors">
                    {siteConfig.contact.phoneFormatted}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </a>
              <div className="flex items-center gap-4 py-5">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Localização</div>
                  <div className="text-foreground text-sm">{siteConfig.contact.location}</div>
                </div>
              </div>
            </div>
          </FadeInUpWrapper>

          {/* Right — form */}
          <FadeInUpWrapper delay={0.15} className="lg:col-span-7">
            <form
              className="tile p-6 md:p-10 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = fd.get("name");
                const email = fd.get("email");
                const subject = fd.get("subject");
                const message = fd.get("message");
                const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
                  subject as string,
                )}&body=${encodeURIComponent(
                  `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
                )}`;
                window.location.href = mailto;
              }}
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    Nome
                  </label>
                  <Input name="name" required placeholder="Seu nome" className="bg-background border-border h-11" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    E-mail corporativo
                  </label>
                  <Input name="email" type="email" required placeholder="voce@empresa.com" className="bg-background border-border h-11" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Assunto
                </label>
                <Input name="subject" required placeholder="Sobre o que é o projeto?" className="bg-background border-border h-11" />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Descreva o desafio, escopo aproximado e prazo desejado."
                  className="bg-background border-border"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs text-muted-foreground">
                  Ao enviar, você concorda em ser contatado sobre este projeto.
                </p>
                <Button type="submit" variant="hero" size="lg" className="group">
                  Enviar mensagem
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </FadeInUpWrapper>
        </div>
      </div>
    </section>
  );
};

export default Contact;