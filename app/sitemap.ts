import type { MetadataRoute } from "next";
import { docs } from "@/lib/docs";
import { siteUrl } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-08T00:00:00.000Z");
  const pages = ["", "/models", "/pricing", "/docs", "/api-reference", "/about", "/contact", "/privacy", "/terms", "/refund", "/cookies"];

  return [
    ...pages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: path === "" || path === "/models" || path === "/pricing" ? "weekly" as const : "monthly" as const,
      priority: path === "" ? 1 : path === "/models" || path === "/pricing" || path === "/docs" ? 0.9 : 0.7,
    })),
    ...docs.map((doc) => ({
      url: `${siteUrl}/docs/${doc.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
