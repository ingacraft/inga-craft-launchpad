import { MousePointerClick, ScanSearch, ShoppingBag } from "lucide-react";
import SectionHeading from "@/components/brand/SectionHeading";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import { bnWhy } from "@/config/blackNovember";

const icons = [ScanSearch, MousePointerClick, ShoppingBag];

/** "Por que ter um site?" — três motivos em cards. */
const BnWhy = () => (
  <section id="por-que-ter-um-site" aria-labelledby="bn-why-title" className="bg-[hsl(var(--surface-b))] py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        id="bn-why-title"
        eyebrow={bnWhy.eyebrow}
        title={
          <>
            {bnWhy.title.lead} <span className="text-coral">{bnWhy.title.highlight}</span> {bnWhy.title.tail}
          </>
        }
        description={bnWhy.description}
      />

      <ul className="grid gap-4 md:grid-cols-3">
        {bnWhy.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <FadeInUpWrapper as="li" key={item.title} delay={i * 0.08} className="h-full">
              <article className="tile flex h-full flex-col p-7">
                <Icon aria-hidden className="ml-auto h-5 w-5 text-coral" />
                <h3 className="mt-10 font-display text-xl font-extrabold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            </FadeInUpWrapper>
          );
        })}
      </ul>
    </div>
  </section>
);

export default BnWhy;
