import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppCTA } from "./CTA";
import { CONFIG } from "@/config/business";

const NAV = [
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export const AnnouncementBar = () => (
  <div className="bg-brand-charcoal text-white/85 text-[12px] sm:text-[13px] tracking-wide" data-testid="announcement-bar">
    <div className="container-x py-2.5 text-center font-medium">{CONFIG.ANNOUNCEMENT}</div>
  </div>
);

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="sticky top-0 z-50" data-testid="site-header">
      <AnnouncementBar />
      <div className={`transition-all duration-500 border-b ${scrolled ? "bg-brand-ivory/90 backdrop-blur-md border-brand-line shadow-[0_8px_30px_-20px_rgba(0,0,0,0.35)]" : "bg-brand-ivory border-transparent"}`}>
        <div className="container-x flex items-center justify-between h-[74px]">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV.map((n) => {
              const active = pathname === n.to;
              return (
                <Link key={n.to} to={n.to} data-testid={`nav-${n.label.toLowerCase()}`}
                  className={`relative text-[15px] font-medium transition-colors ${active ? "text-brand-terracotta" : "text-brand-charcoal hover:text-brand-terracotta"}`}>
                  {n.label}
                  {active && <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand-terracotta" />}
                </Link>
              );
            })}
          </nav>
          <div className="hidden lg:block"><WhatsAppCTA testId="nav-whatsapp" className="!min-h-[46px] !px-5 !text-sm" /></div>
          <button className="lg:hidden p-2 -mr-2 text-brand-charcoal" onClick={() => setOpen(true)} aria-label="Open menu" data-testid="mobile-menu-open">
            <Menu size={26} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-brand-charcoal/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-brand-ivory flex flex-col"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
              <div className="flex items-center justify-between h-[74px] px-6 border-b border-brand-line">
                <Logo showDescriptor={false} />
                <button className="p-2 text-brand-charcoal" onClick={() => setOpen(false)} aria-label="Close menu" data-testid="mobile-menu-close"><X size={26} /></button>
              </div>
              <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
                {NAV.map((n, i) => (
                  <motion.div key={n.to} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.06 }}>
                    <Link to={n.to} className="block py-4 text-2xl font-heading font-semibold text-brand-charcoal border-b border-brand-line/60" data-testid={`mobile-nav-${n.label.toLowerCase()}`}>
                      {n.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto p-6 flex flex-col gap-3">
                <WhatsAppCTA className="w-full" testId="mobile-whatsapp" />
                <a href={CONFIG.BUSINESS_PHONE ? `tel:${CONFIG.BUSINESS_PHONE}` : "#"} className="btn btn-outline w-full" data-testid="mobile-call">
                  <Phone size={16} /> Call Showroom
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
