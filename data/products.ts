export type ProductColor = {
  name: string;
  hex: string;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  price: number;
  colors: ProductColor[];
  sizes: string[];
  images: string[];
  description: string;
  details: string;
  material: string;
  fit: string;
  category: "Hoodies";
  isNew: boolean;
  available: boolean;
  order: number;
};

export const products: Product[] = [
  {
    slug: "essential-hoodie",
    name: "BUMBLYZ Essential Hoodie",
    shortName: "Essential Hoodie",
    price: 89,
    colors: [
      { name: "Black", hex: "#111111" },
      { name: "Ash", hex: "#c9c9c5" },
      { name: "Bone", hex: "#eeeae1" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      assetPath("/images/campaign-03.webp"),
      assetPath("/images/campaign-02.webp"),
      assetPath("/images/hero.webp"),
      assetPath("/images/look-04.webp"),
    ],
    description:
      "An everyday heavyweight hoodie cut with room through the body and a clean, structured drape.",
    details: "Double-layer hood, dropped shoulder, kangaroo pocket and ribbed finish.",
    material: "470 GSM brushed cotton fleece. Cotton-rich construction.",
    fit: "Relaxed unisex fit. Take your usual size for the intended silhouette.",
    category: "Hoodies",
    isNew: true,
    available: true,
    order: 1,
  },
  {
    slug: "heavyweight-hoodie",
    name: "BUMBLYZ Heavyweight Hoodie",
    shortName: "Heavyweight Hoodie",
    price: 110,
    colors: [
      { name: "Black", hex: "#111111" },
      { name: "Smoke", hex: "#686866" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      assetPath("/images/campaign-02.webp"),
      assetPath("/images/campaign-01.webp"),
      assetPath("/images/hero.webp"),
      assetPath("/images/look-01.webp"),
    ],
    description:
      "Dense fleece, substantial structure and a deliberately oversized shape built for colder days.",
    details: "Deep hood, reinforced seams, dropped shoulder and hidden phone pocket.",
    material: "520 GSM heavyweight cotton fleece.",
    fit: "Oversized unisex fit. Size down for a closer fit.",
    category: "Hoodies",
    isNew: true,
    available: true,
    order: 2,
  },
  {
    slug: "bee-logo-hoodie",
    name: "BUMBLYZ Bee Logo Hoodie",
    shortName: "Bee Logo Hoodie",
    price: 95,
    colors: [
      { name: "Black", hex: "#111111" },
      { name: "Bone", hex: "#eeeae1" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      assetPath("/images/campaign-01.webp"),
      assetPath("/images/campaign-03.webp"),
      assetPath("/images/hero.webp"),
      assetPath("/images/look-02.webp"),
    ],
    description:
      "A minimal logo hoodie with the BUMBLYZ signature placed quietly at the chest and boldly at the back.",
    details: "Tonal embroidery, double-layer hood and ribbed cuffs.",
    material: "480 GSM brushed cotton fleece.",
    fit: "Relaxed fit with a slightly cropped body.",
    category: "Hoodies",
    isNew: false,
    available: false,
    order: 3,
  },
  {
    slug: "oversized-hoodie",
    name: "BUMBLYZ Oversized Hoodie",
    shortName: "Oversized Hoodie",
    price: 105,
    colors: [
      { name: "Washed Black", hex: "#282827" },
      { name: "Grey", hex: "#9a9994" },
      { name: "White", hex: "#f6f5f0" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      assetPath("/images/campaign-03.webp"),
      assetPath("/images/campaign-02.webp"),
      assetPath("/images/look-04.webp"),
      assetPath("/images/hero.webp"),
    ],
    description:
      "Maximum volume with balanced proportions, finished with a washed hand for a worn-in feel from day one.",
    details: "Wide body, oversized sleeves and garment-washed finish.",
    material: "500 GSM garment-dyed cotton fleece.",
    fit: "Very oversized. Choose one size down for a relaxed silhouette.",
    category: "Hoodies",
    isNew: false,
    available: true,
    order: 4,
  },
];

export const formatPrice = (price: number) => `$${price.toFixed(0)} CAD`;

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
import { assetPath } from "@/lib/site";
