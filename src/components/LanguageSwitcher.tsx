import { useEffect, useRef, useState } from "react";
import { LANGUAGES, type LangCode } from "../routes/i18n";

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.4 2.6 3.6 5.6 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.6-3.6-9s1.2-6.4 3.6-9Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LanguageSwitcher({
  lang,
  onChange,
}: {
  lang: LangCode;
  onChange: (next: LangCode) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-hero-fg/30 bg-hero-fg/10 px-3 py-2 text-sm font-medium text-hero-fg backdrop-blur transition-colors hover:border-hero-fg/60 hover:bg-hero-fg/20 sm:gap-2 sm:px-4 sm:py-2.5"
      >
        <GlobeIcon />
        <span className="sm:hidden">{current.code.toUpperCase()}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <ChevronIcon open={open} />
      </button>

      <div
        role="listbox"
        className={`absolute right-0 top-[calc(100%+0.5rem)] z-50 w-48 origin-top-right rounded-2xl border border-void-line bg-void/95 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-150 ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-1 scale-95 opacity-0"
        }`}
      >
        {LANGUAGES.map((l) => {
          const active = l.code === lang;
          return (
            <button
              key={l.code}
              type="button"
              role="option"
              aria-selected={active}
              onClick={() => {
                onChange(l.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                active
                  ? "bg-signal/15 text-signal"
                  : "text-void-fg hover:bg-void-fg/[0.06]"
              }`}
            >
              {l.label}
              {active && <CheckIcon />}
            </button>
          );
        })}
      </div>
    </div>
  );
}