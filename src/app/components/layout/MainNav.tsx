"use client";

import { TrendingUp } from "@mui/icons-material";
import Header from "./Header";
import NavItem from "./NavItem";

export default function MainNav() {
  const navItems = [
    { href: "/", icon: <TrendingUp />, text: "Dashboard" },
  ]
  return (
    <div className="pt-3 w-full max-w-[227px] h-dvh bg-white">
      <nav className="w-full bg-white h-full px-6 pt-10 rounded-tr-3xl shadow-lg relative z-10">
        <Header />
        <div className="flex flex-col gap-4 mt-10">
          {navItems.map((item, index) => (
            <NavItem key={index} href={item.href} icon={item.icon} text={item.text} />
          ))}
        </div>
      </nav>
    </div>
  )
}