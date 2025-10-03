import { UserType } from "@/app/types/user"
import Skeleton from "@mui/material/Skeleton";

type AvatarProps = {
  data?: UserType
}
export default function Avatar({data}: AvatarProps) {
  return data?.user.id ? (
    <div className="flex items-center justify-center gap-2">
      <p className="text-xs">Seja bem vindo(a), <span className="font-bold">{data.user.name}</span></p>
      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        <span className="font-bold text-sm">{data.user.name.charAt(0)}</span>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center gap-2">
      <Skeleton variant="text" width={120} height={20} />
      <Skeleton variant="circular" width={32} height={32} />
    </div>
  )
}