import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import { Quote } from "lucide-react";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

const items = [
  {
    n: "01",
    quote:
      "Entregaram nosso sistema no prazo, com documentação e treinamento. Automatizamos o que antes tomava dias em planilha.",
    name: "Camila Rezende",
    role: "Diretora de Operações",
    company: "Grupo Vertex",
    photo: client1,
  },
  {
    n: "02",
    quote:
      "Refizeram nosso site com foco em performance. Em três meses dobramos os leads qualificados vindos do Google.",
    name: "Ricardo Almeida",
    role: "Sócio-fundador",
    company: "Almeida & Cia. Advocacia",
    photo: client2,
  },
  {
    n: "03",
    quote:
      "Trato profissional do começo ao fim. Escopo claro, contrato assinado, entregas semanais e um time acessível.",
    name: "Bruno Machado",
    role: "CEO",
    company: "Norte Studios",
    photo: client3,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="border-t border-border bg-[hsl(var(--surface-c))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeInUpWrapper className="grid md:grid-cols-12 gap-8 mb-14">
          <div className="md:col-span-7">
            <div className="eyebrow mb-4">Depoimentos</div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-foreground leading-[1.05]">
              Quem confia na engenharia da{" "}
              <span className="text-primary">Ingacraft</span>.
            </h2>
          </div>
          <p className="md:col-span-5 md:pt-4 text-muted-foreground leading-relaxed">
            Empresas sérias, projetos concluídos, relações de longo prazo. Alguns
            dos parceiros que já entregamos.
          </p>
        </FadeInUpWrapper>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
          {items.map((t, i) => (
            <FadeInUpWrapper key={t.n} delay={i * 0.08}>
              <article className="tile h-full p-6 lg:p-8 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-primary">{t.n}</span>
                  <Quote className="w-5 h-5 text-primary/70" />
                </div>
                <p className="text-foreground/90 leading-relaxed text-[15px] flex-1">
                  “{t.quote}”
                </p>
                <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                  <img
                    src={t.photo}
                    alt={t.name}
                    width={64}
                    height={64}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover border border-border"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-foreground truncate">{t.name}</div>
                    <div className="text-xs text-muted-foreground truncate">
                      {t.role} · <span className="text-primary/80">{t.company}</span>
                    </div>
                  </div>
                </div>
              </article>
            </FadeInUpWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;