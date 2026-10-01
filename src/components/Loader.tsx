import { useEffect, useState } from "react";
import { profile, type Lang } from "../data/content";

/** Page-load intro: stamp logo muncul, terus curtain naik */
export function Loader({ done, lang }: { done: boolean; lang: Lang }) {
  const [gone, setGone] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (!done || gone) return;
    // fallback kalau transitionend nggak kepanggil
    const t = setTimeout(() => setGone(true), 900);
    return () => clearTimeout(t);
  }, [done, gone]);

  if (gone) return null;

  return (
    <div
      className={`loader ${done ? "loader-exit" : ""}`} 
      onTransitionEnd={() => done && setGone(true)}
      aria-hidden="true"
    >
      <div className="loader-inner">
        <div className="loader-stamp">{profile.name.charAt(0)}</div>
        <div className="loader-text">
          {`${profile.name} — ${profile.tagline[lang]}`.toUpperCase()}
        </div>
      </div>
    </div>
  );
}
