import { useSuspenseQuery } from "@tanstack/react-query";
import { getDashboard } from "../services/dashboard";

export function useDashboardQuery(role: "valid" | "invalid" | "viewer" = "valid"){
  return useSuspenseQuery({
    queryKey: ["dashboard", role],
    queryFn: () => getDashboard(role),
    refetchInterval: 3000
  })
}