import * as z from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  packaging: z.string().min(1, "Packaging is required"),
  deposit: z.number().min(0, "Deposit must be at least 0"),
  volume: z.number().min(1, "Volume must be at least 1"),
  companyId: z.number().min(1, "Company ID is required"),
  registeredById: z.number().min(1, "Registered By ID is required"),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;

export const createProductResponseSchema = z.object({
  success: z.boolean(),
  data: createProductSchema,
  message: z.string(),
  error: z.string().optional(),
});

export type CreateProductResponse = z.infer<typeof createProductResponseSchema>;
