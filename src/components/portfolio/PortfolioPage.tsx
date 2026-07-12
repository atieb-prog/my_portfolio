"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/components/portfolio/data";
import { Header } from "@/components/portfolio/Header";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { CertificationsSection } from "@/components/portfolio/CredentialsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";

export function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const link of NAV_LINKS) {
        const element = document.getElementById(link.id);
        if (element && element.getBoundingClientRect().top < window.innerHeight * 0.4) {
          current = link.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-x-clip font-body text-primary">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_420px_at_70%_0%,rgba(87,220,203,0.12),transparent),radial-gradient(900px_520px_at_20%_12%,rgba(243,185,93,0.1),transparent)]" />
      <Header
        activeSection={activeSection}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onNavigate={scrollTo}
      />
      <HeroSection onViewProjects={() => scrollTo("projects")} />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
