import { Award, GraduationCap } from "lucide-react";
import { Section } from "@/components/portfolio/Section";
import { CERTIFICATIONS } from "@/components/portfolio/data";

export function CertificationsSection() {
  return (
    <Section id="certifications" eyebrow="Education & Certifications" title="Learning Never Stops">
      <div className="rounded-3xl border border-hair/70 bg-card/45 p-3 shadow-[0_22px_55px_rgba(0,0,0,0.2)] sm:p-4 md:p-5">
        <div className="grid gap-8 md:grid-cols-2">
        <div className="relative rounded-3xl border border-hair/80 bg-card/85 p-6 shadow-[0_20px_48px_rgba(0,0,0,0.2)] backdrop-blur md:p-7">
          <div className="pointer-events-none absolute -right-7 -top-8 h-24 w-24 rounded-full bg-teal/8 blur-2xl" />
          <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-semibold text-teal">
            <Award size={16} /> Certifications
          </h3>
          <ul className="space-y-4">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert.name} className="rounded-xl border border-hair/80 bg-base/35 px-4 py-3 transition-colors hover:border-teal/30">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary leading-snug hover:text-teal transition-colors"
                >
                  {cert.name}
                </a>
                <p className="font-mono text-xs text-dim mt-1">
                  {cert.org} · {cert.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-3xl border border-hair/80 bg-card/85 p-6 shadow-[0_20px_48px_rgba(0,0,0,0.2)] backdrop-blur md:p-7">
          <div className="pointer-events-none absolute -left-7 bottom-3 h-24 w-24 rounded-full bg-gold/8 blur-2xl" />
          <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-semibold text-gold">
            <GraduationCap size={16} /> Education
          </h3>
          <div className="rounded-xl border border-hair/80 bg-base/35 px-4 py-3">
            <p className="text-sm text-primary leading-snug">BS Information Technology (BSIT)</p>
            <p className="font-mono text-xs text-dim mt-1">University of the Punjab, Lahore · Mar 2024</p>
          </div>
          <h3 className="mt-8 mb-4 font-display text-sm font-semibold text-gold">Languages</h3>
          <div className="flex gap-2 flex-wrap">
            <span className="rounded-full border border-hair/80 bg-base/45 px-3 py-1.5 font-mono text-xs text-primary">
              English — Professional
            </span>
            <span className="rounded-full border border-hair/80 bg-base/45 px-3 py-1.5 font-mono text-xs text-primary">Urdu — Native</span>
          </div>
        </div>
        </div>
      </div>
    </Section>
  );
}
