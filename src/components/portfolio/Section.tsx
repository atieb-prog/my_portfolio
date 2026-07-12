import type { ReactNode } from "react";
import { Reveal } from "@/components/portfolio/Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-24">
      <Reveal>
        <div className="mb-5 flex items-center gap-3">
          <span className="rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1 font-mono text-[10px] tracking-[0.22em] text-teal uppercase">
            {eyebrow}
          </span>
          <span className="h-px flex-1 border-t border-hair/80" />
        </div>
        <h2 className="mb-8 font-display text-2xl font-semibold tracking-tight text-primary sm:text-3xl md:mb-12 md:text-4xl">{title}</h2>
        {children}
      </Reveal>
    </section>
  );
}
