import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, MessageCircle, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";
import { CONFIG } from "@/config/business";

const Col = ({ title, children }) => (
  <div>
    <h4 className="font-heading font-semibold text-white text-sm tracking-wide mb-4">{title}</h4>
    <ul className="space-y-2.5 text-[15px] text-white/60">{children}</ul>
  </div>
);

export const Footer = () => (
  <footer className="bg-brand-charcoal text-white/70 relative grain" data-testid="site-footer">
    <div className="container-x py-16 relative z-[2]">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light testId="footer-logo" />
          <p className="mt-5 text-[15px] text-white/60 max-w-xs leading-relaxed">
            A modern, trusted local showroom for tiles, bathroom fittings, sanitaryware and finishing products in Anantapur.
          </p>
          <div className="flex gap-3 mt-6">
            {CONFIG.INSTAGRAM_URL && (
              <a href={CONFIG.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 grid place-items-center border border-white/20 hover:border-brand-terracotta hover:text-brand-terracotta transition-colors"><Instagram size={18} /></a>
            )}
            {CONFIG.FACEBOOK_URL && (
              <a href={CONFIG.FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 grid place-items-center border border-white/20 hover:border-brand-terracotta hover:text-brand-terracotta transition-colors"><Facebook size={18} /></a>
            )}
          </div>
        </div>

        <div className="lg:col-span-2">
          <Col title="Explore">
            <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </Col>
        </div>

        <div className="lg:col-span-3">
          <Col title="Visit / Contact">
            <li className="flex gap-2.5"><MapPin size={17} className="text-brand-terracotta shrink-0 mt-0.5" /><span>{CONFIG.BUSINESS_ADDRESS}</span></li>
            <li className="flex gap-2.5"><Phone size={17} className="text-brand-terracotta shrink-0 mt-0.5" /><span>{CONFIG.BUSINESS_PHONE}</span></li>
            <li className="flex gap-2.5"><MessageCircle size={17} className="text-brand-terracotta shrink-0 mt-0.5" /><span>WhatsApp: {CONFIG.BUSINESS_PHONE}</span></li>
            <li><a href={CONFIG.GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-brand-taupe hover:text-white transition-colors underline underline-offset-4">Open in Google Maps</a></li>
          </Col>
        </div>

        <div className="lg:col-span-3">
          <Col title="Opening Hours">
            {CONFIG.BUSINESS_HOURS.map((h, i) => (
              <li key={i} className="flex gap-2.5"><Clock size={17} className="text-brand-terracotta shrink-0 mt-0.5" /><span><span className="text-white/85">{h.day}:</span> {h.time}</span></li>
            ))}
          </Col>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-white/45">
        <p>© {new Date().getFullYear()} {CONFIG.BUSINESS_NAME}. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </div>
  </footer>
);
