import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BarChart3, Braces, Check, CreditCard, KeyRound, Layers3, MessagesSquare, Radio, Route, ShieldCheck, Workflow } from "lucide-react";
import { CodeBlock } from "@/components/code-block";
import { SdkExamples } from "@/components/sdk-examples";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { apiUrl, consoleUrl } from "@/lib/env";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Kimi, ChatGPT, GLM and 99+ Models", "Use Kimi, ChatGPT, GLM and 99+ models through one OpenAI-compatible API, with one key, transparent usage tracking, and prepaid billing.", "/");

const benefits = [
  { icon: Braces, title: "Unified API", text: "Keep the familiar chat completions shape while switching models with a single field." },
  { icon: CreditCard, title: "Transparent billing", text: "Fund a prepaid balance and follow input, output, and total costs by request." },
  { icon: Layers3, title: "Model catalog", text: "Compare context limits, capabilities, model IDs, and provider pricing in one place." },
  { icon: Radio, title: "Streaming", text: "Deliver tokens as they arrive with server-sent events and standard SDK support." },
  { icon: KeyRound, title: "Scoped API keys", text: "Create separate keys for applications and environments, and revoke them independently." },
  { icon: BarChart3, title: "Usage statistics", text: "Monitor token consumption, request volume, errors, and spending from the console." },
];

const useCases = [
  { icon: MessagesSquare, title: "Multilingual products", text: "Build assistants that move naturally across languages, regions, and customer workflows." },
  { icon: Workflow, title: "Agentic applications", text: "Connect tool-capable models to retrieval, business systems, and multi-step tasks." },
  { icon: Braces, title: "Software engineering", text: "Add code generation, review, migration, and repository-aware assistance to your tools." },
  { icon: Layers3, title: "Document processing", text: "Summarize and extract structured information from long, multimodal inputs." },
];

const curlCode = `curl ${apiUrl}/chat/completions \\
  -H "Authorization: Bearer $AIAIAIROUTER_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen-plus",
    "messages": [{"role": "user", "content": "Hello"}]
  }'`;

