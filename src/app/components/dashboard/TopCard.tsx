import useCountUp from "@/app/hooks/useCountUp";
import Card from "../ui/Card";
import CardTitle from "../ui/CardTitle";

export type TopCardProps = {
  title: string;
  icon: React.ReactNode;
  value: number;
}

export default function TopCard({title, icon, value}: TopCardProps) {
  const animatedValue = useCountUp(value, 500);

  return (
      <Card className="flex-1">
        <CardTitle icon={icon} title={title} />
        <p className="text-2xl font-bold">{animatedValue}</p>
      </Card>
  )
}