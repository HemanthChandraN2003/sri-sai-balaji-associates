import { PageHero, useSeo } from "@/components/site/Shared";
import { MapSection } from "@/components/site/MapSection";
import { WhatsAppCTA, CallCTA, DirectionsCTA } from "@/components/site/CTA";

export default function Contact() {
  useSeo("Contact | Visit Sri Sai Balaji Associates Showroom, Anantapur",
    "Contact Sri Sai Balaji Associates in Anantapur — address, phone, WhatsApp, opening hours and Google Maps directions.");
  return (
    <>
      <PageHero eyebrow="Contact / Visit" title="Come see the finishes in person." subtitle="Visit the showroom, call, or message us on WhatsApp — we'll help you find the right tiles and fittings for your project." />

      <section className="bg-brand-ivory py-14 sm:py-20">
        <div className="container-x">
          <div className="flex flex-wrap gap-3 mb-12">
            <WhatsAppCTA /><CallCTA /><DirectionsCTA />
          </div>
          <MapSection />
        </div>
      </section>
    </>
  );
}