export default function HomePage() {
  return (
    <>
      <section className="grid-field overflow-hidden border-b border-border">
        <div className="container-site py-16 text-center md:py-24">
          <div className="hero-enter">
            <div className="mb-7 inline-flex items-center gap-2 border border-border bg-background px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"><span className="status-pulse size-1.5 bg-accent" />OpenAI-compatible gateway</div>
            <h1 className="mx-auto max-w-6xl text-balance font-mono text-[2.65rem] font-semibold leading-[1.05] tracking-[-0.065em] md:text-6xl lg:text-7xl"><span className="text-accent">Kimi, ChatGPT, GLM and 99+ models.</span><br />One API. One key.</h1>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-muted-foreground md:text-lg">Access 99+ models through one account and one familiar interface for routing, streaming, usage, and billing.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg"><a href={consoleUrl}>Start building <ArrowUpRight /></a></Button>
              <Button asChild size="lg" variant="secondary"><Link href="/models">Explore models <ArrowRight /></Link></Button>
            </div>
            <p className="mt-5 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"><Check className="size-3.5 text-accent" />Prepaid credits / pay as you go</p>
          </div>

          <div className="hero-enter-delay relative mx-auto mt-16 max-w-5xl text-left">
            <div className="absolute -inset-4 -z-0 border border-accent/10" aria-hidden="true" />
            <div className="relative border border-border bg-[#10120f] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="flex h-11 items-center justify-between border-b border-border px-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"><span>Routing console / live request</span><span className="flex items-center gap-2 text-accent"><span className="status-pulse size-1.5 bg-accent" />200 OK</span></div>
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                <div className="border-b border-border p-5 lg:border-b-0 lg:border-r md:p-7">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Request path</p>
                  <div className="mt-6 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between border border-border bg-background p-3"><span>YOUR APP</span><Braces className="size-4 text-accent" /></div>
                    <div className="relative mx-auto h-8 w-px overflow-hidden bg-border" aria-hidden="true"><span className="absolute left-[-2px] top-2 size-1.5 bg-accent route-packet" /></div>
                    <div className="flex items-center justify-between border border-accent/45 bg-accent-soft p-3 text-accent"><span>AIAIAIROUTER</span><Route className="size-4" /></div>
                    <div className="mx-auto h-8 w-px bg-border" aria-hidden="true" />
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{["KIMI", "CHATGPT", "GLM", "99+"].map((name) => <div key={name} className="border border-border bg-background px-2 py-3 text-center text-[10px] text-muted-foreground">{name}</div>)}</div>
                  </div>
                  <p className="mt-6 font-mono text-[10px] leading-5 text-muted-foreground">MODEL = qwen-plus<br />STREAM = false<br />AUTH = bearer</p>
                </div>
                <div className="min-w-0 p-4 md:p-6"><CodeBlock code={curlCode} className="border-0 bg-[#0b0c0b]" /><div className="mt-3 flex items-center justify-between px-1 font-mono text-[10px] text-muted-foreground"><span>POST /v1/chat/completions</span><span>application/json</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-site grid grid-cols-3 divide-x divide-border py-6 text-center font-mono">
          <div><p className="text-lg font-medium text-accent md:text-2xl">99+</p><p className="mt-1 text-[9px] uppercase tracking-wider text-muted-foreground md:text-xs">Supported models</p></div>
          <div><p className="text-lg font-medium text-accent md:text-2xl">01</p><p className="mt-1 text-[9px] uppercase tracking-wider text-muted-foreground md:text-xs">API key</p></div>
          <div><p className="text-lg font-medium text-accent md:text-2xl">SSE</p><p className="mt-1 text-[9px] uppercase tracking-wider text-muted-foreground md:text-xs">Streaming</p></div>
        </div>
      </section>

      <section className="section-padding scroll-reveal">
        <div className="container-site">
          <SectionHeading eyebrow="[01] Infrastructure" title="Everything between your app and the model" description="A focused control plane for model access, credentials, spending, and observability—without changing how you write API calls." />
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => <Card key={benefit.title} className="card-hover rounded-none border-0 bg-background p-6 shadow-none"><benefit.icon className="size-5 text-accent" strokeWidth={1.7} /><h3 className="mt-5 font-mono text-sm font-semibold uppercase tracking-wide">{benefit.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{benefit.text}</p></Card>)}
          </div>
        </div>
      </section>

      <section className="section-padding scroll-reveal border-y border-border bg-muted/35">
        <div className="container-site">
          <SectionHeading eyebrow="[02] How it works" title="Account to first response in three steps" />
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Create an account", "Open the console, create your account, and generate an API key for your application."],
              ["Add credits", "Top up your prepaid balance with Stripe. Model usage is deducted as requests complete."],
              ["Call the API", "Point your OpenAI-compatible client at our base URL and select a model by its ID."],
            ].map(([title, text], index) => <li key={title} className="card-hover relative border border-border bg-background p-6"><span className="font-mono text-xs font-medium text-accent">/ 0{index + 1}</span><h3 className="mt-8 font-mono text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="section-padding scroll-reveal">
        <div className="container-site">
          <SectionHeading eyebrow="[03] Use cases" title="One integration, more ways to build" description="Choose models by workload instead of maintaining a separate integration for every provider." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {useCases.map((useCase) => <div key={useCase.title} className="card-hover group border border-border bg-card p-6"><useCase.icon className="size-5 text-accent" strokeWidth={1.7} /><h3 className="mt-5 font-mono font-semibold">{useCase.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{useCase.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-padding scroll-reveal border-y border-border bg-muted/35">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">[04] Developer experience</p>
            <h2 className="font-mono text-3xl font-semibold tracking-[-0.045em] md:text-4xl">Keep your SDK.<br />Change the base URL.</h2>
            <p className="mt-4 leading-7 text-muted-foreground">Use cURL, the OpenAI TypeScript SDK, or the Python SDK. Store your key in an environment variable and never expose it in browser code.</p>
            <Button asChild variant="secondary" className="mt-6"><Link href="/docs/quickstart">Read the quickstart <ArrowRight /></Link></Button>
          </div>
          <div className="min-w-0"><SdkExamples baseUrl={apiUrl} /></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="bg-accent px-6 py-12 text-[#11130d] md:px-12 md:py-14">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div>
                <Route className="mb-6 size-6" />
                <h2 className="max-w-xl text-balance font-mono text-3xl font-semibold tracking-[-0.045em] md:text-4xl">Your next model is one field away.</h2>
                <p className="mt-4 max-w-lg leading-7 text-[#394012]">Create an account, add credits, and make your first OpenAI-compatible request.</p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
                <Button asChild size="lg" variant="secondary" className="border-black bg-[#11130d] text-white hover:bg-[#292d19]"><a href={consoleUrl}>Open console <ArrowUpRight /></a></Button>
                <Button asChild size="lg" variant="secondary" className="border-[#727a2c] bg-transparent text-[#11130d] hover:bg-[#d4df50]"><Link href="/docs">View documentation</Link></Button>
              </div>
            </div>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground"><ShieldCheck className="size-3.5" />Keep credentials server-side / separate keys per environment</p>
        </div>
      </section>
    </>
  );
}
