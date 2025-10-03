type CardProps = {
  children: React.ReactNode;
  className?: string;
}

export default function Card({children, className}: CardProps) {
  return (
    <div className={`flex flex-col gap-4 rounded-lg bg-white shadow-lg p-4 ${className}`}>
      {children}
    </div>
  )
}