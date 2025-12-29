import type {
  CreateProductInput,
  Product,
  ProductFilters,
  ProductsResponse,
} from "../types";
import { API_BASE_URL } from "./config";

export const fetchProducts = async (
  filters: ProductFilters = {}
): Promise<ProductsResponse> => {
  const params = new URLSearchParams();

  if (filters.active !== undefined) {
    params.append("active", String(filters.active));
  }

  const res = await fetch(`${API_BASE_URL}/api/products?${params.toString()}`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

export const createProduct = async (
  productData: CreateProductInput
): Promise<Product> => {
  const res = await fetch(`${API_BASE_URL}/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!res.ok) {
    throw new Error("Failed to create product");
  }

  return res.json();
};
