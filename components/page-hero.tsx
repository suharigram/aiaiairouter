export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="grid-field border-b border-border">
      <div className="container-site py-14 md:py-20">
        <p className="hero-enter mb-5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
        <h1 className="hero-enter max-w-4xl text-balance font-mono text-4xl font-semibold leading-[1.08] tracking-[-0.05em] md:text-5xl">{title}</h1>
        <p className="hero-enter-delay mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground md:text-lg">{description}</p>
      </div>
    </section>
  );
}
