export type LegalSection = { title: string; paragraphs?: string[]; bullets?: string[] };

export function LegalDocument({ title, lastUpdated, introduction, sections }: { title: string; lastUpdated: string; introduction: string; sections: LegalSection[] }) {
  const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");
  return (
    <div className="container-site py-12 md:py-16">
      <div className="max-w-3xl">
        <header className="border-b border-border pb-8">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">Legal</p>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          <p className="mt-5 leading-7 text-muted-foreground">{introduction}</p>
        </header>
        <nav className="my-8 rounded-lg border border-border bg-muted/35 p-5" aria-label={`${title} contents`}>
          <h2 className="text-sm font-semibold">Contents</h2>
          <ol className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">{sections.map((section, index) => <li key={section.title}><a href={`#${slug(section.title)}`} className="hover:text-accent hover:underline">{index + 1}. {section.title}</a></li>)}</ol>
        </nav>
        <div className="prose-docs">
          {sections.map((section, index) => <section key={section.title}><h2 id={slug(section.title)} className="scroll-mt-24">{index + 1}. {section.title}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}</section>)}
        </div>
      </div>
    </div>
  );
}
