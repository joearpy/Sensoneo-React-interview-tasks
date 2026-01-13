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
  hasError?: boolean;
};

export function KeyMetric({
  title,
  icon,
  count,
  description,
  isLoading,
  hasError,
}: KeyMetricProps) {
  if (isLoading) {
    return <Skeleton className="h-36" />;
  }

  return (
    <Card className="h-36">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="font-semibold">
          {hasError ? "Error" : title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent className="font-bold text-2xl">
        {hasError ? "Error" : count}
      </CardContent>
      <CardFooter>
        <CardDescription>{hasError ? "Error" : description}</CardDescription>
      </CardFooter>
    </Card>
  );
}
