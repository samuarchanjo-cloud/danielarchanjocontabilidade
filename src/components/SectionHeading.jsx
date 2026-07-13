export default function SectionHeading({ label, title, children }) {
  return (
    <>
      <span className="block text-xs font-bold tracking-[1.4px] uppercase text-gold mb-3.5">
        {label}
      </span>
      <h2 className="font-display font-semibold text-[28px] md:text-[34px] leading-[1.15] tracking-tight text-white max-w-[600px] mb-4">
        {title}
      </h2>
      {children}
    </>
  )
}
