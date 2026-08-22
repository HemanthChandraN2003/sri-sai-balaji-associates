import { PageHero, useSeo } from "@/components/site/Shared";
import { CONFIG } from "@/config/business";

export default function Legal({ kind }) {
  const isPrivacy = kind === "privacy";
  useSeo(`${isPrivacy ? "Privacy Policy" : "Terms"} | ${CONFIG.BUSINESS_NAME}`);
  return (
    <>
      <PageHero eyebrow="Legal" title={isPrivacy ? "Privacy Policy" : "Terms of Use"} />
      <section className="bg-brand-ivory py-16 sm:py-24">
        <div className="container-x max-w-3xl prose-brand space-y-5 text-brand-muted text-[16px] leading-relaxed">
          <p>This is a sample {isPrivacy ? "privacy policy" : "terms of use"} page for {CONFIG.BUSINESS_NAME}. Replace this placeholder content with the business's official {isPrivacy ? "privacy policy" : "terms"} before going live.</p>
          {isPrivacy ? (
            <>
              <p><strong className="text-brand-charcoal">Information we collect.</strong> When you contact us by phone or WhatsApp, we use the details you share (such as your name and requirement) only to respond to your enquiry. This website does not collect or store personal data.</p>
              <p><strong className="text-brand-charcoal">How we use it.</strong> Details you share are used only to respond to your enquiry and help with your requirement.</p>
              <p><strong className="text-brand-charcoal">Contact.</strong> For any questions about your data, contact the showroom at {CONFIG.BUSINESS_PHONE}.</p>
            </>
          ) : (
            <>
              <p><strong className="text-brand-charcoal">Use of this website.</strong> Content is provided for general information about our products and showroom. Product availability, brands and pricing may change.</p>
              <p><strong className="text-brand-charcoal">Accuracy.</strong> We aim to keep information current, but details such as opening hours and stock should be confirmed with the showroom directly.</p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
