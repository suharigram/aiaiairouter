"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { consoleUrl } from "@/lib/env";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/models", label: "Models" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/api-reference", label: "API Reference" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="bg-accent px-4 py-2 text-center font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[#11130d]">
        <Link href="/models" className="hover:underline">Kimi / ChatGPT / GLM / 99+ <span className="mx-2">—</span> one OpenAI-compatible API</Link>
      </div>
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 rounded-sm font-mono font-semibold tracking-[-0.04em] outline-none focus-visible:ring-2 focus-visible:ring-accent" aria-label="AiAiAiRouter home">
          <Logo />
          <span>AiAiAiRouter</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={cn("relative rounded-sm px-3 py-2 font-mono text-xs outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent", active ? "text-accent after:absolute after:inset-x-3 after:-bottom-[17px] after:h-px after:bg-accent" : "text-muted-foreground")}>{item.label}</Link>;
          })}
        </nav>
        <div className="hidden lg:block">
          <Button asChild size="sm" className="h-9 px-4 text-xs uppercase"><a href={consoleUrl}>Open console <ArrowUpRight /></a></Button>
        </div>
        <button type="button" className="inline-flex size-10 items-center justify-center rounded-sm border border-border outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-accent lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <nav id="mobile-navigation" className="hero-enter border-t border-border bg-background px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-2xl flex-col gap-1">
            {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-sm px-3 py-3 font-mono text-sm hover:bg-muted hover:text-accent">{item.label}</Link>)}
            <Button asChild className="mt-3 uppercase"><a href={consoleUrl}>Open console <ArrowUpRight /></a></Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
