import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../api/products";
import type { CreateProductInput, CreateProductResponse } from "../types";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<CreateProductResponse, Error, CreateProductInput>({
    mutationFn: (productData) => createProduct(productData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
