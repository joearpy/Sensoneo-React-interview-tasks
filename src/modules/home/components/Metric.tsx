import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/card";

type MetricProps = {
  title: string;
  icon: React.ReactNode;
  count: number;
  description: string;
};

export function Metric({ title, icon, count, description }: MetricProps) {
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
