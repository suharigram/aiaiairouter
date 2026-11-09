"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CodeBlock({ code, language = "bash", className }: { code: string; language?: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={cn("w-full min-w-0 max-w-full overflow-hidden rounded-lg border border-[#303532] bg-[#161a18] text-[#e6ebe7]", className)}>
      <div className="flex h-10 items-center justify-between border-b border-[#303532] px-4">
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#9ba69f]">{language}</span>
        <button type="button" onClick={copyCode} className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-xs text-[#aeb8b1] outline-none transition-colors hover:bg-[#262c28] hover:text-white focus-visible:ring-2 focus-visible:ring-accent" aria-label={copied ? "Code copied" : "Copy code"}>
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="code-scroll overflow-x-auto p-4 font-mono text-[13px] leading-6"><code>{code}</code></pre>
    </div>
  );
}
