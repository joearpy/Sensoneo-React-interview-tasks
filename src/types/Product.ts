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
  pagination: { page: number; limit: number; total: number };
  success: boolean;
};

export interface CreateProductInput {
  name: string;
  packaging: string;
  deposit: number;
  volume: number;
  companyId: number;
  registeredById: number;
}
