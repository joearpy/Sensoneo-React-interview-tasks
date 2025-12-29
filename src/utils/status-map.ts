import type { ProductStatus } from "../types";

export const statusMap: Record<ProductStatus, boolean | undefined> = {
  all: undefined,
  active: true,
  pending: false,
};
