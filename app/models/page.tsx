import type { Metadata } from "next";
import { ModelCatalog } from "@/components/model-catalog";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Model Catalog", "Explore featured models from AiAiAiRouter's 99+ model catalog. Compare providers, capabilities, context lengths, streaming, tools, and official pricing.", "/models");

export default function ModelsPage() {
  return (
    <>
      <PageHero eyebrow="99+ models / One API" title="Choose the right model for the workload" description="Browse featured models from our 99+ model catalog. Compare verified provider specifications and reference prices. Every listed model ID can be passed directly to the OpenAI-compatible chat completions endpoint." />
      <section className="section-padding pt-10 md:pt-12">
        <div className="container-site">
          <ModelCatalog />
          <div className="mt-10 rounded-lg border border-border bg-muted/35 p-5 text-sm leading-6 text-muted-foreground">
            <p><strong className="font-medium text-foreground">Pricing note.</strong> Prices are provider reference rates in USD per one million tokens, last checked November 8, 2026. They are not quotes or guarantees. Region, context tier, thinking mode, caching, taxes, and provider changes can affect the final charge. Follow the official source on each card for current terms.</p>
          </div>
        </div>
      </section>
    </>
  );
}
