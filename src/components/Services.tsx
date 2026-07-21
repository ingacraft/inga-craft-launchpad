import { ArrowUpRight, Code2, Terminal, Cpu, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const featured = {
  code: "01",
  icon: Code2,
  title: "Desenvolvimento Web",
  desc: "Sites institucionais, landing pages de alta conversão e portais completos — arquitetura moderna, SEO técnico e performance de mercado.",
  points: [
    "Sites institucionais e landing pages",
    "SEO técnico e Core Web Vitals",
    "Painéis administrativos",
    "Hospedagem, CI/CD e monitoramento",
  ],
  route: "/desenvolvimento-web",
};

const secondary = [
  {
    code: "02",
    icon: Terminal,
    title: "Software sob medida",
    desc: "Sistemas web, APIs e integrações que automatizam processos internos.",
    route: "/desenvolvimento-software",
  },
  {
    code: "03",
    icon: Cpu,
    title: "Setups personalizados",
    desc: "Montagem profissional de PCs para trabalho, criação e gaming.",
    route: "/setups-personalizados",
  },
];

const wide = {
  code: "04",
  icon: ShoppingBag,
  title: "E-commerce",
  desc: "Lojas virtuais completas — checkout, pagamentos, integrações de estoque e logística.",
  route: "/ecommerce",
};

const Services = () => {
  return (
    <section id="servicos" className="border-t border-border bg-[hsl(var(--surface-b))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* Section head */}
        <FadeInUpWrapper className="grid md:grid-cols-12 gap-8 mb-14">
          <div className="md:col-span-7">
            <div className="eyebrow mb-4">Capacidades</div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-foreground leading-[1.05]">
              Um portfólio técnico completo, entregue por um único parceiro.
            </h2>
          </div>
          <p className="md:col-span-5 md:pt-4 text-muted-foreground leading-relaxed">
            Da presença digital ao hardware que roda a operação. Cada serviço é
            entregue com escopo claro, contrato definido e time responsável de ponta
            a ponta.
          </p>
        </FadeInUpWrapper>

        {/* Bento grid */}
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-[minmax(220px,auto)]">
          {/* Featured — 2 cols x 2 rows */}
          <FadeInUpWrapper className="lg:col-span-2 lg:row-span-2">
            <Link
              to={featured.route}
              className="tile-feature group relative flex flex-col justify-between h-full p-8 lg:p-10 overflow-hidden"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">{featured.code}</span>
                  <span className="h-px w-8 bg-border" />
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Serviço</span>
                </div>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>

              <div className="mt-16">
                <featured.icon className="w-9 h-9 text-primary mb-6" />
                <h3 className="font-display text-3xl lg:text-4xl font-semibold text-foreground tracking-tight mb-4">
                  {featured.title}
                </h3>
                <p className="text-muted-foreground max-w-lg leading-relaxed mb-8">
                  {featured.desc}
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 max-w-xl">
                  {featured.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground/85">
                      <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </FadeInUpWrapper>

          {/* Secondary tiles */}
          {secondary.map((s, i) => (
            <FadeInUpWrapper key={s.title} delay={0.08 + i * 0.06}>
              <Link
                to={s.route}
                className="tile group flex flex-col justify-between h-full p-6 lg:p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">{s.code}</span>
                    <span className="h-px w-6 bg-border" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <div>
                  <s.icon className="w-7 h-7 text-primary mb-4" />
                  <h3 className="font-display text-xl font-semibold text-foreground tracking-tight mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            </FadeInUpWrapper>
          ))}

          {/* Wide bottom tile */}
          <FadeInUpWrapper className="lg:col-span-3" delay={0.24}>
            <Link
              to={wide.route}
              className="tile group flex flex-col md:flex-row md:items-center justify-between gap-6 h-full p-6 lg:p-8"
            >
              <div className="flex items-start gap-6">
                <div className="hidden md:flex w-12 h-12 rounded-md border border-border items-center justify-center flex-shrink-0">
                  <wide.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-muted-foreground">{wide.code}</span>
                    <span className="h-px w-6 bg-border" />
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Serviço</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                    {wide.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1 max-w-2xl">{wide.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                Explorar serviço
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </FadeInUpWrapper>
        </div>
      </div>
    </section>
  );
};

export default Services;
