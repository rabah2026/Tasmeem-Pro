import { Template, CreditPack } from "@/types";

export const TEMPLATES: Template[] = [
  {
    id: "perfume-ad",
    name: "إعلان عطر",
    description: "إعلانات عطور فاخرة مع إضاءة احترافية",
    previewImage: "/templates/perfume.jpg",
    category: "فخامة",
  },
  {
    id: "coffee-ad",
    name: "إعلان قهوة",
    description: "صور قهوة احترافية للمقاهي والماركات",
    previewImage: "/templates/coffee.jpg",
    category: "طعام",
  },
  {
    id: "restaurant-ad",
    name: "إعلان مطعم",
    description: "صور أطباق ومطاعم بجودة عالية",
    previewImage: "/templates/restaurant.jpg",
    category: "طعام",
  },
  {
    id: "ecommerce",
    name: "متجر إلكتروني",
    description: "صور منتجات للمتاجر الإلكترونية",
    previewImage: "/templates/ecommerce.jpg",
    category: "تجارة",
  },
  {
    id: "white-bg",
    name: "تصوير منتج بخلفية بيضاء",
    description: "صور منتجات نظيفة على خلفية بيضاء",
    previewImage: "/templates/white-bg.jpg",
    category: "منتجات",
  },
  {
    id: "marble-bg",
    name: "تصوير منتج بخلفية رخام",
    description: "صور منتجات فاخرة على خلفية رخام",
    previewImage: "/templates/marble-bg.jpg",
    category: "فخامة",
  },
  {
    id: "ramadan",
    name: "رمضان",
    description: "تصاميم وملابس رمضانية مميزة",
    previewImage: "/templates/ramadan.jpg",
    category: "مناسبات",
  },
  {
    id: "eid",
    name: "عيد",
    description: "صور احتفالية للأعياد والمناسبات",
    previewImage: "/templates/eid.jpg",
    category: "مناسبات",
  },
  {
    id: "instagram-post",
    name: "بوست إنستغرام",
    description: "تصاميم إنستغرام احترافية",
    previewImage: "/templates/instagram.jpg",
    category: "سوشيال ميديا",
  },
  {
    id: "snapchat-story",
    name: "ستوري سناب",
    description: "ستوريات سنابشات جذابة",
    previewImage: "/templates/snapchat.jpg",
    category: "سوشيال ميديا",
  },
];

export const IMAGE_SIZES = [
  { id: "square" as const, name: "مربع", dimensions: "1080×1080" },
  { id: "story" as const, name: "ستوري", dimensions: "1080×1920" },
  { id: "ad" as const, name: "إعلان", dimensions: "1200×628" },
];

export const IMAGE_STYLES = [
  { id: "realistic" as const, name: "واقعي", description: "صور حقيقية" },
  { id: "advertising" as const, name: "إعلاني", description: "صور احترافية" },
  { id: "luxury" as const, name: "فخم", description: "ألوان فاخرة" },
  { id: "simple" as const, name: "بسيط", description: "تصميم بسيط" },
];

export const CREDIT_PACKS: CreditPack[] = [
  { id: "trial", images: 5, price: 0, currency: "ر.س" },
  { id: "starter", images: 50, price: 49, currency: "ر.س" },
  { id: "pro", images: 150, price: 129, currency: "ر.س", popular: true },
  { id: "business", images: 500, price: 349, currency: "ر.س" },
];
