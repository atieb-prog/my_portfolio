import { Download, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-hair/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="rounded-3xl border border-hair/70 bg-card/45 p-3 shadow-[0_22px_55px_rgba(0,0,0,0.2)] sm:p-4 md:p-5">
        <div className="relative overflow-hidden rounded-3xl border border-hair/80 bg-card/90 p-6 text-center shadow-[0_24px_58px_rgba(0,0,0,0.26)] backdrop-blur sm:p-8 md:p-10">
          <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-teal/12 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-gold/12 blur-3xl" />
          <div className="mx-auto mb-4 h-px w-16 bg-hair/80" />

          <p className="mb-4 font-mono text-[11px] tracking-[0.22em] text-teal uppercase sm:text-xs">Contact</p>
          <h2 className="mb-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">Let&apos;s build something.</h2>
          <p
            className="mx-auto mb-8 max-w-xl text-sm leading-relaxed sm:mb-9 sm:text-base"
            style={{ color: "#edeef0" }}
          >
            Open to full-stack and MERN developer roles. Reach out any time for collaboration,
            freelance work, or full-time opportunities.
          </p>

          <div className="mb-8 grid gap-3 sm:grid-cols-3 md:mb-10 md:gap-4">
            <a
              href="mailto:atiebmughal@gmail.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105"
            >
              <Mail size={16} /> atiebmughal@gmail.com
            </a>
            <a
              href="tel:+923244789984"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-hair/80 bg-base/45 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-teal/35 hover:bg-base/65"
            >
              <Phone size={16} /> +92-324-4789984
            </a>
            <a
              href="/Atieb_Full_Stack_Developer.pdf"
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-teal/40 bg-teal/10 px-5 py-3 text-sm font-semibold text-teal transition-colors hover:bg-teal/15"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-5">
            <a
              href="https://github.com/atieb-prog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hair/80 bg-base/60 text-muted transition-colors hover:-translate-y-0.5 hover:border-teal/40 hover:text-teal"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/atiebwaheed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hair/80 bg-base/60 text-muted transition-colors hover:-translate-y-0.5 hover:border-teal/40 hover:text-teal"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
