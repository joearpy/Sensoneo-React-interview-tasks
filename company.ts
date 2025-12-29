export interface Company {
  id: number;
  name: string;
  registeredAt: string;
}

export interface CompaniesResponse {
  data: Company[];
  total: number;
  success: boolean;
}
