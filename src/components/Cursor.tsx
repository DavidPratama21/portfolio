import { useEffect, useState } from "react";

/**
 * Custom cursor: dot + trailing ring.
 * Cuma aktif di device dengan pointer presisi (mouse/trackpad),
 * dan otomatis off kalau user prefer reduced motion.
 */
export function Cursor() {
  const [enabled] = useState(
    () =>
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (!enabled) return;
    const html = document.documentElement;
    html.classList.add("has-custom-cursor");

    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    const ring = document.createElement("div");
    ring.className = "cursor-ring";
    document.body.append(ring, dot);

    let mx = -100, my = -100; // posisi mouse
    let rx = -100, ry = -100; // posisi ring (nge-lag di belakang)
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    // deteksi hover elemen interaktif via delegation
    const HOVER_TARGETS = "a, button, .chip, .project, .skill-card, .toggle-btn";
    const onOver = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.(HOVER_TARGETS);
      html.classList.toggle("cursor-hover", !!el);
    };

    const onDown = () => html.classList.add("cursor-down");
    const onUp = () => html.classList.remove("cursor-down");

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      dot.remove();
      ring.remove();
      html.classList.remove("has-custom-cursor", "cursor-hover", "cursor-down");
    };
  }, [enabled]);

  return null;
}
