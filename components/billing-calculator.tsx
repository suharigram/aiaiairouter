"use client";

import { ExternalLink, Calculator } from "lucide-react";
import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatPrice, pricedModels } from "@/lib/models";

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 4 });
const selectClass = "h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/15";

export function BillingCalculator() {
  const [modelId, setModelId] = useState(pricedModels[0].id);
  const [requests, setRequests] = useState("10000");
  const [inputTokens, setInputTokens] = useState("1500");
  const [outputTokens, setOutputTokens] = useState("500");
  const model = pricedModels.find((item) => item.id === modelId) || pricedModels[0];

  const result = useMemo(() => {
    const count = Number(requests);
    const input = Number(inputTokens);
    const output = Number(outputTokens);
    if (![count, input, output].every(Number.isFinite) || count <= 0 || input < 0 || output < 0) return null;
    const inputCost = (count * input * model.pricing!.input) / 1_000_000;
    const outputCost = (count * output * model.pricing!.output) / 1_000_000;
    return { inputCost, outputCost, total: inputCost + outputCost, totalTokens: count * (input + output) };
  }, [requests, inputTokens, outputTokens, model]);

  return (
    <Card className="overflow-hidden shadow-none">
      <div className="grid lg:grid-cols-[1fr_0.8fr]">
        <div className="min-w-0 p-6 md:p-8">
          <div className="flex items-center gap-2"><Calculator className="size-5 text-accent" /><h2 className="text-xl font-semibold tracking-[-0.025em]">Billing calculator</h2></div>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Estimate standard token charges using the selected provider reference rate.</p>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div className="space-y-2 sm:col-span-2"><Label htmlFor="calculator-model">Model</Label><select id="calculator-model" className={selectClass} value={modelId} onChange={(event) => setModelId(event.target.value)}>{pricedModels.map((item) => <option key={item.id} value={item.id}>{item.name} ({item.id})</option>)}</select></div>
            <div className="space-y-2 sm:col-span-2"><Label htmlFor="requests">Requests per month</Label><Input id="requests" type="number" min="1" step="1" value={requests} onChange={(event) => setRequests(event.target.value)} /></div>
            <div className="space-y-2"><Label htmlFor="input-tokens">Average input tokens</Label><Input id="input-tokens" type="number" min="0" step="1" value={inputTokens} onChange={(event) => setInputTokens(event.target.value)} /></div>
            <div className="space-y-2"><Label htmlFor="output-tokens">Average output tokens</Label><Input id="output-tokens" type="number" min="0" step="1" value={outputTokens} onChange={(event) => setOutputTokens(event.target.value)} /></div>
          </div>
        </div>
        <div className="flex flex-col justify-between border-t border-border bg-muted/45 p-6 md:p-8 lg:border-l lg:border-t-0">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Estimated monthly total</p>
            {result ? <><p className="mt-3 font-mono text-4xl font-medium tracking-[-0.04em]" aria-live="polite">{currency.format(result.total)}</p><dl className="mt-7 space-y-3 text-sm"><div className="flex justify-between gap-4"><dt className="text-muted-foreground">Input charges</dt><dd className="font-mono">{currency.format(result.inputCost)}</dd></div><div className="flex justify-between gap-4"><dt className="text-muted-foreground">Output charges</dt><dd className="font-mono">{currency.format(result.outputCost)}</dd></div><div className="flex justify-between gap-4 border-t border-border pt-3"><dt className="text-muted-foreground">Total tokens</dt><dd className="font-mono">{new Intl.NumberFormat("en-US").format(result.totalTokens)}</dd></div></dl></> : <div className="mt-4 rounded-md border border-border bg-background p-4 text-sm text-muted-foreground" role="alert">Enter a positive request count and valid, non-negative token averages.</div>}
          </div>
          <div className="mt-8 border-t border-border pt-5 text-xs leading-5 text-muted-foreground">
            <p>Rates: {formatPrice(model.pricing!.input)} input and {formatPrice(model.pricing!.output)} output per 1M tokens. {model.pricing!.note}</p>
            <a href={model.pricingUrl || model.sourceUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 font-medium text-accent hover:underline">Check official pricing <ExternalLink className="size-3" /></a>
          </div>
        </div>
      </div>
    </Card>
  );
}
