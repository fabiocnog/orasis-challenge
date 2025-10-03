import { mockDashboardInvalid, mockDashboardValid, mockDashboardViewer } from "@/__mocks__/dashboard-data";

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url);
  const type = searchParams.get("role");
  await new Promise(resolve => setTimeout(resolve, 500));
  const data = type === "invalid" ? mockDashboardInvalid
              : type === "viewer" ? mockDashboardViewer
              : mockDashboardValid;
  return Response.json(data);
}