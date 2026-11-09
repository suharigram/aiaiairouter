"use client";

import { AlertCircle, CheckCircle2, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Fields = { name: string; email: string; topic: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
const initialFields: Fields = { name: "", email: "", topic: "", message: "" };
const selectClass = "h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/15";

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) errors.name = "Enter at least 2 characters for your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) errors.email = "Enter a valid email address.";
  if (!fields.topic) errors.topic = "Select a topic.";
  if (fields.message.trim().length < 20) errors.message = "Enter at least 20 characters so we can understand your request.";
  if (fields.message.length > 5000) errors.message = "Keep the message under 5,000 characters.";
  return errors;
}

export function ContactForm() {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "invalid" | "ready">("idle");

  function update(field: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("idle");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("invalid");
      return;
    }
    setStatus("ready");
  }

  const mailto = `mailto:support@aiaiairouter.com?subject=${encodeURIComponent(`[${fields.topic}] Message from ${fields.name}`)}&body=${encodeURIComponent(`${fields.message}\n\nReply to: ${fields.email}`)}`;

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-xl border border-border p-6 md:p-8">
      <div className="rounded-lg border border-border bg-muted/45 p-4 text-sm leading-6 text-muted-foreground"><strong className="font-medium text-foreground">Local validation only.</strong> This form does not send data to a server yet. Once a backend is connected, it will submit through an API. No message is sent when you select “Validate message.”</div>
      {status === "invalid" ? <div className="mt-5 flex gap-2 rounded-lg border border-[#713f3f] bg-[#2a1717] p-4 text-sm text-[#f0b0b0]" role="alert"><AlertCircle className="mt-0.5 size-4 shrink-0" /><span>Review the highlighted fields and try again.</span></div> : null}
      {status === "ready" ? <div className="mt-5 rounded-lg border border-[#badbcc] bg-accent-soft p-4" role="status"><p className="flex items-start gap-2 text-sm font-medium text-accent-strong"><CheckCircle2 className="mt-0.5 size-4 shrink-0" />Your message is valid, but it has not been sent.</p><p className="mt-2 pl-6 text-sm leading-6 text-muted-foreground">You can open it in your email application and send it directly.</p><Button asChild variant="secondary" size="sm" className="ml-6 mt-3"><a href={mailto}><Mail />Open email draft</a></Button></div> : null}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="space-y-2"><Label htmlFor="contact-name">Name</Label><Input id="contact-name" name="name" autoComplete="name" value={fields.name} onChange={(event) => update("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} placeholder="Your name" />{errors.name ? <p id="name-error" className="text-xs text-[#a02c2c]">{errors.name}</p> : null}</div>
        <div className="space-y-2"><Label htmlFor="contact-email">Work email</Label><Input id="contact-email" name="email" type="email" autoComplete="email" value={fields.email} onChange={(event) => update("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} placeholder="you@company.com" />{errors.email ? <p id="email-error" className="text-xs text-[#a02c2c]">{errors.email}</p> : null}</div>
        <div className="space-y-2 sm:col-span-2"><Label htmlFor="contact-topic">Topic</Label><select id="contact-topic" name="topic" className={selectClass} value={fields.topic} onChange={(event) => update("topic", event.target.value)} aria-invalid={Boolean(errors.topic)} aria-describedby={errors.topic ? "topic-error" : undefined}><option value="">Select a topic</option><option value="Technical support">Technical support</option><option value="Billing">Billing and credits</option><option value="Team or Enterprise">Team or Enterprise</option><option value="Model availability">Model availability</option><option value="Other">Other</option></select>{errors.topic ? <p id="topic-error" className="text-xs text-[#a02c2c]">{errors.topic}</p> : null}</div>
        <div className="space-y-2 sm:col-span-2"><div className="flex items-center justify-between gap-4"><Label htmlFor="contact-message">Message</Label><span className="text-xs text-muted-foreground">{fields.message.length} / 5,000</span></div><Textarea id="contact-message" name="message" value={fields.message} onChange={(event) => update("message", event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : "message-help"} placeholder="Describe your request, including relevant request IDs. Never include API keys or sensitive prompts." />{errors.message ? <p id="message-error" className="text-xs text-[#a02c2c]">{errors.message}</p> : <p id="message-help" className="text-xs leading-5 text-muted-foreground">Do not include API keys, passwords, payment details, or confidential prompts.</p>}</div>
      </div>
      <Button type="submit" className="mt-6">Validate message</Button>
    </form>
  );
}
