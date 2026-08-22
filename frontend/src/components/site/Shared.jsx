import { useEffect } from "react";
import { Reveal } from "./Reveal";

// Sets document title + meta description per page.
export const useSeo = (title, description) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let m = document.querySelector('meta[name="description"]');
      if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
      m.setAttribute("content", description);
    }
  }, [title, description]);
};

export const PageHero = ({ eyebrow, title, subtitle }) => (
  <section className="bg-brand-charcoal text-white relative grain overflow-hidden" data-testid="page-hero">
    <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-terracotta/20 blur-3xl" />
    <div className="container-x pt-16 pb-14 sm:pt-20 sm:pb-16 relative z-[2]">
      <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
      <Reveal delay={0.08}><h1 className="h-section text-white mt-4 max-w-3xl">{title}</h1></Reveal>
      {subtitle && <Reveal delay={0.16}><p className="mt-5 text-white/65 max-w-2xl text-lg">{subtitle}</p></Reveal>}
    </div>
  </section>
);

export const SectionHead = ({ eyebrow, title, subtitle, center = false, dark = false, className = "" }) => (
  <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl ${className}`}>
    <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
    <Reveal delay={0.06}><h2 className={`h-section mt-3 ${dark ? "text-white" : ""}`}>{title}</h2></Reveal>
    {subtitle && <Reveal delay={0.12}><p className={`mt-4 text-lg ${dark ? "text-white/65" : "text-brand-muted"}`}>{subtitle}</p></Reveal>}
  </div>
);
