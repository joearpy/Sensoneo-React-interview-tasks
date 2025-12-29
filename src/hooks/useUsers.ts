import { useQuery } from "@tanstack/react-query";
import type { UsersResponse } from "../types";
import { fetchUsers } from "../api/users";

export const useUsers = () =>
  useQuery<UsersResponse, Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
