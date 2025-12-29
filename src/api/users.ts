import type { User } from "../types";
import { API_BASE_URL } from "./config";

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch(`${API_BASE_URL}/api/users`);
  if (!res.ok) {
    throw new Error("Failed to fetch companies");
  }

  return res.json();
};
