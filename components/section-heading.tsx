export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">{eyebrow}</p> : null}
      <h2 className="text-balance font-mono text-3xl font-semibold leading-tight tracking-[-0.045em] md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-pretty leading-7 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
