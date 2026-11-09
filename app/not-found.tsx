import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return <div className="container-site flex min-h-[60vh] flex-col items-start justify-center py-16"><p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">404 — Not found</p><h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">This route does not exist.</h1><p className="mt-4 max-w-lg leading-7 text-muted-foreground">The page may have moved, or the URL may be incorrect. Return home or use the documentation navigation to continue.</p><div className="mt-7 flex gap-3"><Button asChild><Link href="/"><ArrowLeft />Back home</Link></Button><Button asChild variant="secondary"><Link href="/docs">View documentation</Link></Button></div></div>;
}
