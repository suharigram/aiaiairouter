"use client";

import { ExternalLink, RotateCcw, SearchX } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { formatContext, formatPrice, models, type FeatureSupport } from "@/lib/models";

const inputClass = "h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/15";

function SupportLabel({ value }: { value: FeatureSupport }) {
  return <>{value === "yes" ? "Supported" : value === "no" ? "Not supported" : "Varies by region"}</>;
}

export function ModelCatalog() {
  const [provider, setProvider] = useState("all");
  const [capability, setCapability] = useState("all");
  const [context, setContext] = useState("all");
  const [price, setPrice] = useState("all");

  const filteredModels = useMemo(() => models.filter((model) => {
    if (provider !== "all" && model.provider !== provider) return false;
    if (capability !== "all" && !model.capabilities.includes(capability as (typeof model.capabilities)[number])) return false;
    if (context !== "all" && model.context < Number(context)) return false;
    if (price === "under-1" && (!model.pricing || model.pricing.input >= 1)) return false;
    if (price === "1-to-2" && (!model.pricing || model.pricing.input < 1 || model.pricing.input > 2)) return false;
    if (price === "unlisted" && model.pricing) return false;
    return true;
  }), [provider, capability, context, price]);

  function resetFilters() {
    setProvider("all");
    setCapability("all");
    setContext("all");
    setPrice("all");
  }

  return (
    <div>
      <div className="rounded-xl border border-border bg-muted/35 p-4 md:p-5" aria-label="Model filters">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2"><Label htmlFor="provider">Provider</Label><select id="provider" className={inputClass} value={provider} onChange={(event) => setProvider(event.target.value)}><option value="all">All providers</option><option>Alibaba Cloud</option><option>Moonshot AI</option><option>Z.AI</option></select></div>
          <div className="space-y-2"><Label htmlFor="capability">Capability</Label><select id="capability" className={inputClass} value={capability} onChange={(event) => setCapability(event.target.value)}><option value="all">All capabilities</option><option>Reasoning</option><option>Vision</option><option>Video</option><option>Coding</option><option>Structured output</option></select></div>
          <div className="space-y-2"><Label htmlFor="context">Minimum context</Label><select id="context" className={inputClass} value={context} onChange={(event) => setContext(event.target.value)}><option value="all">Any context length</option><option value="32768">32K tokens</option><option value="262144">256K tokens</option><option value="1000000">1M tokens</option></select></div>
          <div className="space-y-2"><Label htmlFor="price">Reference input price</Label><select id="price" className={inputClass} value={price} onChange={(event) => setPrice(event.target.value)}><option value="all">Any price</option><option value="under-1">Under $1 / 1M tokens</option><option value="1-to-2">$1–$2 / 1M tokens</option><option value="unlisted">Pricing not listed</option></select></div>
        </div>
      </div>
      <div className="my-6 flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground" aria-live="polite">Showing <span className="font-medium text-foreground">{filteredModels.length}</span> of {models.length} models</p>
        <Button variant="ghost" size="sm" onClick={resetFilters}><RotateCcw />Reset filters</Button>
      </div>
      {filteredModels.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border px-6 py-16 text-center">
          <SearchX className="mx-auto size-6 text-muted-foreground" />
          <h2 className="mt-4 font-semibold">No models match these filters</h2>
          <p className="mt-2 text-sm text-muted-foreground">Try a lower context threshold or a different price range.</p>
          <Button variant="secondary" className="mt-5" onClick={resetFilters}>Clear all filters</Button>
        </div>
      ) : (
        <div className="grid items-start gap-5 lg:grid-cols-2">
          {filteredModels.map((model) => (
            <Card key={model.id} className="overflow-hidden shadow-none transition-colors hover:border-accent/50">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div><p className="text-xs font-medium text-muted-foreground">{model.provider}</p><h2 className="mt-1.5 text-xl font-semibold tracking-[-0.025em]">{model.name}</h2></div>
                  <Badge>{model.family}</Badge>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{model.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{model.capabilities.map((item) => <Badge key={item} className="bg-background">{item}</Badge>)}</div>
                <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-border pt-5 text-sm">
                  <div><dt className="text-xs text-muted-foreground">Context</dt><dd className="mt-1 font-medium">{formatContext(model.context)} tokens</dd></div>
                  <div><dt className="text-xs text-muted-foreground">Max output</dt><dd className="mt-1 font-medium">{model.maxOutput ? `${formatContext(model.maxOutput)} tokens` : "See provider"}</dd></div>
                  <div><dt className="text-xs text-muted-foreground">Streaming</dt><dd className="mt-1 font-medium">{model.streaming ? "Supported" : "Not supported"}</dd></div>
                  <div><dt className="text-xs text-muted-foreground">Tool calls</dt><dd className="mt-1 font-medium"><SupportLabel value={model.tools} /></dd></div>
                </dl>
                {model.toolNote ? <p className="mt-3 text-xs leading-5 text-muted-foreground">{model.toolNote}</p> : null}
                <div className="mt-6 rounded-lg bg-muted p-4">
                  {model.pricing ? <><div className="grid grid-cols-2 gap-4"><div><p className="text-xs text-muted-foreground">Input / 1M tokens</p><p className="mt-1 font-mono text-lg font-medium">{formatPrice(model.pricing.input)}</p></div><div><p className="text-xs text-muted-foreground">Output / 1M tokens</p><p className="mt-1 font-mono text-lg font-medium">{formatPrice(model.pricing.output)}</p></div></div><p className="mt-3 text-xs leading-5 text-muted-foreground">{model.pricing.note}</p></> : <a href={model.pricingUrl || model.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">Check provider pricing <ExternalLink className="size-3.5" /></a>}
                </div>
                {model.notice ? <p className="mt-4 rounded-md border border-border bg-background p-3 text-xs leading-5 text-muted-foreground">{model.notice}</p> : null}
              </div>
              <div className="flex flex-col gap-3 border-t border-border bg-muted/25 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                <code className="break-all font-mono text-xs">{model.id}</code>
                <a href={model.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground">Official source <ExternalLink className="size-3" /><span className="sr-only">: {model.sourceLabel}</span></a>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
