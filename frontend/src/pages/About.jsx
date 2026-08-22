import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHead, useSeo } from "@/components/site/Shared";
import { WhatsAppCTA, CallCTA, DirectionsCTA } from "@/components/site/CTA";
import { IMG, WHY } from "@/data/site";
import { CONFIG } from "@/config/business";
import { Check } from "lucide-react";

const CHAPTERS = [
  { n: "01", t: "A local showroom, thoughtfully stocked", b: "Sri Sai Balaji Associates brings tiles, sanitaryware, taps, faucets, kitchen sinks and bathroom accessories together under one roof in Anantapur — so you can plan a whole space in one visit." },
  { n: "02", t: "Products chosen for real homes", b: "From everyday essentials to high-end varieties, our selection is built around the way people actually build and renovate homes here — practical, contemporary and made to last." },
  { n: "03", t: "Guidance without the pressure", b: "Compare colours, textures and finishes in person and talk through your requirement. We help you explore suitable options before you decide." },
];

export default function About() {
  useSeo("About | Sri Sai Balaji Associates — Tiles & Sanitaryware, Anantapur",
    "Learn about Sri Sai Balaji Associates, a modern local showroom for tiles, bathroom fittings and sanitaryware in Anantapur.");
  return (
    <>
      <PageHero eyebrow="Our story" title="A modern, trusted local showroom for tiles & bathroom essentials." subtitle="Premium, accessible and knowledgeable — helping homeowners, builders and designers in Anantapur create spaces they'll love." />

      <section className="bg-brand-ivory py-20 sm:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="zoom-parent aspect-[4/5] overflow-hidden rounded-[3px]">
              <img src={IMG.showroom} alt="Sri Sai Balaji Associates showroom display" className="img-cover zoom-img" loading="lazy" />
            </div>
          </Reveal>
          <div>
            <SectionHead eyebrow="Who we are" title="Tiles, taps and bathroom essentials for spaces you'll love" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-brand-muted">
                We're a local showroom focused on helping you finish your space beautifully — combining tiles, sanitaryware and fittings that work together. Our goal is simple: make it easy to explore materials, compare options and buy with confidence.
              </p>
            </Reveal>
            <Reveal delay={0.16}><p className="mt-4 text-brand-charcoal font-semibold">{CONFIG.EXPERIENCE_LINE}</p></Reveal>
            <Reveal delay={0.22}><div className="mt-8 flex flex-wrap gap-3"><WhatsAppCTA /><DirectionsCTA /></div></Reveal>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-20 sm:py-28 border-t border-brand-line">
        <div className="container-x">
          <SectionHead eyebrow="Our approach" title="How we think about finishing a space" />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {CHAPTERS.map((c, i) => (
              <Reveal key={c.n} delay={i * 0.08}>
                <div className="surface-card h-full p-8 rounded-[3px]">
                  <span className="font-heading font-bold text-5xl text-brand-terracotta/25">{c.n}</span>
                  <h3 className="font-heading font-semibold text-xl mt-4">{c.t}</h3>
                  <p className="mt-3 text-brand-muted text-[15px]">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-alt py-20 sm:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHead eyebrow="What you can expect" title="Reasons customers choose our showroom" />
            <ul className="mt-8 space-y-4">
              {WHY.map((w, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <li className="flex gap-4">
                    <span className="mt-1 w-6 h-6 shrink-0 grid place-items-center bg-brand-terracotta text-white rounded-full"><Check size={14} /></span>
                    <div>
                      <p className="font-heading font-semibold text-brand-charcoal">{w.title}</p>
                      <p className="text-brand-muted text-[15px]">{w.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={0.12}>
            <div className="zoom-parent aspect-[4/3] overflow-hidden rounded-[3px]">
              <img src={IMG.editorialBath} alt="Coordinated bathroom materials" className="img-cover zoom-img" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-charcoal text-white py-20 text-center">
        <div className="container-x max-w-2xl mx-auto">
          <h2 className="h-section text-white">Planning a project? Let's talk.</h2>
          <p className="mt-4 text-white/70 text-lg">Tell us what you're looking for and we'll help you explore suitable options.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center"><WhatsAppCTA variant="accent" /><CallCTA variant="ghost-light" /></div>
        </div>
      </section>
    </>
  );
}
