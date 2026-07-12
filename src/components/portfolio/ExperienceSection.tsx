import { ChevronRight } from "lucide-react";
import { Section } from "@/components/portfolio/Section";
import { EXPERIENCE_POINTS } from "@/components/portfolio/data";

export function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="experience" title="Professional Journey">
      <div className="rounded-3xl border border-hair/70 bg-card/45 p-3 shadow-[0_22px_55px_rgba(0,0,0,0.2)] sm:p-4 md:p-5">
        <div className="relative overflow-hidden rounded-3xl border border-hair/80 bg-card/85 p-6 shadow-[0_20px_48px_rgba(0,0,0,0.22)] backdrop-blur md:p-8">
          <div className="pointer-events-none absolute -left-8 bottom-2 h-24 w-24 rounded-full bg-teal/10 blur-2xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-gold/12 blur-3xl" />
          <div className="grid gap-6 md:grid-cols-[240px_1fr]">
            <div>
              <p className="mb-3 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">Sep 2025 - Jun 2026</p>
              <h3 className="mb-2 font-display text-lg font-semibold leading-tight md:text-xl">
                Full Stack JavaScript Trainee to MERN Stack Developer Intern
              </h3>
              <p className="text-muted text-sm">Excellence Delivered (ExD), Lahore</p>
            </div>
            <ul className="space-y-3 border-l border-hair/80 pl-5">
              {EXPERIENCE_POINTS.map((point, index) => (
                <li key={index} className="flex gap-2.5 text-sm leading-relaxed text-[#d7e7f7]">
                  <ChevronRight size={14} className="mt-0.5 shrink-0 text-teal" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
