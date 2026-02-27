import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Oversized Cotton Shirt",
    price: 7900,
    category: "women",
    color: "White",
    colorHex: "#FAFAF9",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
    ],
    hoverImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    description:
      "Crafted from crisp organic cotton with a relaxed, oversized silhouette. Features dropped shoulders, a classic spread collar, and a clean concealed button placket. An essential layering piece for the modern wardrobe.",
    details: [
      "Relaxed oversized fit",
      "Spread collar with concealed placket",
      "Dropped shoulder seam",
      "Curved hem, slightly longer at back",
      "Single breast pocket",
    ],
    materials: "100% Organic Cotton. GOTS certified. Woven in Portugal.",
    care: "Machine wash cold. Tumble dry low. Iron on medium heat.",
    isNew: true,
  },
  {
    id: "2",
    name: "Wide-Leg Wool Trousers",
    price: 11500,
    category: "women",
    color: "Black",
    colorHex: "#1a1a1a",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
    ],
    hoverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    description:
      "Elegant wide-leg trousers tailored from premium Italian wool blend. High-waisted with a clean front pleat that drapes beautifully. The perfect balance between structured tailoring and effortless movement.",
    details: [
      "High-waisted, wide-leg silhouette",
      "Front pleat for structured drape",
      "Side zip closure with hook-and-bar",
      "Fully lined to knee",
      "32\" inseam",
    ],
    materials: "70% Virgin Wool, 25% Polyamide, 5% Elastane. Woven in Italy.",
    care: "Dry clean only. Steam to refresh.",
    isBestseller: true,
  },
  {
    id: "3",
    name: "Minimalist Leather Tote",
    price: 19500,
    category: "accessories",
    color: "Tan",
    colorHex: "#C4956A",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    ],
    hoverImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    description:
      "A refined everyday tote in vegetable-tanned leather that develops a rich patina over time. Unlined interior with a single zip pocket. Designed to carry everything you need with understated elegance.",
    details: [
      "Unstructured silhouette",
      "Two flat leather handles (22cm drop)",
      "Interior zip pocket",
      "Magnetic snap closure",
      "Dimensions: 38 x 32 x 12 cm",
    ],
    materials: "100% Vegetable-tanned cowhide leather. Produced in Tuscany, Italy.",
    care: "Avoid direct sunlight. Clean with damp cloth. Apply leather conditioner periodically.",
    isNew: true,
  },
  {
    id: "4",
    name: "Textured Knit Sweater",
    price: 8900,
    category: "men",
    color: "Navy",
    colorHex: "#1B2A4A",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
      "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800&q=80",
    ],
    hoverImage: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
    description:
      "A richly textured crew-neck sweater knit from extra-fine merino wool. The subtle basket-weave pattern adds visual depth without overwhelming the minimalist aesthetic. An elevated essential for layering.",
    details: [
      "Regular fit crew neck",
      "Basket-weave knit pattern",
      "Ribbed cuffs, collar and hem",
      "Tonal AMILOU branding at interior neck",
    ],
    materials: "100% Extra-fine Merino Wool (19.5 micron). Knitted in Scotland.",
    care: "Hand wash cold or dry clean. Lay flat to dry. Do not wring.",
  },
  {
    id: "5",
    name: "Silk Blend Slip Dress",
    price: 12500,
    category: "women",
    color: "Black",
    colorHex: "#0a0a0a",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80",
    ],
    hoverImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
    description:
      "An effortlessly elegant slip dress in fluid silk-blend fabric. The bias-cut construction follows the natural line of the body, creating a graceful drape. Delicate adjustable spaghetti straps and a subtle V-neckline.",
    details: [
      "Bias-cut, midi length",
      "Adjustable spaghetti straps",
      "V-neckline front and back",
      "Side slit at left hem",
      "Fully lined in silk",
    ],
    materials: "72% Silk, 28% Viscose. Woven in France.",
    care: "Dry clean only. Store on padded hanger.",
    isBestseller: true,
  },
  {
    id: "6",
    name: "Tailored Blazer",
    price: 15000,
    category: "women",
    color: "Charcoal",
    colorHex: "#4A4A4A",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
      "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80",
    ],
    hoverImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    description:
      "A precisely tailored single-breasted blazer in premium wool-blend. Clean lines and a slightly relaxed shoulder create a modern, architectural silhouette. Equally suited for the office and an evening out.",
    details: [
      "Single-breasted, two-button closure",
      "Notch lapel",
      "Flap pockets with interior welt pocket",
      "Double back vent",
      "Fully lined in viscose",
    ],
    materials: "80% Virgin Wool, 20% Polyamide. Made in Italy.",
    care: "Dry clean only. Steam to remove wrinkles.",
    isNew: true,
  },
  {
    id: "7",
    name: "Relaxed Linen Shirt",
    price: 6900,
    category: "men",
    color: "Sand",
    colorHex: "#C2B280",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800&q=80",
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=80",
    ],
    hoverImage: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800&q=80",
    description:
      "A breathable linen shirt with a relaxed camp collar for warm-weather ease. The washed finish gives it a soft, lived-in character from the first wear. An essential for effortless summer style.",
    details: [
      "Relaxed fit with camp collar",
      "Full button-through front",
      "Single chest patch pocket",
      "Straight hem",
      "Pre-washed for softness",
    ],
    materials: "100% European Linen. OEKO-TEX certified. Woven in Lithuania.",
    care: "Machine wash cold. Hang dry. Iron on high heat if desired.",
  },
  {
    id: "8",
    name: "Cashmere Crew Neck",
    price: 22500,
    category: "women",
    color: "Camel",
    colorHex: "#C19A6B",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    ],
    hoverImage: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
    description:
      "Luxuriously soft crew-neck sweater knit from Grade-A Mongolian cashmere. The relaxed silhouette and fine gauge knit make it the ultimate comfort piece. Invest in this once, wear it for years.",
    details: [
      "Relaxed fit crew neck",
      "Fine 7-gauge knit",
      "Ribbed trim at neck, cuffs and hem",
      "Side slits at hem for ease of movement",
    ],
    materials: "100% Grade-A Mongolian Cashmere. Knitted in Inner Mongolia.",
    care: "Hand wash cold with cashmere shampoo. Lay flat to dry. Store folded with cedar.",
    isBestseller: true,
  },
  {
    id: "9",
    name: "Structured Wool Coat",
    price: 29500,
    category: "men",
    color: "Black",
    colorHex: "#111111",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
      "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?w=800&q=80",
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
    ],
    hoverImage: "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?w=800&q=80",
    description:
      "A commanding overcoat in double-faced wool. The clean, structured silhouette draws on mid-century architectural principles — sharp lines softened by premium materials. A wardrobe cornerstone.",
    details: [
      "Regular fit, knee length",
      "Concealed button closure",
      "Notch lapel",
      "Side slit pockets",
      "Double-faced construction (no lining needed)",
      "Back vent",
    ],
    materials: "90% Virgin Wool, 10% Cashmere. Double-faced. Made in Italy.",
    care: "Dry clean only. Store on broad wooden hanger.",
    isNew: true,
  },
  {
    id: "10",
    name: "Cotton Canvas Trousers",
    price: 8500,
    category: "men",
    color: "Olive",
    colorHex: "#6B7B3C",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
    ],
    hoverImage: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
    description:
      "Versatile straight-leg trousers in garment-dyed cotton canvas. The relaxed construction and soft hand make them ideal for daily wear. Features a comfortable elasticated waistband with an internal drawcord.",
    details: [
      "Relaxed straight-leg fit",
      "Elasticated waistband with drawcord",
      "Two side pockets, two back patch pockets",
      "Garment-dyed for a lived-in look",
    ],
    materials: "100% Organic Cotton Canvas. Garment-dyed in Portugal.",
    care: "Machine wash cold. Tumble dry low. Colours may vary slightly due to garment-dye process.",
  },
  {
    id: "11",
    name: "Ribbed Tank Top",
    price: 3500,
    category: "women",
    color: "Cream",
    colorHex: "#F5F0E8",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    ],
    hoverImage: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80",
    description:
      "A perfectly fitted ribbed tank in organic cotton. The fine rib texture adds visual interest while the slim silhouette layers effortlessly under blazers and shirts. A foundation piece re-imagined.",
    details: [
      "Slim fit",
      "Scoop neckline",
      "Fine rib knit construction",
      "Slightly extended length",
    ],
    materials: "95% Organic Cotton, 5% Elastane. GOTS certified.",
    care: "Machine wash cold. Tumble dry low.",
  },
  {
    id: "12",
    name: "Leather Belt",
    price: 6500,
    category: "accessories",
    color: "Black",
    colorHex: "#1a1a1a",
    sizes: ["S (75cm)", "M (85cm)", "L (95cm)"],
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80",
    ],
    hoverImage: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    description:
      "A refined leather belt with a clean square buckle in brushed silver. The smooth full-grain leather develops character over time. Width: 3cm — versatile enough for both casual and formal styling.",
    details: [
      "3cm width",
      "Brushed silver square buckle",
      "Five-hole adjustment",
      "Tonal edge painting",
    ],
    materials: "Full-grain cowhide leather. Buckle: Zamak with brushed nickel finish.",
    care: "Wipe with damp cloth. Apply leather cream as needed.",
    isBestseller: true,
  },
];

export function getProductsByCategory(category: string): Product[] {
  if (category === "new") return products.filter((p) => p.isNew);
  if (category === "bestsellers") return products.filter((p) => p.isBestseller);
  return products.filter((p) => p.category === category);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getAllCategories(): string[] {
  return ["women", "men", "accessories"];
}

export const heroImages = {
  main: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80",
  editorial: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
};
