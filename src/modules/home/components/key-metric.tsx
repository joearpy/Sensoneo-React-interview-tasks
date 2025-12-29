import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/card";
import { Skeleton } from "../../../components/skeleton";

type KeyMetricProps = {
  title: string;
  icon: React.ReactNode;
  count: number;
  description: string;
  isLoading: boolean;
};

export function KeyMetric({
  title,
  icon,
  count,
  description,
  isLoading,
}: KeyMetricProps) {
  if (isLoading) {
    return <Skeleton className="h-36" />;
  }

  return (
    <Card className="h-36">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="font-semibold">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent className="font-bold text-2xl">{count}</CardContent>
      <CardFooter>
        <CardDescription>{description}</CardDescription>
      </CardFooter>
    </Card>
  );
}
