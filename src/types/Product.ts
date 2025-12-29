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

export interface CreateProductInput {
  name: string;
  packaging: string;
  deposit: number;
  volume: number;
  companyId: number;
  registeredById: number;
}
