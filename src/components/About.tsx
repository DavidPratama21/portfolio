import { about, sections, type Lang } from "../data/content";
import { Reveal, RichText } from "./ui";

export function About({ lang }: { lang: Lang }) {
  return (
    <section id="about">
      <Reveal className="section-head">
        <h2>{sections.about.title[lang]}</h2>
        <span className="tag">{sections.about.tag[lang]}</span>
      </Reveal>
      <div className="about-grid">
        <Reveal className="card about-story">
          {about.paragraphs[lang].map((p, i) => (
            <p key={i}><RichText text={p} /></p>
          ))}
        </Reveal>
        <Reveal className="card">
          <ul className="fact-list">
            {about.facts.map((fact, i) => (
              <li key={i}>
                <span className="ic">{fact.icon}</span>
                <div><RichText text={fact.text[lang]} /></div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
