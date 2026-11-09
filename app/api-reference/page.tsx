import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ApiExampleTabs } from "@/components/api-example-tabs";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { endpoints } from "@/lib/api-reference";
import { apiUrl } from "@/lib/env";
import { createMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata("API Reference", "Reference for AiAiAiRouter GET /v1/models, POST /v1/chat/completions, GET /v1/usage, and GET /v1/keys, with typed parameters and examples.", "/api-reference");

export default function ApiReferencePage() {
  return (
    <>
      <PageHero eyebrow="API Reference" title="A small, predictable public API" description="Authenticate with a bearer key and use the endpoints below. Parameters, responses, and errors follow OpenAI-compatible conventions where applicable." />
      <div className="container-site py-10 md:py-14 lg:flex lg:gap-14">
        <aside className="hidden lg:block lg:w-56 lg:shrink-0">
          <nav className="sticky top-24" aria-label="API endpoints">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider">Endpoints</p>
            <ul className="space-y-1">{endpoints.map((endpoint) => <li key={endpoint.id}><a href={`#${endpoint.id}`} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">{endpoint.title}</a></li>)}</ul>
          </nav>
        </aside>
        <div className="min-w-0 flex-1">
          <section className="mb-12 rounded-xl border border-border bg-muted/35 p-5 md:p-6" aria-labelledby="base-url">
            <h2 id="base-url" className="text-lg font-semibold">Base URL and authentication</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Use HTTPS and send every request with an Authorization: Bearer header. Never place credentials in a URL or browser bundle.</p>
            <div className="mt-4"><CodeBlock code={`Base URL: ${apiUrl}\nAuthorization: Bearer $AIAIAIROUTER_API_KEY`} language="http" /></div>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">Only the endpoints documented below are part of this public API reference. Console operations such as creating or revoking keys are not represented as public API endpoints.</p>
          </section>
          <nav className="mb-10 flex flex-wrap gap-2 lg:hidden" aria-label="API endpoints">{endpoints.map((endpoint) => <a key={endpoint.id} href={`#${endpoint.id}`} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted">{endpoint.title}</a>)}</nav>

          <div className="space-y-16">
            {endpoints.map((endpoint) => (
              <section key={endpoint.id} id={endpoint.id} aria-labelledby={`${endpoint.id}-title`} className="scroll-mt-24 border-b border-border pb-16 last:border-0">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className={cn("font-mono", endpoint.method === "GET" ? "border-accent/35 bg-accent-soft text-accent-strong" : "bg-foreground text-background")}>{endpoint.method}</Badge>
                  <code className="font-mono text-sm font-medium">{endpoint.path}</code>
                </div>
                <h2 id={`${endpoint.id}-title`} className="mt-5 text-3xl font-semibold tracking-[-0.035em]">{endpoint.title}</h2>
                <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{endpoint.description}</p>

                <h3 className="mt-9 text-lg font-semibold">Parameters</h3>
                {endpoint.parameters.length === 0 ? <p className="mt-3 text-sm leading-6 text-muted-foreground">This endpoint has no query or body parameters. Authentication is still required.</p> : <div className="mt-4 overflow-x-auto rounded-lg border border-border"><table className="w-full min-w-[650px] border-collapse text-left text-sm"><caption className="sr-only">{endpoint.parameterLocation === "query" ? "Query" : "JSON body"} parameters for {endpoint.title}</caption><thead className="bg-muted"><tr><th scope="col" className="px-4 py-3 font-medium">Name</th><th scope="col" className="px-4 py-3 font-medium">Type</th><th scope="col" className="px-4 py-3 font-medium">Required</th><th scope="col" className="px-4 py-3 font-medium">Description</th></tr></thead><tbody>{endpoint.parameters.map((parameter) => <tr key={parameter.name} className="border-t border-border"><td className="px-4 py-3"><code className="font-mono text-xs">{parameter.name}</code></td><td className="px-4 py-3 font-mono text-xs text-muted-foreground">{parameter.type}</td><td className="px-4 py-3 text-muted-foreground">{parameter.required ? "Yes" : "No"}</td><td className="px-4 py-3 leading-6 text-muted-foreground">{parameter.description}</td></tr>)}</tbody></table></div>}

                <h3 className="mt-9 text-lg font-semibold">Example request</h3>
                <div className="mt-4"><ApiExampleTabs examples={endpoint.examples} endpointId={`${endpoint.method} ${endpoint.path}`} /></div>

                <h3 className="mt-9 text-lg font-semibold">Example success response</h3>
                <p className="mt-2 text-sm text-muted-foreground">200 OK. Values are illustrative.</p>
                <div className="mt-4"><CodeBlock code={endpoint.response} language="json" /></div>

                <h3 className="mt-9 text-lg font-semibold">Endpoint errors</h3>
                <div className="mt-4 overflow-x-auto rounded-lg border border-border"><table className="w-full min-w-[560px] border-collapse text-left text-sm"><thead className="bg-muted"><tr><th scope="col" className="px-4 py-3 font-medium">Status</th><th scope="col" className="px-4 py-3 font-medium">Code</th><th scope="col" className="px-4 py-3 font-medium">Meaning</th></tr></thead><tbody>{endpoint.errors.map((error) => <tr key={`${error.status}-${error.code}`} className="border-t border-border"><td className="px-4 py-3 font-mono text-xs">{error.status}</td><td className="px-4 py-3"><code className="font-mono text-xs">{error.code}</code></td><td className="px-4 py-3 leading-6 text-muted-foreground">{error.description}</td></tr>)}</tbody></table></div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
