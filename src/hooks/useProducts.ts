import { useQuery } from "@tanstack/react-query";
import type { ProductFilters, ProductsResponse } from "../types";
import { fetchProducts } from "../api/products";

export const useProducts = (filters?: ProductFilters) =>
  useQuery<ProductsResponse, Error>({
    queryKey: ["products", filters],
    queryFn: () => fetchProducts(filters),
  });
