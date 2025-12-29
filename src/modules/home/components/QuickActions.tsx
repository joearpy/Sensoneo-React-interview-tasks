import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/card";
import { Button } from "../../../components/button";
import { Plus } from "lucide-react";
import { Separator } from "../../../components/separator";

export function QuickActions() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Quick actions</CardTitle>
        <Separator className="my-2" />
      </CardHeader>
      <CardContent className="flex gap-3">
        <Button variant="outline">
          <Plus className="mr-2" />
          View all products
        </Button>
        <Button>
          <Plus className="mr-2" />
          Add new product
        </Button>
      </CardContent>
    </Card>
  );
}
