// data/evinezer_products_module.js
// Minimal product dataset for Evinezer Divine Devor.
// Add, edit or expand entries later (titles, descriptions, images, prices, inventory).

const products = [
  {
    handle: "disco-light",
    title: "Disco Light",
    seo_title: "Disco Light · Evinezer Divine Devor",
    description: "Colorful disco light for parties and festive decor.",
    vendor: "Evinezer Divine Devor",
    images: ["/images/72a392d9-1251-428e-bf56-ff060527893b.png"],
    images_alt: ["Disco light product photo"],
    variants: [
      { sku: "DL-001", price: 2599, inventory: 4 }
    ]
  },
  {
    handle: "santa-in-car",
    title: "Santa in Car with Light",
    seo_title: "Santa in Car with Light",
    description: "Decorative Santa figurine in a car with built-in light.",
    vendor: "Evinezer Divine Devor",
    images: ["/images/Image (10).jpg"],
    images_alt: ["Santa in car"],
    variants: [
      { sku: "SC-001", price: 1299, inventory: 3 }
    ]
  },
  {
    handle: "snow-man-white",
    title: "Snow Man White",
    seo_title: "Snow Man White Ornament",
    description: "Cute white snowman ornament for tree or shelf.",
    vendor: "Evinezer Divine Devor",
    images: ["/images/Image (11).jpg"],
    images_alt: ["White snowman hanging"],
    variants: [
      { sku: "SMW-001", price: 749, inventory: 3 }
    ]
  },
  {
    handle: "red-velvet-balls",
    title: "Red Velvet Balls (set)",
    seo_title: "Red Velvet Balls",
    description: "Velvet-finish red baubles, premium holiday look.",
    vendor: "Evinezer Divine Devor",
    images: ["/images/Image (25).jpg"],
    images_alt: ["Red velvet balls set"],
    variants: [
      { sku: "RVB-001", price: 1799, inventory: 2 }
    ]
  },
  {
    handle: "gift-box-fuzzy",
    title: "Fuzzy Gift Box Decoration",
    seo_title: "Fuzzy Gift Box",
    description: "White fuzzy gift box ornament with red ribbon.",
    vendor: "Evinezer Divine Devor",
    images: ["/images/Image (24).jpg"],
    images_alt: ["Fuzzy gift box"],
    variants: [
      { sku: "GBF-001", price: 499, inventory: 6 }
    ]
  }
];

export default products;
