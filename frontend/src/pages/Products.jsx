import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHead, useSeo } from "@/components/site/Shared";
import { WhatsAppCTA, CallCTA } from "@/components/site/CTA";
import { CATEGORIES } from "@/data/site";
import { CONFIG } from "@/config/business";
import { Check } from "lucide-react";

export default function Products() {
  useSeo("Products | Tiles, Sanitaryware, Taps & Kitchen Sinks in Anantapur",
    "Browse product categories at Sri Sai Balaji Associates — tiles, sanitaryware, bathroom fittings, taps, faucets, kitchen sinks and accessories in Anantapur.");
  return (
    <>
      <PageHero eyebrow="Products" title="Explore by category, then see it in the showroom." subtitle="We keep discovery simple — pick a category to understand the range, then visit or enquire to compare specific designs, finishes and brands." />

      <section className="bg-brand-ivory py-16 sm:py-24">
        <div className="container-x space-y-16 sm:space-y-24">
          {CATEGORIES.map((c, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={c.slug} id={c.slug} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-28" data-testid={`product-${c.slug}`}>
                <Reveal className={flip ? "lg:order-2" : ""}>
                  <div className="zoom-parent aspect-[4/3] overflow-hidden rounded-[3px] border border-brand-line">
                    <img src={c.img} alt={`${c.name} at the showroom`} className="img-cover zoom-img" loading="lazy" />
                  </div>
                </Reveal>
                <div className={flip ? "lg:order-1" : ""}>
                  <Reveal><span className="eyebrow">0{i + 1} — Category</span></Reveal>
                  <Reveal delay={0.06}><h2 className="h-section mt-3">{c.name}</h2></Reveal>
                  <Reveal delay={0.12}><p className="mt-4 text-lg text-brand-muted">{c.short}</p></Reveal>
                  <Reveal delay={0.18}>
                    <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
                      {c.examples.map((e) => (
                        <li key={e} className="flex items-center gap-2.5 text-brand-ink text-[15px]"><Check size={16} className="text-brand-terracotta shrink-0" />{e}</li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={0.24}>
                    <p className="mt-6 text-sm text-brand-muted">Brands: {CONFIG.BRANDS_LINE}</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <WhatsAppCTA label={`Ask About ${c.name}`} msg={`Hi, I'm interested in ${c.name}. Could you please share the available options?`} testId={`ask-${c.slug}`} />
                      <CallCTA testId={`call-${c.slug}`} />
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-brand-alt py-16">
        <div className="container-x text-center max-w-2xl mx-auto">
          <SectionHead center eyebrow="Other products" title="Looking for something else?" subtitle="We also stock geysers, tile adhesives and related finishing products. Ask us about your specific requirement." />
          <div className="mt-8 flex justify-center"><WhatsAppCTA label="Ask About This Category" /></div>
        </div>
      </section>
    </>
  );
}
