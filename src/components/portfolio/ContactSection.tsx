// import { Download, Mail, Phone } from "lucide-react";
// import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

// export function ContactSection() {
//   return (
//     <section id="contact" className="border-t border-hair/70">
//       <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
//         <div className="rounded-3xl border border-hair/70 bg-card/45 p-3 shadow-[0_22px_55px_rgba(0,0,0,0.2)] sm:p-4 md:p-5">
//         <div className="relative overflow-hidden rounded-3xl border border-hair/80 bg-card/90 p-6 text-center shadow-[0_24px_58px_rgba(0,0,0,0.26)] backdrop-blur sm:p-8 md:p-10">
//           <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-teal/12 blur-3xl" />
//           <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-gold/12 blur-3xl" />
//           <div className="mx-auto mb-4 h-px w-16 bg-hair/80" />

//           <p className="mb-4 font-mono text-[11px] tracking-[0.22em] text-teal uppercase sm:text-xs">Contact</p>
//           <h2 className="mb-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">Let&apos;s build something.</h2>
//           <p
//             className="mx-auto mb-8 max-w-xl text-sm leading-relaxed sm:mb-9 sm:text-base"
//             style={{ color: "#edeef0" }}
//           >
//             Open to full-stack and MERN developer roles. Reach out any time for collaboration,
//             freelance work, or full-time opportunities.
//           </p>

//           <div className="mb-8 grid gap-3 sm:grid-cols-3 md:mb-10 md:gap-4">
//             <a
//               href="mailto:atiebmughal@gmail.com"
//               className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105"
//             >
//               <Mail size={16} /> atiebmughal@gmail.com
//             </a>
//             <a
//               href="https://wa.me/923244789984"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-green-400/40 bg-green-500/12 px-5 py-3 text-sm font-semibold text-green-300 transition-colors hover:border-green-300/60 hover:bg-green-500/20"
//             >
//               <FaWhatsapp size={16} /> WhatsApp
//             </a>
//             <a
//               href="/Atieb_Full_Stack_Developer.pdf"
//               download
//               className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-teal/40 bg-teal/10 px-5 py-3 text-sm font-semibold text-teal transition-colors hover:bg-teal/15"
//             >
//               <Download size={16} /> Download Resume
//             </a>
//           </div>

//           <div className="flex items-center justify-center gap-4 sm:gap-5">
//             <a
//               href="tel:+923244789984"
//               className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hair/80 bg-base/60 text-muted transition-colors hover:-translate-y-0.5 hover:border-teal/40 hover:text-teal"
//               aria-label="Phone"
//             >
//               <Phone size={18} />
//             </a>
//             <a
//               href="https://github.com/atieb-prog"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hair/80 bg-base/60 text-muted transition-colors hover:-translate-y-0.5 hover:border-teal/40 hover:text-teal"
//               aria-label="GitHub"
//             >
//               <FaGithub size={18} />
//             </a>
//             <a
//               href="https://linkedin.com/in/atiebwaheed"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hair/80 bg-base/60 text-muted transition-colors hover:-translate-y-0.5 hover:border-teal/40 hover:text-teal"
//               aria-label="LinkedIn"
//             >
//               <FaLinkedinIn size={18} />
//             </a>
//           </div>
//         </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Section } from "@/components/portfolio/Section";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(
        data as unknown as Record<string, string>,
      ).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() =>
        alert(
          "Something went wrong — please try emailing me directly instead.",
        ),
      );
  };

  return (
    <Section id="contact" eyebrow="contact" title="Let's Build Something">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-hair/70 bg-card/45 p-3 shadow-[0_22px_55px_rgba(0,0,0,0.2)] sm:p-4 md:p-5">
          <div className="relative overflow-hidden rounded-3xl border border-hair/80 bg-card/90 p-6 shadow-[0_24px_58px_rgba(0,0,0,0.26)] backdrop-blur sm:p-8 md:p-10">
            <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-teal/12 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-gold/12 blur-3xl" />

            <div className="grid gap-10 md:grid-cols-2 md:gap-12">
              {/* Left: intro + quick actions */}
              <div className="text-center md:text-left">
                <p
                  className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-white sm:mb-9 sm:text-base md:mx-0"
                  style={{ color: "#ffffff" }}
                >
                  Open to full-stack and MERN developer roles. Reach out any
                  time for collaboration, freelance work, or full-time
                  opportunities.
                </p>

                <div className="mb-6 flex items-center justify-center gap-2.5 md:justify-start">
                  <a
                    href="mailto:atiebmughal@gmail.com"
                    className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-gold/50 bg-gold/12 px-3.5 text-xs font-semibold text-gold transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold/20"
                    aria-label="Email"
                    title="Email"
                  >
                    <Mail size={14} /> Email
                  </a>
                  <a
                    href="/Atieb_Full_Stack_Developer.pdf"
                    download
                    className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-teal/40 bg-teal/10 px-3.5 text-xs font-semibold text-teal transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal/15"
                  >
                    <Download size={14} /> Resume
                  </a>
                </div>

                <div className="mb-6 flex items-center justify-center gap-4 md:justify-start">
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

                <div className="mx-auto max-w-md rounded-2xl border border-hair/80 bg-base/35 p-4 text-left md:mx-0">
                  <p className="mb-3 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                    Quick Info
                  </p>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between gap-3 text-muted">
                      <span>Response</span>
                      <span className="text-primary">Within 24 hours</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-muted">
                      <span>Collaboration</span>
                      <span className="text-primary">
                        Freelance / Full-time
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-muted">
                      <span>Status</span>
                      <span className="text-teal">Open to work</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: actual contact form */}
              <div>
                {submitted ? (
                  <div className="flex h-full min-h-70 flex-col items-center justify-center rounded-2xl border border-teal/30 bg-teal/5 p-8 text-center">
                    <p className="font-display text-lg font-semibold text-teal mb-2">
                      Message sent!
                    </p>
                    <p className="text-sm text-muted">
                      Thanks for reaching out — I&apos;ll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    <input type="hidden" name="form-name" value="contact" />

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-xs font-mono uppercase tracking-wide text-muted"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-lg border border-hair/80 bg-base/60 px-4 py-2.5 text-sm text-primary placeholder:text-dim focus:border-teal/60 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-xs font-mono uppercase tracking-wide text-muted"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-hair/80 bg-base/60 px-4 py-2.5 text-sm text-primary placeholder:text-dim focus:border-teal/60 focus:outline-none transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-xs font-mono uppercase tracking-wide text-muted"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full resize-none rounded-lg border border-hair/80 bg-base/60 px-4 py-2.5 text-sm text-primary placeholder:text-dim focus:border-teal/60 focus:outline-none transition-colors"
                        placeholder="What would you like to discuss?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-5 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
