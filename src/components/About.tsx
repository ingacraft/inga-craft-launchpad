import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import teamPhoto from "@/assets/team-collaboration.jpg";

const principles = [
  {
    n: "01",
    title: "Escopo claro antes do código",
    body: "Nada começa sem contrato, entregáveis definidos e cronograma acordado.",
  },
  {
    n: "02",
    title: "Engenharia responsável",
    body: "Stack madura, código testado, deploys auditáveis. Sem gambiarra.",
  },
  {
    n: "03",
    title: "Resultado que a diretoria mede",
    body: "Métricas de performance, conversão e disponibilidade acompanhadas.",
  },
  {
    n: "04",
    title: "Continuidade pós-entrega",
    body: "Suporte estruturado, SLA definido, evolução planejada em ciclos.",
  },
];

const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "AWS", "Docker", "Tailwind", "Supabase", "WordPress", "NuvemShop", "Automações n8n",
];

const About = () => {
  return (
    <section id="sobre" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <FadeInUpWrapper className="lg:col-span-5">
            <div className="eyebrow mb-6">A empresa</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.03em] text-foreground leading-[1.05] mb-8">
              Uma casa de engenharia<br />
              — <span className="text-primary">não uma agência genérica.</span>
            </h2>
            <div className="mb-8 overflow-hidden rounded-md border border-border relative group">
              <img
                src={teamPhoto}
                alt="Time Ingacraft trabalhando em um projeto"
                width={1600}
                height={1200}
                loading="lazy"
                className="w-full h-64 md:h-72 object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Time / Maringá — PR</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Ingacraft ©</span>
              </div>
            </div>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                A <span className="text-foreground font-medium">Ingacraft</span> foi fundada em Maringá para atender empresas que precisam
                de tecnologia séria: sistemas que escalam, sites que performam,
                infraestrutura que não falha em produção.
              </p>
              <p>
                Nosso time combina desenvolvedores, arquitetos de software e
                especialistas em hardware. Cada projeto é conduzido por um
                responsável técnico do início ao fim.
              </p>
            </div>
          </FadeInUpWrapper>

          {/* Right: principles list */}
          <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-border">
            <FadeInUpWrapper className="eyebrow mb-8">Princípios operacionais</FadeInUpWrapper>
            <div className="divide-y divide-border">
              {principles.map((p, i) => (
                <FadeInUpWrapper
                  key={p.n}
                  delay={i * 0.08}
                  className="py-8 first:pt-0 grid grid-cols-12 gap-6 group"
                >
                  <div className="col-span-2 font-mono text-xs text-primary pt-1">
                    {p.n}
                  </div>
                  <div className="col-span-10">
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{p.body}</p>
                  </div>
                </FadeInUpWrapper>
              ))}
            </div>

            <FadeInUpWrapper delay={0.1} className="mt-12 rule-t pt-8">
              <div className="eyebrow mb-5">Stack de trabalho</div>
              <div className="flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs font-mono text-muted-foreground border border-border rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </FadeInUpWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
