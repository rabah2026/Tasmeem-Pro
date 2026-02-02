export interface User {
  id: string;
  email: string;
  credits: number;
  images: GeneratedImage[];
}

export interface Template {
  id: string;
  name: string;
  description: string;
  previewImage: string;
  category: string;
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  template?: string;
  size: ImageSize;
  style: ImageStyle;
  createdAt: Date;
}

export type ImageSize = "square" | "story" | "ad";

export type ImageStyle = "realistic" | "advertising" | "luxury" | "simple";

export interface CreditPack {
  id: string;
  images: number;
  price: number;
  currency: string;
  popular?: boolean;
}
