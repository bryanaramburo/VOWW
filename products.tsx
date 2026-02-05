
export interface Product {
  id: number;
  image: string;
}

export const PRODUCTS: Record<string, Product[]> = {
  'men-boots': [...Array(12)].map((_, i) => ({ id: i, image: `images/products/men-boots/product-${i}.png` })),
  'women-boots': [...Array(12)].map((_, i) => ({ id: i, image: `images/products/women-boots/product-${i}.png` })),
  'hats': [...Array(12)].map((_, i) => ({ id: i, image: `images/products/hats/product-${i}.png` })),
  'tejanas': [...Array(12)].map((_, i) => ({ id: i, image: `images/products/tejanas/product-${i}.png` })),
  'belts': [...Array(12)].map((_, i) => ({ id: i, image: `images/products/belts/product-${i}.png` })),
  'buckles': [...Array(12)].map((_, i) => ({ id: i, image: `images/products/buckles/product-${i}.png` })),
  'caps': [...Array(12)].map((_, i) => ({ id: i, image: `images/products/caps/product-${i}.png` })),
  'outfits': [...Array(12)].map((_, i) => ({ id: i, image: `images/products/outfits/product-${i}.png` })),
};
