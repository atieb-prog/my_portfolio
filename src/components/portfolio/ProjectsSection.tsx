import { motion } from "framer-motion";
import { ChevronRight, ExternalLink, PlayCircle } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/portfolio/Section";
import { PROJECTS } from "@/components/portfolio/data";
import { FaGithub } from "react-icons/fa";

export function ProjectsSection() {
  return (
    <Section id="projects" eyebrow="My Work" title="Projects">
      <div className="rounded-3xl border border-hair/70 bg-card/45 p-3 shadow-[0_22px_55px_rgba(0,0,0,0.2)] sm:p-4 md:p-5">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 md:gap-5">
          {PROJECTS.map((project, index) => {
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-hair/80 bg-linear-to-b from-card to-card/80 shadow-[0_14px_35px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.34)]"
              >
                <div className="h-px bg-hair/90" />
                <div className="pointer-events-none absolute -right-8 -top-7 h-20 w-20 rounded-full bg-teal/8 blur-2xl" />

                {project.image && (
                  <div className="group/image relative aspect-video w-full shrink-0 overflow-hidden bg-base">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-base/55 via-transparent to-transparent opacity-90" />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
                  <h3 className="mb-2 font-display text-[1.05rem] font-semibold leading-tight text-primary sm:text-[1.08rem]">
                    {project.title}
                  </h3>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.stack.split("·").map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-gold/20 bg-gold/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-gold"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  <ul className="mb-5 space-y-2">
                    {project.points.slice(0, 3).map((point, pointIndex) => (
                      <li key={pointIndex} className="flex gap-2.5 text-[13px] leading-5 text-[#d7e7f7]">
                        <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                          <ChevronRight size={11} />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col gap-2.5 border-t border-hair/80 pt-4 sm:flex-row">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-teal px-3.5 py-2 text-[11px] font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 sm:w-auto"
                      >
                        <ExternalLink size={12} /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-hair/80 bg-base/40 px-3.5 py-2 text-[11px] font-semibold text-primary transition-colors duration-200 hover:border-teal/35 hover:bg-base/70 sm:w-auto"
                      >
                        <FaGithub size={12} /> Code
                      </a>
                    )}
                    {!project.liveUrl && project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-hair/80 bg-base/40 px-3.5 py-2 text-[11px] font-semibold text-primary transition-colors duration-200 hover:border-teal/35 hover:bg-base/70 sm:w-auto"
                      >
                        <PlayCircle size={12} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}