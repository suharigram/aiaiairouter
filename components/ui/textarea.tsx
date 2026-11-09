import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return <textarea className={cn("flex min-h-32 w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/15 disabled:cursor-not-allowed disabled:opacity-50", className)} {...props} />;
}
