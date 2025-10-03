import { LastUsers } from "@/app/types/user";
import Card from "../ui/Card";
import Image from "next/image";
import CardTitle from "../ui/CardTitle";

type LastUsersCardProps = {
  title: string;
  icon: React.ReactNode;
  users: LastUsers;
}

export default function LastUsersCard({title, icon, users}: LastUsersCardProps) {
  return (
     <Card className="flex-1">
        <CardTitle icon={icon} title={title} />
        <div className="flex flex-col gap-4 w-full">
          {users.map((user, index) => (
            <div key={user.email} className="flex items-center gap-2 w-full">
              <div className="text-xs w-full truncate flex items-center gap-2">
                <Image src={`https://i.pravatar.cc/150?img=${index + 1}`} width={32} height={32} alt="Avatar" className="object-cover rounded-full" />
                <p className="flex flex-col">
                  <span className="font-bold">{user.name} • {user.region}</span>
                  <span>{user.email}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
     </Card>
  )
}