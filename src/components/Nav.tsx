import { useEffect, useState } from "react";
import { nav, profile, type Lang } from "../data/content";
import type { Theme } from "../hooks/useSettings";

interface Props {
  lang: Lang;
  theme: Theme;
  onToggleLang: () => void;
  onToggleTheme: () => void;
}

/** Urutan link nav — `key` merujuk ke field di `nav` (content.ts) */
const LINKS = [
  { href: "#about", key: "about" },
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
  { href: "#cv", key: "cv" },
] as const;

export function Nav({ lang, theme, onToggleLang, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Tutup menu pakai Escape + kunci scroll selama menu kebuka
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Menu mobile nggak relevan lagi begitu layar melebar ke breakpoint desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <nav>
      {open && <div className="nav-scrim" onClick={close} aria-hidden="true" />}

      <a className="logo" href="#top" onClick={close}>
        <span>{profile.name.charAt(0)}</span>
        {profile.name.slice(1)}
      </a>

      <div className="nav-right">
        <ul className={`nav-links ${open ? "open" : ""}`} id="nav-menu">
          {LINKS.map((link) => (
            <li key={link.key}>
              <a href={link.href} onClick={close}>{nav[link.key][lang]}</a>
            </li>
          ))}
          <li>
            <a className="nav-cta" href="#contact" onClick={close}>{nav.contact[lang]}</a>
          </li>
        </ul>

        <button
          className="toggle-btn"
          onClick={onToggleLang}
          aria-label={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
        >
          {lang === "id" ? "🇮🇩 ID" : "🇬🇧 EN"}
        </button>
        <button
          className="toggle-btn"
          onClick={onToggleTheme}
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <button
          className={`toggle-btn nav-burger ${open ? "is-open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={
            open
              ? lang === "id" ? "Tutup menu" : "Close menu"
              : lang === "id" ? "Buka menu" : "Open menu"
          }
        >
          <span className="burger-bars" aria-hidden="true">
            <i /><i /><i />
          </span>
        </button>
      </div>
    </nav>
  );
}
