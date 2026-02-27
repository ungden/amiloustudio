export interface Product {
  id: string;
  name: string;
  price: number; // in cents (e.g., 7900 = €79.00)
  category: "women" | "men" | "accessories";
  color: string;
  colorHex: string;
  sizes: string[];
  images: string[];
  hoverImage: string;
  description: string;
  details: string[];
  materials: string;
  care: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  color: string;
  image: string;
  quantity: number;
}

export function formatPrice(cents: number, currency: string = "EUR"): string {
  const amount = cents / 100;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: currency === "VND" ? 0 : 2,
  });
  return formatter.format(currency === "VND" ? amount * 25000 : amount);
}
