"use client"
import { People, Person, ManageAccounts, Groups, BarChart } from "@mui/icons-material";
import LastUsersCard from "./LastUsersCard";
import TopCard from "./TopCard";
import dynamic from "next/dynamic";
import Skeleton from "@mui/material/Skeleton";
import PageHeader from "../layout/PageHeader";
import { useDashboardQuery } from "@/app/hooks/useDashboardQuery";

const RegionChartCardDynamic = dynamic(() => import("./RegionChartCard"), { 
  ssr: false,
  loading: () => <Skeleton variant="rectangular" className="flex-1 rounded-lg" width="100%" height={417} />
 });

export default function DashboardContent({role}: {role: "valid" | "invalid" | "viewer"}) {
  const {data} = useDashboardQuery(role);
  return (
    <>
      <PageHeader user={data}>Dashboard</PageHeader>
      <div className="flex items-start gap-4 mt-6">
        <div className="flex flex-col w-3/4 gap-4">
          <div className="flex items-center gap-4">
            <TopCard title="Total de usuários" icon={<People fontSize="small" color="info" />} value={data.metrics.total_users ?? 0} />
            <TopCard title="Usuários ativos" icon={<Person fontSize="small" color="success" />} value={data.metrics.active_users ?? 0} />
            {role === "valid" && 
              <>
                <TopCard title="Usuários inativos" icon={<Person fontSize="small" color="error" />} value={data.metrics.inactive_users ?? 0} />
                <TopCard title="Administradores" icon={<ManageAccounts fontSize="small" color="action" />} value={data.metrics.admin_users ?? 0} />
              </>}
          </div>
          <div className="flex items-center">
            <RegionChartCardDynamic title="Usuários por região" icon={<BarChart fontSize="small" color="info" />} users_by_regions={data.metrics.users_by_region ?? []} />
          </div>
        </div>
        <div className="w-1/4">
          <LastUsersCard title="Últimos usuários cadastrados" icon={<Groups fontSize="small" color="info" />} users={data.metrics.last_users ?? []} />
        </div>
      </div>
    </>
  )
}