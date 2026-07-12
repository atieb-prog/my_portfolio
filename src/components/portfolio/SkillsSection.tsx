import { motion } from "framer-motion";
import { Code2, Database, Wrench } from "lucide-react";
import { Section } from "@/components/portfolio/Section";
import { SKILL_GROUPS } from "@/components/portfolio/data";

const GROUP_ICONS: Record<string, typeof Code2> = {
  Frontend: Code2,
  "Backend & APIs": Database,
  "Databases & Tools": Wrench,
};

export function SkillsSection() {
  return (
    <Section id="skills" eyebrow="skills" title="Technical Expertise">
      <div className="rounded-3xl border border-hair/70 bg-card/45 p-3 shadow-[0_22px_55px_rgba(0,0,0,0.2)] sm:p-4 md:p-5">
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {SKILL_GROUPS.map((group, index) => {
          const Icon = GROUP_ICONS[group.title] ?? Code2;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-hair/80 bg-linear-to-b from-card to-card/80 p-6 shadow-[0_14px_38px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-[0_30px_65px_rgba(0,0,0,0.32)] md:p-7"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-hair/90" />
              <div className="pointer-events-none absolute -right-10 -top-8 h-24 w-24 rounded-full bg-teal/8 blur-2xl" />

              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-teal/20 bg-teal/12 text-teal shadow-[inset_0_0_0_1px_rgba(87,220,203,0.12)]">
                    <Icon size={16} />
                  </span>
                  <div>
                    <h3 className="font-display text-[0.96rem] font-semibold leading-none text-primary">
                      {group.title}
                    </h3>
                  </div>
                </div>
                <span className="rounded-full border border-teal/25 bg-teal/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] text-teal uppercase">
                  Core
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-hair/80 bg-base/55 px-3.5 py-1.5 font-mono text-[11px] text-[#d7e7f7] transition-colors duration-200 hover:border-teal/45 hover:bg-base/80 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
        </div>
      </div>
    </Section>
  );
}