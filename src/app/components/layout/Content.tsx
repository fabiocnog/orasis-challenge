type ContentProps = {
  children: React.ReactNode;
}
export default function Content({children}: ContentProps) {
  return (
    <div className="pt-3 pb-3 pr-3 h-dvh">
      <section className="p-10 pl-14 rounded-r-4xl bg-[#F9F9F9] h-full -ml-4">
        {children}
      </section>
    </div>
  )
}