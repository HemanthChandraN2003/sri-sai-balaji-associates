import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Star, Check } from "lucide-react";

import { Reveal, MaskLines } from "@/components/site/Reveal";
import { SectionHead, useSeo } from "@/components/site/Shared";
import { CTA, WhatsAppCTA, CallCTA, DirectionsCTA } from "@/components/site/CTA";
import { Lightbox } from "@/components/site/Lightbox";
import { MapSection } from "@/components/site/MapSection";
import { CONFIG } from "@/config/business";
import { IMG, CATEGORIES, GALLERY, WHY, FAQS, TRUST, REVIEWS } from "@/data/site";

const MARQUEE = ["Floor Tiles", "Wall Tiles", "Designer Tiles", "Wash Basins", "Taps & Faucets", "Shower Fittings", "Kitchen Sinks", "Sanitaryware", "Bathroom Accessories"];

function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);

  return (
    <section ref={ref} className="bg-brand-ivory relative" data-testid="hero">
      <div className="container-x pt-12 pb-16 sm:pt-16 lg:pt-20 lg:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <motion.span className="eyebrow block" initial={{ opacity: reduce ? 1 : 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>Tiles • Taps • Sanitaryware — Anantapur</motion.span>
          <h1 className="h-hero mt-5">
            <MaskLines delay={0.12} lines={["Tiles, Taps &", "Bathroom Essentials", "for Spaces"]} />
            <span className="block overflow-hidden pb-[0.14em]">
              <motion.span className="block text-brand-terracotta italic" initial={{ y: reduce ? 0 : "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                You'll Love.
              </motion.span>
            </span>
          </h1>
          <motion.p className="mt-6 text-lg text-brand-muted max-w-xl" initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            Explore tiles, sanitaryware, faucets, sinks and bathroom fittings from a long-established local showroom in Anantapur. Visit us to compare designs, finishes and options for your project.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3" initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}>
            <WhatsAppCTA testId="hero-whatsapp" />
            <DirectionsCTA variant="outline" testId="hero-directions" />
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="zoom-parent relative aspect-[4/5] sm:aspect-[16/12] overflow-hidden rounded-[3px]">
            <motion.img style={{ y }} src={IMG.heroBath} alt="Modern bathroom interior with premium tiles and fittings" className="img-cover scale-110" loading="eager" width="1400" height="1050" />
          </div>
          <motion.div
            className="hidden sm:flex absolute -bottom-6 -left-6 bg-white border border-brand-line rounded-[2px] p-4 pr-6 items-center gap-3 shadow-xl"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div className="w-11 h-11 grid place-items-center bg-brand-terracotta text-white rounded-[2px] font-heading font-bold">✦</div>
            <div>
              <p className="font-heading font-semibold text-brand-charcoal leading-tight">Product → Material → Room</p>
              <p className="text-sm text-brand-muted">See finishes in person</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="border-y border-brand-line bg-brand-alt/60 overflow-hidden py-4">
        <div className="marquee gap-10 whitespace-nowrap" aria-hidden="true">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="text-brand-charcoal/70 font-heading font-semibold text-lg flex items-center gap-10">
              {m} <span className="text-brand-terracotta">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="bg-brand-ivory py-14" data-testid="trust-indicators">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-px bg-brand-line border border-brand-line rounded-[2px] overflow-hidden">
        {TRUST.map((t, i) => (
          <Reveal key={i} delay={i * 0.06} className="bg-brand-ivory p-6 text-center">
            <p className="font-heading font-bold text-xl text-brand-charcoal">{t.label}</p>
            <p className="text-sm text-brand-muted mt-1">{t.sub}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Categories() {
  const items = CATEGORIES.slice(0, 5);
  return (
    <section className="bg-brand-surface py-20 sm:py-28 border-t border-brand-line" data-testid="categories-section">
      <div className="container-x">
        <SectionHead eyebrow="What we offer" title="Everything You Need to Finish Your Space" subtitle="Explore our core categories, then visit the showroom to compare finishes and fittings in person." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 0.08}>
              <Link to="/products" className="surface-card group block h-full rounded-[3px] overflow-hidden" data-testid={`home-category-${c.slug}`}>
                <div className="zoom-parent aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.name} className="img-cover zoom-img" loading="lazy" width="1000" height="750" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="h-card">{c.name}</h3>
                    <ArrowRight size={20} className="text-brand-terracotta transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 text-brand-muted text-[15px]">{c.short}</p>
                </div>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={0.16}>
            <Link to="/products" className="h-full min-h-[280px] flex flex-col justify-center items-start p-8 bg-brand-charcoal text-white rounded-[3px] group" data-testid="home-category-all">
              <span className="eyebrow">Full range</span>
              <h3 className="h-card text-white mt-3">See all product categories</h3>
              <span className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-taupe group-hover:text-white transition-colors">Explore Products <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Editorial() {
  return (
    <section className="bg-brand-alt py-20 sm:py-28" data-testid="editorial-section">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal className="order-2 lg:order-1">
          <span className="eyebrow">01 — Design philosophy</span>
          <h2 className="h-section mt-4">Design the Space, Not Just the Surface</h2>
          <p className="mt-6 text-lg text-brand-muted">
            Choosing tiles and fittings is about more than selecting individual products. It's about creating a space where colours, textures, finishes and functionality work together.
          </p>
          <ul className="mt-6 space-y-3">
            {["Compare colours & textures side by side", "Coordinate tiles, taps and sanitaryware", "Options for every room and budget"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-brand-ink"><Check size={18} className="text-brand-terracotta" />{t}</li>
            ))}
          </ul>
          <div className="mt-8"><CTA to="/products" variant="accent" arrow testId="editorial-cta">Explore Our Collection</CTA></div>
        </Reveal>
        <Reveal delay={0.12} className="order-1 lg:order-2">
          <div className="zoom-parent aspect-[4/5] overflow-hidden rounded-[3px]">
            <img src={IMG.editorialBath} alt="Architectural bathroom with coordinated materials and finishes" className="img-cover zoom-img" loading="lazy" width="1400" height="1750" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-brand-surface py-20 sm:py-28 border-t border-brand-line" data-testid="why-section">
      <div className="container-x">
        <SectionHead eyebrow="02 — Why choose us" title="A Showroom That Works for Your Project" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY.map((w, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="surface-card h-full p-7 rounded-[3px]">
                <span className="font-heading font-bold text-4xl text-brand-taupe">0{i + 1}</span>
                <h3 className="font-heading font-semibold text-xl mt-4">{w.title}</h3>
                <p className="mt-2 text-brand-muted text-[15px]">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showroom() {
  return (
    <section className="relative py-24 sm:py-32 grain overflow-hidden" data-testid="showroom-section">
      <div className="absolute inset-0">
        <img src={IMG.showroom} alt="Tile and material showroom display" className="img-cover" loading="lazy" />
        <div className="absolute inset-0 bg-brand-charcoal/70" />
      </div>
      <div className="container-x relative z-[2] max-w-2xl">
        <Reveal><span className="eyebrow">03 — Visit us</span></Reveal>
        <Reveal delay={0.08}><h2 className="h-section text-white mt-4">See the Finishes Before You Decide</h2></Reveal>
        <Reveal delay={0.16}><p className="mt-5 text-white/75 text-lg">Photos can only tell you so much. Visit the showroom to compare colours, textures, finishes and fittings in person.</p></Reveal>
        <Reveal delay={0.24}><div className="mt-8 flex flex-wrap gap-3"><DirectionsCTA variant="accent" testId="showroom-directions" /><CTA to="/gallery" variant="ghost-light" arrow testId="showroom-gallery">View Gallery</CTA></div></Reveal>
      </div>
    </section>
  );
}

function GalleryPreview({ onOpen }) {
  const items = GALLERY.slice(0, 6);
  return (
    <section className="bg-brand-ivory py-20 sm:py-28" data-testid="gallery-preview">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead eyebrow="Gallery" title="Explore the Collection" className="!max-w-xl" />
          <Reveal><Link to="/gallery" className="inline-flex items-center gap-2 font-semibold text-brand-terracotta hover:gap-3 transition-all" data-testid="gallery-viewall">View full gallery <ArrowRight size={18} /></Link></Reveal>
        </div>
        <div className="mt-10 columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
          {items.map((g, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <button className="zoom-parent block w-full rounded-[3px] overflow-hidden group relative" style={{ aspectRatio: g.ratio }} onClick={() => onOpen(i)} data-testid={`gallery-item-${i}`} aria-label={`View ${g.cat} image`}>
                <img src={g.src} alt={`${g.cat} display`} className="img-cover zoom-img" loading="lazy" />
                <span className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/25 transition-colors flex items-end p-4">
                  <span className="text-white text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">{g.cat}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars({ n }) {
  return (
    <div className="flex gap-0.5 text-brand-terracotta" aria-label={`${n} out of 5 stars`}>
      {[...Array(5)].map((_, i) => <Star key={i} size={17} className={i < n ? "fill-current" : "fill-none text-brand-line"} />)}
    </div>
  );
}

function ReviewsBlock() {
  return (
    <section className="bg-brand-surface py-20 sm:py-28 border-t border-brand-line" data-testid="reviews-section">
      <div className="container-x">
        <SectionHead center eyebrow="Reviews" title="What Customers Say" subtitle="Genuine feedback from customers who have visited the showroom." />
        <Reveal delay={0.06}>
          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="flex gap-1 text-brand-terracotta">{[...Array(5)].map((_, i) => <Star key={i} size={24} className={i < 4 ? "fill-current" : "fill-current opacity-50"} />)}</div>
            <p className="font-heading font-bold text-2xl text-brand-charcoal">{CONFIG.GOOGLE_RATING}</p>
            <p className="text-brand-muted">Based on {CONFIG.GOOGLE_RATINGS_COUNT}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="surface-card h-full p-7 rounded-[3px] flex flex-col" data-testid={`review-card-${i}`}>
                <Stars n={r.stars} />
                <blockquote className="mt-4 text-brand-ink text-[15px] leading-relaxed flex-1">“{r.text}”</blockquote>
                <figcaption className="mt-5 pt-4 border-t border-brand-line font-heading font-semibold text-brand-charcoal">{r.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center"><CTA to="/reviews" variant="outline" arrow testId="reviews-more">Read More Reviews</CTA></div>
      </div>
    </section>
  );
}

function FaqPreview() {
  return (
    <section className="bg-brand-alt py-20 sm:py-28" data-testid="faq-preview">
      <div className="container-x grid lg:grid-cols-3 gap-12">
        <SectionHead eyebrow="Good to know" title="Questions, Answered" subtitle="A few common questions. See the full FAQ for more." />
        <div className="lg:col-span-2 divide-y divide-brand-line border-y border-brand-line">
          {FAQS.slice(0, 4).map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="py-5">
                <h3 className="font-heading font-semibold text-lg text-brand-charcoal">{f.q}</h3>
                <p className="mt-2 text-brand-muted text-[15px]">{f.a}</p>
              </div>
            </Reveal>
          ))}
          <div className="py-5"><Link to="/faq" className="inline-flex items-center gap-2 font-semibold text-brand-terracotta" data-testid="faq-all">See all FAQs <ArrowRight size={18} /></Link></div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-brand-charcoal text-white py-20 sm:py-28 relative grain overflow-hidden" data-testid="final-cta">
      <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-brand-terracotta/20 blur-3xl" />
      <div className="container-x relative z-[2] text-center max-w-3xl mx-auto">
        <Reveal><h2 className="h-section text-white">Let's Find the Right Finish for Your Project</h2></Reveal>
        <Reveal delay={0.1}><p className="mt-5 text-white/70 text-lg">Have a tile, bathroom or fitting requirement? Contact the showroom and tell us what you're looking for.</p></Reveal>
        <Reveal delay={0.2}><div className="mt-8 flex flex-wrap gap-3 justify-center"><WhatsAppCTA testId="final-whatsapp" /><CallCTA variant="ghost-light" testId="final-call" /></div></Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  useSeo("Sri Sai Balaji Associates | Tiles, Taps & Sanitaryware in Anantapur",
    "Explore tiles, sanitaryware, taps, faucets, sinks and bathroom fittings at Sri Sai Balaji Associates in Anantapur. Visit our showroom or enquire today.");
  const [lb, setLb] = useState(null);
  const items = GALLERY.slice(0, 6);
  const nav = (d) => setLb((p) => (p + d + items.length) % items.length);

  return (
    <>
      <Hero />
      <Trust />
      <Categories />
      <Editorial />
      <WhyChooseUs />
      <Showroom />
      <GalleryPreview onOpen={setLb} />
      <ReviewsBlock />
      <FaqPreview />
      <FinalCTA />
      <section className="bg-brand-ivory py-20 sm:py-28" data-testid="home-contact">
        <div className="container-x">
          <SectionHead eyebrow="Contact" title="Visit the Showroom" className="mb-10" />
          <MapSection />
        </div>
      </section>
      <Lightbox items={items} index={lb} onClose={() => setLb(null)} onNav={nav} />
    </>
  );
}
