import { useState } from "react";
import { projects, sections, type Lang, type Project } from "../data/content";
import { Reveal } from "./ui";

/** Banner project: pakai screenshot kalau ada, jatuh balik ke emoji + garis-garis */
function Banner({ project, lang }: { project: Project; lang: Lang }) {
  const [failed, setFailed] = useState(false);

  if (project.image && !failed) {
    return (
      <div className="project-banner project-banner-img">
        <img
          src={project.image}
          alt={project.title[lang]}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className={`project-banner ${project.banner}`}>
      <span className="banner-emoji">{project.emoji}</span>
    </div>
  );
}

export function Projects({ lang }: { lang: Lang }) {
  return (
    <section id="projects">
      <Reveal className="section-head">
        <h2>{sections.projects.title[lang]}</h2>
        <span className="tag">{sections.projects.tag[lang]}</span>
      </Reveal>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <Reveal key={project.title.en} as="article" delay={i * 90} className="project">
            <Banner project={project} lang={lang} />
            <div className="project-body">
              <span className="project-role">{project.role[lang]}</span>
              <h3>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer"
                     style={{ textDecoration: "none" }}>
                    {project.title[lang]} ↗
                  </a>
                ) : (
                  project.title[lang]
                )}
              </h3>
              <p>{project.desc[lang]}</p>
              <div className="chips">
                {project.chips.map((chip) => (
                  <span key={chip} className="chip">{chip}</span>
                ))}
              </div>
              {(project.url || project.repo) && (
                <div className="project-links">
                  {project.url && (
                    <a className="project-link" href={project.url}
                       target="_blank" rel="noopener noreferrer">
                      {lang === "id" ? "Lihat Live" : "View Live"} ↗
                    </a>
                  )}
                  {project.repo && (
                    <a className="project-link" href={project.repo}
                       target="_blank" rel="noopener noreferrer">
                      {lang === "id" ? "Kode" : "Code"} ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
