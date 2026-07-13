import CtaButton from './CtaButton.jsx'

export default function CtaFinal() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#141416] to-black border-t border-border text-center">
      <div className="max-w-content mx-auto px-6">
        <h2 className="font-display font-semibold text-[30px] text-white mb-3.5 max-w-[560px] mx-auto">
          Chega de trabalhar demais e cobrar de menos.
        </h2>
        <p className="text-[15.5px] text-text-secondary max-w-[480px] mx-auto mb-7">
          Em 15 minutos você sai daqui sabendo exatamente quanto cobrar de cada cliente — com
          número, não com achismo.
        </p>
        <CtaButton className="!max-w-[360px] mx-auto">Quero a minha planilha agora</CtaButton>
        <div className="flex items-center justify-center gap-1.5 text-[12.5px] text-text-muted mt-3 flex-wrap">
          <span>Acesso imediato</span>
          <span className="text-border">&bull;</span>
          <span>Garantia de 7 dias</span>
        </div>
      </div>
    </section>
  )
}
