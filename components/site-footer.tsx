import Link from "next/link";
import { Logo } from "@/components/logo";
import { socialLinks } from "@/lib/env";

const groups = [
  {
    title: "Product",
    links: [
      ["Models", "/models"],
      ["Pricing", "/pricing"],
      ["API Reference", "/api-reference"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Documentation", "/docs"],
      ["Quickstart", "/docs/quickstart"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Privacy Policy", "/privacy"],
      ["Terms of Service", "/terms"],
      ["Refund Policy", "/refund"],
      ["Cookie Policy", "/cookies"],
    ],
  },
];

const socials = [
  ["GitHub", socialLinks.github],
  ["Discord", socialLinks.discord],
  ["YouTube", socialLinks.youtube],
  ["Telegram", socialLinks.telegram],
  ["Hugging Face", socialLinks.huggingFace],
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/35">
      <div className="container-site py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 font-semibold tracking-[-0.025em]"><Logo /><span>AiAiAiRouter</span></Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">One OpenAI-compatible API for Kimi, ChatGPT, GLM and 99+ models.</p>
            <p className="mt-5 text-sm text-muted-foreground">AiAiAiRouter is developed by GonidonCloud</p>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map(([label, href]) => <li key={href}><Link href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Social links">
            {socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
          </nav>
          <p className="text-xs text-muted-foreground">© 2026 GonidonCloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
