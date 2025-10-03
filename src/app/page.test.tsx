import { render, screen } from "@testing-library/react";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import DashboardWrapper from "./components/dashboard/DashboardWrapper";

jest.mock("react-error-boundary", () => ({
  ErrorBoundary: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("DashboardWrapper", () => {
  it("renders the dashboard heading", async () => {
    render(
      <ReactQueryProvider>
        <DashboardWrapper role="valid" />
      </ReactQueryProvider>
    );

    const heading = await screen.findByRole("heading", { name: "Dashboard" });
    expect(heading).toBeInTheDocument();
  });
});