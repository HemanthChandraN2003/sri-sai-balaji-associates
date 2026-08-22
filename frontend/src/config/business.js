// ============================================================================
// CENTRAL BUSINESS CONFIGURATION
// Edit every value here.
// ============================================================================

export const CONFIG = {
  BUSINESS_NAME: "Sri Sai Balaji Associates",
  BUSINESS_ALT_NAME: "Sri Sai Balaji Associates (Tiles & Taps)",
  BUSINESS_TAGLINE: "Tiles, Taps & Bathroom Essentials for Spaces You'll Love",
  BUSINESS_DESCRIPTOR: "TILES • TAPS • SANITARYWARE",

  // Experience (confirmed by owner)
  EXPERIENCE_TEXT: "8+ Years",
  EXPERIENCE_LINE: "Serving the local market for over 8 years.",

  ANNOUNCEMENT: "Serving homeowners, builders and design professionals in Anantapur.",

  // --- Contact ---
  BUSINESS_ADDRESS: "MJW5+CQ3, Gooty Rd, opp. Market Yard, Bukkaraya Samudram, Andhra Pradesh 515005",
  BUSINESS_PHONE: "+91 98480 48386",
  BUSINESS_WHATSAPP: "919848048386",
  BUSINESS_HOURS: [
    { day: "Monday – Saturday", time: "10:00 AM – 8:30 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  // --- Location / Maps ---
  SERVICE_AREA: "Anantapur & surrounding areas, Andhra Pradesh",
  GOOGLE_MAPS_URL: "https://maps.app.goo.gl/5MaZndTAWuZW4USQ7",
  GOOGLE_MAPS_EMBED_URL:
    "https://www.google.com/maps?q=MJW5%2BCQ3%20Gooty%20Rd%20opp%20Market%20Yard%20Bukkaraya%20Samudram%20515005&output=embed",
  GOOGLE_MAPS_DIRECTIONS_URL: "https://maps.app.goo.gl/5MaZndTAWuZW4USQ7",

  // --- Reviews / Rating ---
  GOOGLE_RATING: "Around 4.5 stars",
  GOOGLE_RATINGS_COUNT: "200+ reviews",
  GOOGLE_REVIEW_URL: "https://maps.app.goo.gl/5MaZndTAWuZW4USQ7",

  // --- Brands ---
  BRANDS_LINE: "We always stock Bandhan and a range of other leading brands.",

  // --- Social ---
  INSTAGRAM_URL: "",
  FACEBOOK_URL: "",

  // --- Conversion copy ---
  WHATSAPP_PREFILL:
    "Hi, I'm looking for tiles/bathroom fittings for a project. Could you please help me with the available options?",
};

// Helpers -------------------------------------------------------------------
export const hasPhone = () => Boolean(CONFIG.BUSINESS_PHONE);
export const hasWhatsapp = () => Boolean(CONFIG.BUSINESS_WHATSAPP);

export const telHref = () =>
  hasPhone() ? `tel:${CONFIG.BUSINESS_PHONE.replace(/[^+\d]/g, "")}` : "#";

export const whatsappHref = (msg) =>
  hasWhatsapp()
    ? `https://wa.me/${CONFIG.BUSINESS_WHATSAPP}?text=${encodeURIComponent(
        msg || CONFIG.WHATSAPP_PREFILL
      )}`
    : "#";

export const directionsHref = () =>
  CONFIG.GOOGLE_MAPS_DIRECTIONS_URL || CONFIG.GOOGLE_MAPS_URL || "#";
