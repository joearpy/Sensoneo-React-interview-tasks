export const ProductStatus = {
  ALL: "all",
  ACTIVE: "active",
  PENDING: "pending",
} as const;

export type ProductStatus = typeof ProductStatus[keyof typeof ProductStatus];