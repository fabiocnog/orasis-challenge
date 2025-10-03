"use client"
import { UsersByRegion } from "@/app/types/user";
import Card from "../ui/Card";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import CardTitle from "../ui/CardTitle";
import type { TooltipContentProps } from 'recharts';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

type RegionChartCardProps = {
  title: string;
  icon: React.ReactNode;
  users_by_regions: UsersByRegion;
}

const CustomTooltip = ({ active, payload, label }: TooltipContentProps<ValueType, NameType>) => {
  const isVisible = active && payload && payload.length;
  return (
    <div className="bg-white p-4 rounded-lg" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
      {isVisible && (
        <>
          <p className="label">{`${label}: ${payload[0].value}`}</p>
        </>
      )}
    </div>
  );
};

export default function RegionChartCard({title, icon, users_by_regions}: RegionChartCardProps) {
  return (

    <Card className="flex-1">
      <CardTitle icon={icon} title={title} />
      <ResponsiveContainer width="100%" height={349}>
        <AreaChart 
          data={users_by_regions}
          margin={{ top: 20, right: 20, left: -20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="stroke-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1B59F8" stopOpacity={1}/>
              <stop offset="100%" stopColor="#1B59F8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" />
          <Tooltip content={CustomTooltip} />
          <YAxis />
          <Area type="monotone" dataKey="count" stroke="#1B59F8" fill="url(#stroke-gradient)" /> 
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}