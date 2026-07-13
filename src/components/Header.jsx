export default function Header() {
  return (
    <header className="py-4 border-b border-border bg-black/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-content mx-auto px-6 flex items-center justify-between">
        <div className="font-display font-semibold text-[17px] tracking-tight">
          Daniel <span className="text-gold">Archanjo</span>
        </div>
        <a
          href="#oferta"
          className="bg-gold text-black font-bold text-sm py-2.5 px-5 rounded-full whitespace-nowrap"
        >
          Quero a minha planilha
        </a>
      </div>
    </header>
  )
}
