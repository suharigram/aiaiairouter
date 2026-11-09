"use client";

import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <div className="container-site flex min-h-[60vh] flex-col items-start justify-center py-16"><AlertCircle className="size-6 text-accent" /><h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">The page could not be loaded.</h1><p className="mt-4 max-w-lg leading-7 text-muted-foreground">An unexpected rendering error occurred. Try loading this page again. If the problem continues, contact support@aiaiairouter.com.</p><Button onClick={reset} className="mt-7">Try again</Button></div>;
}
