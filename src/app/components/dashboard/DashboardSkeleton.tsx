"use client";
import Skeleton from "@mui/material/Skeleton";
import Card from "../ui/Card";
import CardTitle from "../ui/CardTitle";
import { Groups, ManageAccounts, People, Person } from "@mui/icons-material";
import PageHeader from "../layout/PageHeader";

export default function DashboardSkeleton({role}: {role: "valid" | "invalid" | "viewer"}) {
  return (
    <>
      <PageHeader user={undefined}>Dashboard</PageHeader>
      <div className="flex items-start gap-4 mt-6">
        <div className="flex flex-col w-3/4 gap-4">
          <div className="flex items-center gap-4">
            <Card className="flex-1">
              <CardTitle icon={<People fontSize="small" color="info" />} title="Total de usuários" />
              <Skeleton variant="text" className="text-2xl font-bold w-1/3" />
            </Card>
            <Card className="flex-1">
              <CardTitle icon={<Person fontSize="small" color="success" />} title="Usuários ativos" />
              <Skeleton variant="text" className="text-2xl font-bold w-1/3" />
            </Card>
            {role === "valid" && <>
              <Card className="flex-1">
                <CardTitle icon={<Person fontSize="small" color="error" />} title="Usuários inativos" />
                <Skeleton variant="text" className="text-2xl font-bold w-1/3" />
              </Card>
              <Card className="flex-1 ">
                <CardTitle icon={<ManageAccounts fontSize="small" color="action" />} title="Administradores" />
                <Skeleton variant="text" className="text-2xl font-bold w-1/3" />
              </Card>
            </>}
          </div>
            {/* <Skeleton variant="rectangular" className="flex-1 rounded-lg" width={200} height={100} />
            <Skeleton variant="rectangular" className="flex-1 rounded-lg" width={200} height={100} />
            <Skeleton variant="rectangular" className="flex-1 rounded-lg" width={200} height={100} />
            <Skeleton variant="rectangular" className="flex-1 rounded-lg" width={200} height={100} />
          </div> */}
          <Skeleton variant="rectangular" className="rounded-lg" width="100%" height={417} />
        </div>
        <div className="w-1/4">
          {/* <Skeleton variant="rectangular" className="flex-1 rounded-lg" width="100%" height={532} /> */}
          <Card className="flex-1">
            <CardTitle icon={<Groups fontSize="small" color="info" />} title="Últimos usuários cadastrados" />
            <div className="flex flex-col gap-4 w-full">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="flex items-center gap-2 w-full">
                  <div className="text-xs w-full truncate flex items-center gap-2">
                    <Skeleton variant="rectangular" className="rounded-full" width={32} height={32} />
                    <div className="flex flex-col flex-1">
                      <Skeleton variant="text" className="w-1/3" />
                      <Skeleton variant="text" className="w-1/2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}