"use client";
import { Error, ErrorOutline } from "@mui/icons-material";
import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";


function DashboardErrorFallback({ error }: { error: Error}) {
  return (
    <div className="flex flex-col items-center justify-center w-full p-8 rounded-lg">
      <span className="text-6xl">
        <ErrorOutline className="text-red-600" fontSize="inherit" />
      </span>
      <h2 className="text-2xl font-bold mt-4">Erro ao carregar dashboard</h2>
      <p className="mt-2 text-gray-700">
        {error.message || "Você não tem permissão para acessar esta rota."}
      </p>
    </div>
  );
}

export default function DashboardErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary
      FallbackComponent={DashboardErrorFallback}
    >
      {children}
    </ErrorBoundary>
  );
}