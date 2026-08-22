// Authentic business photography supplied by the owner + curated stock fills.
const u = (url, w = 1200) =>
  url.includes("unsplash.com") ? `${url}&w=${w}` : url;

// Real showroom photos (owner-supplied)
const REAL = {
  showroomWide: "https://customer-assets-jai6qajn.emergentagent.net/job_balaji-showroom-2/artifacts/vnbrsqjf_image-3.png",
  kohlerBasins: "https://customer-assets-jai6qajn.emergentagent.net/job_balaji-showroom-2/artifacts/vj3h776e_image-2.png",
  tileDisplay: "https://customer-assets-jai6qajn.emergentagent.net/job_balaji-showroom-2/artifacts/jx6t108n_image-1.png",
};

export const IMG = {
  // hero + feature (authentic)
  heroBath: REAL.showroomWide,
  showroom: REAL.showroomWide,
  kohler: REAL.kohlerBasins,
  tileDisplay: REAL.tileDisplay,
  editorialBath: u("https://images.unsplash.com/photo-1756079664354-34944e001f6d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85", 1400),
  tileWall: u("https://images.unsplash.com/photo-1656147173067-2022b4ab3cc6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85", 1200),

  // categories
  tiles: REAL.tileDisplay,
  bathroom: u("https://images.unsplash.com/photo-1742134131017-44d377a611b1?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85", 1000),
  faucets: u("https://images.unsplash.com/photo-1602761004880-0cbb1ba589d2?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85", 1000),
  kitchen: u("https://images.unsplash.com/photo-1609210884848-2d530cfb2a07?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85", 1000),
  basin: REAL.kohlerBasins,
  accessories: u("https://images.unsplash.com/photo-1596180737956-00cb917e382b?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85", 1000),
  wood: u("https://images.unsplash.com/photo-1640190624040-62d153b59455?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85", 1000),
  bathtub: "https://images.pexels.com/photos/6957081/pexels-photo-6957081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  faucet2: u("https://images.unsplash.com/photo-1623111771733-d3ab4d26ce41?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85", 900),
  basin2: u("https://images.unsplash.com/photo-1596180744691-d19a1b90b53c?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85", 900),
  kitchen2: u("https://images.unsplash.com/photo-1629078692818-c5a0443f4ae3?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85", 900),
  bathroom2: u("https://images.unsplash.com/photo-1722923400899-af08ffc715c6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85", 900),
};

export const CATEGORIES = [
  { slug: "tiles", name: "Tiles", img: IMG.tiles,
    short: "Floor, wall and designer ceramic tiles in a range of finishes and formats.",
    examples: ["Floor tiles", "Wall tiles", "Designer tiles", "Marble-look", "Wood-look", "Large format"] },
  { slug: "sanitaryware", name: "Sanitaryware", img: IMG.basin,
    short: "Wash basins, toilets and sanitary fittings for modern bathrooms.",
    examples: ["Wash basins", "Toilets / WCs", "Vanity basins", "Pedestal basins"] },
  { slug: "bathroom", name: "Bathroom Fittings", img: IMG.bathroom,
    short: "Complete bathroom fittings, shower systems and finishing hardware.",
    examples: ["Shower fittings", "Health faucets", "Diverters", "Bathroom hardware"] },
  { slug: "taps", name: "Taps & Faucets", img: IMG.faucets,
    short: "Taps and faucets across finishes for basins, kitchens and showers.",
    examples: ["Basin taps", "Sink taps", "Shower mixers", "Wall-mount faucets"] },
  { slug: "kitchen", name: "Kitchen Sinks", img: IMG.kitchen,
    short: "Stainless steel and modern kitchen sinks in single and double bowls.",
    examples: ["Single bowl", "Double bowl", "With drainboard", "Under-mount"] },
  { slug: "accessories", name: "Bathroom Accessories", img: IMG.accessories,
    short: "Everyday bathroom accessories and finishing touches for your space.",
    examples: ["Towel rails", "Soap dispensers", "Robe hooks", "Shelves"] },
];

