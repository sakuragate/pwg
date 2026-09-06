"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const types = ["ip", "creative", "marketing", "partnership", "other"] as const;

export function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "missing">(
    "idle",
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("_gotcha") ?? "")) return;

    const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!id) {
      setStatus("missing");
      return;
    }

    setStatus("sending");
    const payload = Object.fromEntries(data.entries());
    try {
      const response = await fetch(`https://formspree.io/f/${id}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("formspree");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="border border-brand px-6 py-10 font-display text-lg">{t("success")}</p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <Field label={`${t("company")} *`} name="company" required />
      <Field label={`${t("name")} *`} name="name" required />
      <Field label={`${t("email")} *`} name="email" type="email" required />
      <Field label={`${t("country")} *`} name="country" required />
      <label className="block md:col-span-2">
        <span className="mb-2 block font-display text-[11px] tracking-[0.16em]">
          {t("inquiryType")} *
        </span>
        <select
          name="inquiryType"
          required
          className="min-h-11 w-full border-b border-line bg-transparent py-2"
          defaultValue=""
        >
          <option value="" disabled>
            —
          </option>
          {types.map((type) => (
            <option key={type} value={type}>
              {t(`types.${type}`)}
            </option>
          ))}
        </select>
      </label>
      <label className="block md:col-span-2">
        <span className="mb-2 block font-display text-[11px] tracking-[0.16em]">
          {t("message")} *
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full border border-line bg-transparent p-3"
        />
      </label>
      <Field label={`${t("url")} (${t("optional")})`} name="url" type="url" />
      <Field label={`${t("budget")} (${t("optional")})`} name="budget" />
      <Field label={`${t("launch")} (${t("optional")})`} name="launch" type="date" />
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-11 items-center border border-ink px-8 font-display text-xs tracking-[0.18em] hover:bg-ink hover:text-white disabled:opacity-50"
        >
          {status === "sending" ? t("sending") : t("submit")}
        </button>
        {status === "error" ? <p className="mt-4 text-sm text-muted">{t("error")}</p> : null}
        {status === "missing" ? (
          <p className="mt-4 text-sm text-muted">{t("missingConfig")}</p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-display text-[11px] tracking-[0.16em]">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="min-h-11 w-full border-b border-line bg-transparent py-2"
      />
    </label>
  );
}
