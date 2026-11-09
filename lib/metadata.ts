import type { Metadata } from "next";
import { siteUrl } from "@/lib/env";

export function createMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const canonical = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "AiAiAiRouter",
      title: `${title} | AiAiAiRouter`,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AiAiAiRouter — one API for Kimi, ChatGPT, GLM and 99+ models" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | AiAiAiRouter`,
      description,
      images: ["/opengraph-image"],
    },
  };
}
