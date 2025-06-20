import { Product } from "@/app/types";

let cachedProducts: Product[] | null = null;

export async function getAllProducts(): Promise<Product[]> {
  if (cachedProducts) return cachedProducts;

  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "force-cache",
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  const data: Product[] = await res.json();

  cachedProducts = data;
  return data;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const products = await getAllProducts();
  return products.find((p) => p.id.toString() === id);
}
