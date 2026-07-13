export default function CtaButton({ href = '#oferta', children, secondary = false, className = '' }) {
  const base =
    'inline-flex items-center justify-center gap-2 font-bold rounded-full transition-transform duration-150 ease-out'
  const primary =
    'bg-gold text-black shadow-[0_8px_24px_rgba(201,162,39,0.18)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(201,162,39,0.26)]'
  const secondaryClasses = 'bg-transparent text-white border border-border'

  return (
    <a
      href={href}
      className={`${base} ${secondary ? secondaryClasses : primary} text-[16px] py-[17px] px-[30px] w-full md:w-auto ${className}`}
    >
      {children}
    </a>
  )
}
