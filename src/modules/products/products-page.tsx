import { Milk } from "lucide-react";

import { PageHeader } from "../../components/page-header";
import { ProductsTable } from "./components/products-table";
import { memo } from "react";

export const ProductsPage = memo(function ProductsPage() {
  return (
    <div>
      <PageHeader
        title="Registered products"
        description="View and manage your registered products."
        icon={<Milk size={28} />}
      />
      <ProductsTable />
    </div>
  );
});
