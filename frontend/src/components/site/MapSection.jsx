import { MapPin, ExternalLink } from "lucide-react";
import { CONFIG, directionsHref } from "@/config/business";
import { DirectionsCTA } from "./CTA";

export const MapSection = () => (
  <div className="grid lg:grid-cols-2 gap-8 items-stretch">
    <div className="bg-white border border-brand-line rounded-[2px] p-7 sm:p-9 flex flex-col">
      <span className="eyebrow">Visit the showroom</span>
      <h3 className="h-card mt-3">{CONFIG.BUSINESS_NAME}</h3>
      <ul className="mt-5 space-y-4 text-[15px] text-brand-ink flex-1">
        <li className="flex gap-3"><MapPin size={19} className="text-brand-terracotta shrink-0 mt-0.5" /><span>{CONFIG.BUSINESS_ADDRESS}</span></li>
        <li className="flex gap-3"><span className="w-[19px] shrink-0 text-brand-terracotta text-center font-semibold">☎</span><span>{CONFIG.BUSINESS_PHONE}</span></li>
        <li className="pt-2 border-t border-brand-line">
          <p className="font-medium text-brand-charcoal mb-2">Opening hours</p>
          {CONFIG.BUSINESS_HOURS.map((h, i) => (
            <div key={i} className="flex justify-between text-brand-muted py-1"><span>{h.day}</span><span>{h.time}</span></div>
          ))}
        </li>
      </ul>
      <div className="mt-6"><DirectionsCTA className="w-full" /></div>
    </div>

    <div className="bg-brand-alt border border-brand-line rounded-[2px] overflow-hidden min-h-[340px] relative">
      {CONFIG.GOOGLE_MAPS_EMBED_URL ? (
        <iframe title="Showroom location" src={CONFIG.GOOGLE_MAPS_EMBED_URL} className="w-full h-full min-h-[340px] border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          <MapPin size={40} className="text-brand-terracotta" />
          <p className="mt-4 font-heading font-semibold text-brand-charcoal">Map preview</p>
          <p className="mt-2 text-sm text-brand-muted max-w-xs">Add <code className="text-brand-terracotta">GOOGLE_MAPS_EMBED_URL</code> in the config to display the live map here.</p>
          <a href={directionsHref()} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-6" data-testid="map-open-external">
            Open in Google Maps <ExternalLink size={15} />
          </a>
        </div>
      )}
    </div>
  </div>
);
