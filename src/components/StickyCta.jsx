export default function StickyCta() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black-2 border-t border-border py-3 px-4 z-[100] flex gap-2.5 items-center"
      style={{ paddingBottom: 'calc(12px + env(safe-area-inset-bottom))' }}
    >
      <div className="flex-shrink-0">
        <span className="block text-[11px] text-text-muted line-through">R$ 97</span>
        <span className="font-display font-bold text-lg text-gold">R$ 37</span>
      </div>
      <a
        href="#oferta"
        className="flex-1 bg-gold text-black font-bold text-[14.5px] text-center py-3.5 px-5 rounded-full"
      >
        Quero a minha
      </a>
    </div>
  )
}
