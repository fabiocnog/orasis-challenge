import { UserType } from "@/app/types/user";
import Avatar from "../ui/Avatar";

type PageHeaderProps = {
  children: React.ReactNode;
  user?: UserType;
}
export default function PageHeader({children, user}: PageHeaderProps) {
  return (
    <div className="flex flex-1 items-center justify-between w-full border-b border-[#E0E0E0] pb-8">
      <h1 className={`text-2xl font-bold`}>
        {children}
      </h1>
      <Avatar data={user} />
    </div>
  )
}