import Content from "./components/layout/Content";
import DashboardErrorBoundary from "./components/dashboard/DashboardErrorBoundary";
import DashboardWrapper from "./components/dashboard/DashboardWrapper";

export default async function Home({searchParams}: {searchParams: Promise<{role?: string}>}) {
  const params = await searchParams;
  const role = (params.role as "valid" | "invalid" | "viewer") || "valid";
  
  return (
    <div className="w-full h-screen bg-white">
      <Content>
        <DashboardErrorBoundary>
          <DashboardWrapper role={role} />
        </DashboardErrorBoundary>
      </Content>
    </div>
  );
}
