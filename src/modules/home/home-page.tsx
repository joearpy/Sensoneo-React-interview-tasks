import { PageHeader } from "../../components/page-header";
import { Building2, CircleDashed, Milk, Users } from "lucide-react";
import { KeyMetric } from "./components/key-metric";
import { useProducts } from "../../hooks/use-products";
import { RecentProducts } from "./components/recent-products";
import { QuickActions } from "./components/quick-actions";
import { useCompanies } from "../../hooks/use-companies";
import { useUsers } from "../../hooks/use-users";

export function HomePage() {
  const {
    data: activeProductsData,
    isLoading: isActiveProductsLoading,
    error: activeProductsError,
  } = useProducts({ active: true });

  const {
    data: pendingProductsData,
    isLoading: isPendingProductsLoading,
    error: pendingProductsError,
  } = useProducts({ active: false });

  const {
    data: companies,
    isLoading: isCompaniesLoading,
    error: companiesError,
  } = useCompanies();

  const {
    data: users,
    isLoading: isUsersLoading,
    error: usersError,
  } = useUsers();

  const activeProductsCount = activeProductsData?.pagination.totalItems ?? 0;
  const pendingProductsCount = pendingProductsData?.pagination.totalItems ?? 0;
  const companiesCount = companies?.total ?? 0;
  const usersCount = users?.total ?? 0;

  if (
    activeProductsError ||
    pendingProductsError ||
    companiesError ||
    usersError
  ) {
    return <div>Error loading data.</div>;
  }

  const areQueriesLoading =
    isActiveProductsLoading ||
    isPendingProductsLoading ||
    isCompaniesLoading ||
    isUsersLoading;

  return (
    <div>
      <PageHeader
        title="Deposit management dashboard"
        description="Welcome to your deposit management system. Monitor and manage your products, companies, and users."
      />
      <div className="grid grid-cols-4 gap-4">
        <KeyMetric
          title="Active products"
          icon={<Milk className="text-muted-foreground" />}
          count={activeProductsCount}
          description="Active products in system"
          isLoading={areQueriesLoading}
        />
        <KeyMetric
          title="Pending products"
          icon={<CircleDashed className="text-muted-foreground" />}
          count={pendingProductsCount}
          description="Pending products in system"
          isLoading={areQueriesLoading}
        />
        <KeyMetric
          title="Companies"
          icon={<Building2 className="text-muted-foreground" />}
          count={companiesCount}
          description="Registered companies"
          isLoading={areQueriesLoading}
        />
        <KeyMetric
          title="Users"
          icon={<Users className="text-muted-foreground" />}
          count={usersCount}
          description="Registered users"
          isLoading={areQueriesLoading}
        />
      </div>

      <QuickActions />

      <RecentProducts />
    </div>
  );
}
