import type { ReactNode } from "react";
import { DocsSidebar } from "@/components/docs-sidebar";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return <div className="container-site flex flex-col py-10 md:py-14 lg:flex-row lg:gap-14"><DocsSidebar /><div className="min-w-0 flex-1">{children}</div></div>;
}
