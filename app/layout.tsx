import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createMetadata } from "@/lib/metadata";
import { siteUrl, socialLinks } from "@/lib/env";
import "./globals.css";

export const metadata: Metadata = {
  ...createMetadata("Kimi, ChatGPT, GLM and 99+ Models", "Access Kimi, ChatGPT, GLM and 99+ models through one OpenAI-compatible API, one key, and transparent usage-based billing.", "/"),
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "GonidonCloud",
        url: siteUrl,
        logo: `${siteUrl}/icon.svg`,
        sameAs: Object.values(socialLinks),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "AiAiAiRouter",
        description: "One OpenAI-compatible API for Kimi, ChatGPT, GLM and 99+ models.",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-md bg-foreground px-4 py-2 text-sm text-background transition-transform focus:translate-y-0">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
