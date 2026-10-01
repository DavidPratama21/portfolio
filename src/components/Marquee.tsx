import { marquee, type Lang } from "../data/content";

export function Marquee({ lang }: { lang: Lang }) {
  const items = marquee[lang];
  const track = (
    <span>
      {items.map((item) => (
        <span key={item} style={{ display: "inline-flex", alignItems: "center", gap: 48 }}>
          {item} <i className="dot">●</i>
        </span>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {track}
        {track}
      </div>
    </div>
  );
}
