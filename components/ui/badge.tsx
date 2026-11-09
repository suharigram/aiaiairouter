import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return <span className={cn("inline-flex items-center rounded-sm border border-border bg-muted px-2.5 py-0.5 font-mono text-[11px] font-medium text-muted-foreground", className)} {...props} />;
}
