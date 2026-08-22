import { PageHero, useSeo } from "@/components/site/Shared";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppCTA, CallCTA, DirectionsCTA } from "@/components/site/CTA";
import { FAQS } from "@/data/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  useSeo("FAQ | Sri Sai Balaji Associates — Tiles & Sanitaryware, Anantapur",
    "Answers to common questions about products, showroom location, timings, brands, quotations and delivery at Sri Sai Balaji Associates, Anantapur.");
  return (
    <>
      <PageHero eyebrow="FAQ" title="Common questions, clearly answered." subtitle="Purchasing, showroom visits, products and contact — the essentials in one place." />

      <section className="bg-brand-ivory py-16 sm:py-24">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Reveal>
              <Accordion type="single" collapsible className="border-t border-brand-line" defaultValue="item-0">
                {FAQS.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-brand-line" data-testid={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-heading font-semibold text-lg text-brand-charcoal hover:no-underline py-5">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-brand-muted text-[15px] leading-relaxed pb-5">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <div className="bg-white border border-brand-line rounded-[3px] p-7 sticky top-28">
                <span className="eyebrow">Still have a question?</span>
                <h3 className="h-card mt-3">Talk to the showroom</h3>
                <p className="mt-3 text-brand-muted text-[15px]">The fastest way to check availability, timings or brands is to message or call us directly.</p>
                <div className="mt-6 flex flex-col gap-3">
                  <WhatsAppCTA className="w-full" />
                  <CallCTA className="w-full" />
                  <DirectionsCTA className="w-full" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
