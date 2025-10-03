"use client"
import Content from "./components/layout/Content";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import DashboardContent from "./components/dashboard/DashboardContent";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DashboardSkeleton from "./components/dashboard/DashboardSkeleton";
import DashboardErrorBoundary from "./components/dashboard/DashboardErrorBoundary";


const theme = createTheme();

export default function Home() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") as "valid" | "invalid" | "viewer" || "valid";
  return (
    <div className="w-full h-screen bg-white">
      <ThemeProvider theme={theme}>
        <Content>
          <DashboardErrorBoundary>
            <Suspense fallback={<DashboardSkeleton role={role} />}>
              <DashboardContent role={role} />
            </Suspense>
          </DashboardErrorBoundary>
        </Content>
      </ThemeProvider>
    </div>
  );
}
