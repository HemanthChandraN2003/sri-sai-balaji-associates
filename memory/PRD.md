# PRD — Sri Sai Balaji Associates Website

## Problem Statement
Complete, polished, responsive marketing website for **Sri Sai Balaji Associates (Tiles & Taps)**, a tiles, sanitaryware, taps, faucets and bathroom-fittings showroom in Anantapur, Andhra Pradesh. Goal: drive qualified showroom enquiries (Get a Quote / WhatsApp / Call / Directions) with complete factual integrity — no fabricated data.

## Architecture
- **Frontend only**: React 19 (CRA/craco), react-router-dom, TailwindCSS, framer-motion (reveals + micro-interactions), lenis (smooth scroll), sonner (toasts), shadcn/ui.
- **No backend / no DB**. Quote form is a clearly-labelled DEMO (no persistence).
- Centralized config: `src/config/business.js` (all editable/placeholder business data + helpers for tel/WhatsApp/directions links).
- Data-driven content: `src/data/site.js` (categories, gallery, FAQs, why-choose-us, trust, images).

## Design
- Palette: charcoal #252525, taupe #B5A795, terracotta #B96545, ivory #F7F5F0, surface #FFF, alt #EAE5DD.
- Type: Manrope (headings 600/700), Inter (body 400/500/600), clamp() responsive.
- Signature: masked line-by-line hero reveal, editorial marquee, parallax hero image, scroll reveals, gallery lightbox, sticky mobile action bar.

## User Personas
Homeowners (new build / renovation), tile & flooring shoppers, sanitaryware/taps/kitchen-sink buyers, builders/contractors, interior designers, architects.

## Implemented (2026-06)
- Pages: Home, About, Products, Gallery, Reviews, FAQ, Contact, Quote, Privacy, Terms.
- Header w/ announcement bar, sticky transition, animated mobile hamburger menu.
- Home sections: hero, trust indicators, product categories, editorial, why-choose-us, showroom, gallery preview + lightbox, reviews (verified placeholders), FAQ preview, final CTA, contact/map.
- Conversion: WhatsApp (prefilled msg), Call (tel:), Get Directions (Google Maps), Quote form (validation + loading/success/error states, demo).
- Mobile sticky action bar (Call | WhatsApp | Directions).
- Local SEO: title/meta per page (useSeo), H1/H2 structure, LocalBusiness JSON-LD (no invented values), alt text.
- Accessibility: semantic HTML, labels, focus states, keyboard lightbox, prefers-reduced-motion, ARIA on menu/dialog.
- Factual integrity: all uncertain fields are `[VERIFY ...]` placeholders; "Since 2002" gated behind config flag; no fabricated reviews/ratings.

## Backlog
- P1: Connect Quote form to a real backend + email (Resend) once desired.
- P1: Owner to fill verified values in `business.js` (phone, WhatsApp, address, hours, rating, review URL, maps embed, email, socials, geo).
- P2: Add authentic business photography to replace stock images.
- P2: Blog / project-showcase section.
