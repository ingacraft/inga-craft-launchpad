import { FormEvent, useId, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { briefingProjectTypes } from "@/config/home";
import { getMailtoLink, openWhatsApp } from "@/config/site";
import { cn } from "@/lib/utils";

interface BriefingData {
  name: string;
  company: string;
  projectType: string;
  goal: string;
}

const buildMessage = ({ name, company, projectType, goal }: BriefingData) => {
  const lines = ["Olá! Preenchi o briefing no site da IngaCraft.", "", `Nome: ${name}`];
  if (company) lines.push(`Empresa: ${company}`);
  lines.push(`Tipo de projeto: ${projectType}`);
  if (goal) lines.push(`Objetivo: ${goal}`);
  return lines.join("\n");
};

const fieldClass =
  "w-full rounded-sm border border-input bg-transparent px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/80 transition-colors focus:border-lime focus:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const labelClass = "block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2";

/**
 * Briefing rápido do hero. Envia os dados para o WhatsApp configurado
 * (ou por e-mail, como alternativa) com a mensagem já montada.
 */
const BriefingForm = () => {
  const uid = useId();
  const [error, setError] = useState<string | null>(null);

  const readForm = (form: HTMLFormElement): BriefingData | null => {
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      projectType: String(fd.get("projectType") ?? ""),
      goal: String(fd.get("goal") ?? "").trim(),
    };
    if (!data.name) {
      setError("Informe seu nome para continuarmos.");
      form.querySelector<HTMLInputElement>("[name=name]")?.focus();
      return null;
    }
    if (!data.projectType) {
      setError("Escolha o tipo de projeto.");
      form.querySelector<HTMLInputElement>("[name=projectType]")?.focus();
      return null;
    }
    setError(null);
    return data;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = readForm(e.currentTarget);
    if (data) openWhatsApp(buildMessage(data));
  };

  const handleEmail = (form: HTMLFormElement | null) => {
    if (!form) return;
    const data = readForm(form);
    if (!data) return;
    window.location.href = getMailtoLink(
      `Briefing pelo site: ${data.projectType}`,
      buildMessage(data),
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby={`${uid}-title`}
      className="theme-ink relative rounded-sm border border-white/10 p-5 sm:p-7"
    >
      <div className="flex items-center justify-between gap-4 border-b border-border pb-4 mb-6">
        <h2 id={`${uid}-title`} className="font-display text-xl sm:text-2xl font-extrabold tracking-tight">
          Conte sobre seu projeto
        </h2>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-lime whitespace-nowrap">
          Briefing / 01
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className={labelClass}>
            Nome *
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            required
            autoComplete="name"
            placeholder="Como podemos te chamar?"
            className={fieldClass}
            aria-invalid={error?.includes("nome") || undefined}
          />
        </div>
        <div>
          <label htmlFor={`${uid}-company`} className={labelClass}>
            Empresa
          </label>
          <input
            id={`${uid}-company`}
            name="company"
            autoComplete="organization"
            placeholder="Opcional"
            className={fieldClass}
          />
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className={labelClass}>Tipo de projeto *</legend>
        <div className="flex flex-wrap gap-2">
          {briefingProjectTypes.map((type, i) => (
            <label key={type} className="relative cursor-pointer">
              <input
                type="radio"
                name="projectType"
                value={type}
                required={i === 0}
                className="peer sr-only"
              />
              <span
                className={cn(
                  "inline-block rounded-sm border border-input px-3 py-1.5 text-xs font-semibold transition-colors",
                  "hover:border-paper peer-checked:border-lime peer-checked:bg-lime peer-checked:text-ink",
                  "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-ink",
                )}
              >
                {type}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <label htmlFor={`${uid}-goal`} className={labelClass}>
          O que você quer alcançar?
        </label>
        <textarea
          id={`${uid}-goal`}
          name="goal"
          rows={3}
          placeholder="Ex.: vender online, organizar o atendimento, apresentar melhor a empresa..."
          className={cn(fieldClass, "resize-none")}
        />
      </div>

      <p role="alert" aria-live="polite" className="min-h-[1.25rem] mt-3 text-sm font-medium text-coral">
        {error}
      </p>

      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="lime" size="lg" className="group w-full sm:w-auto">
          Enviar pelo WhatsApp
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Button>
        <button
          type="button"
          onClick={(e) => handleEmail(e.currentTarget.form)}
          className="inline-flex items-center justify-center gap-2 py-2 text-sm font-semibold text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          <Mail className="w-4 h-4" />
          Prefiro enviar por e-mail
        </button>
      </div>
    </form>
  );
};

export default BriefingForm;
