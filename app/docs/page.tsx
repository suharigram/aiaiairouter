import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { docs } from "@/lib/docs";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("API Documentation", "Learn AiAiAiRouter authentication, chat completions, streaming, errors, rate limits, billing, usage, models, and API keys.", "/docs");

export default function DocsPage() {
  return (
    <article>
      <div className="border-b border-border pb-9">
        <BookOpen className="mb-5 size-6 text-accent" strokeWidth={1.7} />
        <h1 className="text-4xl font-semibold tracking-[-0.04em]">Documentation</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">Integrate Kimi, ChatGPT, GLM and 99+ models through an OpenAI-compatible API. Start with a single request, then add streaming, error handling, and usage monitoring.</p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {docs.map((doc) => <Link key={doc.slug} href={`/docs/${doc.slug}`} className="group rounded-xl border border-border p-5 outline-none transition-colors hover:border-accent/50 hover:bg-muted/25 focus-visible:ring-2 focus-visible:ring-accent"><div className="flex items-center justify-between gap-4"><h2 className="font-semibold">{doc.title}</h2><ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-accent" /></div><p className="mt-2 text-sm leading-6 text-muted-foreground">{doc.description}</p></Link>)}
      </div>
    </article>
  );
}
