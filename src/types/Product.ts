export interface Product {
  id: number;
  companyId: number;
  registeredById: number;
  name: string;
  packaging: string;
  deposit: number;
  volume: number;
  registeredAt: string;
  active: boolean;
}

export interface ProductsResponse {
  data: Product[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  success: boolean;
}

export interface ProductFilters {
  active?: boolean;
  sort?: "name" | "registeredAt";
  order?: "asc" | "desc";
  page?: number;
  limit?: number;
}

export interface CreateProductInput {
  name: string;
  packaging: string;
  deposit: number;
  volume: number;
  companyId: number;
  registeredById: number;
}
