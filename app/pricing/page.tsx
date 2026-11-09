import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { BillingCalculator } from "@/components/billing-calculator";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { consoleUrl, siteUrl } from "@/lib/env";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Pricing", "Pay as you go with prepaid credits for Kimi, ChatGPT, GLM and 99+ models. Compare Developer, Team, and Enterprise options and estimate token costs.", "/pricing");

const plans = [
  {
    name: "Developer",
    price: "Pay as you go",
    description: "For individual builders and production applications that need direct API access.",
    features: ["Prepaid credits", "Full public model catalog", "Independent API keys", "Request and token usage tracking", "Standard support"],
    cta: "Open console",
    href: consoleUrl,
    external: true,
  },
  {
    name: "Team",
    price: "Custom",
    description: "For organizations that need shared administration across people and projects.",
    features: ["Centralized prepaid billing", "Team access controls", "Shared usage visibility", "Separate keys by environment", "Support arrangements"],
    cta: "Contact us",
    href: "/contact",
    external: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams with specific procurement, security, and operational requirements.",
    features: ["Custom commercial terms", "Security review process", "Operational requirements review", "Consolidated organization billing", "Support planning"],
    cta: "Discuss requirements",
    href: "/contact",
    external: false,
  },
];

export default function PricingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AiAiAiRouter API access",
    url: `${siteUrl}/pricing`,
    provider: { "@id": `${siteUrl}/#organization` },
    description: "OpenAI-compatible access to Kimi, ChatGPT, GLM and 99+ models with prepaid, usage-based billing.",
    offers: {
      "@type": "OfferCatalog",
      name: "AiAiAiRouter plans",
      itemListElement: plans.map((plan) => ({ "@type": "Offer", name: plan.name, description: plan.description, url: `${siteUrl}/pricing` })),
    },
  };

  return (
    <>
      <PageHero eyebrow="Pricing" title="Pay for the model usage you need" description="Start with prepaid credits and scale on your own schedule. Model charges depend on actual input and output tokens; team arrangements are based on your requirements." />
      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => <Card key={plan.name} className="flex flex-col p-6 shadow-none"><h2 className="text-lg font-semibold">{plan.name}</h2><p className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{plan.price}</p><p className="mt-3 min-h-18 text-sm leading-6 text-muted-foreground">{plan.description}</p><ul className="my-7 flex-1 space-y-3">{plan.features.map((feature) => <li key={feature} className="flex items-start gap-2.5 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-accent" />{feature}</li>)}</ul><Button asChild variant={plan.name === "Developer" ? "default" : "secondary"}>{plan.external ? <a href={plan.href}>{plan.cta}<ArrowUpRight /></a> : <Link href={plan.href}>{plan.cta}</Link>}</Button></Card>)}
          </div>
          <p className="mt-5 text-xs leading-5 text-muted-foreground">Model token charges apply to all plans. Custom plans are scoped with you before purchase; no custom price is implied on this page.</p>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 section-padding">
        <div className="container-site">
          <SectionHeading eyebrow="Cost estimator" title="Turn expected traffic into a token estimate" description="Choose a model with a published reference rate, then enter your monthly request volume and typical request size. The calculation runs entirely in your browser." />
          <div className="mt-9"><BillingCalculator /></div>
          <p className="mt-4 text-xs leading-5 text-muted-foreground">Estimates exclude taxes, cache discounts, tiered context pricing, thinking-mode differences, and provider price changes. Actual usage may differ from your averages. This is not an invoice or price guarantee.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading eyebrow="Billing model" title="Simple controls, visible usage" />
          <div className="grid gap-6 sm:grid-cols-3">
            <div><h3 className="font-semibold">Prepaid credits</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Add funds through Stripe before making paid requests. Your available balance decreases as model usage is recorded. Credits are not a subscription.</p></div>
            <div><h3 className="font-semibold">Pay as you go</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Input and output tokens are metered per request. Different models and modes have different rates, so check the model source before estimating spend.</p></div>
            <div><h3 className="font-semibold">Team controls</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Team arrangements centralize billing and administration while keeping credentials separated by application and environment.</p></div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/35 section-padding">
        <div className="container-site max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Billing details" />
          <div className="mt-8 divide-y divide-border border-y border-border">
            <details className="group py-5"><summary className="cursor-pointer list-none font-medium">Do credits expire?<span className="float-right text-muted-foreground group-open:rotate-45">+</span></summary><p className="mt-3 pr-8 text-sm leading-6 text-muted-foreground">The credit terms shown at checkout and in the console control any expiration. Review the Refund Policy for cancellation and refund boundaries.</p></details>
            <details className="group py-5"><summary className="cursor-pointer list-none font-medium">Are provider prices included?<span className="float-right text-muted-foreground group-open:rotate-45">+</span></summary><p className="mt-3 pr-8 text-sm leading-6 text-muted-foreground">The catalog shows reference provider rates to help you compare models. Your applicable rate and any gateway charges are shown before purchase or in the console.</p></details>
            <details className="group py-5"><summary className="cursor-pointer list-none font-medium">Can I get a refund for unused credits?<span className="float-right text-muted-foreground group-open:rotate-45">+</span></summary><p className="mt-3 pr-8 text-sm leading-6 text-muted-foreground">Consumed usage is non-refundable. Unused-credit eligibility and legal exceptions are described in the <Link href="/refund" className="text-accent underline underline-offset-2">Refund Policy</Link>.</p></details>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </>
  );
}
