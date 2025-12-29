import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/card";
import { useProducts } from "../../../hooks/useProducts";
import { Dot } from "lucide-react";
import { formatDate } from "../../../utils/date";
import { Separator } from "../../../components/separator";

export function RecentProducts() {
  const { data: recentProductsData } = useProducts({
    active: true,
    sort: "registeredAt",
    order: "desc",
    limit: 5,
  });

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Recent products</CardTitle>
        <Separator className="my-2" />
      </CardHeader>
      <CardContent>
        {recentProductsData?.data.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center py-2 border-b last:border-0"
          >
            <div>
              <div className="font-medium">{product.name}</div>
              <div className="text-xs text-muted-foreground">
                {product.volume}ml
                <Dot
                  className="inline-block mx-1 text-muted-foreground"
                  size={16}
                />
                {product.deposit} deposit
                <Dot
                  className="inline-block mx-1 text-muted-foreground"
                  size={16}
                />
                {product.packaging}
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              {formatDate(product.registeredAt)}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
