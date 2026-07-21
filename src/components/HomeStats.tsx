import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import analystPhoto from "@/assets/stats-analyst.jpg";

const rows = [
  { k: "01", value: "50+",  label: "Projetos entregues",     detail: "Sites, sistemas e lojas em produção." },
  { k: "02", value: "3×",   label: "Mais resultado",         detail: "Média de crescimento com stack correta." },
  { k: "03", value: "100%", label: "Comprometimento",        detail: "Contratos claros, escopo definido." },
  { k: "04", value: "24/7", label: "Suporte contínuo",       detail: "Acompanhamento pós-entrega." },
];

const HomeStats = () => {
  return (
    <section className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 mb-14 items-end">
          <FadeInUpWrapper className="lg:col-span-6">
            <div className="eyebrow mb-4">Números que sustentam</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
              Menos promessa, mais entrega mensurável.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Resultado acompanhado de perto por quem toma decisão — indicadores
              de performance, conversão e disponibilidade sob revisão contínua.
            </p>
          </FadeInUpWrapper>
          <FadeInUpWrapper delay={0.1} className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-md border border-border group">
              <img
                src={analystPhoto}
                alt="Executiva analisando dashboard de resultados da Ingacraft"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full h-64 md:h-80 object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Dashboard executivo</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Q2 · 2026</span>
              </div>
            </div>
          </FadeInUpWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-border">
          {rows.map((r, i) => (
            <FadeInUpWrapper
              key={r.k}
              delay={i * 0.08}
              className="border-b md:border-b-0 md:border-r last:md:border-r-0 border-border py-10 md:py-12 md:px-6 first:md:pl-0"
            >
              <div className="font-mono text-xs text-primary mb-6">{r.k}</div>
              <div className="font-display text-5xl lg:text-6xl font-semibold text-foreground tracking-[-0.04em]">
                {r.value}
              </div>
              <div className="mt-4 text-foreground font-medium">{r.label}</div>
              <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{r.detail}</div>
            </FadeInUpWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
