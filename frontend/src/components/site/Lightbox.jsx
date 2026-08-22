import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const Lightbox = ({ items, index, onClose, onNav }) => {
  const open = index !== null && index >= 0;

  const handleKey = useCallback((e) => {
    if (!open) return;
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") onNav(1);
    if (e.key === "ArrowLeft") onNav(-1);
  }, [open, onClose, onNav]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] bg-brand-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose} role="dialog" aria-modal="true" aria-label="Image viewer" data-testid="lightbox"
        >
          <button className="absolute top-5 right-5 text-white/80 hover:text-white p-2" onClick={onClose} aria-label="Close" data-testid="lightbox-close"><X size={30} /></button>
          <button className="absolute left-3 sm:left-8 text-white/80 hover:text-white p-2" onClick={(e) => { e.stopPropagation(); onNav(-1); }} aria-label="Previous" data-testid="lightbox-prev"><ChevronLeft size={40} /></button>
          <button className="absolute right-3 sm:right-8 text-white/80 hover:text-white p-2" onClick={(e) => { e.stopPropagation(); onNav(1); }} aria-label="Next" data-testid="lightbox-next"><ChevronRight size={40} /></button>
          <motion.img
            key={index}
            src={items[index].src}
            alt={`${items[index].cat} showroom view`}
            className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl"
            initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          />
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-wide">{items[index].cat}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
