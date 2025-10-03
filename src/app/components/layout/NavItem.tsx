import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type NavItemProps = {
  href: string;
  icon: React.ReactNode;
  text: string;
}

const defaultStyle = "flex items-center gap-3 px-4 py-3 rounded-lg";
const activeStyle = twMerge(defaultStyle, "bg-[#E8EEFE] text-[#1B59F8]");

export default function NavItem({ href, icon, text}: NavItemProps) {
  const pathname = usePathname();
  return (
    <Link className={pathname === href ? activeStyle : defaultStyle} href={href}>
      {icon}
      <span className="text-sm">
        {text}
      </span>
    </Link>
  )
}