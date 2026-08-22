import { useState, useMemo } from "react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, useSeo } from "@/components/site/Shared";
import { Lightbox } from "@/components/site/Lightbox";
import { GALLERY, GALLERY_CATS } from "@/data/site";

export default function Gallery() {
  useSeo("Gallery | Sri Sai Balaji Associates — Tiles & Bathroom Showroom, Anantapur",
    "View tiles, bathrooms, faucets, sanitaryware, kitchen and showroom imagery from Sri Sai Balaji Associates in Anantapur.");
  const [cat, setCat] = useState("All");
  const [lb, setLb] = useState(null);

  const items = useMemo(() => (cat === "All" ? GALLERY : GALLERY.filter((g) => g.cat === cat)), [cat]);
  const nav = (d) => setLb((p) => (p + d + items.length) % items.length);

  return (
    <>
      <PageHero eyebrow="Gallery" title="Materials, fittings and finished spaces." subtitle="A look at the kinds of tiles, bathrooms and fittings you can explore in our showroom. Tap any image to view it fullscreen." />

      <section className="bg-brand-ivory py-14 sm:py-20">
        <div className="container-x">
          <div className="flex flex-wrap gap-2.5 mb-10" role="tablist" aria-label="Filter gallery">
            {GALLERY_CATS.map((c) => (
              <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)} data-testid={`gallery-filter-${c.toLowerCase()}`}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${cat === c ? "bg-brand-charcoal text-white border-brand-charcoal" : "bg-white text-brand-charcoal border-brand-line hover:border-brand-charcoal"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
            {items.map((g, i) => (
              <Reveal key={`${cat}-${i}`} delay={(i % 3) * 0.05}>
                <button className="zoom-parent block w-full rounded-[3px] overflow-hidden group relative" style={{ aspectRatio: g.ratio }} onClick={() => setLb(i)} data-testid={`gallery-image-${i}`} aria-label={`View ${g.cat} image fullscreen`}>
                  <img src={g.src} alt={`${g.cat} display at the showroom`} className="img-cover zoom-img" loading="lazy" />
                  <span className="absolute inset-0 group-hover:bg-brand-charcoal/25 transition-colors flex items-end p-4">
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">{g.cat}</span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox items={items} index={lb} onClose={() => setLb(null)} onNav={nav} />
    </>
  );
}
