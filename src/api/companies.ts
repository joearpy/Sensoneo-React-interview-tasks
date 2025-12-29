import type { CompaniesResponse } from "../types";
import { API_BASE_URL } from "./config";

export const fetchCompanies = async (): Promise<CompaniesResponse> => {
  const res = await fetch(`${API_BASE_URL}/api/companies`);

  if (!res.ok) {
    throw new Error("Failed to fetch companies");
  }

  return res.json();
};
