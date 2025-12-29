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

export function HomePage() {
  return (
    <div>
      <PageHeader
        title="Deposit management dashboard"
        description="Welcome to your deposit management system. Monitor and manage your products, companies, and users."
      />
      <div className="grid grid-cols-4 gap-4">
        <Card className="h-48">
          <CardHeader>
            <CardTitle>Active products</CardTitle>
            <Milk className="text-muted-foreground" />
          </CardHeader>
          <CardContent>1024</CardContent>
          <CardFooter>
            <CardDescription>Active products in system</CardDescription>
          </CardFooter>
        </Card>
        <Card className="h-48">
          <CardHeader>
            <CardTitle>Peding products</CardTitle>
            <CircleDashed className="text-muted-foreground" />
          </CardHeader>
          <CardContent>0</CardContent>
          <CardFooter>
            <CardDescription>Pending products in system</CardDescription>
          </CardFooter>
        </Card>
        <Card className="h-48">
          <CardHeader>
            <CardTitle>Companies</CardTitle>
            <Building2 className="text-muted-foreground" />
          </CardHeader>
          <CardContent>108</CardContent>
          <CardFooter>
            <CardDescription>Registered companies</CardDescription>
          </CardFooter>
        </Card>
        <Card className="h-48">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <Users className="text-muted-foreground" />
          </CardHeader>
          <CardContent>123</CardContent>
          <CardFooter>
            <CardDescription>Registered users</CardDescription>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
