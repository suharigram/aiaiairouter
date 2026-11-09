"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docs } from "@/lib/docs";
import { cn } from "@/lib/utils";

function DocLinks() {
  const pathname = usePathname();
  return (
    <ul className="space-y-1">
      {docs.map((doc) => {
        const href = `/docs/${doc.slug}`;
        const active = pathname === href;
        return <li key={doc.slug}><Link href={href} aria-current={active ? "page" : undefined} className={cn("block rounded-md px-3 py-2 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent", active ? "bg-accent-soft font-medium text-accent-strong" : "text-muted-foreground hover:bg-muted hover:text-foreground")}>{doc.title}</Link></li>;
      })}
    </ul>
  );
}

export function DocsSidebar() {
  return (
    <>
      <aside className="hidden lg:block lg:w-56 lg:shrink-0">
        <nav className="sticky top-24" aria-label="Documentation navigation">
          <Link href="/docs" className="mb-3 block px-3 text-xs font-semibold uppercase tracking-wider text-foreground">Documentation</Link>
          <DocLinks />
        </nav>
      </aside>
      <details className="mb-8 rounded-lg border border-border bg-muted/30 p-4 lg:hidden">
        <summary className="cursor-pointer text-sm font-medium">Documentation menu</summary>
        <nav className="mt-4 border-t border-border pt-3" aria-label="Documentation navigation"><DocLinks /></nav>
      </details>
    </>
  );
}
