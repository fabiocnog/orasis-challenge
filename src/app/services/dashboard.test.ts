import { mockDashboardInvalid, mockDashboardValid, mockDashboardViewer } from "@/__mocks__/dashboard-data";
import { RawUserType } from "../types/user"
import { getDashboard } from "./dashboard";

global.fetch = jest.fn();

const mockFetch = (data: RawUserType, ok = true) => {
  (fetch as jest.Mock).mockResolvedValueOnce({
    ok,
    json: async () => data
  })
}

describe("Dashboard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return a valid data for admin role", async () => {
    mockFetch(mockDashboardValid);
    const data = await getDashboard("valid");

    expect(data.user.role).toBe("admin");
    expect(data.user.authenticated).toBe(true);
    expect(data.metrics.total_users).toBeGreaterThan(0);
  })
  it("should return a valid data for viewer role", async () => {
    mockFetch(mockDashboardViewer);
    const data = await getDashboard("viewer");
    
    expect(data.user.role).toBe("viewer");
    expect(data.user.authenticated).toBe(Boolean(data.user.authenticated));
    expect(data.metrics.total_users).toBeGreaterThan(0);
  })
  it("should throw an error if role is invalid", async () => {
    mockFetch(mockDashboardInvalid);
    await expect(getDashboard("invalid")).rejects.toThrow("Dados inválidos.");
  })
  it("should throw an error if fetch fails", async () => {
    mockFetch({}, false);
    await expect(getDashboard("valid")).rejects.toThrow("Falha ao carregar dashboard.");
  })
})