export const GALLERY = [
  { src: IMG.showroom, cat: "Showroom", ratio: "4/3" },
  { src: IMG.kohler, cat: "Sanitaryware", ratio: "4/3" },
  { src: IMG.tileDisplay, cat: "Tiles", ratio: "1/1" },
  { src: IMG.bathroom, cat: "Bathrooms", ratio: "1/1" },
  { src: IMG.faucets, cat: "Faucets", ratio: "4/3" },
  { src: IMG.basin, cat: "Sanitaryware", ratio: "1/1" },
  { src: IMG.kitchen, cat: "Kitchen", ratio: "4/3" },
  { src: IMG.wood, cat: "Tiles", ratio: "4/3" },
  { src: IMG.bathroom2, cat: "Bathrooms", ratio: "1/1" },
  { src: IMG.faucet2, cat: "Faucets", ratio: "1/1" },
  { src: IMG.basin2, cat: "Sanitaryware", ratio: "4/3" },
  { src: IMG.kitchen2, cat: "Kitchen", ratio: "1/1" },
  { src: IMG.tileWall, cat: "Showroom", ratio: "4/3" },
  { src: IMG.bathtub, cat: "Bathrooms", ratio: "4/3" },
];

export const GALLERY_CATS = ["All", "Tiles", "Bathrooms", "Faucets", "Sanitaryware", "Kitchen", "Showroom"];

export const WHY = [
  { title: "Wide Product Selection", body: "Explore tiles, sanitaryware, taps, faucets, sinks and bathroom accessories under one roof." },
  { title: "Experience You Can Build On", body: "Serving the local market for over 8 years." },
  { title: "Options for Different Projects", body: "Explore options suited to different homes, renovations and project requirements." },
  { title: "Personal Assistance", body: "Discuss your requirements and explore suitable options before making your decision." },
];

// Verified customer reviews (owner-supplied)
export const REVIEWS = [
  { name: "Hemanth Chandra N", stars: 5,
    text: "Wide variety, good quality, and excellent customer service. Totally worth it!" },
  { name: "Vijay Bhaskar", stars: 5,
    text: "Best place I have ever seen in Anantapur. They have lots of designs for flooring and interiors." },
  { name: "Swati Sai", stars: 4,
    text: "Large number of models and quality products across various brands — from brass items to PVC. Warm welcome and great deals. Thanks to Mr Mohan who helped me look through many models. Happy consumer!" },
];

export const FAQS = [
  { q: "What products do you sell?", a: "We offer tiles (floor, wall and designer), sanitaryware, bathroom fittings, taps and faucets, kitchen sinks and bathroom accessories — a wide selection for new homes and renovations." },
  { q: "Where is the showroom located?", a: "We're on Gooty Road, opposite the Market Yard, Bukkaraya Samudram, Andhra Pradesh 515005. Use the “Get Directions” button for turn-by-turn navigation." },
  { q: "What are your showroom timings?", a: "Monday to Saturday, 10:00 AM – 8:30 PM. Closed on Sundays." },
  { q: "Do you sell bathroom fittings?", a: "Yes. We stock bathroom fittings including shower systems, faucets and finishing hardware. Visit the showroom to compare finishes in person." },
  { q: "Do you sell kitchen sinks?", a: "Yes, we offer kitchen sinks in single and double-bowl configurations across a range of styles." },
  { q: "Which brands are available?", a: "We always stock Bandhan and a range of other leading brands. Availability varies over time, so please ask us for the current range for your requirement." },
  { q: "Can I request a quotation?", a: "Yes. Message us on WhatsApp or call the showroom with your requirement and we'll help you with suitable options and pricing." },
  { q: "Do you provide delivery?", a: "Please confirm delivery options and coverage with the showroom directly — we're happy to help." },
  { q: "Do you serve contractors and interior designers?", a: "Yes. We work with homeowners, builders, contractors, interior designers and architects for projects of different sizes." },
];

export const TRUST = [
  { label: "8+ Years", sub: "Serving Anantapur" },
  { label: "Local Showroom", sub: "Bukkaraya Samudram" },
  { label: "Tiles & Sanitaryware", sub: "Wide selection" },
  { label: "Bathroom & Kitchen", sub: "Fittings & sinks" },
];
