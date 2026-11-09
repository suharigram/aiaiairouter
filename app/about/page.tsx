import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Braces, Compass, Scale, ServerCog } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("About", "Learn why GonidonCloud built AiAiAiRouter to make Kimi, ChatGPT, GLM and 99+ models easier to integrate through one OpenAI-compatible gateway.", "/about");

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About / GonidonCloud" title="Model access should not require a new integration every time" description="AiAiAiRouter is developed by GonidonCloud to give developers a consistent way to use Kimi, ChatGPT, GLM and 99+ models." />
      <section className="section-padding">
        <div className="container-site grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div><p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Our story</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">A practical gateway, not another abstraction to learn</h2></div>
          <div className="space-y-5 leading-7 text-muted-foreground">
            <p>Developers evaluating multiple model providers often face separate accounts, credential systems, API details, billing views, and operational limits. That work can obscure the actual task: understanding which model serves a product well.</p>
            <p>GonidonCloud created AiAiAiRouter around a simple engineering choice: preserve the OpenAI-compatible chat completions interface and place account access, model routing, usage metering, and billing behind it. A team can change a model ID without rebuilding its application around a new provider SDK.</p>
            <p>The product focuses on clear model IDs, official specification sources, visible usage, and explicit limitations. It is designed to make experimentation easier while keeping production concerns—key handling, errors, rate limits, and cost—visible.</p>
          </div>
        </div>
      </section>
      <section className="section-padding border-y border-border bg-muted/40">
        <div className="container-site">
          <SectionHeading eyebrow="Why broad model access" title="99+ models, one integration" description="Kimi, ChatGPT, GLM and the broader model catalog cover reasoning, coding, multilingual work, long context, and multimodal understanding. A unified gateway makes those options easier to evaluate without suggesting that one model fits every task." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-background p-6"><Braces className="size-5 text-accent" /><h3 className="mt-5 font-semibold">Compatibility over lock-in</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Use standard request shapes and existing OpenAI SDKs instead of provider-specific application logic.</p></div>
            <div className="rounded-xl border border-border bg-background p-6"><Scale className="size-5 text-accent" /><h3 className="mt-5 font-semibold">Clarity over claims</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Link to official model and pricing sources, show assumptions, and avoid unsupported comparisons.</p></div>
            <div className="rounded-xl border border-border bg-background p-6"><ServerCog className="size-5 text-accent" /><h3 className="mt-5 font-semibold">Operations as a feature</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Treat credentials, errors, limits, and usage as core parts of the developer experience.</p></div>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-site grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div><Compass className="mb-5 size-6 text-accent" /><h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.035em]">Our mission is to make model choice operationally simple.</h2><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">AiAiAiRouter is developed by GonidonCloud. We want developers to spend more time testing model quality and less time rebuilding access, billing, and observability for each provider.</p></div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col"><Button asChild><Link href="/docs/quickstart">Read the quickstart <ArrowRight /></Link></Button><Button asChild variant="secondary"><Link href="/contact">Contact the team</Link></Button></div>
        </div>
      </section>
    </>
  );
}
