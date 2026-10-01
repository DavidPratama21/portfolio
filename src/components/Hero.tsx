import { useEffect, useState } from "react";
import { hero, profile, type Lang } from "../data/content";

function SwapWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    setIndex(0); // reset pas ganti bahasa
    setOut(false);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let swapTimer: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setOut(true);
      swapTimer = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setOut(false);
      }, 180);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(swapTimer);
    };
  }, [words]);

  return <span className={`swap ${out ? "out" : ""}`}>{words[index]}</span>;
}

function HeroPhoto({ lang }: { lang: Lang }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="hero-photo-wrap boot boot-photo">
      {failed ? (
        <div className="hero-photo-fallback" aria-label={profile.name}>
          {profile.name.charAt(0)}
        </div>
      ) : (
        <img
          className="hero-photo"
          src={profile.photo}
          alt={lang === "id" ? `Foto ${profile.name}` : `Photo of ${profile.name}`}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
      <span className="hero-photo-badge">
        ✨ {profile.name} — {profile.tagline[lang]}
      </span>
    </div>
  );
}

export function Hero({ lang }: { lang: Lang }) {
  return (
    <header className="hero" id="top">
      {hero.stickers.map((s, i) => (
        <div key={s} className={`sticker st-${i} boot boot-sticker`} style={{ "--i": i } as React.CSSProperties}>
          {s}
        </div>
      ))}

      <div>
        <span className="eyebrow boot boot-1">{hero.eyebrow[lang]}</span>
        <h1 className="boot boot-2">
          {hero.headlineBefore[lang]} <SwapWord words={hero.swapWords[lang]} />{" "}
          {hero.headlineAfter[lang]}
        </h1>
        <p className="hero-sub boot boot-3">{hero.sub[lang]}</p>
        <div className="hero-actions boot boot-4">
          <a className="btn btn-primary" href="#projects">{hero.ctaProjects[lang]}</a>
          <a className="btn" href={profile.cvUrl} download>{hero.ctaCv[lang]}</a>
        </div>
      </div>

      <HeroPhoto lang={lang} />
    </header>
  );
}
