import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-balance">
      {children}
    </h2>
  );
}
