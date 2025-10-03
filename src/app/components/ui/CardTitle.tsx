type CardTitleProps = {
  icon: React.ReactNode;
  title: string;
}

export default function CardTitle({icon, title}: CardTitleProps) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <h2 className="text-sm font">{title}</h2>
    </div>
  )
}