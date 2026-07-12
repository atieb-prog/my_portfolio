import { Section } from "@/components/portfolio/Section";

export function AboutSection() {
  return (
    <Section id="about" eyebrow="about" title="About">
      <div className="rounded-3xl border border-hair/70 bg-card/45 p-3 shadow-[0_22px_55px_rgba(0,0,0,0.2)] sm:p-4 md:p-5">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-3xl border border-hair/80 bg-card/85 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur md:p-8">
            <div className="pointer-events-none absolute -top-10 right-2 z-0 h-36 w-36 rounded-full bg-teal/12 blur-3xl" />
            <div className="relative z-10">
              <p className="mb-3 font-mono text-[10px] tracking-[0.22em] text-teal uppercase">Who I Am</p>
              <p className="max-w-2xl text-[1rem] leading-relaxed text-primary md:text-[1.05rem]">
                I started by building small web projects, then gradually moved into full-stack development as I got
                curious about how the pieces actually connect &mdash; frontend, APIs, and the database underneath.
                That&apos;s still what I enjoy most: taking a real problem and understanding it end to end, not just the
                part I&apos;m assigned.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Experience", value: "10 Months" },
                  { label: "Projects Built", value: "6+ Web Applications" },
                  { label: "Core Focus", value: "Full-Stack Development" },
                  { label: "Based In", value: "Lahore, Pakistan" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-hair/80 bg-base/35 px-4 py-3 transition-colors hover:border-teal/35"
                  >
                    <p className="mb-1 font-mono text-[10px] tracking-[0.2em] text-muted uppercase">{item.label}</p>
                    <p className="text-sm font-medium text-primary">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-teal/25 bg-teal/10 px-4 py-4">
                <p className="text-sm leading-relaxed text-[#d7e7f7]">
                  I enjoy owning complete product slices, from database design and API contracts to polished frontend
                  experiences that users actually enjoy.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:h-full">
            <div className="rounded-3xl border border-hair/80 bg-card/85 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur md:p-7">
              <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">Strengths</p>
              <div className="flex flex-wrap gap-2.5">
                {["Problem Solving", "Team Collaboration", "Communication", "Adaptability"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-hair/80 bg-base/45 px-3.5 py-2 font-mono text-xs text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-hair/80 bg-card/85 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur md:p-7 lg:flex-1">
              <p className="mb-2 font-mono text-[10px] tracking-[0.2em] text-muted uppercase">Working Style</p>
              <p className="text-sm leading-relaxed text-primary">
                I work with a product mindset: understand the goal first, break problems into clear milestones, and
                ship reliable solutions with clean, maintainable code.
              </p>
              <ul className="mt-4 space-y-2.5 border-t border-hair/80 pt-4">
                {[
                  "Translate business needs into practical technical scope.",
                  "Build secure APIs and predictable frontend state flows.",
                  "Focus on maintainable code, performance, and a smooth user experience.",
                ].map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-1 shrink-0 text-teal">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
