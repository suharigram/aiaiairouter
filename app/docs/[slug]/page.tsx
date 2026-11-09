import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DocContent } from "@/components/doc-content";
import { docs, getDoc } from "@/lib/docs";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) return createMetadata("Documentation page not found", "The requested documentation page does not exist.", `/docs/${slug}`);
  return createMetadata(doc.title, doc.description, `/docs/${doc.slug}`);
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) notFound();
  const index = docs.findIndex((item) => item.slug === doc.slug);
  const previous = docs[index - 1];
  const next = docs[index + 1];

  return (
    <article>
      <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground"><Link href="/docs" className="hover:text-foreground">Docs</Link><span className="mx-2">/</span><span aria-current="page">{doc.title}</span></nav>
      <header className="border-b border-border pb-8">
        <h1 className="text-4xl font-semibold tracking-[-0.04em]">{doc.title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">{doc.intro}</p>
      </header>
      <DocContent sections={doc.sections} />
      <nav className="mt-12 grid gap-3 border-t border-border pt-6 sm:grid-cols-2" aria-label="Documentation pages">
        {previous ? <Link href={`/docs/${previous.slug}`} className="group rounded-lg border border-border p-4 hover:bg-muted/35"><span className="flex items-center gap-1.5 text-xs text-muted-foreground"><ArrowLeft className="size-3.5" />Previous</span><span className="mt-2 block text-sm font-medium">{previous.title}</span></Link> : <span />}
        {next ? <Link href={`/docs/${next.slug}`} className="group rounded-lg border border-border p-4 text-right hover:bg-muted/35"><span className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">Next<ArrowRight className="size-3.5" /></span><span className="mt-2 block text-sm font-medium">{next.title}</span></Link> : null}
      </nav>
    </article>
  );
}
