import { useEffect, useRef, type ReactNode, type JSX } from "react";

/** Satu observer dipakai bareng semua <Reveal> — lebih murah daripada
 *  bikin IntersectionObserver baru per elemen. */
let revealObserver: IntersectionObserver | null = null;

function getRevealObserver() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            revealObserver?.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }
  return revealObserver;
}

/** Wrapper yang bikin elemen fade-in pas masuk viewport (dengan opsi stagger delay) */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  /** delay dalam ms — buat efek stagger antar item grid */
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = getRevealObserver();
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  const Component = Tag as any;
  return (
    <Component
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );
}

/** Parser mini: **teks** jadi <strong>, *teks* jadi <em> */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
