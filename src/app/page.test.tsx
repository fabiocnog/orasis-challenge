import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./page"
import { render, screen } from '@testing-library/react'
import * as nextNavigation from "next/navigation";

jest.mock("react-error-boundary", () => ({
  ErrorBoundary: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn()
}));

describe("Home", () => {
  beforeEach(() => {
    (nextNavigation.useSearchParams as jest.Mock).mockReturnValue({
      get: () => "valid"
    })
  })
  it("renders the page", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    )
    const heading = screen.getByRole("heading", { name: "Dashboard" })
    expect(heading).toBeInTheDocument()
  })
})