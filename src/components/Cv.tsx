import { cv, sections, type Lang, type TimelineItem } from "../data/content";
import { Reveal } from "./ui";

function Timeline({ items, lang }: { items: TimelineItem[]; lang: Lang }) {
  return (
    <ul className="timeline">
      {items.map((item) => (
        <li key={item.title.en}>
          <span className="when">{item.when[lang]}</span>
          <h4>{item.title[lang]}</h4>
          <p>{item.desc[lang]}</p>
        </li>
      ))}
    </ul>
  );
}

export function Cv({ lang }: { lang: Lang }) {
  return (
    <section id="cv">
      <Reveal className="section-head">
        <h2>{sections.cv.title[lang]}</h2>
        <span className="tag">{sections.cv.tag[lang]}</span>
      </Reveal>
      <div className="cv-wrap">
        <Reveal className="cv-col">
          <h3>{cv.experienceTitle[lang]}</h3>
          <Timeline items={cv.experience} lang={lang} />
        </Reveal>
        <Reveal className="cv-col">
          <h3>{cv.educationTitle[lang]}</h3>
          <Timeline items={cv.education} lang={lang} />
        </Reveal>
      </div>
    </section>
  );
}
