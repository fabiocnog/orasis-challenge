import { UserType, RawUserType } from "../types/user";

export const getDashboard = async (role: "valid" | "invalid" | "viewer" = "valid"): Promise<UserType> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard?role=${role}`);
  if(!res.ok){
    throw new Error("Falha ao carregar dashboard.");
  }
  const rawData: RawUserType = await res.json();

  if(!rawData.user?.id || !rawData.user?.name || rawData.user?.name && rawData.user?.name === "None"){
    throw new Error("Dados inválidos.");
  }
  if(rawData.user?.id && !rawData.user?.authenticated){
    throw new Error("Usuário não autenticado.");
  }
  return {
    user: {
      id: rawData.user.id,
      name: rawData.user.name,
      role: rawData.user.role ?? "viewer",
      authenticated: Boolean(rawData.user.authenticated)
    },
    metrics: {
      total_users: Number(rawData.metrics?.total_users ?? 0),
      active_users: Number(rawData.metrics?.active_users ?? 0),
      inactive_users: Number(rawData.metrics?.inactive_users ?? 0),
      admin_users: Number(rawData.metrics?.admin_users ?? 0),
      users_by_region: rawData.metrics?.users_by_region ?? [],
      last_users: rawData.metrics?.last_users ?? []
    }
  }
}