import { useEffect, useState } from "react";
import { useSettings } from "./hooks/useSettings";
import { Loader } from "./components/Loader";
import { ScrollProgress } from "./components/ScrollProgress";
import { Cursor } from "./components/Cursor";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Cv } from "./components/Cv";
import { Contact } from "./components/Contact";

export default function App() {
  const { theme, lang, toggleTheme, toggleLang } = useSettings();
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setBooted(true);
      return;
    }

    const MIN = 600;  // biar animasi stamp sempat kelihatan
    const MAX = 2500; // jangan sandera user kalau asset-nya lambat
    const start = performance.now();
    let minTimer: ReturnType<typeof setTimeout>;

    // Tutup loader begitu halaman beneran siap, bukan setelah delay tetap
    const finish = () => {
      const elapsed = performance.now() - start;
      minTimer = setTimeout(() => setBooted(true), Math.max(0, MIN - elapsed));
    };

    const maxTimer = setTimeout(() => setBooted(true), MAX);
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      window.removeEventListener("load", finish);
    };
  }, []);

  return (
    <div className={booted ? "booted" : ""}>
      <Loader done={booted} lang={lang} />
      <ScrollProgress />
      <Cursor />
      <Nav lang={lang} theme={theme} onToggleLang={toggleLang} onToggleTheme={toggleTheme} />
      <Hero lang={lang} />
      <Marquee lang={lang} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} />
      <Cv lang={lang} />
      <Contact lang={lang} />
    </div>
  );
}