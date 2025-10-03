import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full pl-4">
      <Link href="/">
        <Image src="/logo-tesla.svg" alt="Tesla" width={127} height={16} />
      </Link>
    </div>
  )
}