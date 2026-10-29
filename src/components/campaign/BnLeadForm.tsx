import { ChangeEvent, FormEvent, useId, useState } from "react";
import { ArrowUpRight, Lock } from "lucide-react";
import { bnFormOptions } from "@/config/blackNovember";
import { openWhatsApp } from "@/config/site";
import { cn } from "@/lib/utils";

interface LeadData {
  name: string;
  phone: string;
  company: string;
  need: string;
  details: string;
}

type Field = keyof Omit<LeadData, "details">;

const required: { field: Field; message: string }[] = [
  { field: "name", message: "Informe seu nome." },
  { field: "phone", message: "Informe um WhatsApp válido com DDD." },
  { field: "company", message: "Informe o nome da empresa ou negócio." },
  { field: "need", message: "Escolha o que você precisa." },
];

/** Máscara simples: (44) 99999-9999 */
const formatPhone = (value: string) => {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const buildMessage = ({ name, phone, company, need, details }: LeadData) => {
  const lines = [
    "Olá! Vim pela Black November da IngaCraft e quero começar meu projeto.",
    "",
    `Nome: ${name}`,
    `WhatsApp: ${phone}`,
    `Empresa/negócio: ${company}`,
    `O que preciso: ${need}`,
  ];
  if (details) lines.push(`Mais detalhes: ${details}`);
  return lines.join("\n");
};

const fieldClass =
  "w-full rounded-sm border border-input bg-white/5 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-lime focus:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-[invalid=true]:border-coral";

const labelClass = "block text-sm font-bold mb-2";

/** Formulário do hero da Black November. Monta a mensagem e abre o WhatsApp oficial. */
const BnLeadForm = () => {
  const uid = useId();
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: LeadData = {
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      need: String(fd.get("need") ?? ""),
      details: String(fd.get("details") ?? "").trim(),
    };

    const next: Partial<Record<Field, string>> = {};
    for (const { field, message } of required) {
      const invalid = field === "phone" ? data.phone.replace(/\D/g, "").length < 10 : !data[field];
      if (invalid) next[field] = message;
    }
    setErrors(next);

    const firstInvalid = required.find(({ field }) => next[field]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name=${firstInvalid.field}]`)?.focus();
      return;
    }
    openWhatsApp(buildMessage(data));
  };

  const errorText = (field: Field) =>
    errors[field] && (
      <p id={`${uid}-${field}-error`} className="mt-1.5 text-xs font-medium text-coral">
        {errors[field]}
      </p>
    );

  const a11y = (field: Field) => ({
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${uid}-${field}-error` : undefined,
  });

  return (
    <form
      id="formulario-black-november"
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby={`${uid}-title`}
      className="theme-ink relative rounded-sm p-6 sm:p-8"
    >
      <div className="flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">
        <span>✦ Agenda de novembro</span>
        <ArrowUpRight aria-hidden className="h-4 w-4" />
      </div>

      <h2 id={`${uid}-title`} className="mt-4 font-display text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight">
        Seu próximo projeto <br />
        começa <span className="text-lime">aqui.</span>
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Conte o básico. A conversa continua no WhatsApp, sem compromisso.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className={labelClass}>
            Seu nome
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            autoComplete="name"
            placeholder="Como podemos te chamar?"
            className={fieldClass}
            {...a11y("name")}
          />
          {errorText("name")}
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className={labelClass}>
            WhatsApp
          </label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="(44) 99999-9999"
            value={phone}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(formatPhone(e.target.value))}
            className={fieldClass}
            {...a11y("phone")}
          />
          {errorText("phone")}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor={`${uid}-company`} className={labelClass}>
          Nome da empresa ou negócio
        </label>
        <input
          id={`${uid}-company`}
          name="company"
          autoComplete="organization"
          placeholder="Qual é a sua marca?"
          className={fieldClass}
          {...a11y("company")}
        />
        {errorText("company")}
      </div>

      <div className="mt-5">
        <label htmlFor={`${uid}-need`} className={labelClass}>
          O que você precisa?
        </label>
        <select id={`${uid}-need`} name="need" defaultValue="" className={cn(fieldClass, "cursor-pointer")} {...a11y("need")}>
          <option value="" disabled className="bg-ink">
            Selecione uma opção
          </option>
          {bnFormOptions.map((option) => (
            <option key={option} value={option} className="bg-ink">
              {option}
            </option>
          ))}
        </select>
        {errorText("need")}
      </div>

      <div className="mt-5">
        <label htmlFor={`${uid}-details`} className={labelClass}>
          Conte um pouco mais <span className="font-normal text-muted-foreground">(opcional)</span>
        </label>
        <textarea
          id={`${uid}-details`}
          name="details"
          rows={3}
          placeholder="Sua ideia, prazo ou alguma dúvida..."
          className={cn(fieldClass, "resize-none")}
        />
      </div>

      <button
        type="submit"
        className="group mt-6 flex h-12 w-full items-center justify-between rounded-sm bg-lime px-5 text-[15px] font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-paper focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
      >
        Conversar pelo WhatsApp
        <ArrowUpRight aria-hidden className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </button>

      <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
        <Lock aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0" />O WhatsApp abrirá com sua mensagem pronta. Envie-a
        para concluir o contato.
      </p>
    </form>
  );
};

export default BnLeadForm;
