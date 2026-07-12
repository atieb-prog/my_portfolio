import { NAV_LINKS } from "@/components/portfolio/data";
import { Menu, X } from "lucide-react";

type HeaderProps = {
  activeSection: string;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onNavigate: (id: string) => void;
};

export function Header({
  activeSection,
  menuOpen,
  onToggleMenu,
  onNavigate,
}: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-40 border-b border-hair/70 backdrop-blur-xl"
      style={{ backgroundColor: "rgba(6, 17, 28, 0.72)" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate("hero")}
          className="flex items-center gap-2.5 font-display text-[1rem] font-bold tracking-tight text-primary sm:text-lg"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-teal/35 bg-teal/10 text-teal">
            &#9670;
          </span>
          Atieb Ur Rehman
        </button>
        <nav className="hidden items-center gap-2 rounded-full border border-hair/70 bg-card/55 px-2 py-1 md:flex">
          {NAV_LINKS.map((link) => {
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`rounded-full px-3 py-1.5 font-body text-xs font-medium tracking-wide transition-all ${
                  activeSection === link.id
                    ? "bg-teal text-black"
                    : "text-muted hover:bg-base/45 hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>
        <button
          className="text-muted transition-colors hover:text-primary md:hidden"
          onClick={onToggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <div className="mx-4 mb-4 flex flex-col gap-2 rounded-2xl border border-hair/80 bg-card/92 p-3 sm:mx-6 md:hidden">
          {NAV_LINKS.map((link) => {
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="rounded-lg px-3 py-2 text-left font-body text-sm text-muted transition-colors hover:bg-base/45 hover:text-primary"
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
