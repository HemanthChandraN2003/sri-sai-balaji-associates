import { Reveal } from "@/components/site/Reveal";
import { PageHero, useSeo } from "@/components/site/Shared";
import { CallCTA, WhatsAppCTA, CTA } from "@/components/site/CTA";
import { CONFIG } from "@/config/business";
import { REVIEWS } from "@/data/site";
import { Star, ExternalLink } from "lucide-react";

const THEMES = ["Customer friendliness", "Product variety", "High-end varieties", "Collections", "Customer service", "Availability of tiles & sanitaryware"];

function Stars({ n }) {
  return (
    <div className="flex gap-0.5 text-brand-terracotta" aria-label={`${n} out of 5 stars`}>
      {[...Array(5)].map((_, i) => <Star key={i} size={18} className={i < n ? "fill-current" : "fill-none text-brand-line"} />)}
    </div>
  );
}

export default function Reviews() {
  useSeo("Reviews | Sri Sai Balaji Associates, Anantapur",
    "Customer reviews for Sri Sai Balaji Associates, a tiles and sanitaryware showroom in Anantapur.");
  return (
    <>
      <PageHero eyebrow="Reviews" title="What customers say." subtitle="Genuine feedback from customers who have visited our showroom." />

      <section className="bg-brand-ivory py-16 sm:py-24">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Reveal>
              <div className="bg-brand-charcoal text-white rounded-[3px] p-8 grain relative overflow-hidden sticky top-28">
                <div className="relative z-[2]">
                  <div className="flex gap-1 text-brand-terracotta">{[...Array(5)].map((_, i) => <Star key={i} size={24} className={i < 4 ? "fill-current" : "fill-current opacity-50"} />)}</div>
                  <p className="mt-4 font-heading font-bold text-3xl">{CONFIG.GOOGLE_RATING}</p>
                  <p className="text-white/60 mt-1">Based on {CONFIG.GOOGLE_RATINGS_COUNT}</p>
                  <p className="mt-4 text-white/70 text-[15px]">Customers regularly praise our product variety, quality and helpful service.</p>
                  <a href={CONFIG.GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent mt-6 w-full" data-testid="review-us">Review Us on Google <ExternalLink size={15} /></a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3 space-y-6">
            {REVIEWS.map((r, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <figure className="bg-white border border-brand-line rounded-[3px] p-7" data-testid={`review-${i}`}>
                  <Stars n={r.stars} />
                  <blockquote className="mt-4 text-brand-ink text-[16px] leading-relaxed">“{r.text}”</blockquote>
                  <figcaption className="mt-5 pt-4 border-t border-brand-line font-heading font-semibold text-brand-charcoal">{r.name}</figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={0.1}>
              <div className="pt-2">
                <p className="text-brand-muted">Customers frequently mention:</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {THEMES.map((t) => <span key={t} className="px-4 py-2 bg-brand-alt border border-brand-line rounded-full text-sm text-brand-charcoal">{t}</span>)}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="container-x mt-16 text-center">
          <Reveal><h2 className="h-section">Had a good experience with us?</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-3 text-brand-muted text-lg">We'd appreciate your feedback — and we're always here to help with your next project.</p></Reveal>
          <Reveal delay={0.18}><div className="mt-7 flex flex-wrap gap-3 justify-center"><WhatsAppCTA /><CallCTA /></div></Reveal>
        </div>
      </section>
    </>
  );
}
