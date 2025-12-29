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
import type { Company, Product, User } from "../../types";
import { fetchProducts } from "../../api/products";
import { fetchCompanies } from "../../api/companies";
import { fetchUsers } from "../../api/users";

export function HomePage() {
  const {
    data: products,
    isLoading: isProductsLoading,
    error: productsError,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  console.log("products", products, isProductsLoading, productsError);

  const {
    data: companies,
    isLoading: isCompaniesLoading,
    error: companiesError,
  } = useQuery<Company[]>({
    queryKey: ["companies"],
    queryFn: fetchCompanies,
  });

  console.log("companies", companies, isCompaniesLoading, companiesError);

  const {
    data: users,
    isLoading: isUsersLoading,
    error: usersError,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  console.log("users", users, isUsersLoading, usersError);

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
          <CardContent className="font-bold text-2xl">1024</CardContent>
          <CardFooter>
            <CardDescription>Active products in system</CardDescription>
          </CardFooter>
        </Card>
        <Card className="h-36">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="font-semibold">Peding products</CardTitle>
            <CircleDashed className="text-muted-foreground" />
          </CardHeader>
          <CardContent className="font-bold text-2xl">0</CardContent>
          <CardFooter>
            <CardDescription>Pending products in system</CardDescription>
          </CardFooter>
        </Card>
        <Card className="h-36">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="font-semibold">Companies</CardTitle>
            <Building2 className="text-muted-foreground" />
          </CardHeader>
          <CardContent className="font-bold text-2xl">108</CardContent>
          <CardFooter>
            <CardDescription>Registered companies</CardDescription>
          </CardFooter>
        </Card>
        <Card className="h-36">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="font-semibold">Users</CardTitle>
            <Users className="text-muted-foreground" />
          </CardHeader>
          <CardContent className="font-bold text-2xl">123</CardContent>
          <CardFooter>
            <CardDescription>Registered users</CardDescription>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
