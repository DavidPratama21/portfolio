import { contact, footer, profile, type Lang } from "../data/content";
import { Reveal, RichText } from "./ui";

export function Contact({ lang }: { lang: Lang }) {
  return (
    <>
      <div className="contact" id="contact">
        <Reveal className="contact-inner">
          <h2><RichText text={contact.headline[lang]} /></h2>
          <p>{contact.sub[lang]}</p>
          <div className="contact-links">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              {contact.emailLabel[lang]}
            </a>
            {profile.socials.map((social) => (
              <a key={social.label} className="btn" href={social.url}
                 target="_blank" rel="noopener noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
      <footer>{footer[lang]}</footer>
    </>
  );
}
