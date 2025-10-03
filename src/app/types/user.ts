export type LastUsers = {
  name: string;
  email: string;
  region: string;
}[]
export type UsersByRegion = {
  region: string;
  count: number;
}[]
export type UserType = {
  user: {
    id: number;
    name: string;
    role: string;
    authenticated: boolean;
  };
  metrics: {
    total_users: number;
    active_users: number;
    inactive_users: number;
    admin_users: number;
    users_by_region:UsersByRegion
    last_users: LastUsers;
  }
}
export type RawUserType = {
 user?: {
    id?: number;
    name?: string;
    role?: string;
    authenticated?: boolean | number;
  };
  metrics?: {
    total_users?: number | string;
    active_users?: number | string;
    inactive_users?: number | string;
    admin_users?: number | null;
    users_by_region?: UsersByRegion
    last_users?: LastUsers;
  };  
}