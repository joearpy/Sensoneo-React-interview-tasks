import { PageHeader } from "../../components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/card";
import { Building2, CircleDashed, Milk, Users } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type {
  CompaniesResponse,
  ProductsResponse,
  UsersResponse,
} from "../../types";
import { fetchProducts } from "../../api/products";
import { fetchCompanies } from "../../api/companies";
import { fetchUsers } from "../../api/users";

export function HomePage() {
  const {
    data: activeProductsData,
    isLoading: isActiveProductsLoading,
    error: activeProductsError,
  } = useQuery<ProductsResponse, Error>({
    queryKey: ["products", { active: true }],
    queryFn: () => fetchProducts({ active: true }),
  });

  const {
    data: pendingProductsData,
    isLoading: isPendingProductsLoading,
    error: pendingProductsError,
  } = useQuery<ProductsResponse, Error>({
    queryKey: ["products", { active: false }],
    queryFn: () => fetchProducts({ active: false }),
  });

  const {
    data: companies,
    isLoading: isCompaniesLoading,
    error: companiesError,
  } = useQuery<CompaniesResponse, Error>({
    queryKey: ["companies"],
    queryFn: fetchCompanies,
  });

  const {
    data: users,
    isLoading: isUsersLoading,
    error: usersError,
  } = useQuery<UsersResponse, Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const activeProductsCount = activeProductsData?.pagination.totalItems ?? 0;
  const pendingProductsCount = pendingProductsData?.pagination.totalItems ?? 0;
  const companiesCount = companies?.total ?? 0;
  const usersCount = users?.total ?? 0;

  if (
    isActiveProductsLoading ||
    isPendingProductsLoading ||
    isCompaniesLoading ||
    isUsersLoading
  ) {
    return <div>Loading...</div>;
  }

  if (
    activeProductsError ||
    pendingProductsError ||
    companiesError ||
    usersError
  ) {
    return <div>Error loading data.</div>;
  }

  return (
    <div>
      <PageHeader
        title="Deposit management dashboard"
        description="Welcome to your deposit management system. Monitor and manage your products, companies, and users."
      />
      <div className="grid grid-cols-4 gap-4">
        <Card className="h-36">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="font-semibold">Active products</CardTitle>
            <Milk className="text-muted-foreground" />
          </CardHeader>
          <CardContent className="font-bold text-2xl">
            {activeProductsCount}
          </CardContent>
          <CardFooter>
            <CardDescription>Active products in system</CardDescription>
          </CardFooter>
        </Card>
        <Card className="h-36">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="font-semibold">Peding products</CardTitle>
            <CircleDashed className="text-muted-foreground" />
          </CardHeader>
          <CardContent className="font-bold text-2xl">
            {pendingProductsCount}
          </CardContent>
          <CardFooter>
            <CardDescription>Pending products in system</CardDescription>
          </CardFooter>
        </Card>
        <Card className="h-36">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="font-semibold">Companies</CardTitle>
            <Building2 className="text-muted-foreground" />
          </CardHeader>
          <CardContent className="font-bold text-2xl">
            {companiesCount}
          </CardContent>
          <CardFooter>
            <CardDescription>Registered companies</CardDescription>
          </CardFooter>
        </Card>
        <Card className="h-36">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="font-semibold">Users</CardTitle>
            <Users className="text-muted-foreground" />
          </CardHeader>
          <CardContent className="font-bold text-2xl">{usersCount}</CardContent>
          <CardFooter>
            <CardDescription>Registered users</CardDescription>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
