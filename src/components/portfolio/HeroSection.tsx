import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

type HeroSectionProps = {
  onViewProjects: () => void;
};

export function HeroSection({ onViewProjects }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pt-14 md:grid-cols-[1.2fr_0.8fr] md:gap-12 md:pb-20 md:pt-24 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/35 bg-teal/12 px-4 py-1.5 font-mono text-[10px] font-semibold tracking-[0.2em] text-teal uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          Full Stack Developer
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[3.35rem]"
        >
          Turning ideas into
          <br />
          secure &amp; scalable
          <br />
          <span className="text-teal"> web applications</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 max-w-xl text-sm leading-relaxed sm:text-base md:text-lg"
          style={{ color: "#d7e7f7" }}
        >
          I&apos;m <span
            className="font-display font-bold tracking-tight"
            style={{ color: "#57dccb" }}
          >
            Atieb Ur Rehman
          </span>, a{" "}
          <span
            className="font-mono text-[0.95em] font-semibold tracking-[0.08em] uppercase"
            style={{ color: "#57dccb" }}
          >
            Full Stack Developer
          </span>{" "}
          specializing in React, Next.js, Node.js, TypeScript, MongoDB,
          PostgreSQL, and SQLite. Building modern applications with a focus on
          performance, security, and user experience
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 mb-8"
        >
          <button
            onClick={onViewProjects}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 sm:w-auto"
          >
            <FileText size={16} /> View My Projects
          </button>
          <a
            href="/Atieb_Full_Stack_Developer.pdf"
            download
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-hair bg-card/60 px-6 py-3 text-sm font-semibold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-teal/40 hover:bg-card sm:w-auto"
          >
            <Download size={16} /> Download Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex h-64 items-center justify-center sm:h-72 md:h-112"
      >
        <div
          className="absolute inset-0 m-auto h-56 w-56 bg-linear-to-br from-teal to-gold opacity-85 blur-[1px] sm:h-72 sm:w-72 md:h-96 md:w-96"
          style={{ borderRadius: "63% 37% 54% 46% / 45% 41% 59% 55%" }}
        />
        <div className="relative h-52 w-52 overflow-hidden rounded-4xl border border-hair/80 bg-card/85 shadow-[0_30px_70px_rgba(0,0,0,0.34)] backdrop-blur sm:h-64 sm:w-64 md:h-80 md:w-80">
          <img
            src="/my_image1.png"
            alt="Atieb Ur Rehman profile photo"
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(87,220,203,0.18),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(243,185,93,0.2),transparent_42%)]" />
        </div>
      </motion.div>
    </section>
  );
}
