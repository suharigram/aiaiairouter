"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/code-block";
import { cn } from "@/lib/utils";

export type ApiExamples = { curl: string; javascript: string; python: string };
const labels = [{ id: "curl", label: "cURL" }, { id: "javascript", label: "JavaScript" }, { id: "python", label: "Python" }] as const;

export function ApiExampleTabs({ examples, endpointId }: { examples: ApiExamples; endpointId: string }) {
  const [active, setActive] = useState<keyof ApiExamples>("curl");
  return <div><div className="mb-3 flex flex-wrap gap-1" role="tablist" aria-label={`Code examples for ${endpointId}`}>{labels.map((language) => <button key={language.id} type="button" role="tab" aria-selected={active === language.id} onClick={() => setActive(language.id)} className={cn("rounded-md px-3 py-2 text-xs font-medium outline-none focus-visible:ring-2 focus-visible:ring-accent", active === language.id ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted hover:text-foreground")}>{language.label}</button>)}</div><CodeBlock code={examples[active]} language={active === "javascript" ? "javascript" : active} /></div>;
}
