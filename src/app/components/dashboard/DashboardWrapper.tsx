"use client";

import DashboardContent from "./DashboardContent";
import DashboardSkeleton from "./DashboardSkeleton";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Suspense } from "react";

const theme = createTheme();


export default function DashboardWrapper({role}: {role: "valid" | "invalid" | "viewer"}) {
   return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<DashboardSkeleton role={role || "valid"} />}>
        <DashboardContent role={role} />
      </Suspense>
    </ThemeProvider>
  )
}