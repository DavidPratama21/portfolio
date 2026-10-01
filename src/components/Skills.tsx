import { skills, sections, type Lang } from "../data/content";
import { Reveal } from "./ui";

export function Skills({ lang }: { lang: Lang }) {
  return (
    <section id="skills">
      <Reveal className="section-head">
        <h2>{sections.skills.title[lang]}</h2>
        <span className="tag">{sections.skills.tag[lang]}</span>
      </Reveal>
      <div className="skills-grid">
        {skills.map((group, i) => (
          <Reveal key={group.title.en} delay={i * 90} className={`skill-card ${group.color}`}>
            <h3>{group.icon} {group.title[lang]}</h3>
            <div className="chips">
              {group.chips.map((chip) => (
                <span key={chip} className="chip">{chip}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
