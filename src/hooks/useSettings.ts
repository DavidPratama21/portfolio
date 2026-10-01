import { useEffect, useState } from "react";
import type { Lang } from "../data/content";

export type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getInitialLang(): Lang {
  const saved = localStorage.getItem("lang");
  return saved === "en" ? "en" : "id";
}

export function useSettings() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  const toggleLang = () => setLang((l) => (l === "id" ? "en" : "id"));

  return { theme, lang, toggleTheme, toggleLang };
}
