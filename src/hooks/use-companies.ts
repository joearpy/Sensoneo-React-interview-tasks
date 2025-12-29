import { useQuery } from "@tanstack/react-query";
import type { CompaniesResponse } from "../types";
import { fetchCompanies } from "../api/companies";

export const useCompanies = () =>
  useQuery<CompaniesResponse, Error>({
    queryKey: ["companies"],
    queryFn: fetchCompanies,
  });
