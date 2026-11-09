import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg className={cn("size-7", className)} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" rx="3" fill="#e2ec62" />
      <path d="M7 9h8M7 16h12M7 23h8" stroke="#11130d" strokeWidth="2.2" strokeLinecap="square" />
      <path d="m19 7 6 4-6 4M24 12l-6 4 6 4M19 17l6 4-6 4" stroke="#11130d" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}
